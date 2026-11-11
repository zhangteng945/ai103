/**
 * node js/account-auth-perf.test.js
 * Bank channel: skip SCF after 404, remember direct origin, reuse catalog cache.
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
  user: { id: "user-1", email: "teng@ai103.local", expires_at: null, exams: null, role: "admin" },
}));

var SCF = "https://1521755270-k0eh7082k7.ap-hongkong.tencentscf.com";
var DIRECT = "https://paswovhtsoljydywdmvb.supabase.co";

global.__ITCERT_ACCOUNT__ = {
  enabled: true,
  apiBase: SCF,
  anonKey: "anon",
  protectedBanks: true,
  emailDomain: "ai103.local",
  deviceLimit: false,
  banks: { ai103: "ai103/202611011910.js", "dp-700": "dp-700/202611112115.json" },
};
global.__AI103_SUPABASE__ = { url: DIRECT, anonKey: "anon" };
global.ITCERT_PROGRESS = require("./progress-core.js");
require("./exam-registry.js");

function jsonRes(body, status) {
  return { ok: status >= 200 && status < 300, status: status, text: async function () { return JSON.stringify(body); } };
}
function examOf(url) {
  var m = /[?&]exam=([^&]+)/.exec(String(url));
  return m ? decodeURIComponent(m[1]) : "";
}
global.fetch = async function (url, opt) {
  calls.push({ url: String(url), method: (opt && opt.method) || "GET" });
  var u = String(url);
  if (u.indexOf(SCF) === 0 && u.indexOf("/functions/v1/itc-bank") >= 0) {
    return jsonRes({ msg: "not allowed" }, 404);
  }
  if (u.indexOf(DIRECT) === 0 && u.indexOf("meta=1") >= 0) {
    var id = examOf(u);
    return jsonRes({ ok: true, mode: "meta", examId: id, version: "v-test", total: id === "dp-700" ? 161 : 3, domains: { plan: 1 }, index: [{ id: "q1", domain: "plan" }], questions: [] }, 200);
  }
  return jsonRes({ ok: false, error: "unexpected " + u }, 500);
};

require("./account-auth.js");

(async function () {
  var n0 = calls.length;
  var meta = await global.AI103Auth.loadExamMeta("ai103");
  assert.strictEqual(meta.total, 3);
  var first = calls.slice(n0).filter(function (c) { return c.url.indexOf("itc-bank") >= 0; });
  assert.ok(first.some(function (c) { return c.url.indexOf(SCF) === 0; }), "first load probes SCF");
  assert.ok(first.some(function (c) { return c.url.indexOf(DIRECT) === 0; }), "first load also hits direct (race/fallback)");

  var stored = JSON.parse(ss.getItem("itcert_bank_origin_v1"));
  assert.strictEqual(stored.origin, DIRECT);
  assert.strictEqual(stored.proxyFailed, true);

  var n1 = calls.length;
  var meta2 = await global.AI103Auth.loadExamMeta("dp-700");
  assert.strictEqual(meta2.total, 161);
  var second = calls.slice(n1).filter(function (c) { return c.url.indexOf("itc-bank") >= 0; });
  assert.strictEqual(second.length, 1, "remembered origin skips SCF on later exams");
  assert.ok(second[0].url.indexOf(DIRECT) === 0);

  var cache = JSON.parse(ls.getItem("itcert_bank_meta_v1"));
  assert.ok(cache["user-1::ai103"]);
  assert.strictEqual(cache["user-1::ai103"].pin, "ai103/202611011910.js");
  assert.strictEqual(cache["user-1::dp-700"].meta.total, 161);

  console.log("account-auth-perf.test.js ok");
})().catch(function (e) {
  console.error(e);
  process.exit(1);
});
