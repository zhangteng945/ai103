/**
 * account-auth.js — account login (gates the bank) + background per-account progress sync.
 * Active only when window.__ITCERT_ACCOUNT__.enabled === true; otherwise it only adds the
 * zero-backend「导出进度 / 导入进度」backup UI and leaves password-gate.js in charge.
 *
 * Talks to Supabase Auth/PostgREST with plain fetch (no supabase-js, no CDN) so it works
 * through any same-path reverse proxy (EdgeOne Pages Function etc.).
 * Exposes window.AI103Auth (same contract app.js already uses) when enabled.
 */
(function (global) {
  "use strict";
  var PC = global.ITCERT_PROGRESS;
  var CFG = Object.assign({ enabled: false, timeoutMs: 8000, retries: 3, syncDebounceMs: 45000, syncPullMinIntervalMs: 300000, emailDomain: "ai103.local", allowOfflineCachedLogin: true, protectedBanks: false, banks: {}, deviceLimit: true, expiryWarnDays: 7 }, global.__ITCERT_ACCOUNT__ || {});
  var SB = global.__AI103_SUPABASE__ || {};
  var BASE = String(CFG.apiBase || SB.url || "").replace(/\/+$/, "");
  var KEY = CFG.anonKey || SB.anonKey || "";
  var SESSION_KEY = "itcert_account_session_v1";
  var ENABLED = !!(CFG.enabled && BASE && KEY && PC);
  var ls = global.localStorage;
  var rawSet = Storage.prototype.setItem;
  function setRaw(k, v) { rawSet.call(ls, k, v); }

  /* ---------------- util ---------------- */
  function $(id) { return document.getElementById(id); }
  function parse(s) { try { return JSON.parse(s); } catch (e) { return null; } }
  function knownExamIds() { var a = global.ITCERT_EXAMS; var fn = a && (a.listAll || a.list); return fn ? fn.call(a).map(function (e) { return e.id; }) : ["ai103", "dop-c02"]; }
  function fmtTime(ms) { var d = new Date(ms); function p(n) { return (n < 10 ? "0" : "") + n; } return p(d.getMonth() + 1) + "-" + p(d.getDate()) + " " + p(d.getHours()) + ":" + p(d.getMinutes()); }
  function fmtDate(iso) { var d = new Date(iso); return isNaN(d) ? String(iso) : d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate(); }
  function sleep(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }

  function NetErr(msg) { var e = new Error(msg); e.network = true; return e; }
  async function http(method, path, body, token, extraHeaders) {
    var ctl = typeof AbortController === "function" ? new AbortController() : null;
    var timer = setTimeout(function () { if (ctl) ctl.abort(); }, CFG.timeoutMs);
    var res;
    try {
      var h = { apikey: KEY, "Content-Type": "application/json", Authorization: "Bearer " + (token || KEY) };
      Object.assign(h, extraHeaders || {});
      res = await fetch(BASE + path, { method: method, headers: h, body: body ? JSON.stringify(body) : undefined, signal: ctl ? ctl.signal : undefined, cache: "no-store" });
    } catch (e) {
      throw NetErr("network");
    } finally { clearTimeout(timer); }
    var text = await res.text().catch(function () { return ""; });
    var data = parse(text);
    if (!res.ok) {
      var err = new Error((data && (data.msg || data.message || data.error_description || data.error)) || ("HTTP " + res.status));
      err.status = res.status; err.code = data && (data.error_code || data.code); err.network = res.status >= 500 || res.status === 0;
      throw err;
    }
    return data;
  }
  async function withRetry(fn) {
    var last;
    for (var i = 0; i < Math.max(1, CFG.retries); i++) {
      try { return await fn(); } catch (e) { last = e; if (!e.network) throw e; if (i < CFG.retries - 1) await sleep(1000 * Math.pow(2, i)); }
    }
    throw last;
  }

  /* ---------------- session / expiry ---------------- */
  function expiresAtOf(user) {
    if (!user) return null;
    var v = (user.app_metadata && user.app_metadata.expires_at) || (user.user_metadata && user.user_metadata.expires_at);
    return v || null;
  }
  function isExpiredIso(iso, now) { if (!iso) return false; var t = Date.parse(iso); return !isNaN(t) && t <= (now || Date.now()); }
  function isExpiryError(e) { return !!e && /expired|过期|account_expired/i.test(String(e.message || "") + " " + String(e.code || "")); }
  function readSession() { return parse(ls.getItem(SESSION_KEY)); }
  function writeSession(s) { if (s) setRaw(SESSION_KEY, JSON.stringify(s)); else ls.removeItem(SESSION_KEY); }
  function sessionFrom(tok) {
    var u = tok.user || {};
    return { access: tok.access_token, refresh: tok.refresh_token, exp: Date.now() + (tok.expires_in || 3600) * 1000,
      user: { id: u.id, email: u.email, expires_at: expiresAtOf(u), exams: (u.app_metadata && u.app_metadata.exams) || null, role: (u.app_metadata && u.app_metadata.role) || null } };
  }
  function normalizeEmail(raw) { var e = String(raw || "").trim().toLowerCase(); if (e && e.indexOf("@") < 0) e += "@" + CFG.emailDomain; return e; }

  var state = { session: null, ready: false, expired: false, status: "", syncStatus: "", syncing: false, dirty: false, timer: null, initialMerge: false, lastPullAt: 0, claimedDevice: false };

  function mapLoginError(e) {
    if (isExpiryError(e)) return "账号已过期，请联系管理员续期";
    if (/device_limit/.test(String(e.message))) return "该账号登录的设备数已达上限（最多 " + (CFG.maxDevices || 2) + " 台），请联系管理员重置设备";
    if (/disabled|banned/i.test(String(e.message) + String(e.code || ""))) return "账号已停用，请联系管理员";
    if (e.network) return "无法连接登录服务（网络超时），请稍后重试或切换网络";
    if (e.status === 400 || e.status === 401) return /confirm/i.test(e.message) ? "账号未激活，请联系管理员" : "账号或密码错误";
    if (e.status === 429) return "尝试过于频繁，请稍后再试";
    return "登录失败：" + (e.message || "未知错误");
  }

  async function signIn(emailRaw, password) {
    var email = normalizeEmail(emailRaw);
    if (!email || !password) { setStatus("请输入账号和密码"); return { ok: false }; }
    setStatus("正在登录…");
    try {
      var tok = await withRetry(function () { return http("POST", "/auth/v1/token?grant_type=password", { email: email, password: password }); });
      var s = sessionFrom(tok);
      if (isExpiredIso(s.user.expires_at)) {
        http("POST", "/auth/v1/logout", null, s.access).catch(function () {});
        state.expired = true; setStatus("账号已过期（" + fmtDate(s.user.expires_at) + "），请联系管理员续期");
        return { ok: false, reason: "expired" };
      }
      if (CFG.deviceLimit) {
        try { await claimDevice(s.access); }
        catch (e) {
          if (e.network) { /* backend flaky: allow, re-check on next sync */ }
          else { http("POST", "/auth/v1/logout", null, s.access).catch(function () {}); setStatus(mapLoginError(e)); return { ok: false, reason: "device" }; }
        }
      }
      onAccountSwitch(s.user.id);
      state.session = s; state.expired = false; writeSession(s);
      applyEntitlements();
      try { await loadBanks(); } catch (e) { setStatus(e.message); }
      setStatus(loginStatusText());
      refreshUi();
      state.initialMerge = true;
      syncNow("login");
      return { ok: true };
    } catch (e) {
      state.expired = isExpiryError(e);
      setStatus(mapLoginError(e));
      return { ok: false, reason: e.network ? "network" : "auth" };
    }
  }
  async function claimDevice(token) {
    var meta = PC.readMeta(ls); PC.writeMeta(ls, meta);
    return http("POST", "/rest/v1/rpc/claim_device", { p_device: meta.deviceId, p_ua: String(navigator.userAgent || "").slice(0, 200) }, token || state.session.access);
  }
  /* -------- per-account exam access -------- */
  function allowedExams() {
    var u = state.session && state.session.user; var ex = u && u.exams;
    if (!ex || !ex.length || ex.indexOf("*") >= 0) return null; // null = all
    return ex;
  }
  var origList = null, origGet = null;
  function canAccessExam(id) {
    var allow = allowedExams();
    if (!allow) return true;
    return allow.indexOf(id) >= 0;
  }
  function applyEntitlements() {
    var api = global.ITCERT_EXAMS; if (!api) return;
    if (!origList) { origList = api.list; origGet = api.get; }
    var allow = allowedExams();
    // Homepage must list every bank; access is enforced on enter, not by hiding.
    api.list = function () { return origList.apply(api, arguments); };
    api.listAll = api.list;
    api.canAccess = canAccessExam;
    var first = api.defaultId;
    if (allow && allow.length) {
      for (var i = 0; i < allow.length; i++) {
        var cand = origGet.call(api, allow[i]);
        if (cand && cand.id === allow[i]) { first = allow[i]; break; }
      }
    }
    api.get = function (id) { if (allow && allow.indexOf(id) < 0) id = first; return origGet.call(api, id); };
    var oldLoad = api._origLoad || api.loadSavedExamId; api._origLoad = oldLoad;
    api.loadSavedExamId = function () { var id = oldLoad.call(api); return allow && allow.indexOf(id) < 0 ? first : id; };
    var css = $("itcert-ent-css"); if (css) css.textContent = "";
  }
  /* -------- protected banks (private storage, cached in Cache API) -------- */
  var bootResolve; global.ITCERT_BOOT = new Promise(function (r) { bootResolve = r; });
  var banksLoaded = false;
  function injectScript(text) { var sc = document.createElement("script"); sc.text = text; document.head.appendChild(sc); }
  async function loadBanks() {
    if (!ENABLED || !CFG.protectedBanks) { bootResolve(); return; }
    if (banksLoaded) return;
    var allow = allowedExams(), files = CFG.banks || {}, ids = Object.keys(files).filter(function (id) { return !allow || allow.indexOf(id) >= 0; });
    var cache = null; try { cache = global.caches ? await caches.open("itcert-banks-v1") : null; } catch (e) {}
    setStatus("正在加载题库…");
    for (var i = 0; i < ids.length; i++) {
      var path = "/storage/v1/object/authenticated/banks/" + files[ids[i]], text = null;
      var ck = BASE + path + "#" + state.session.user.id;
      if (cache) { try { var hit = await cache.match(ck); if (hit) text = await hit.text(); } catch (e) {} }
      if (!text) {
        var token = await ensureFreshToken();
        text = await withRetry(async function () {
          var ctl = new AbortController(), tm = setTimeout(function () { ctl.abort(); }, Math.max(CFG.timeoutMs, 20000));
          try {
            var r = await fetch(BASE + path, { headers: { apikey: KEY, Authorization: "Bearer " + token }, signal: ctl.signal });
            if (!r.ok) { var er = new Error(r.status === 400 || r.status === 403 || r.status === 404 ? "当前账号无权访问该题库" : "题库下载失败（" + r.status + "）"); er.network = r.status >= 500; throw er; }
            return await r.text();
          } catch (e) { if (e.name === "AbortError" || e instanceof TypeError) throw NetErr("题库下载超时，请检查网络后刷新"); throw e; }
          finally { clearTimeout(tm); }
        });
        if (cache) { try { await cache.put(ck, new Response(text)); } catch (e) {} }
      }
      injectScript(text);
    }
    banksLoaded = true; setStatus(loginStatusText()); bootResolve();
  }
  function expiryReminder() {
    var u = state.session && state.session.user; if (!u || !u.expires_at) return;
    var days = Math.ceil((Date.parse(u.expires_at) - Date.now()) / 86400000);
    if (days <= CFG.expiryWarnDays && days >= 0) showBanner("账号将于 " + fmtDate(u.expires_at) + " 到期（剩余 " + days + " 天），如需续期请联系管理员 <a href='#' id='sync-reload'>知道了</a>", true);
  }
  function loginStatusText() {
    var u = state.session && state.session.user; if (!u) return "";
    return "已登录：" + u.email.replace("@" + CFG.emailDomain, "") + (u.expires_at ? " · 有效期至 " + fmtDate(u.expires_at) : "");
  }
  async function signOut() {
    var s = state.session;
    if (s) {
      try { await pushNow(); } catch (e) {}
      http("POST", "/auth/v1/logout", null, s.access).catch(function () {});
    }
    state.session = null; writeSession(null);
    setStatus("已退出登录");
    refreshUi();
    return { ok: true };
  }
  /** Keep a different user's local progress out of this account. */
  function onAccountSwitch(uid) {
    var meta = PC.readMeta(ls);
    if (meta.uid && meta.uid !== uid) {
      try { setRaw("itcert_stash_" + meta.uid, JSON.stringify(PC.snapshot(ls, knownExamIds()))); } catch (e) {}
      PC.clearAll(ls);
      meta = PC.readMeta(ls);
    }
    meta.uid = uid; PC.writeMeta(ls, meta);
    var stash = parse(ls.getItem("itcert_stash_" + uid));
    if (stash && stash.exams) { PC.apply(ls, PC.mergeSnapshots(PC.snapshot(ls, knownExamIds()), stash), setRaw); ls.removeItem("itcert_stash_" + uid); }
  }
  async function ensureFreshToken() {
    var s = state.session; if (!s) throw new Error("not-logged-in");
    if (Date.now() < s.exp - 60000) return s.access;
    try {
      var tok = await http("POST", "/auth/v1/token?grant_type=refresh_token", { refresh_token: s.refresh });
      var ns = sessionFrom(tok); state.session = ns; writeSession(ns);
      if (isExpiredIso(ns.user.expires_at)) throw Object.assign(new Error("account_expired"), { code: "account_expired" });
      return ns.access;
    } catch (e) {
      if (!e.network) { forceLogout(isExpiryError(e) || isExpiredIso(s.user.expires_at) ? "账号已过期，请联系管理员续期" : "登录已失效，请重新登录"); }
      throw e;
    }
  }
  function forceLogout(msg) { state.session = null; writeSession(null); state.expired = /过期/.test(msg); setStatus(msg); refreshUi(); }

  /* ---------------- sync ---------------- */
  function setSync(t) { state.syncStatus = t; var el = $("sync-status"); if (el) el.textContent = t; }
  async function pullRemote(token, uid) {
    var rows = await http("GET", "/rest/v1/user_progress?select=data,updated_at&user_id=eq." + encodeURIComponent(uid), null, token);
    return rows && rows[0] ? rows[0].data : null;
  }
  async function pushRemote(token, uid, snap) {
    await http("POST", "/rest/v1/user_progress?on_conflict=user_id", { user_id: uid, data: snap }, token, { Prefer: "resolution=merge-duplicates,return=minimal" });
  }
  function shouldPull(reason) {
    if (reason === "login" || reason === "load" || reason === "import" || reason === "manual" || reason === "pull" || reason === "migrate") return true;
    if (reason === "visible") {
      var gap = Number(CFG.syncPullMinIntervalMs) || 300000;
      return !state.lastPullAt || (Date.now() - state.lastPullAt) >= gap;
    }
    return false; // auto / hide / flush / online / push → upload only
  }
  async function syncNow(reason) {
    if (!ENABLED || !state.session || state.syncing) return;
    state.syncing = true; state.dirty = false;
    var doPull = shouldPull(reason);
    setSync(doPull ? "同步中…" : "上传进度…");
    try {
      await withRetry(async function () {
        var token = await ensureFreshToken();
        var uid = state.session.user.id;
        // Claim device once per browser session (not on every debounce upload).
        if (CFG.deviceLimit && (reason === "login" || reason === "load" || !state.claimedDevice)) {
          try { await claimDevice(token); state.claimedDevice = true; }
          catch (e) { if (/device_limit/.test(e.message)) { forceLogout("该账号登录的设备数已达上限，本机已退出"); throw e; } if (e.network) throw e; }
        }
        var local = PC.snapshot(ls, knownExamIds());
        var merged = local;
        var localChanged = false;
        if (doPull) {
          var remote = await pullRemote(token, uid);
          state.lastPullAt = Date.now();
          merged = remote ? PC.mergeSnapshots(local, remote) : local;
          localChanged = !PC.sameData(local, merged);
          if (localChanged) PC.apply(ls, merged, setRaw);
          if (!remote || !PC.sameData(remote, merged)) await pushRemote(token, uid, merged);
        } else {
          await pushRemote(token, uid, local);
        }
        var meta = PC.readMeta(ls); meta.lastSyncAt = Date.now(); PC.writeMeta(ls, meta);
        // Always clear the boot flag; NEVER auto-reload / navigate (that was jumping users to home).
        if (localChanged) onLocalMergedQuiet(reason);
        else state.initialMerge = false;
      });
      setSync("已同步 " + fmtTime(Date.now()));
    } catch (e) {
      if (!state.session) { setSync(""); }
      else if (isExpiryError(e) || e.status === 401 || e.status === 403) setSync("同步被拒绝（账号可能已过期），进度仅保存在本机");
      else setSync("暂时无法连接同步服务，进度已保存在本机，稍后自动重试");
      if (state.session) scheduleSync(Math.max(CFG.syncDebounceMs, 60000));
    } finally { state.syncing = false; if (state.dirty) scheduleSync(CFG.syncDebounceMs); }
  }
  var pushNow = function () { return syncNow("flush"); };
  function autoSync() { try { return ls.getItem("itcert_autosync") !== "0"; } catch (e) { return true; } }
  function scheduleSync(ms) { if (!autoSync()) { if (state.dirty) setSync("手动同步模式：有未同步的更改，点「立即同步」保存到账号"); return; } clearTimeout(state.timer); state.timer = setTimeout(function () { syncNow("auto"); }, ms); }
  function onLocalMergedQuiet(reason) {
    // Remote progress was merged into localStorage. App keeps answers in memory for the
    // current session — do NOT reload, remount, change bank, or reset question index.
    state.initialMerge = false;
    if (reason === "login" || reason === "load") return; // boot merge: in-memory still empty / about to init
    showBanner("已合并其他设备的进度（当前题目不受影响）。如需查看全部更新可<a href='#' id='sync-reload'>点此刷新</a>", false);
  }
  function showBanner(html, dismissOnly) {
    var b = $("sync-banner");
    if (!b) { b = document.createElement("div"); b.id = "sync-banner"; b.className = "sync-banner"; document.body.appendChild(b); }
    b.innerHTML = html; if (dismissOnly) b.dataset.dismiss = "1"; else delete b.dataset.dismiss;
    var a = $("sync-reload"); if (a) a.onclick = function (ev) { ev.preventDefault(); if (b.dataset.dismiss) b.remove(); else location.reload(); };
  }

  /* Hook localStorage writes from app.js: stamp timestamps, keep history, schedule push. */
  Storage.prototype.setItem = function (k, v) {
    rawSet.call(this, k, v);
    if (this === ls && PC) {
      try { if (PC.noteWrite(ls, String(k), String(v), setRaw) && ENABLED && state.session) { state.dirty = true; scheduleSync(CFG.syncDebounceMs); } } catch (e) {}
    }
  };

  /* ---------------- UI ---------------- */
  function setStatus(t) { state.status = t; var el = $("auth-status"); if (el) el.textContent = t; }
  function isLoggedIn() { return !!state.session; }
  function applyAppGate() {
    document.documentElement.classList.add("auth-required");
    document.body.classList.add("auth-gated");
    document.body.classList.toggle("auth-ok", isLoggedIn());
  }
  function emit() {
    try { document.dispatchEvent(new CustomEvent("ai103-auth-change", { detail: { enabled: true, ready: state.ready, user: state.session ? state.session.user : null, loggedIn: isLoggedIn() } })); } catch (e) {}
  }
  function refreshUi() {
    if (!ENABLED) return;
    var panel = $("auth-panel"); if (panel) panel.classList.remove("hidden");
    var li = isLoggedIn();
    var email = $("auth-email");
    if (email) { email.classList.toggle("hidden", li); email.disabled = false; }
    var form = $("auth-form"); if (form) form.classList.toggle("hidden", li);
    var lb = $("btn-auth-login"); if (lb) { lb.classList.toggle("hidden", li); lb.textContent = "登录"; }
    var lo = $("btn-auth-logout"); if (lo) { lo.classList.toggle("hidden", !li); lo.textContent = "退出登录"; }
    var hint = document.querySelector("#auth-panel .auth-hint");
    if (hint) hint.textContent = li ? "进度自动同步到账号，换设备登录同一账号即可继续" : "请使用管理员发放的账号登录（账号可只填姓名缩写）";
    if (li && !state.status) setStatus(loginStatusText());
    if (!li && !state.status) setStatus("请登录后使用");
    var sb = $("sync-row"); if (sb) sb.classList.toggle("hidden", !li);
    var adminBtn = $("btn-admin");
    var isAdmin = !!(li && state.session && state.session.user && state.session.user.role === "admin");
    if (!adminBtn && isAdmin) {
      var panel0 = $("auth-panel");
      if (panel0) {
        adminBtn = document.createElement("a");
        adminBtn.id = "btn-admin"; adminBtn.className = "btn btn-sm btn-primary"; adminBtn.href = "admin.html";
        adminBtn.textContent = "管理后台"; adminBtn.style.marginTop = ".35rem";
        panel0.appendChild(adminBtn);
      }
    }
    if (adminBtn) adminBtn.classList.toggle("hidden", !isAdmin);
    var tg = $("btn-acct-toggle");
    if (!tg && panel) { tg = document.createElement("button"); tg.type = "button"; tg.id = "btn-acct-toggle"; tg.className = "btn btn-sm btn-ghost acct-toggle"; tg.textContent = "账号"; panel.parentNode.insertBefore(tg, panel); tg.onclick = function () { document.body.classList.toggle("acct-open"); }; }
    if (tg) tg.classList.toggle("hidden", !li);
    applyAppGate(); emit();
  }
  function ensureLoginDom() {
    var form = $("auth-form"); if (!form) return;
    if (!$("auth-email")) {
      var i = document.createElement("input");
      i.type = "text"; i.id = "auth-email"; i.className = "auth-input"; i.name = "username";
      i.autocomplete = "username"; i.placeholder = "账号（如 zhangsan）";
      form.insertBefore(i, form.firstChild);
    } else { $("auth-email").placeholder = "账号（如 zhangsan）"; $("auth-email").type = "text"; }
    var pw = $("auth-password"); if (pw) pw.placeholder = "密码";
    var panel = $("auth-panel");
    if (panel && !$("sync-row")) {
      var row = document.createElement("div"); row.id = "sync-row"; row.className = "sync-row muted hidden";
      row.innerHTML = "<div id='sync-status'></div><div class='sync-ctl'><label class='sync-auto'><input type='checkbox' id='chk-autosync'> 自动同步</label><button type='button' class='btn btn-sm' id='btn-sync-now'>立即同步</button></div>";
      panel.appendChild(row);
      var ck = $("chk-autosync"); ck.checked = autoSync();
      ck.onchange = function () { rawSet.call(ls, "itcert_autosync", ck.checked ? "1" : "0"); if (ck.checked) { if (state.dirty) syncNow("manual"); else setSync("已开启自动同步"); } else setSync("已切换为手动同步，需要时点「立即同步」"); };
      var lo2 = $("btn-auth-logout"); if (lo2) row.querySelector(".sync-ctl").appendChild(lo2);
      $("btn-sync-now").onclick = function () { syncNow("manual"); };
    }
  }

  /* -------- backup modal (works with or without accounts; zero backend) -------- */
  function injectCss() {
    if ($("itcert-sync-css")) return;
    var s = document.createElement("style"); s.id = "itcert-sync-css";
    s.textContent = ".sync-row{margin-top:.4rem;font-size:.85rem}.sync-ctl{display:flex;align-items:center;gap:.6rem;flex-wrap:wrap;margin-top:.35rem}.sync-auto{display:inline-flex;align-items:center;gap:.3rem}.acct-toggle{margin-left:auto}body.auth-ok #auth-panel{display:none!important}body.auth-ok.acct-open #auth-panel{display:flex!important;flex-direction:column;align-items:flex-start;width:100%;flex:1 1 100%;padding:.75rem 1rem;margin-top:.5rem;background:var(--bg-card,rgba(255,255,255,.06));border-radius:12px;gap:.3rem}body.auth-ok.acct-open .auth-status{white-space:normal;font-size:.85rem}.sync-banner{position:fixed;left:50%;bottom:1rem;transform:translateX(-50%);background:#1f2937;color:#fff;padding:.6rem 1rem;border-radius:8px;z-index:9999;font-size:.9rem}.sync-banner a{color:#93c5fd}" +
      ".bk-mask{position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:9998;display:flex;align-items:center;justify-content:center}.bk-box{background:var(--card,#fff);color:inherit;max-width:560px;width:92%;max-height:90vh;overflow:auto;border-radius:10px;padding:1rem}.bk-box textarea{width:100%;min-height:7rem;font-family:monospace;font-size:.75rem;word-break:break-all}.bk-box .row{display:flex;gap:.5rem;flex-wrap:wrap;margin:.5rem 0}.bk-msg{font-size:.85rem;min-height:1.2em}" +
      "html.auth-required body:not(.auth-ok) #btn-backup{display:none}";
    document.head.appendChild(s);
  }
  function openBackup() {
    var m = document.createElement("div"); m.className = "bk-mask";
    m.innerHTML = "<div class='bk-box' role='dialog' aria-label='进度备份'>" +
      "<h3 style='margin-top:0'>进度备份 / 换设备</h3>" +
      "<p class='muted' style='font-size:.85rem'>导出：复制下面的进度码（或下载文件），在另一台设备「导入进度」粘贴即可。导入会与本机进度合并，不会覆盖已有记录。</p>" +
      "<div class='row'><button class='btn btn-sm' id='bk-export'>生成进度码</button><button class='btn btn-sm' id='bk-copy'>复制</button><button class='btn btn-sm' id='bk-dl'>下载文件</button></div>" +
      "<textarea id='bk-code' placeholder='进度码将显示在这里；导入时把进度码粘贴到这里'></textarea>" +
      "<div class='row'><button class='btn btn-sm btn-primary' id='bk-import'>导入进度（粘贴的进度码）</button><label class='btn btn-sm'>从文件导入<input type='file' id='bk-file' accept='.txt,.json,text/plain,application/json' style='display:none'></label></div>" +
      "<div class='bk-msg' id='bk-msg'></div><div class='row'><span style='flex:1'></span><button class='btn btn-sm' id='bk-close'>关闭</button></div></div>";
    document.body.appendChild(m);
    var msg = function (t) { $("bk-msg").textContent = t; };
    $("bk-close").onclick = function () { m.remove(); };
    $("bk-export").onclick = async function () {
      var code = await PC.encode(PC.snapshot(ls, knownExamIds()));
      $("bk-code").value = code; msg("已生成进度码（" + code.length + " 字符）。微信内可长按全选复制。");
    };
    $("bk-copy").onclick = async function () {
      var ta = $("bk-code"); if (!ta.value) await $("bk-export").onclick();
      try { await navigator.clipboard.writeText(ta.value); msg("已复制到剪贴板"); }
      catch (e) { ta.focus(); ta.select(); try { document.execCommand("copy"); msg("已复制到剪贴板"); } catch (x) { msg("请长按文本框手动全选复制"); } }
    };
    $("bk-dl").onclick = async function () {
      var ta = $("bk-code"); if (!ta.value) await $("bk-export").onclick();
      try {
        var a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([ta.value], { type: "text/plain" }));
        a.download = "IT认证练习-进度-" + new Date().toISOString().slice(0, 10) + ".txt"; document.body.appendChild(a); a.click(); a.remove();
        msg("已开始下载；若在微信内无反应，请用「复制」方式");
      } catch (e) { msg("当前浏览器不支持下载，请用「复制」方式"); }
    };
    async function doImport(text) {
      try {
        var incoming = await PC.decode(text);
        PC.apply(ls, PC.mergeSnapshots(PC.snapshot(ls, knownExamIds()), incoming), setRaw);
        var meta = PC.readMeta(ls); Object.keys(meta.ts).forEach(function (k) { meta.ts[k] = Math.max(meta.ts[k], Date.now() - 1); }); PC.writeMeta(ls, meta);
        msg("导入成功，正在刷新…");
        if (ENABLED && state.session) { try { await syncNow("import"); } catch (e) {} }
        setTimeout(function () { location.reload(); }, 600);
      } catch (e) { msg("导入失败：" + (e.message || e)); }
    }
    $("bk-import").onclick = function () { doImport($("bk-code").value); };
    $("bk-file").onchange = function (ev) {
      var f = ev.target.files && ev.target.files[0]; if (!f) return;
      var r = new FileReader(); r.onload = function () { doImport(String(r.result || "")); }; r.readAsText(f);
    };
  }
  function addBackupButton() {
    var foot = document.querySelector(".app-foot"); if (!foot || $("btn-backup")) return;
    var b = document.createElement("button"); b.type = "button"; b.id = "btn-backup"; b.className = "btn btn-sm btn-ghost"; b.textContent = "导出/导入进度";
    b.onclick = openBackup; foot.appendChild(b);
  }

  /* ---------------- boot ---------------- */
  function boot() {
    injectCss(); addBackupButton();
    if (!ENABLED) { bootResolve(); return; }
    ensureLoginDom();
    var form = $("auth-form");
    if (form) form.addEventListener("submit", function (ev) { ev.preventDefault(); signIn(($("auth-email") || {}).value, ($("auth-password") || {}).value).then(function () { if ($("auth-password")) $("auth-password").value = ""; }); });
    var lo = $("btn-auth-logout"); if (lo) lo.addEventListener("click", function () { signOut(); });
    state.ready = true; refreshUi();
    if (state.session) {
      applyEntitlements(); expiryReminder();
      // 刷新最新 app_metadata（含 role），旧本地 session 可能没有 role 字段
      http("GET", "/auth/v1/user", null, state.session.access).then(function (u) {
        if (!state.session || !state.session.user) return;
        state.session.user.role = (u.app_metadata && u.app_metadata.role) || null;
        if (u.app_metadata && u.app_metadata.exams) state.session.user.exams = u.app_metadata.exams;
        var exp = expiresAtOf(u); if (exp) state.session.user.expires_at = exp;
        writeSession(state.session); applyEntitlements(); refreshUi();
      }).catch(function () {});
      loadBanks().then(function () { state.initialMerge = true; syncNow("load"); }, function (e) { setStatus(e.message || "题库加载失败"); });
    } else if (!CFG.protectedBanks) bootResolve();
    document.addEventListener("visibilitychange", function () {
      if (!state.session || !autoSync()) return;
      if (document.visibilityState === "hidden") { if (state.dirty) syncNow("hide"); }
      else if (shouldPull("visible")) syncNow("visible");
    });
    global.addEventListener("pagehide", function () { if (state.session && state.dirty && autoSync()) syncNow("hide"); });
    global.addEventListener("online", function () { if (state.session && state.dirty && autoSync()) syncNow("online"); });
  }

  if (ENABLED) {
    var cached = readSession();
    if (cached && cached.user && !isExpiredIso(cached.user.expires_at) && CFG.allowOfflineCachedLogin) state.session = cached;
    else if (cached && cached.user && isExpiredIso(cached.user.expires_at)) { writeSession(null); state.expired = true; state.status = "账号已过期，请联系管理员续期"; }
    global.AI103Auth = {
      enabled: true, featureUi: true, mode: "account",
      requiresAuth: function () { return true; }, isLoggedIn: isLoggedIn, getClient: function () { return null; },
      getState: function () { return { user: state.session ? state.session.user : null, ready: state.ready, mode: "account", enabled: true, featureUi: true, loggedIn: isLoggedIn(), expired: state.expired }; },
      statusMessage: function () { return state.status; }, signIn: signIn, signUp: function () { setStatus("账号由管理员发放，请联系管理员开通"); return Promise.resolve({ ok: false }); },
      signOut: signOut, getSession: function () { return Promise.resolve(state.session); },
      canAccessExam: canAccessExam, allowedExams: allowedExams,
      migrateLocalToCloudIfNeeded: function () { return syncNow("migrate"); }, pullProgress: function () { return syncNow("pull"); }, pushProgress: function () { return syncNow("push"); },
      refreshUi: refreshUi, applyAppGate: applyAppGate, init: boot, syncNow: syncNow,
    };
  }
  global.ITCERT_SYNC = { enabled: ENABLED, openBackup: openBackup, syncNow: syncNow, _state: state, _cfg: CFG };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
})(window);
