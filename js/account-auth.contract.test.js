/**
 * node js/account-auth.contract.test.js
 * Mocks fetch. Checks: meta is one request, ids/sample failures do not page the bank,
 * upload overwrites without a prior pull, download replaces local storage.
 */
var assert = require("assert");

function Storage() { this._ = {}; }
Storage.prototype.getItem = function (k) { return Object.prototype.hasOwnProperty.call(this._, k) ? this._[k] : null; };
Storage.prototype.setItem = function (k, v) { this._[k] = String(v); };
Storage.prototype.removeItem = function (k) { delete this._[k]; };
Storage.prototype.key = function (i) { return Object.keys(this._)[i] || null; };
Object.defineProperty(Storage.prototype, "length", { get: function () { return Object.keys(this._).length; } });

var ls = new Storage();
var ss = new Storage();
var calls = [];
global.Storage = Storage;
global.localStorage = ls;
global.sessionStorage = ss;
global.window = global;
global.navigator = { userAgent: "test" };
global.document = {
  readyState: "loading",
  documentElement: { classList: { add: function () {} } },
  body: { classList: { add: function () {}, toggle: function () {} }, appendChild: function () {} },
  head: { appendChild: function () {} },
  getElementById: function () { return null; },
  querySelector: function () { return null; },
  addEventListener: function () {},
  createElement: function () { return { style: {}, appendChild: function () {}, setAttribute: function () {}, classList: { add: function () {}, toggle: function () {} } }; },
};
global.confirm = function () { return true; };
global.location = { reload: function () {} };
global.CustomEvent = function (type, init) { this.type = type; this.detail = init && init.detail; };
document.dispatchEvent = function () {};

ls.setItem("itcert_account_session_v1", JSON.stringify({
  access: "tok", refresh: "ref", exp: Date.now() + 3600 * 1000,
  user: { id: "user-1", email: "teng@ai103.local", expires_at: null, exams: null, role: null },
}));

global.__ITCERT_ACCOUNT__ = {
  enabled: true,
  apiBase: "https://example.test",
  anonKey: "anon",
  protectedBanks: true,
  emailDomain: "ai103.local",
  deviceLimit: false,
};
global.__AI103_SUPABASE__ = { url: "https://example.test", anonKey: "anon" };

global.ITCERT_PROGRESS = require("./progress-core.js");
require("./exam-registry.js");

function jsonRes(body, status) {
  return { ok: status >= 200 && status < 300, status: status, text: async function () { return JSON.stringify(body); } };
}
global.fetch = async function (url, opt) {
  calls.push({ url: String(url), method: (opt && opt.method) || "GET" });
  var u = String(url);
  if (u.indexOf("meta=1") >= 0) {
    return jsonRes({ ok: true, mode: "meta", examId: "ai103", version: "v1", total: 3, domains: { plan: 2, genai: 1 }, index: [{ id: "q1", domain: "plan" }, { id: "q2", domain: "plan" }, { id: "q3", domain: "genai" }], questions: [] }, 200);
  }
  if (u.indexOf("ids=") >= 0) {
    return jsonRes({ ok: true, mode: "page", examId: "ai103", total: 3, offset: 0, limit: 50, questions: [{ id: "other" }] }, 200);
  }
  if (u.indexOf("sample=") >= 0) {
    return jsonRes({ ok: true, mode: "page", examId: "ai103", total: 3, offset: 0, limit: 1, questions: [{ id: "q1" }] }, 200);
  }
  if (u.indexOf("user_progress") >= 0 && (opt && opt.method) === "POST") {
    return jsonRes({}, 200);
  }
  if (u.indexOf("user_progress") >= 0) {
    return jsonRes([{ data: { v: 1, exams: { ai103: { p: { answers: { q1: ["A"] }, submitted: { q1: true }, flags: {}, wrongIds: { q9: true }, clearedIds: {} }, pt: 1, last: null, lt: 0, hist: [] } } } }], 200);
  }
  return jsonRes({ ok: false, error: "unexpected" }, 500);
};

require("./account-auth.js");

(async function () {
  var metaCallsBefore = calls.length;
  var meta = await global.AI103Auth.loadExamMeta("ai103");
  assert.strictEqual(meta.total, 3);
  assert.strictEqual(meta.domains.plan, 2);
  assert.strictEqual(meta.index.length, 3);
  var bankCalls = calls.slice(metaCallsBefore).filter(function (c) { return c.url.indexOf("itc-bank") >= 0; });
  assert.strictEqual(bankCalls.length, 1, "meta is a single request");
  assert.ok(bankCalls[0].url.indexOf("offset=0&limit=50") < 0, "meta must not start a full dump");

  var beforeIds = calls.length;
  var threw = false;
  try { await global.AI103Auth.loadExamByIds("ai103", ["q9", "q8"]); } catch (e) {
    threw = true;
    assert.ok(/不会下载整库/.test(e.message));
  }
  assert.strictEqual(threw, true);
  var idCalls = calls.slice(beforeIds).filter(function (c) { return c.url.indexOf("itc-bank") >= 0; });
  assert.strictEqual(idCalls.length, 1, "failed ids request is not followed by paging");

  threw = false;
  try { await global.AI103Auth.loadExamSample("ai103", 30); } catch (e) {
    threw = true;
    assert.ok(/不会下载整库/.test(e.message));
  }
  assert.strictEqual(threw, true);

  ls.setItem("itcert_practice_v1_ai103", JSON.stringify({ answers: {}, submitted: {}, flags: {}, wrongIds: { localOnly: true }, clearedIds: {} }));
  var nBefore = calls.length;
  await global.ITCERT_SYNC.uploadProgress();
  var up = calls.slice(nBefore);
  assert.ok(up.some(function (c) { return c.method === "POST" && c.url.indexOf("user_progress") >= 0; }));
  assert.ok(!up.some(function (c) { return c.method === "GET" && c.url.indexOf("user_progress") >= 0; }), "upload must not pull");

  await global.ITCERT_SYNC.downloadProgress();
  var stored = JSON.parse(ls.getItem("itcert_practice_v1_ai103"));
  assert.deepStrictEqual(stored.answers.q1, ["A"]);
  assert.strictEqual(stored.wrongIds.localOnly, undefined, "download replaces local wrongs");
  assert.strictEqual(stored.wrongIds.q9, true);
  console.log("account-auth contract tests ok");
})().catch(function (e) {
  console.error(e);
  process.exit(1);
});
