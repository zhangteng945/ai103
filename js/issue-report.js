/**
 * Practice-page issue reports: POST /rest/v1/issue_reports with apiBase → supabase.co fallback
 * (same rules as account-auth / admin.js). Loaded before app.js.
 */
(function (global) {
  "use strict";

  var DIRECT_DEFAULT = "https://paswovhtsoljydywdmvb.supabase.co";

  function shouldFallbackProxy(e) {
    return !!(e && e.status !== 401 && e.status !== 403 && (
      e.status === 404 || e.status === 502 || e.status === 503 || e.network ||
      /not allowed|upstream/i.test(String(e.message || ""))
    ));
  }

  function questionLabel(payload, qid) {
    var raw = payload && typeof payload === "object" ? payload.num : null;
    if (raw != null && String(raw).trim() !== "") {
      var n = String(raw).trim();
      return /^第/.test(n) ? n : ("第" + n + "题");
    }
    return String(qid || "");
  }

  function resultMessage(result) {
    result = result || {};
    if (result.ok) return "已提交";
    if (result.copied) {
      if (result.offline || result.reason === "not-logged-in") {
        return "未登录，已仅保存在本机并复制，请发给 星火。";
      }
      return "云端提交失败，已仅保存在本机并复制，请发给 星火。";
    }
    if (result.offline || result.reason === "not-logged-in") {
      return "未登录，已仅保存在本机。请复制报错内容发给 星火。";
    }
    return "云端提交失败，已仅保存在本机。请复制报错内容发给 星火。";
  }

  async function postJson(url, headers, body) {
    var res;
    try {
      res = await fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
        cache: "no-store"
      });
    } catch (e) {
      var net = e instanceof Error ? e : new Error(String(e));
      net.network = true;
      throw net;
    }
    var text = "";
    try { text = await res.text(); } catch (e2) { text = ""; }
    var data = null;
    try { data = text ? JSON.parse(text) : null; } catch (e3) { data = null; }
    if (!res.ok) {
      var msg = (data && (data.msg || data.message || data.error)) || ("HTTP " + res.status);
      var err = new Error(typeof msg === "string" ? msg : JSON.stringify(msg));
      err.status = res.status;
      err.data = data;
      throw err;
    }
    return { ok: true, data: data, status: res.status };
  }

  async function postIssueReport(opts) {
    opts = opts || {};
    var apiBase = String(opts.apiBase || "").replace(/\/+$/, "");
    var direct = String(opts.directBase || DIRECT_DEFAULT).replace(/\/+$/, "");
    var path = "/rest/v1/issue_reports";
    var headers = {
      apikey: opts.anonKey || "",
      Authorization: "Bearer " + (opts.access || ""),
      "Content-Type": "application/json",
      Prefer: "return=minimal"
    };
    var body = {
      user_id: opts.userId,
      exam_id: String(opts.examId || ""),
      qid: String(opts.qid || ""),
      note: String(opts.note || "").slice(0, 500),
      payload: opts.payload && typeof opts.payload === "object" ? opts.payload : {}
    };
    if (!apiBase && !direct) return { ok: false, error: new Error("未配置接口地址") };
    if (apiBase) {
      try {
        await postJson(apiBase + path, headers, body);
        return { ok: true, via: "proxy" };
      } catch (e) {
        if (direct && direct !== apiBase && shouldFallbackProxy(e)) {
          try {
            await postJson(direct + path, headers, body);
            return { ok: true, via: "direct" };
          } catch (e2) {
            return { ok: false, error: e2, status: e2 && e2.status, via: "direct" };
          }
        }
        return { ok: false, error: e, status: e && e.status, via: "proxy" };
      }
    }
    try {
      await postJson(direct + path, headers, body);
      return { ok: true, via: "direct" };
    } catch (e) {
      return { ok: false, error: e, status: e && e.status, via: "direct" };
    }
  }

  function showStatus(text, ok, mount) {
    var host = mount || document.getElementById("q-extras") || document.body;
    if (!host) return;
    var el = document.getElementById("issue-report-status");
    if (!el) {
      el = document.createElement("div");
      el.id = "issue-report-status";
      el.setAttribute("role", "status");
    }
    el.className = "issue-report-status " + (ok ? "ok" : "err");
    el.textContent = text || "";
    el.hidden = !text;
    if (el.parentNode !== host) host.appendChild(el);
  }

  global.ITCERT_ISSUE_REPORT = {
    shouldFallbackProxy: shouldFallbackProxy,
    questionLabel: questionLabel,
    resultMessage: resultMessage,
    postIssueReport: postIssueReport,
    showStatus: showStatus,
    DIRECT_DEFAULT: DIRECT_DEFAULT
  };
})(typeof window !== "undefined" ? window : globalThis);
