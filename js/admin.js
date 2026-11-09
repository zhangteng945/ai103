/**
 * 管理后台（仅 app_metadata.role === "admin"）
 * 经 apiBase → /functions/v1/itc-admin；绝不使用 service_role。
 */
(function () {
  "use strict";
  var CFG = window.__ITCERT_ACCOUNT__ || {};
  var SB = window.__AI103_SUPABASE__ || {};
  var BASE = String(CFG.apiBase || SB.url || "").replace(/\/+$/, "");
  var DIRECT = String(SB.url || "").replace(/\/+$/, "");
  var KEY = CFG.anonKey || SB.anonKey || "";
  var SESSION_KEY = "itcert_account_session_v1";
  var EXAM_OPTS = ["ai103", "dop-c02", "dp-700", "dp-420", "*"];

  function $(id) { return document.getElementById(id); }
  function parse(s) { try { return JSON.parse(s); } catch (e) { return null; } }
  function readSession() { return parse(localStorage.getItem(SESSION_KEY)); }
  function setMsg(t, ok) {
    var el = $("admin-msg");
    if (!el) return;
    el.textContent = t || "";
    el.className = "admin-msg" + (t ? (ok ? " ok" : " err") : "");
  }
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
  function shortEmail(e) {
    e = String(e || "");
    var d = "@" + (CFG.emailDomain || "ai103.local");
    return e.endsWith(d) ? e.slice(0, -d.length) : e;
  }

  async function http(method, path, body, token, base) {
    var root = (base || BASE).replace(/\/+$/, "");
    var h = { apikey: KEY, "Content-Type": "application/json", Authorization: "Bearer " + token };
    var res = await fetch(root + path, {
      method: method,
      headers: h,
      body: body ? JSON.stringify(body) : undefined,
      cache: "no-store",
    });
    var text = await res.text().catch(function () { return ""; });
    var data = parse(text);
    if (!res.ok) {
      var msg = (data && (data.error || data.msg || data.message)) || ("HTTP " + res.status);
      var err = new Error(typeof msg === "string" ? msg : JSON.stringify(msg));
      err.status = res.status; err.data = data; throw err;
    }
    return data;
  }

  async function adminApi(action, payload, token) {
    var body = Object.assign({ action: action }, payload || {});
    try {
      return await http("POST", "/functions/v1/itc-admin", body, token, BASE);
    } catch (e) {
      // 主路径走 SCF 代理；若本地尚未重部署代理，可选回退直连 Supabase 函数 URL
      if (DIRECT && DIRECT !== BASE && e.status !== 401 && e.status !== 403 && (e.status === 404 || /not allowed|upstream/i.test(e.message))) {
        return await http("POST", "/functions/v1/itc-admin", body, token, DIRECT);
      }
      throw e;
    }
  }

  async function verifyAdmin(session) {
    if (!session || !session.access) throw Object.assign(new Error("请先在练习站登录管理员账号"), { status: 401 });
    var u;
    try { u = await http("GET", "/auth/v1/user", null, session.access, BASE); }
    catch(e) {
      if (DIRECT && DIRECT !== BASE && e.status !== 401 && e.status !== 403 && (e.status === 404 || e.status === 502 || e.status === 503 || e instanceof TypeError || /not allowed|upstream/i.test(e.message)))
        u = await http("GET", "/auth/v1/user", null, session.access, DIRECT);
      else throw e;
    }
    var role = (u.app_metadata && u.app_metadata.role) || null;
    if (role !== "admin") throw Object.assign(new Error("当前账号不是管理员"), { status: 403 });
    // 回写 role 到本地 session，供主站入口使用
    try {
      var s = readSession() || session;
      if (s.user) { s.user.role = "admin"; localStorage.setItem(SESSION_KEY, JSON.stringify(s)); }
    } catch (e) {}
    return u;
  }

  function showPw(boxId, email, password, tip) {
    var box = $(boxId);
    if (!box) return;
    box.classList.remove("hidden");
    box.innerHTML = "<div>" + esc(tip || "密码仅显示一次，请立即复制发给学员") + "</div>" +
      "<div style='margin:.4rem 0'>账号：<b>" + esc(shortEmail(email)) + "</b></div>" +
      "<div>密码：<code id='pw-once'>" + esc(password) + "</code> " +
      "<button type='button' class='btn btn-sm' id='btn-copy-pw'>复制密码</button></div>";
    var btn = $("btn-copy-pw");
    if (btn) btn.onclick = function () {
      var t = password;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(t).then(function () { setMsg("密码已复制", true); }).catch(function () { fallbackCopy(t); });
      } else fallbackCopy(t);
    };
  }
  function fallbackCopy(t) {
    try {
      var ta = document.createElement("textarea"); ta.value = t; ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.select(); document.execCommand("copy"); ta.remove(); setMsg("密码已复制", true);
    } catch (e) { setMsg("请手动选中复制密码", false); }
  }

  function examsLabel(ex) {
    if (!ex || !ex.length || ex.indexOf("*") >= 0) return "全部";
    return ex.join(",");
  }

  function renderUsers(users) {
    var tb = $("users-body");
    if (!tb) return;
    if (!users || !users.length) { tb.innerHTML = "<tr><td colspan='8'>暂无账号</td></tr>"; return; }
    tb.innerHTML = users.map(function (u) {
      var st = u.status || "";
      return "<tr data-email='" + esc(u.email) + "'>" +
        "<td>" + esc(shortEmail(u.email)) + (u.role === "admin" ? " <span class='muted'>管理员</span>" : "") + "</td>" +
        "<td class='st-" + esc(st) + "'>" + esc(st) + "</td>" +
        "<td>" + esc(u.expires_at_zh || "-") + "</td>" +
        "<td>" + esc(examsLabel(u.exams)) + "</td>" +
        "<td>" + esc(u.max_devices) + "</td>" +
        "<td>" + esc(u.last_sign_in_zh || "-") + "</td>" +
        "<td>" + esc(u.created_at_zh || "-") + "</td>" +
        "<td class='ops'>" +
          "<button type='button' class='btn btn-sm' data-act='renew'>+天</button>" +
          "<button type='button' class='btn btn-sm' data-act='until'>到期日</button>" +
          "<button type='button' class='btn btn-sm' data-act='exams'>题库</button>" +
          "<button type='button' class='btn btn-sm' data-act='toggle'>" + (st === "停用" ? "启用" : "停用") + "</button>" +
          "<button type='button' class='btn btn-sm' data-act='rpw'>重置密码</button>" +
          "<button type='button' class='btn btn-sm' data-act='rdev'>清设备</button>" +
          "<button type='button' class='btn btn-sm' data-act='maxd'>设备上限</button>" +
        "</td></tr>";
    }).join("");
  }

  function renderReports(reports) {
    var tb = $("reports-body");
    if (!tb) return;
    if (!reports || !reports.length) { tb.innerHTML = "<tr><td colspan='5'>暂无报错</td></tr>"; return; }
    tb.innerHTML = reports.map(function (r) {
      return "<tr><td>" + esc(r.created_at_zh || r.created_at) + "</td>" +
        "<td>" + esc(shortEmail(r.email)) + "</td>" +
        "<td>" + esc(r.exam_id) + "</td>" +
        "<td>" + esc(r.qid) + "</td>" +
        "<td>" + esc(r.note || "") + "</td></tr>";
    }).join("");
  }

  var token = null;
  var adminUser = null;

  async function loadList() {
    setMsg("加载学员列表…", true);
    var data = await adminApi("list", {}, token);
    renderUsers(data.users || []);
    setMsg("已加载 " + ((data.users && data.users.length) || 0) + " 个账号", true);
  }
  async function loadReports() {
    setMsg("加载报错…", true);
    var data = await adminApi("reports", { limit: 100 }, token);
    renderReports(data.reports || []);
    setMsg("报错 " + ((data.reports && data.reports.length) || 0) + " 条", true);
  }

  function selectedCreateExams() {
    var all = $("c-all");
    if (all && all.checked) return ["*"];
    var box = $("c-exams");
    var out = [];
    box.querySelectorAll('input[type=checkbox]:not(#c-all)').forEach(function (c) {
      if (c.checked) out.push(c.value);
    });
    return out.length ? out : ["ai103"];
  }

  function pickExams(current) {
    var cur = (current || []).slice();
    var tip = "题库（逗号分隔，或 * 表示全部）\n可选：" + EXAM_OPTS.join(", ");
    var v = prompt(tip, cur.indexOf("*") >= 0 ? "*" : cur.join(","));
    if (v == null) return null;
    v = v.trim();
    if (v === "*" || v === "全部") return ["*"];
    var arr = v.split(/[,\s]+/).map(function (s) { return s.trim(); }).filter(Boolean);
    return arr.length ? arr : null;
  }

  async function onUserAct(email, act) {
    try {
      if (act === "renew") {
        var days = prompt("续期天数（从当前到期日累加；已过期则从今天起算）", "30");
        if (days == null || !String(days).trim()) return;
        var r = await adminApi("renew", { email: email, days: Number(days) }, token);
        setMsg(r.message || "续期成功", true); await loadList();
      } else if (act === "until") {
        var until = prompt("指定到期日（YYYY-MM-DD，当天 23:59:59 北京时间）", "");
        if (!until) return;
        var r2 = await adminApi("renew", { email: email, until: until }, token);
        setMsg(r2.message || "已设置到期日", true); await loadList();
      } else if (act === "exams") {
        var row = null;
        try {
          var list = await adminApi("list", {}, token);
          row = (list.users || []).find(function (u) { return u.email === email; });
        } catch (e) {}
        var ex = pickExams(row && row.exams);
        if (!ex) return;
        var r3 = await adminApi("exams", { email: email, exams: ex }, token);
        setMsg(r3.message || "题库已更新", true); await loadList();
      } else if (act === "toggle") {
        var stBtn = document.querySelector("tr[data-email='" + email.replace(/'/g, "\\'") + "'] [data-act='toggle']");
        var enable = stBtn && /启用/.test(stBtn.textContent);
        var r4 = await adminApi(enable ? "enable" : "disable", { email: email }, token);
        setMsg(r4.message || "已更新", true); await loadList();
      } else if (act === "rpw") {
        if (!confirm("确认重置 " + shortEmail(email) + " 的密码？新密码将仅显示一次。")) return;
        var r5 = await adminApi("reset-password", { email: email }, token);
        showPw("create-pw", email, r5.password, r5.message || "新密码仅显示一次");
        document.querySelector('[data-tab="create"]').click();
        setMsg(r5.message || "密码已重置", true);
      } else if (act === "rdev") {
        if (!confirm("清空 " + shortEmail(email) + " 的设备记录？")) return;
        var r6 = await adminApi("reset-devices", { email: email }, token);
        setMsg(r6.message || "设备已清空", true);
      } else if (act === "maxd") {
        var n = prompt("设备上限（0=不限）", "2");
        if (n == null || !String(n).trim()) return;
        var r7 = await adminApi("max-devices", { email: email, max_devices: Number(n) }, token);
        setMsg(r7.message || "已更新设备上限", true); await loadList();
      }
    } catch (e) {
      setMsg(e.message || "操作失败", false);
    }
  }

  function bindUi() {
    document.querySelectorAll(".admin-tabs [data-tab]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        document.querySelectorAll(".admin-tabs [data-tab]").forEach(function (b) { b.classList.remove("active"); });
        document.querySelectorAll(".admin-panel").forEach(function (p) { p.classList.remove("active"); });
        btn.classList.add("active");
        var id = "tab-" + btn.getAttribute("data-tab");
        var panel = $(id); if (panel) panel.classList.add("active");
        if (btn.getAttribute("data-tab") === "reports") loadReports().catch(function (e) { setMsg(e.message, false); });
        if (btn.getAttribute("data-tab") === "users") loadList().catch(function (e) { setMsg(e.message, false); });
      });
    });
    $("btn-refresh").onclick = function () {
      var active = document.querySelector(".admin-tabs [data-tab].active");
      var t = active && active.getAttribute("data-tab");
      if (t === "reports") loadReports().catch(function (e) { setMsg(e.message, false); });
      else loadList().catch(function (e) { setMsg(e.message, false); });
    };
    $("users-body").addEventListener("click", function (ev) {
      var b = ev.target.closest("[data-act]"); if (!b) return;
      var tr = b.closest("tr"); var email = tr && tr.getAttribute("data-email");
      if (email) onUserAct(email, b.getAttribute("data-act"));
    });
    var all = $("c-all");
    if (all) all.addEventListener("change", function () {
      if (!all.checked) return;
      $("c-exams").querySelectorAll('input[type=checkbox]:not(#c-all)').forEach(function (c) { c.checked = false; });
    });
    $("c-exams").addEventListener("change", function (ev) {
      if (ev.target && ev.target !== all && ev.target.checked && all) all.checked = false;
    });
    $("create-form").addEventListener("submit", async function (ev) {
      ev.preventDefault();
      try {
        setMsg("正在开号…", true);
        var payload = {
          username: ($("c-user").value || "").trim(),
          days: Number($("c-days").value || 30),
          max_devices: Number($("c-max").value || 2),
          exams: selectedCreateExams(),
        };
        var r = await adminApi("create", payload, token);
        showPw("create-pw", r.user && r.user.email, r.password, r.message);
        setMsg(r.message || "开号成功", true);
        $("c-user").value = "";
        await loadList();
      } catch (e) { setMsg(e.message || "开号失败", false); }
    });
  }

  async function boot() {
    var gate = $("admin-gate");
    var app = $("admin-app");
    try {
      if (!BASE || !KEY) throw new Error("站点未配置 apiBase / anonKey");
      var session = readSession();
      adminUser = await verifyAdmin(session);
      token = session.access;
      // Refresh and re-check app_metadata before each write; server independently verifies it too.
      window.ITCertPdfAdmin = { call: async function(action, payload) {
        var fresh = readSession(); await verifyAdmin(fresh);
        var body = Object.assign({action:action}, payload || {});
        try { return await http("POST", "/functions/v1/itc-pdf-candidate", body, fresh.access, BASE); }
        catch(e) {
          if (DIRECT && DIRECT !== BASE && e.status !== 401 && e.status !== 403 && (e.status === 404 || e.status === 502 || e.status === 503 || e instanceof TypeError || /not allowed|upstream/i.test(e.message)))
            return await http("POST", "/functions/v1/itc-pdf-candidate", body, fresh.access, DIRECT);
          throw e;
        }
      }};
      gate.classList.add("hidden");
      app.classList.remove("hidden");
      $("admin-who").textContent = "管理员：" + (adminUser.email || "");
      bindUi();
      await loadList();
    } catch (e) {
      app.classList.add("hidden");
      gate.classList.remove("hidden");
      $("gate-text").textContent = e.message || "无权访问";
      setMsg(e.message || "无权访问", false);
      if (e.status === 401 || e.status === 403) {
        setTimeout(function () { location.href = "index.html"; }, 1600);
      }
    }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
