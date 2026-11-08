/**
 * Browser transport for POST /functions/v1/itc-ingest.
 * The Hong Kong proxy allowlist does not include this function and answers 404.
 * The deployed function is on the Supabase host, so that host is tried first.
 * A response is healthy only when it is the ingest contract (ok:true), never merely HTTP 200.
 */
(function (root) {
  "use strict";

  function trimBase(url) {
    return String(url || "").replace(/\/+$/, "");
  }

  function endpointOrder(direct, proxy) {
    var out = [];
    [direct, proxy].forEach(function (raw) {
      var url = trimBase(raw);
      if (url && out.indexOf(url) < 0) out.push(url);
    });
    return out;
  }

  function shouldRetry(err) {
    if (!err) return false;
    if (err.status === 401 || err.status === 403) return false;
    if (err.status === 404 || err.status === 502) return true;
    var msg = String(err.message || "");
    if (/not allowed|upstream/i.test(msg)) return true;
    if (err.status == null) return true;
    return false;
  }

  function isIngestSuccess(data) {
    return !!(data && data.ok === true);
  }

  function isRegistryReady(data) {
    return !!(data && data.ok === true && data.family === "quizplay-io" && data.scheduling === "disabled" && data.grantsAccess === false);
  }

  function registryText(data, endpoint, proxyBase) {
    if (!isRegistryReady(data)) return "采集端点有响应，但不是已部署的题库采集服务。采集、发布和回滚都不可用。";
    var text = "采集服务可连接。按名称在允许的公开组织里查找并核验清单。没有自动排程。找不到来源不会编造题目，也不会改学员权限或当前生效版本。";
    if (proxyBase && endpoint && trimBase(endpoint) !== trimBase(proxyBase)) {
      text += "当前走直连函数，因为站点代理未放行该采集入口。";
    }
    text += "全网检索是否启用以解析来源的结果为准。";
    return text;
  }

  function webLines(data) {
    var web = data && data.web;
    if (!web) return [];
    var lines = [];
    if (web.enabled === false) lines.push(web.message || "全网检索未启用。");
    else lines.push("全网检索：" + (web.message || web.status || ""));
    if (web.quotaNote) lines.push(web.quotaNote);
    if (web.rightsNote) lines.push(web.rightsNote);
    return lines;
  }

  function callOrder(endpoints, remembered) {
    var first = trimBase(remembered);
    var rest = (endpoints || []).map(trimBase).filter(Boolean);
    var out = [];
    if (first && rest.indexOf(first) >= 0) out.push(first);
    rest.forEach(function (url) { if (out.indexOf(url) < 0) out.push(url); });
    return out;
  }

  async function postIngest(opts) {
    var list = callOrder(opts.endpoints, opts.remembered);
    var last;
    for (var i = 0; i < list.length; i++) {
      try {
        var data = await opts.request(list[i], opts.body);
        if (!isIngestSuccess(data)) {
          var err = new Error("采集端点返回的内容不是已部署的采集服务");
          err.status = 502;
          err.data = data;
          throw err;
        }
        return { data: data, endpoint: list[i] };
      } catch (e) {
        last = e;
        if (i === list.length - 1 || !shouldRetry(e)) throw e;
      }
    }
    throw last || new Error("采集服务不可用");
  }

  var api = {
    endpointOrder: endpointOrder,
    shouldRetry: shouldRetry,
    isIngestSuccess: isIngestSuccess,
    isRegistryReady: isRegistryReady,
    registryText: registryText,
    webLines: webLines,
    postIngest: postIngest,
  };
  root.ITCERTAdminIngest = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(typeof window !== "undefined" ? window : globalThis);
