/**
 * node js/admin-ingest-client.test.js
 * The Hong Kong proxy 404s /functions/v1/itc-ingest. Health requires the registry contract.
 */
var assert = require("assert");
var client = require("./admin-ingest-client.js");

var direct = "https://direct.example";
var proxy = "https://proxy.example";
assert.deepStrictEqual(client.endpointOrder(direct, proxy), [direct, proxy]);
assert.deepStrictEqual(client.endpointOrder(direct, direct), [direct]);

var registry = { ok: true, family: "quizplay-io", scheduling: "disabled", grantsAccess: false };
assert.strictEqual(client.isRegistryReady(registry), true);
assert.strictEqual(client.isRegistryReady({ ok: true, msg: "采集端点返回 HTTP 404" }), false);
assert.ok(client.registryText({ ok: true }).indexOf("可连接") < 0);

function fail(status, message) {
  var err = new Error(message || ("HTTP " + status));
  err.status = status;
  throw err;
}

async function run(map) {
  var calls = [];
  var result = await client.postIngest({
    endpoints: client.endpointOrder(direct, proxy),
    body: { action: "registry" },
    request: async function (base, body) {
      calls.push(base + " " + body.action);
      if (map[base]) return map[base](body);
      fail(404, "not allowed");
    },
  });
  return { result: result, calls: calls };
}

(async function () {
  var directOnly = await run({
    [direct]: function () { return registry; },
  });
  assert.deepStrictEqual(directOnly.calls, [direct + " registry"]);
  assert.strictEqual(directOnly.result.endpoint, direct);
  assert.strictEqual(client.isRegistryReady(directOnly.result.data), true);
  assert.ok(client.registryText(directOnly.result.data, direct, proxy).indexOf("直连函数") >= 0);

  var proxyBlocked = await run({
    [direct]: function () { return registry; },
    [proxy]: function () { fail(404, "not allowed"); },
  });
  assert.deepStrictEqual(proxyBlocked.calls, [direct + " registry"]);

  var fallback = await run({
    [proxy]: function () { return registry; },
  });
  assert.deepStrictEqual(fallback.calls, [direct + " registry", proxy + " registry"]);
  assert.strictEqual(fallback.result.endpoint, proxy);

  var bogusCalls = [];
  await assert.rejects(client.postIngest({
    endpoints: [direct],
    body: { action: "registry" },
    request: async function (base) {
      bogusCalls.push(base);
      return { ok: false, msg: "采集端点返回 HTTP 404" };
    },
  }), /不是已部署的采集服务/);
  assert.deepStrictEqual(bogusCalls, [direct]);
  assert.ok(client.registryText({ msg: "采集端点返回 HTTP 404" }).indexOf("可连接") < 0);

  var authCalls = [];
  await assert.rejects(client.postIngest({
    endpoints: [direct, proxy],
    body: { action: "resolve", code: "AZ305" },
    request: async function () {
      authCalls.push("x");
      fail(401, "登录无效或已过期");
    },
  }), /登录无效/);
  assert.strictEqual(authCalls.length, 1);

  var remembered = [];
  await client.postIngest({
    endpoints: [direct, proxy],
    remembered: direct,
    body: { action: "resolve", code: "AZ305" },
    request: async function (base, body) {
      remembered.push(base + " " + body.action);
      return {
        ok: true,
        code: "az-305",
        web: {
          enabled: false,
          network: false,
          message: "全网检索未启用：服务器没有配置检索密钥。若下面另有结果，只来自已标注的 quizplay-io 组织回退，不是全网搜索。",
        },
        org: { origin: "quizplay-org", label: "quizplay-io 组织回退，不是全网搜索" },
        candidates: [{ repo: "quizplay-io/quiz-player-quizzes-az-305-question-set-1", status: "ready" }],
      };
    },
  });
  assert.deepStrictEqual(remembered, [direct + " resolve"]);
  var lines = client.webLines({
    web: {
      enabled: false,
      message: "全网检索未启用：服务器没有配置检索密钥。若下面另有结果，只来自已标注的 quizplay-io 组织回退，不是全网搜索。",
    },
  });
  assert.ok(lines[0].indexOf("未启用") >= 0);
  assert.ok(lines[0].indexOf("不是全网搜索") >= 0);
  assert.ok(lines[0].indexOf("全网检索：") < 0);

  console.log("admin-ingest-client tests ok");
})().catch(function (err) {
  console.error(err);
  process.exit(1);
});
