/**
 * account-auth.js — account login (gates the bank) + manual progress upload/download.
 * Progress is NOT synced automatically. 「上传进度」overwrites cloud practice with local;
 * 「下载进度」overwrites local practice with cloud. Mock-exam history is merged both ways
 * (deduped by id or exam+time+score). Neither path auto-syncs, and practice is not merged.
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
  /** Visible username is the local part only; never show @domain. */
  function usernameOf(raw) {
    var s = String(raw || "").trim();
    var at = s.indexOf("@");
    return (at >= 0 ? s.slice(0, at) : s).trim();
  }
  function displayUserName(raw) { return usernameOf(raw); }
  /** Auth still needs an email: strip @… then append the fixed domain. */
  function normalizeEmail(raw) {
    var u = usernameOf(raw).toLowerCase();
    return u ? u + "@" + CFG.emailDomain : "";
  }

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
    if (!email || !password) { setStatus("请输入用户名和密码"); return { ok: false }; }
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
          if (e.network) { /* backend flaky: allow, claim again on next login */ }
          else { http("POST", "/auth/v1/logout", null, s.access).catch(function () {}); setStatus(mapLoginError(e)); return { ok: false, reason: "device" }; }
        }
        state.claimedDevice = true;
      }
      onAccountSwitch(s.user.id);
      state.session = s; state.expired = false; writeSession(s);
      applyEntitlements();
      // Do not download banks or progress here. Quiz loads one exam's catalog; sync is manual.
      resolveBoot();
      setStatus(loginStatusText());
      refreshUi();
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
  function isRestrictedExam(id) { return id === "az305" || id === "dva-c02"; }
  function canAccessExam(id) {
    if (isRestrictedExam(id)) {
      var u = state.session && state.session.user;
      return !!u && (u.role === "admin" || (Array.isArray(u.exams) && u.exams.indexOf(id) >= 0));
    }
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
    api.get = function (id) { if (allow && allow.indexOf(id) < 0 && !canAccessExam(id)) id = first; return origGet.call(api, id); };
    var oldLoad = api._origLoad || api.loadSavedExamId; api._origLoad = oldLoad;
    api.loadSavedExamId = function () { var id = oldLoad.call(api); return allow && allow.indexOf(id) < 0 && !canAccessExam(id) ? first : id; };
    var css = $("itcert-ent-css"); if (css) css.textContent = "";
  }
  /* -------- boot gate (auth ready; bank downloads do not block this) -------- */
  var bootResolve, bootResolved = false;
  global.ITCERT_BOOT = new Promise(function (r) { bootResolve = r; });
  function resolveBoot() { if (!bootResolved) { bootResolved = true; bootResolve(); } }

  /* -------- on-demand banks via Edge Function itc-bank (memory only, never Cache API) --------
   * GET {apiBase}/functions/v1/itc-bank
   *   ?exam=&meta=1                         catalog: {total, domains?, index?} and questions:[]
   *   ?exam=&offset=&limit=                 one page of full questions (client does not loop the bank)
   *   ?exam=&ids=id1,id2                    those questions only (max 80 per request; client chunks)
   *   ?exam=&sample=N                       N sampled questions (max 80). Optional seed.
   *   ?exam=&q=&offset=&limit=              search hits; response echoes q and matchTotal
   * Headers: apikey + Authorization: Bearer <user JWT>.
   * 404 / "not allowed" → retry the Supabase host directly.
   * If ids/sample/search/meta are not honored, the client throws a Chinese error and does not page the whole bank.
   * Nothing is written to Cache API or localStorage. Cleared on logout.
   * Optional index items (no stems): {id, domain, type, control, caseStudy, caseStudyId, boxes, yn, dd, n}.
   * Rate limit on the function is 120 requests / 5 min per user+exam.
   */
  var BANK_PAGE = 50;
  var BANK_IDS_MAX = 80;
  var BANK_DIRECT = "https://paswovhtsoljydywdmvb.supabase.co";
  var BANK_CACHE = "itcert-banks-v1";
  var BANK_ORIGIN_KEY = "itcert_bank_origin_v1";
  var BANK_META_KEY = "itcert_bank_meta_v1";
  var BANK_PROXY_PROBE_MS = 2500;
  var BANK_GLOBAL = { ai103: "QUESTIONS_AI103", "dop-c02": "QUESTIONS_DOP_C02", "dp-700": "QUESTIONS_DP_700", "dp-420": "QUESTIONS_DP_420", "az305": "QUESTIONS_AZ305", "dva-c02": "QUESTIONS_DVA_C02" };
  var bankMem = {};
  var bankInflight = {};
  var bankOrigin = "";
  function isProxyBankBase(base) {
    return /tencentscf\.com|scf\.tencent/i.test(String(base || ""));
  }
  function readStoredOrigin() {
    try {
      return parse((global.sessionStorage || ls).getItem(BANK_ORIGIN_KEY));
    } catch (e) { return null; }
  }
  function writeStoredOrigin(origin, proxyFailed) {
    try {
      var st = global.sessionStorage || ls;
      st.setItem(BANK_ORIGIN_KEY, JSON.stringify({ origin: String(origin || ""), proxyFailed: !!proxyFailed, t: Date.now() }));
    } catch (e) {}
  }
  function rememberBankOrigin(origin, proxyFailed) {
    bankOrigin = String(origin || "").replace(/\/+$/, "");
    writeStoredOrigin(bankOrigin, proxyFailed);
  }
  (function restoreBankOrigin() {
    var stored = readStoredOrigin();
    if (stored && stored.origin) bankOrigin = String(stored.origin).replace(/\/+$/, "");
  })();
  function bankPin(examId) {
    return String((CFG.banks && CFG.banks[examId]) || "");
  }
  function metaCacheKey(examId) {
    var uid = state.session && state.session.user && state.session.user.id;
    return String(uid || "") + "::" + examId;
  }
  function readMetaCache(examId) {
    try {
      var all = parse(ls.getItem(BANK_META_KEY)) || {};
      var rec = all[metaCacheKey(examId)];
      if (rec && rec.pin === bankPin(examId) && rec.meta && rec.meta.examId === examId) return rec.meta;
    } catch (e) {}
    return null;
  }
  function writeMetaCache(examId, meta) {
    try {
      var all = parse(ls.getItem(BANK_META_KEY)) || {};
      all[metaCacheKey(examId)] = { pin: bankPin(examId), meta: { examId: meta.examId, version: meta.version || "", total: meta.total || 0, domains: meta.domains || null, index: meta.index || null }, t: Date.now() };
      setRaw(BANK_META_KEY, JSON.stringify(all));
    } catch (e) {}
  }
  function clearMetaCache() {
    try {
      var uid = state.session && state.session.user && state.session.user.id;
      if (!uid) { ls.removeItem(BANK_META_KEY); return; }
      var all = parse(ls.getItem(BANK_META_KEY)) || {};
      Object.keys(all).forEach(function (k) { if (k.indexOf(String(uid) + "::") === 0) delete all[k]; });
      setRaw(BANK_META_KEY, JSON.stringify(all));
    } catch (e) {}
  }
  function purgeBankCache() {
    try {
      if (!global.caches || typeof global.caches.delete !== "function") return;
      var p = global.caches.delete(BANK_CACHE);
      if (p && typeof p.catch === "function") p.catch(function () {});
    } catch (e) {}
  }
  function clearBankMemory() {
    bankMem = {};
    bankInflight = {};
    bankOrigin = "";
    clearMetaCache();
    Object.keys(BANK_GLOBAL).forEach(function (id) {
      try { delete global[BANK_GLOBAL[id]]; } catch (e) { global[BANK_GLOBAL[id]] = undefined; }
    });
    try { delete global.QUESTIONS; } catch (e) { global.QUESTIONS = undefined; }
  }
  function bankMemKey(examId) {
    var uid = state.session && state.session.user && state.session.user.id;
    return String(uid || "") + "::" + examId;
  }
  function emptyBank(examId) {
    return { examId: examId, version: "", total: 0, domains: null, index: null, metaReady: false, byId: {}, order: [], pages: {} };
  }
  function bankSlot(examId) {
    var key = bankMemKey(examId);
    if (!bankMem[key]) bankMem[key] = emptyBank(examId);
    return bankMem[key];
  }
  function bankReady(examId) {
    var meta = bankMem[bankMemKey(examId)];
    return !!(meta && meta.metaReady);
  }
  function publicMeta(slot) {
    return { examId: slot.examId, version: slot.version || "", total: slot.total || 0, domains: slot.domains || null, index: slot.index || null, ready: !!slot.metaReady };
  }
  function rememberQuestions(slot, questions, offset) {
    (questions || []).forEach(function (q, i) {
      if (!q || q.id == null || q.id === "") return;
      var id = String(q.id);
      slot.byId[id] = q;
      if (offset != null) slot.order[offset + i] = q;
    });
  }
  function bankErrorMessage(e) {
    var msg = String((e && e.message) || "");
    if (isExpiryError(e)) return "账号已过期，请联系管理员续期";
    if (/请先登录|未知题库|无权访问|题库为空|题库数据异常|题库加载不完整|题库加载超时|题库加载失败|账号已过期|不会下载整库|请求过于频繁|暂不支持/.test(msg)) return msg;
    if (/not-logged-in/i.test(msg)) return "请先登录后再加载题库";
    if (e && e.status === 429) return "请求过于频繁，请稍后再试";
    if (e && e.network) return /超时/.test(msg) ? msg : "题库加载失败，请检查网络后重试";
    if (e && e.status === 401) return "登录已失效，请重新登录";
    if (e && (e.status === 403 || /无权|forbidden/i.test(msg))) return "当前账号无权访问该题库";
    if (!state.session) return "登录已失效，请重新登录";
    if (e && e.status) return "题库加载失败（" + e.status + "），请检查网络后重试";
    return "题库加载失败，请检查网络后重试";
  }
  function shouldFallbackBank(e) {
    return !!(e && e.status!==401 && e.status!==403 && (e.status===404 || e.network || /not allowed|upstream/i.test(String(e.message || ""))));
  }
  function bankQuery(examId, opt) {
    var p = ["exam=" + encodeURIComponent(examId)];
    if (opt.meta) p.push("meta=1");
    if (opt.media) p.push("media="+encodeURIComponent(opt.media));
    if (opt.ids && opt.ids.length) p.push("ids=" + encodeURIComponent(opt.ids.join(",")));
    if (opt.sample) p.push("sample=" + encodeURIComponent(opt.sample));
    if (opt.seed) p.push("seed=" + encodeURIComponent(opt.seed));
    if (opt.q) p.push("q=" + encodeURIComponent(opt.q));
    if (opt.offset != null) p.push("offset=" + encodeURIComponent(opt.offset));
    if (opt.limit != null) p.push("limit=" + encodeURIComponent(opt.limit));
    return "/functions/v1/itc-bank?" + p.join("&");
  }
  function unsupportedBank(kind) {
    if (kind === "ids") return "题库服务暂不支持按题号加载，已停止，不会下载整库。";
    if (kind === "sample") return "题库服务暂不支持抽题，已停止，不会下载整库。";
    if (kind === "search") return "题库服务暂不支持搜索，已停止，不会下载整库。";
    if (kind === "meta") return "题库服务未返回目录信息，已停止，不会下载整库。";
    return "题库加载失败，请稍后重试";
  }
  function assertBankMode(data, kind, opt) {
    var qs = (data && data.questions) || [];
    if (data && data.mode) {
      if (data.mode !== kind) throw new Error(unsupportedBank(kind));
      return;
    }
    if (kind === "meta") {
      if (qs.length) throw new Error(unsupportedBank("meta"));
      return;
    }
    if (kind === "ids") {
      var want = {};
      (opt.ids || []).forEach(function (id) { want[String(id)] = 1; });
      for (var i = 0; i < qs.length; i++) {
        var id = qs[i] && qs[i].id != null ? String(qs[i].id) : "";
        if (!want[id]) throw new Error(unsupportedBank("ids"));
      }
      return;
    }
    if (kind === "sample") {
      var n = Number(opt.sample) || 0;
      var total = Number(data && data.total);
      var expectN = Math.min(n, isFinite(total) && total >= 0 ? total : n);
      if (qs.length !== expectN) throw new Error(unsupportedBank("sample"));
      return;
    }
    if (kind === "search") {
      if (!data || String(data.q || "") !== String(opt.q || "")) throw new Error(unsupportedBank("search"));
    }
  }
  async function fetchBankRaw(examId, opt, token, base, timeoutMs) {
    var root = String(base || "").replace(/\/+$/, "");
    var path = bankQuery(examId, opt);
    var ctl = typeof AbortController === "function" ? new AbortController() : null;
    var wait = timeoutMs != null ? timeoutMs : Math.max(CFG.timeoutMs || 8000, 20000);
    var tm = setTimeout(function () { if (ctl) ctl.abort(); }, wait);
    try {
      var res = await fetch(root + path, {
        method: "GET",
        headers: { apikey: KEY, Authorization: "Bearer " + token },
        signal: ctl ? ctl.signal : undefined,
        cache: "no-store"
      });
      var text = await res.text().catch(function () { return ""; });
      var data = parse(text);
      if (!res.ok) {
        var msg = data && (data.msg || data.message || data.error_description || data.error);
        if (msg && typeof msg !== "string") msg = JSON.stringify(msg);
        var err = new Error(msg || ("HTTP " + res.status));
        err.status = res.status;
        err.network = res.status >= 500;
        throw err;
      }
      if (!data || data.ok !== true || !Array.isArray(data.questions)) throw new Error("题库数据异常，请稍后重试");
      if (data.examId && String(data.examId) !== String(examId)) throw new Error("题库数据异常，请稍后重试");
      return data;
    } catch (e) {
      if (e.name === "AbortError" || e instanceof TypeError) throw NetErr("题库加载超时，请检查网络后重试");
      throw e;
    } finally { clearTimeout(tm); }
  }
  async function fetchBankRetry(examId, opt, base) {
    var token = await ensureFreshToken();
    try {
      return await withRetry(function () { return fetchBankRaw(examId, opt, token, base); });
    } catch (e) {
      if (!e || e.status !== 401 || !state.session) throw e;
      state.session.exp = 0;
      token = await ensureFreshToken();
      return await fetchBankRaw(examId, opt, token, base);
    }
  }
  async function fetchBankOnce(examId, opt, base, timeoutMs) {
    var token = await ensureFreshToken();
    return fetchBankRaw(examId, opt, token, base, timeoutMs);
  }
  async function fetchBankWithFallback(examId, opt) {
    var direct = BANK_DIRECT.replace(/\/+$/, "");
    var stored = readStoredOrigin();
    var primary = String(bankOrigin || BASE || direct).replace(/\/+$/, "");
    if (!bankOrigin && stored && stored.proxyFailed && isProxyBankBase(primary) && direct) {
      primary = direct;
    }
    var bases = [primary];
    if (!bankOrigin && direct && direct !== primary) bases.push(direct);

    // First itc-bank hop: SCF is not allowlisted. Race the short proxy probe
    // with the direct host so a 404/timeout does not delay the real download.
    if (!bankOrigin && bases.length > 1 && isProxyBankBase(bases[0])) {
      var proxyBase = bases[0];
      var winner = null;
      var lastRace;
      var pending = 2;
      await new Promise(function (resolve) {
        function done() { pending -= 1; if (pending <= 0 || winner) resolve(); }
        fetchBankOnce(examId, opt, proxyBase, BANK_PROXY_PROBE_MS).then(function (data) {
          if (!winner) { winner = { data: data, base: proxyBase }; }
          done();
        }).catch(function (e) {
          lastRace = e;
          if (shouldFallbackBank(e)) writeStoredOrigin("", true);
          done();
        });
        fetchBankRetry(examId, opt, direct).then(function (data) {
          if (!winner) { winner = { data: data, base: direct }; }
          done();
        }).catch(function (e) {
          lastRace = e;
          done();
        });
      });
      if (winner) {
        rememberBankOrigin(winner.base, isProxyBankBase(proxyBase) && winner.base === direct);
        return winner.data;
      }
      throw lastRace || new Error("题库加载失败，请检查网络后重试");
    }

    var last;
    for (var i = 0; i < bases.length; i++) {
      try {
        var data = await fetchBankRetry(examId, opt, bases[i]);
        rememberBankOrigin(bases[i], isProxyBankBase(primary) && String(bases[i]).replace(/\/+$/, "") === direct);
        return data;
      } catch (e) {
        last = e;
        if (shouldFallbackBank(e) && isProxyBankBase(bases[i])) writeStoredOrigin("", true);
        if (i === bases.length - 1 || !shouldFallbackBank(e)) throw e;
      }
    }
    throw last;
  }
  function guardExam(examId) {
    examId = String(examId || "");
    if (!ENABLED || !CFG.protectedBanks) return Promise.reject(new Error("题库未开启保护模式"));
    if (!state.session || !state.session.user) return Promise.reject(new Error("请先登录后再加载题库"));
    if (!BANK_GLOBAL[examId]) return Promise.reject(new Error("未知题库"));
    if (!canAccessExam(examId)) return Promise.reject(new Error("当前账号无权访问该题库"));
    return Promise.resolve(examId);
  }
  function applyPack(slot, data, offset) {
    if (data.version != null && data.version !== "") slot.version = String(data.version);
    if (data.total != null && isFinite(Number(data.total))) slot.total = Math.floor(Number(data.total));
    if (data.domains && typeof data.domains === "object") slot.domains = data.domains;
    if (Array.isArray(data.index)) slot.index = data.index;
    rememberQuestions(slot, data.questions, offset);
  }
  function loadExamMeta(examId) {
    return guardExam(examId).then(function (id) {
      var slot = bankSlot(id);
      if (slot.metaReady) return publicMeta(slot);
      var cached = readMetaCache(id);
      if (cached) {
        applyPack(slot, Object.assign({ questions: [] }, cached), null);
        slot.metaReady = true;
        return publicMeta(slot);
      }
      var inflightKey = "meta:" + id;
      if (bankInflight[inflightKey]) return bankInflight[inflightKey];
      var uid = state.session.user.id;
      var p = fetchBankWithFallback(id, { meta: true, limit: 1 }).then(function (data) {
        assertBankMode(data, "meta", { meta: true });
        if (!state.session || !state.session.user || state.session.user.id !== uid) throw new Error("请先登录后再加载题库");
        applyPack(slot, data, null);
        slot.metaReady = true;
        if (!slot.total && data.total == null) throw new Error("题库数据异常，请稍后重试");
        writeMetaCache(id, publicMeta(slot));
        return publicMeta(slot);
      }).catch(function (e) {
        var err = new Error(bankErrorMessage(e));
        err.status = e && e.status;
        throw err;
      });
      bankInflight[inflightKey] = p;
      var clear = function () { if (bankInflight[inflightKey] === p) delete bankInflight[inflightKey]; };
      p.then(clear, clear);
      return p;
    });
  }
  function loadExamPage(examId, offset, limit) {
    offset = Math.max(0, Math.floor(Number(offset) || 0));
    limit = Math.min(BANK_PAGE, Math.max(1, Math.floor(Number(limit) || BANK_PAGE)));
    return guardExam(examId).then(function (id) {
      var slot = bankSlot(id);
      var pageKey = offset + ":" + limit;
      if (slot.pages[pageKey]) {
        var cached = [];
        for (var i = 0; i < limit; i++) if (slot.order[offset + i]) cached.push(slot.order[offset + i]);
        return { questions: cached, total: slot.total, version: slot.version, offset: offset, limit: limit };
      }
      return fetchBankWithFallback(id, { offset: offset, limit: limit }).then(function (data) {
        assertBankMode(data, "page", { offset: offset, limit: limit });
        applyPack(slot, data, offset);
        slot.pages[pageKey] = true;
        return { questions: data.questions || [], total: slot.total, version: slot.version, offset: offset, limit: limit };
      }).catch(function (e) {
        throw new Error(bankErrorMessage(e));
      });
    });
  }
  function loadExamByIds(examId, ids) {
    var list = [];
    var seen = {};
    (ids || []).forEach(function (id) {
      if (id == null || id === "") return;
      var s = String(id);
      if (seen[s] || s.indexOf("__") === 0) return;
      seen[s] = 1;
      list.push(s);
    });
    return guardExam(examId).then(async function (id) {
      var slot = bankSlot(id);
      var need = list.filter(function (qid) { return !slot.byId[qid]; });
      try {
        for (var i = 0; i < need.length; i += BANK_IDS_MAX) {
          var part = need.slice(i, i + BANK_IDS_MAX);
          var data = await fetchBankWithFallback(id, { ids: part, offset: 0, limit: part.length });
          assertBankMode(data, "ids", { ids: part });
          applyPack(slot, data, null);
        }
      } catch (e) {
        throw new Error(bankErrorMessage(e));
      }
      return list.map(function (qid) { return slot.byId[qid] || null; }).filter(Boolean);
    });
  }
  function loadExamSample(examId, n, seed) {
    n = Math.floor(Number(n) || 0);
    if (n <= 0) return Promise.reject(new Error("抽题数量无效"));
    if (n > BANK_IDS_MAX) return Promise.reject(new Error("一次最多抽取 " + BANK_IDS_MAX + " 题。请减少题量，或使用带索引的题库按题号抽题。不会下载整库。"));
    return guardExam(examId).then(function (id) {
      var slot = bankSlot(id);
      return fetchBankWithFallback(id, { sample: n, seed: seed || "", offset: 999999, limit: 1 }).then(function (data) {
        assertBankMode(data, "sample", { sample: n });
        applyPack(slot, data, null);
        return data.questions || [];
      }).catch(function (e) {
        throw new Error(bankErrorMessage(e));
      });
    });
  }
  function loadExamSearch(examId, q, offset, limit) {
    q = String(q || "").trim();
    if (!q) return Promise.reject(new Error("请输入搜索关键词"));
    offset = Math.max(0, Math.floor(Number(offset) || 0));
    limit = Math.min(BANK_PAGE, Math.max(1, Math.floor(Number(limit) || BANK_PAGE)));
    return guardExam(examId).then(function (id) {
      var slot = bankSlot(id);
      return fetchBankWithFallback(id, { q: q, offset: offset, limit: limit }).then(function (data) {
        assertBankMode(data, "search", { q: q });
        applyPack(slot, data, null);
        var matchTotal = data.matchTotal != null ? Number(data.matchTotal) : (data.questions || []).length;
        return { questions: data.questions || [], total: slot.total, matchTotal: matchTotal, q: q, offset: offset, limit: limit };
      }).catch(function (e) {
        throw new Error(bankErrorMessage(e));
      });
    });
  }
  function getBank(examId) {
    var slot = bankMem[bankMemKey(examId)];
    return slot ? publicMeta(slot) : null;
  }
  function loadExam(examId) {
    return loadExamMeta(examId).then(function () { return []; });
  }
  function expiryReminder() {
    var u = state.session && state.session.user; if (!u || !u.expires_at) return;
    var days = Math.ceil((Date.parse(u.expires_at) - Date.now()) / 86400000);
    if (days <= CFG.expiryWarnDays && days >= 0) showBanner("账号将于 " + fmtDate(u.expires_at) + " 到期（剩余 " + days + " 天），如需续期请联系管理员 <a href='#' id='sync-reload'>知道了</a>", true);
  }
  function loginStatusText() {
    var u = state.session && state.session.user; if (!u) return "";
    return "已登录：" + displayUserName(u.email) + (u.expires_at ? " · 有效期至 " + fmtDate(u.expires_at) : "");
  }
  async function signOut() {
    var s = state.session;
    if (s) {
      http("POST", "/auth/v1/logout", null, s.access).catch(function () {});
    }
    state.session = null; writeSession(null);
    clearBankMemory();
    purgeBankCache();
    setStatus("已退出登录");
    refreshUi();
    return { ok: true };
  }
  /** Keep a different user's local progress out of this account. */
  function onAccountSwitch(uid) {
    var meta = PC.readMeta(ls);
    if (meta.uid && meta.uid !== uid) {
      clearBankMemory();
      purgeBankCache();
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
  function forceLogout(msg) { state.session = null; writeSession(null); clearBankMemory(); purgeBankCache(); state.expired = /过期/.test(msg); setStatus(msg); refreshUi(); }

  /* ---------------- manual progress upload / download (practice overwrite, hist merge, no auto sync) ---------------- */
  var STALE_KEY = "itcert_cloud_stale";
  function setSync(t) { state.syncStatus = t; var el = $("sync-status"); if (el) el.textContent = t; }
  async function pullRemote(token, uid) {
    var rows = await http("GET", "/rest/v1/user_progress?select=data,updated_at&user_id=eq." + encodeURIComponent(uid), null, token);
    return rows && rows[0] ? rows[0].data : null;
  }
  async function pushRemote(token, uid, snap) {
    // PostgREST upsert replaces the data column. Caller composes practice overwrite + merged hist first.
    await http("POST", "/rest/v1/user_progress?on_conflict=user_id", { user_id: uid, data: snap }, token, { Prefer: "resolution=merge-duplicates,return=minimal" });
  }
  function asProgressSnap(remote) {
    if (remote == null) return { v: 1, exams: {} };
    if (typeof remote !== "object" || Array.isArray(remote) || !remote.exams) throw new Error("云端进度无效");
    return remote;
  }
  function syncFailText(e, verb) {
    if (!state.session) return "";
    if (e && e.status === 429) return "请求过于频繁，请稍后再试";
    if (isExpiryError(e) || (e && (e.status === 401 || e.status === 403))) return verb + "被拒绝（账号可能已过期），进度仍只在本机";
    return verb + "失败，请稍后重试。进度仍只在本机。";
  }
  function noteLocalAhead(msg) {
    try { sessionStorage.setItem(STALE_KEY, "1"); } catch (e) {}
    var text = msg || "本机进度已更新。云端仍是旧数据，需要同步请点「上传进度」。刷新不会自动拉回云端。";
    setSync(text);
    showBanner(text + " <a href='#' id='sync-reload'>知道了</a>", true);
  }
  function clearLocalAhead() {
    try { sessionStorage.removeItem(STALE_KEY); } catch (e) {}
  }
  function showStaleIfNeeded() {
    var flag = "";
    try { flag = sessionStorage.getItem(STALE_KEY) || ""; } catch (e) {}
    if (flag === "1" && state.session) noteLocalAhead();
    else if (state.session && !state.syncStatus) setSync("");
  }
  async function claimOnce() {
    if (!CFG.deviceLimit || !state.session || state.claimedDevice) return;
    try {
      var token = await ensureFreshToken();
      await claimDevice(token);
      state.claimedDevice = true;
    } catch (e) {
      if (e && /device_limit/.test(String(e.message || ""))) forceLogout("该账号登录的设备数已达上限，本机已退出");
    }
  }
  async function uploadProgress() {
    if (!ENABLED || !state.session) { setSync("请先登录"); return; }
    if (state.syncing) return;
    if (!global.confirm("上传将用本机做题进度覆盖云端做题进度；模拟考试历史会与云端合并后保存（按记录去重，不自动同步）。确定上传？")) return;
    state.syncing = true;
    setSync("正在上传…");
    try {
      await withRetry(async function () {
        var token = await ensureFreshToken();
        var local = PC.snapshot(ls, knownExamIds());
        var remote = asProgressSnap(await pullRemote(token, state.session.user.id));
        var composed = PC.composeOverwriteWithMergedHist(local, remote);
        await pushRemote(token, state.session.user.id, composed);
        if (typeof PC.apply === "function") PC.apply(ls, composed, setRaw);
      });
      clearLocalAhead();
      var meta = PC.readMeta(ls); meta.lastSyncAt = Date.now(); PC.writeMeta(ls, meta);
      setSync("已上传到云端 " + fmtTime(Date.now()) + "（做题进度已覆盖云端，模考历史已合并）");
    } catch (e) {
      setSync(syncFailText(e, "上传"));
    } finally { state.syncing = false; }
  }
  async function downloadProgress() {
    if (!ENABLED || !state.session) { setSync("请先登录"); return; }
    if (state.syncing) return;
    if (!global.confirm("下载将用云端做题进度覆盖本机做题进度；模拟考试历史会与本机合并后保存（按记录去重，不自动同步），并刷新页面。本机尚未上传的练习和错题会丢失。确定下载？")) return;
    state.syncing = true;
    setSync("正在下载…");
    try {
      await withRetry(async function () {
        var token = await ensureFreshToken();
        var remote = asProgressSnap(await pullRemote(token, state.session.user.id));
        var local = PC.snapshot(ls, knownExamIds());
        var composed = PC.composeOverwriteWithMergedHist(remote, local);
        if (typeof PC.replaceAll === "function") PC.replaceAll(ls, composed, setRaw);
        else {
          PC.clearAll(ls);
          PC.apply(ls, composed, setRaw);
        }
      });
      clearLocalAhead();
      setSync("已用云端做题进度覆盖本机，模考历史已合并，正在刷新…");
      setTimeout(function () { location.reload(); }, 300);
    } catch (e) {
      state.syncing = false;
      setSync(syncFailText(e, "下载") || ((e && e.message) ? ("下载失败：" + e.message) : "下载失败"));
    }
  }
  function showBanner(html, dismissOnly) {
    var b = $("sync-banner");
    if (!b) { b = document.createElement("div"); b.id = "sync-banner"; b.className = "sync-banner"; document.body.appendChild(b); }
    b.innerHTML = html; if (dismissOnly) b.dataset.dismiss = "1"; else delete b.dataset.dismiss;
    var a = $("sync-reload"); if (a) a.onclick = function (ev) { ev.preventDefault(); if (b.dataset.dismiss) b.remove(); else location.reload(); };
  }

  /* Stamp local timestamps for backup/export. Do not upload. */
  Storage.prototype.setItem = function (k, v) {
    rawSet.call(this, k, v);
    if (this === ls && PC) {
      try { PC.noteWrite(ls, String(k), String(v), setRaw); } catch (e) {}
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
    if (hint) hint.textContent = li ? "" : "请使用管理员发放的用户名登录";
    if (li && !state.status) setStatus(loginStatusText());
    if (!li && !state.status) setStatus("请登录后使用");
    var sb = $("sync-row"); if (sb) sb.classList.toggle("hidden", !li);
    var adminBtn = $("btn-admin");
    var isAdmin = !!(li && state.session && state.session.user && state.session.user.role === "admin");
    function placeAdminBtn(btn) {
      var ctl = document.querySelector("#auth-panel .sync-ctl");
      var lo = $("btn-auth-logout");
      if (ctl) {
        btn.style.marginTop = "";
        if (lo && lo.parentNode === ctl) ctl.insertBefore(btn, lo);
        else ctl.appendChild(btn);
      } else {
        var panel0 = $("auth-panel");
        if (panel0 && btn.parentNode !== panel0) panel0.appendChild(btn);
      }
    }
    if (!adminBtn && isAdmin) {
      adminBtn = document.createElement("a");
      adminBtn.id = "btn-admin"; adminBtn.className = "btn btn-sm btn-primary"; adminBtn.href = "admin.html";
      adminBtn.textContent = "管理后台";
      placeAdminBtn(adminBtn);
    } else if (adminBtn && isAdmin) {
      placeAdminBtn(adminBtn);
    }
    if (adminBtn) adminBtn.classList.toggle("hidden", !isAdmin);
    var tg = $("btn-acct-toggle");
    if (tg) tg.classList.add("hidden");
    applyAppGate(); emit();
  }
  function ensureLoginDom() {
    var form = $("auth-form"); if (!form) return;
    if (!$("auth-email")) {
      var i = document.createElement("input");
      i.type = "text"; i.id = "auth-email"; i.className = "auth-input"; i.name = "username";
      i.autocomplete = "username"; i.placeholder = "用户名"; i.setAttribute("aria-label", "用户名");
      form.insertBefore(i, form.firstChild);
    } else { $("auth-email").placeholder = "用户名"; $("auth-email").type = "text"; $("auth-email").setAttribute("aria-label", "用户名"); $("auth-email").name = "username"; }
    var pw = $("auth-password"); if (pw) pw.placeholder = "密码";
    var panel = $("auth-panel");
    if (panel && !$("sync-row")) {
      var row = document.createElement("div"); row.id = "sync-row"; row.className = "sync-row muted hidden";
      row.innerHTML = "<div id='sync-status'></div><div class='sync-ctl'><button type='button' class='btn btn-sm' id='btn-sync-upload'>上传进度</button><button type='button' class='btn btn-sm' id='btn-sync-download'>下载进度</button></div><p class='home-sync-hint muted'>进度不会自动同步，换设备请手动上传/下载。</p>";
      panel.appendChild(row);
      var lo2 = $("btn-auth-logout"); if (lo2) row.querySelector(".sync-ctl").appendChild(lo2);
      $("btn-sync-upload").onclick = function () { uploadProgress(); };
      $("btn-sync-download").onclick = function () { downloadProgress(); };
      if (!state.syncStatus) setSync("");
    }
  }

  /* -------- backup modal (works with or without accounts; zero backend) -------- */
  function injectCss() {
    if ($("itcert-sync-css")) return;
    var s = document.createElement("style"); s.id = "itcert-sync-css";
    s.textContent = ".sync-row{margin-top:.4rem;font-size:.85rem}.sync-ctl{display:flex;align-items:center;gap:.6rem;flex-wrap:wrap;margin-top:.35rem}.sync-auto{display:inline-flex;align-items:center;gap:.3rem}.sync-banner{position:fixed;left:50%;bottom:1rem;transform:translateX(-50%);background:#1f2937;color:#fff;padding:.6rem 1rem;border-radius:8px;z-index:9999;font-size:.9rem}.sync-banner a{color:#93c5fd}" +
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
        try { sessionStorage.setItem(STALE_KEY, "1"); } catch (e2) {}
        msg("导入成功，正在刷新…云端不会自动更新，需要同步请之后点「上传进度」。");
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
    purgeBankCache();
    if (!ENABLED) { resolveBoot(); return; }
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
      claimOnce();
      showStaleIfNeeded();
    }
    resolveBoot();
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
      canAccessExam: canAccessExam, allowedExams: allowedExams, loadExamMedia: function(id,path){return guardExam(id).then(function(){return fetchBankWithFallback(id,{media:path});}).then(function(data){return data.mediaUrl;});}, loadExam: loadExam, examReady: bankReady,
      loadExamMeta: loadExamMeta, loadExamPage: loadExamPage, loadExamByIds: loadExamByIds,
      loadExamSample: loadExamSample, loadExamSearch: loadExamSearch, getBank: getBank,
      migrateLocalToCloudIfNeeded: function () { return Promise.resolve(); },
      pullProgress: downloadProgress, pushProgress: uploadProgress,
      refreshUi: refreshUi, applyAppGate: applyAppGate, init: boot,
      syncNow: function () { return Promise.resolve(); },
      usernameOf: usernameOf, displayUserName: displayUserName, normalizeEmail: normalizeEmail,
    };
  }
  global.ITCERT_SYNC = { enabled: ENABLED, openBackup: openBackup, uploadProgress: uploadProgress, downloadProgress: downloadProgress, noteLocalAhead: noteLocalAhead, _state: state, _cfg: CFG, usernameOf: usernameOf, displayUserName: displayUserName, normalizeEmail: normalizeEmail };
  purgeBankCache();
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
})(window);
