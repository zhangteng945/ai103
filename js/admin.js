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
  var EXAM_OPTS = ["ai103", "dop-c02", "dp-700", "dp-420", "az305", "*"];
  var DEFAULT_DAYS = 30;
  var DEFAULT_MAX_DEVICES = 2;

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
  function examLabel(v) {
    if (v === "*") return "全部 (*)";
    if (v === "az305") return "AZ-305";
    return v;
  }

  /* Exact adminApi action + payload shapes. Tests assert these stay unchanged. */
  var AdminPayload = {
    list: function () { return { action: "list", payload: {} }; },
    reports: function () { return { action: "reports", payload: { limit: 100 } }; },
    create: function (username, days, maxDevices, exams) {
      return {
        action: "create",
        payload: {
          username: username,
          days: Number(days || DEFAULT_DAYS),
          max_devices: Number(maxDevices == null || maxDevices === "" ? DEFAULT_MAX_DEVICES : maxDevices),
          exams: exams
        }
      };
    },
    renewDays: function (email, days) {
      return { action: "renew", payload: { email: email, days: Number(days) } };
    },
    renewUntil: function (email, until) {
      return { action: "renew", payload: { email: email, until: until } };
    },
    exams: function (email, exams) {
      return { action: "exams", payload: { email: email, exams: exams } };
    },
    enable: function (email) { return { action: "enable", payload: { email: email } }; },
    disable: function (email) { return { action: "disable", payload: { email: email } }; },
    resetPassword: function (email) { return { action: "reset-password", payload: { email: email } }; },
    resetDevices: function (email) { return { action: "reset-devices", payload: { email: email } }; },
    maxDevices: function (email, n) {
      return { action: "max-devices", payload: { email: email, max_devices: Number(n) } };
    }
  };

  function collectExamValues(root, allId) {
    if (!root) return ["ai103"];
    var all = allId ? root.querySelector("#" + allId) : root.querySelector('input[value="*"]');
    if (all && all.checked) return ["*"];
    var out = [];
    root.querySelectorAll('input[type=checkbox]').forEach(function (c) {
      if (c === all) return;
      if (c.value === "*") return;
      if (c.checked) out.push(c.value);
    });
    return out.length ? out : ["ai103"];
  }

  function examChecksHtml(selected, idPrefix) {
    var cur = selected || [];
    var allOn = cur.indexOf("*") >= 0;
    return EXAM_OPTS.map(function (v) {
      var id = idPrefix + (v === "*" ? "all" : v);
      var checked = v === "*" ? allOn : (!allOn && cur.indexOf(v) >= 0);
      return "<label for='" + esc(id) + "'><input type='checkbox' id='" + esc(id) + "' value='" + esc(v) + "'" +
        (checked ? " checked" : "") + " /> " + esc(examLabel(v)) + "</label>";
    }).join("");
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

  async function callAdmin(spec, token) {
    return adminApi(spec.action, spec.payload, token);
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
      "<div class='pw-row'>密码：<code id='pw-once'>" + esc(password) + "</code> " +
      "<button type='button' class='btn btn-sm' id='btn-copy-pw'>复制密码</button></div>";
    var btn = $("btn-copy-pw");
    if (btn) btn.onclick = function () {
      var t = password;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(t).then(function () { setMsg("密码已复制", true); }).catch(function () { fallbackCopy(t); });
      } else fallbackCopy(t);
    };
    try { box.scrollIntoView({ block: "center", behavior: "smooth" }); } catch (e) {}
  }
  function fallbackCopy(t) {
    try {
      var ta = document.createElement("textarea"); ta.value = t; ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.select(); document.execCommand("copy"); ta.remove(); setMsg("密码已复制", true);
    } catch (e) { setMsg("请手动选中复制密码", false); }
  }

  function datePreset(s) {
    var m = String(s || "").match(/(\d{4}-\d{2}-\d{2})/);
    return m ? m[1] : "";
  }
  function examsLabel(ex) {
    if (!ex || !ex.length || ex.indexOf("*") >= 0) return "全部";
    return ex.join(",");
  }

  function userActionButtons(u) {
    var st = u.status || "";
    return "<div class='ops admin-user-actions'>" +
      "<button type='button' class='btn btn-primary' data-act='renew'>续期</button>" +
      "<button type='button' class='btn' data-act='exams'>题库</button>" +
      "<button type='button' class='btn' data-act='more' aria-haspopup='dialog'>更多</button>" +
      "</div>";
  }

  function userDataset(u) {
    return " data-email='" + esc(u.email) + "'" +
      " data-status='" + esc(u.status || "") + "'" +
      " data-exams='" + esc((u.exams && u.exams.length) ? u.exams.join(",") : "") + "'" +
      " data-maxd='" + esc(u.max_devices == null ? "" : u.max_devices) + "'" +
      " data-expires='" + esc(datePreset(u.expires_at_zh)) + "'";
  }

  function renderUsers(users) {
    var tb = $("users-body");
    var cards = $("users-cards");
    if (!tb && !cards) return;
    if (!users || !users.length) {
      if (tb) tb.innerHTML = "<tr><td colspan='8'>暂无账号</td></tr>";
      if (cards) cards.innerHTML = "<p class='muted admin-empty'>暂无账号</p>";
      return;
    }
    if (tb) {
      tb.innerHTML = users.map(function (u) {
        var st = u.status || "";
        return "<tr" + userDataset(u) + ">" +
          "<td>" + esc(shortEmail(u.email)) + (u.role === "admin" ? " <span class='muted'>管理员</span>" : "") + "</td>" +
          "<td class='st-" + esc(st) + "'>" + esc(st) + "</td>" +
          "<td>" + esc(u.expires_at_zh || "-") + "</td>" +
          "<td>" + esc(examsLabel(u.exams)) + "</td>" +
          "<td>" + esc(u.max_devices) + "</td>" +
          "<td>" + esc(u.last_sign_in_zh || "-") + "</td>" +
          "<td>" + esc(u.created_at_zh || "-") + "</td>" +
          "<td>" + userActionButtons(u) + "</td></tr>";
      }).join("");
    }
    if (cards) {
      cards.innerHTML = users.map(function (u) {
        var st = u.status || "";
        return "<article class='admin-user-card'" + userDataset(u) + ">" +
          "<header class='admin-user-card-head'>" +
            "<div class='admin-user-name'>" + esc(shortEmail(u.email)) +
              (u.role === "admin" ? " <span class='muted'>管理员</span>" : "") + "</div>" +
            "<span class='admin-status st-" + esc(st) + "'>" + esc(st || "-") + "</span>" +
          "</header>" +
          "<dl class='admin-user-meta'>" +
            "<div><dt>到期</dt><dd>" + esc(u.expires_at_zh || "-") + "</dd></div>" +
            "<div><dt>题库</dt><dd>" + esc(examsLabel(u.exams)) + "</dd></div>" +
            "<div><dt>设备上限</dt><dd>" + esc(u.max_devices == null ? "-" : u.max_devices) + "</dd></div>" +
            "<div><dt>最近登录</dt><dd>" + esc(u.last_sign_in_zh || "-") + "</dd></div>" +
            "<div><dt>创建</dt><dd>" + esc(u.created_at_zh || "-") + "</dd></div>" +
          "</dl>" +
          userActionButtons(u) +
        "</article>";
      }).join("");
    }
  }

  function renderReports(reports) {
    var tb = $("reports-body");
    var cards = $("reports-cards");
    if (!tb && !cards) return;
    if (!reports || !reports.length) {
      if (tb) tb.innerHTML = "<tr><td colspan='5'>暂无报错</td></tr>";
      if (cards) cards.innerHTML = "<p class='muted admin-empty'>暂无报错</p>";
      return;
    }
    if (tb) {
      tb.innerHTML = reports.map(function (r) {
        return "<tr><td>" + esc(r.created_at_zh || r.created_at) + "</td>" +
          "<td>" + esc(shortEmail(r.email)) + "</td>" +
          "<td>" + esc(r.exam_id) + "</td>" +
          "<td>" + esc(r.qid) + "</td>" +
          "<td>" + esc(r.note || "") + "</td></tr>";
      }).join("");
    }
    if (cards) {
      cards.innerHTML = reports.map(function (r) {
        return "<article class='admin-report-card'>" +
          "<header class='admin-report-head'>" +
            "<strong>" + esc(shortEmail(r.email)) + "</strong>" +
            "<span class='muted small'>" + esc(r.created_at_zh || r.created_at || "") + "</span>" +
          "</header>" +
          "<dl class='admin-user-meta'>" +
            "<div><dt>题库</dt><dd>" + esc(r.exam_id || "-") + "</dd></div>" +
            "<div><dt>题号</dt><dd>" + esc(r.qid || "-") + "</dd></div>" +
          "</dl>" +
          "<p class='admin-report-note'>" + esc(r.note || "（无说明）") + "</p>" +
        "</article>";
      }).join("");
    }
  }

  var token = null;
  var adminUser = null;
  var sheetState = null;
  var lastUsers = [];

  function findUser(email) {
    return (lastUsers || []).find(function (u) { return u.email === email; }) || null;
  }

  function rowContext(email, row) {
    var u = findUser(email) || {};
    var status = (row && row.getAttribute("data-status")) || u.status || "";
    var examsRaw = (row && row.getAttribute("data-exams")) || "";
    var exams = u.exams;
    if ((!exams || !exams.length) && examsRaw) exams = examsRaw.split(",").filter(Boolean);
    var maxd = row && row.getAttribute("data-maxd");
    if (maxd === "" || maxd == null) maxd = u.max_devices;
    return { status: status, exams: exams, max_devices: maxd, expires: (row && row.getAttribute("data-expires")) || "" };
  }

  async function loadList() {
    setMsg("加载学员列表…", true);
    var spec = AdminPayload.list();
    var data = await callAdmin(spec, token);
    lastUsers = data.users || [];
    renderUsers(lastUsers);
    setMsg("已加载 " + (lastUsers.length || 0) + " 个账号", true);
  }
  async function loadReports() {
    setMsg("加载报错…", true);
    var spec = AdminPayload.reports();
    var data = await callAdmin(spec, token);
    renderReports(data.reports || []);
    setMsg("报错 " + ((data.reports && data.reports.length) || 0) + " 条", true);
  }

  function selectedCreateExams() {
    return collectExamValues($("c-exams"), "c-all");
  }

  function closeSheet(result) {
    var overlay = $("admin-overlay");
    if (overlay) {
      overlay.classList.add("hidden");
      overlay.hidden = true;
    }
    document.body.classList.remove("admin-sheet-open");
    var resolve = sheetState && sheetState.resolve;
    sheetState = null;
    if (resolve) resolve(result);
  }

  function syncStarChecks(root, allId) {
    if (!root) return;
    var all = allId ? root.querySelector("#" + allId) : root.querySelector('input[value="*"]');
    if (!all) return;
    root.addEventListener("change", function (ev) {
      if (!ev.target || ev.target.type !== "checkbox") return;
      if (ev.target === all) {
        if (all.checked) {
          root.querySelectorAll('input[type=checkbox]').forEach(function (c) {
            if (c !== all) c.checked = false;
          });
        }
        return;
      }
      if (ev.target.checked) all.checked = false;
    });
  }

  function openSheet(opts) {
    opts = opts || {};
    return new Promise(function (resolve) {
      if (sheetState) closeSheet(null);
      var overlay = $("admin-overlay");
      var title = $("admin-sheet-title");
      var desc = $("admin-sheet-desc");
      var body = $("admin-sheet-body");
      var ok = $("admin-sheet-ok");
      var cancel = $("admin-sheet-cancel");
      if (!overlay || !body) { resolve(null); return; }
      sheetState = { resolve: resolve, opts: opts };
      if (title) title.textContent = opts.title || "";
      if (desc) {
        desc.textContent = opts.desc || "";
        desc.classList.toggle("hidden", !opts.desc);
      }
      body.innerHTML = opts.bodyHtml || "";
      if (ok) {
        ok.textContent = opts.confirmLabel || "确定";
        ok.className = "btn " + (opts.danger ? "btn-danger" : "btn-primary");
        ok.hidden = !!opts.hideConfirm;
      }
      if (cancel) cancel.textContent = opts.cancelLabel || "取消";
      overlay.classList.remove("hidden");
      overlay.hidden = false;
      document.body.classList.add("admin-sheet-open");
      if (typeof opts.onOpen === "function") opts.onOpen(body);
      var focusEl = body.querySelector("input, select, textarea, button") || ok;
      if (focusEl) setTimeout(function () { try { focusEl.focus(); } catch (e) {} }, 40);
    });
  }

  function bindSheetChrome() {
    var overlay = $("admin-overlay");
    if (!overlay || overlay.getAttribute("data-bound")) return;
    overlay.setAttribute("data-bound", "1");
    $("admin-sheet-cancel").addEventListener("click", function () { closeSheet(null); });
    overlay.addEventListener("click", function (ev) {
      if (ev.target && ev.target.getAttribute("data-sheet-dismiss")) closeSheet(null);
    });
    $("admin-sheet-ok").addEventListener("click", function () {
      if (!sheetState) return;
      var opts = sheetState.opts || {};
      var body = $("admin-sheet-body");
      var value = true;
      if (typeof opts.collect === "function") {
        value = opts.collect(body);
        if (value == null) return;
      }
      closeSheet(value);
    });
    document.addEventListener("keydown", function (ev) {
      if (ev.key === "Escape" && sheetState) closeSheet(null);
    });
  }

  function confirmSheet(title, desc, confirmLabel) {
    return openSheet({
      title: title,
      desc: desc,
      bodyHtml: "",
      confirmLabel: confirmLabel || "确定",
      danger: true
    }).then(function (v) { return !!v; });
  }

  function moreActionsHtml(ctx) {
    var enable = ctx.status === "停用";
    return "<div class='admin-more-list' role='menu'>" +
      "<button type='button' class='btn' data-more='renew'>续期天数</button>" +
      "<button type='button' class='btn' data-more='until'>指定到期日</button>" +
      "<button type='button' class='btn' data-more='exams'>可见题库</button>" +
      "<button type='button' class='btn' data-more='maxd'>设备上限</button>" +
      "<button type='button' class='btn' data-more='toggle'>" + (enable ? "启用账号" : "停用账号") + "</button>" +
      "<button type='button' class='btn btn-danger' data-more='rpw'>重置密码</button>" +
      "<button type='button' class='btn btn-danger' data-more='rdev'>清设备</button>" +
      "</div>";
  }

  async function promptRenewDays() {
    var days = await openSheet({
      title: "续期天数",
      desc: "从当前到期日累加；已过期则从今天起算。",
      bodyHtml: "<label>天数<input type='number' id='sheet-days' min='1' value='" + DEFAULT_DAYS + "' /></label>",
      confirmLabel: "续期",
      collect: function () {
        var el = $("sheet-days");
        var v = el && String(el.value || "").trim();
        if (!v || Number(v) <= 0) { setMsg("请输入有效天数", false); return null; }
        return v;
      }
    });
    return days;
  }

  async function promptUntil(preset) {
    var until = await openSheet({
      title: "指定到期日",
      desc: "当天 23:59:59 北京时间。",
      bodyHtml: "<label>到期日<input type='date' id='sheet-until' value='" + esc(preset || "") + "' /></label>",
      confirmLabel: "设置",
      collect: function () {
        var el = $("sheet-until");
        var v = el && String(el.value || "").trim();
        if (!v) { setMsg("请选择到期日", false); return null; }
        return v;
      }
    });
    return until;
  }

  async function promptExams(current) {
    var picked = await openSheet({
      title: "可见题库",
      desc: "与开号选项相同；选「全部」表示 *。",
      bodyHtml: "<div class='exam-checks' id='sheet-exams'>" + examChecksHtml(current, "s-") + "</div>",
      confirmLabel: "更新题库",
      onOpen: function (body) { syncStarChecks(body.querySelector("#sheet-exams"), "s-all"); },
      collect: function () {
        var arr = collectExamValues($("sheet-exams"), "s-all");
        return arr && arr.length ? arr : null;
      }
    });
    return picked;
  }

  async function promptMaxDevices(preset) {
    var fallback = preset == null || preset === "" ? String(DEFAULT_MAX_DEVICES) : String(preset);
    var n = await openSheet({
      title: "设备上限",
      desc: "0 表示不限。",
      bodyHtml: "<label>设备上限<input type='number' id='sheet-maxd' min='0' value='" + esc(fallback) + "' /></label>",
      confirmLabel: "更新",
      collect: function () {
        var el = $("sheet-maxd");
        var v = el && String(el.value || "").trim();
        if (v === "" || Number(v) < 0 || Number.isNaN(Number(v))) { setMsg("请输入有效的设备上限", false); return null; }
        return v;
      }
    });
    return n;
  }

  async function onUserAct(email, act, row) {
    try {
      var ctx = rowContext(email, row);
      if (act === "more") {
        var next = await openSheet({
          title: shortEmail(email),
          desc: "选择一项操作",
          bodyHtml: moreActionsHtml(ctx),
          hideConfirm: true,
          onOpen: function (body) {
            body.addEventListener("click", function (ev) {
              var b = ev.target.closest("[data-more]");
              if (!b) return;
              closeSheet(b.getAttribute("data-more"));
            });
          },
          collect: function () { return false; }
        });
        if (!next) return;
        return onUserAct(email, next, row);
      }
      if (act === "renew") {
        var days = await promptRenewDays();
        if (days == null || !String(days).trim()) return;
        var r = await callAdmin(AdminPayload.renewDays(email, days), token);
        setMsg(r.message || "续期成功", true); await loadList();
      } else if (act === "until") {
        var until = await promptUntil(ctx.expires);
        if (!until) return;
        var r2 = await callAdmin(AdminPayload.renewUntil(email, until), token);
        setMsg(r2.message || "已设置到期日", true); await loadList();
      } else if (act === "exams") {
        var current = ctx.exams;
        try {
          var list = await callAdmin(AdminPayload.list(), token);
          lastUsers = list.users || lastUsers;
          var found = (list.users || []).find(function (u) { return u.email === email; });
          if (found) current = found.exams;
        } catch (e) {}
        var ex = await promptExams(current);
        if (!ex) return;
        var r3 = await callAdmin(AdminPayload.exams(email, ex), token);
        setMsg(r3.message || "题库已更新", true); await loadList();
      } else if (act === "toggle") {
        var enable = ctx.status === "停用";
        if (!enable) {
          var okDis = await confirmSheet("停用账号", "确认停用 " + shortEmail(email) + " ？停用后该账号将无法登录。", "停用");
          if (!okDis) return;
        }
        var r4 = await callAdmin(enable ? AdminPayload.enable(email) : AdminPayload.disable(email), token);
        setMsg(r4.message || "已更新", true); await loadList();
      } else if (act === "rpw") {
        var okPw = await confirmSheet("重置密码", "确认重置 " + shortEmail(email) + " 的密码？新密码将仅显示一次。", "重置密码");
        if (!okPw) return;
        var r5 = await callAdmin(AdminPayload.resetPassword(email), token);
        showPw("create-pw", email, r5.password, r5.message || "新密码仅显示一次");
        var createTab = document.querySelector('[data-tab="create"]');
        if (createTab) createTab.click();
        setMsg(r5.message || "密码已重置", true);
      } else if (act === "rdev") {
        var okDev = await confirmSheet("清设备", "清空 " + shortEmail(email) + " 的设备记录？", "清空设备");
        if (!okDev) return;
        var r6 = await callAdmin(AdminPayload.resetDevices(email), token);
        setMsg(r6.message || "设备已清空", true);
      } else if (act === "maxd") {
        var n = await promptMaxDevices(ctx.max_devices);
        if (n == null || !String(n).trim()) return;
        var r7 = await callAdmin(AdminPayload.maxDevices(email, n), token);
        setMsg(r7.message || "已更新设备上限", true); await loadList();
      }
    } catch (e) {
      setMsg(e.message || "操作失败", false);
    }
  }

  function bindUserActs(root) {
    if (!root) return;
    root.addEventListener("click", function (ev) {
      var b = ev.target.closest("[data-act]"); if (!b) return;
      var row = b.closest("[data-email]");
      var email = row && row.getAttribute("data-email");
      if (email) onUserAct(email, b.getAttribute("data-act"), row);
    });
  }

  function bindUi() {
    bindSheetChrome();
    document.querySelectorAll(".admin-tabs [data-tab]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        document.querySelectorAll(".admin-tabs [data-tab]").forEach(function (b) {
          b.classList.remove("active");
          b.setAttribute("aria-selected", "false");
        });
        document.querySelectorAll(".admin-panel").forEach(function (p) { p.classList.remove("active"); });
        btn.classList.add("active");
        btn.setAttribute("aria-selected", "true");
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
    bindUserActs($("users-body"));
    bindUserActs($("users-cards"));
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
        var spec = AdminPayload.create(
          ($("c-user").value || "").trim(),
          $("c-days").value || DEFAULT_DAYS,
          $("c-max").value,
          selectedCreateExams()
        );
        var r = await callAdmin(spec, token);
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

  window.ITCertAdminUI = {
    EXAM_OPTS: EXAM_OPTS,
    DEFAULT_DAYS: DEFAULT_DAYS,
    DEFAULT_MAX_DEVICES: DEFAULT_MAX_DEVICES,
    payload: AdminPayload,
    collectExamValues: collectExamValues,
    examChecksHtml: examChecksHtml,
    renderUsers: renderUsers,
    renderReports: renderReports,
    confirm: function (message, title, label) {
      bindSheetChrome();
      return confirmSheet(title || "请确认", message, label || "确定");
    }
  };

  if (!window.ITCERT_ADMIN_NO_BOOT) {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
    else boot();
  } else if (document.getElementById("admin-overlay")) {
    bindSheetChrome();
  }
})();
