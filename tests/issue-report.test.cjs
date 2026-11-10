const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const src = fs.readFileSync(path.join(__dirname, '../js/issue-report.js'), 'utf8');

function load() {
  const win = { fetch: null };
  vm.runInNewContext(src, win);
  return win;
}

function mockFetch(handler) {
  return async function (url, init) {
    const res = await handler(String(url), init || {});
    const status = res.status || 200;
    const body = res.body == null ? "" : (typeof res.body === "string" ? res.body : JSON.stringify(res.body));
    return {
      ok: status >= 200 && status < 300,
      status,
      text: async () => body
    };
  };
}

test('代理 404/not allowed/网络失败才回退直连；401/403 不回退', async () => {
  const win = load();
  const api = win.ITCERT_ISSUE_REPORT;
  assert.equal(api.shouldFallbackProxy({ status: 404, message: "not allowed" }), true);
  assert.equal(api.shouldFallbackProxy({ status: 502, message: "upstream" }), true);
  assert.equal(api.shouldFallbackProxy({ network: true, message: "failed to fetch" }), true);
  assert.equal(api.shouldFallbackProxy({ status: 401, message: "no auth" }), false);
  assert.equal(api.shouldFallbackProxy({ status: 403, message: "forbidden" }), false);

  const calls = [];
  win.fetch = mockFetch(async (url) => {
    calls.push(url);
    if (url.includes("tencentscf.com")) return { status: 404, body: { msg: "not allowed" } };
    if (url.includes("supabase.co")) return { status: 201, body: {} };
    return { status: 500, body: { message: "no" } };
  });
  const r = await api.postIssueReport({
    apiBase: "https://1521755270-k0eh7082k7.ap-hongkong.tencentscf.com",
    directBase: "https://paswovhtsoljydywdmvb.supabase.co",
    anonKey: "anon",
    access: "tok",
    userId: "u1",
    examId: "dva-c02",
    qid: "dva-c02-pdf-q1",
    note: "测试",
    payload: { num: 1 }
  });
  assert.equal(r.ok, true);
  assert.equal(r.via, "direct");
  assert.equal(calls.length, 2);
  assert.match(calls[0], /tencentscf\.com\/rest\/v1\/issue_reports/);
  assert.match(calls[1], /supabase\.co\/rest\/v1\/issue_reports/);

  calls.length = 0;
  win.fetch = mockFetch(async (url) => {
    calls.push(url);
    return { status: 401, body: { message: "no" } };
  });
  const denied = await api.postIssueReport({
    apiBase: "https://proxy.example",
    directBase: "https://paswovhtsoljydywdmvb.supabase.co",
    anonKey: "anon", access: "tok", userId: "u1", examId: "ai103", qid: "q001", note: "x"
  });
  assert.equal(denied.ok, false);
  assert.equal(calls.length, 1);
});

test('提交结果文案：成功为已提交，失败如实说明仅本机', () => {
  const api = load().ITCERT_ISSUE_REPORT;
  assert.equal(api.resultMessage({ ok: true }), "已提交");
  assert.equal(api.resultMessage({ ok: false, copied: true }), "云端提交失败，已仅保存在本机并复制，请发给 星火。");
  assert.equal(api.resultMessage({ ok: false, copied: true, reason: "not-logged-in" }), "未登录，已仅保存在本机并复制，请发给 星火。");
  assert.match(api.resultMessage({ ok: false, copied: false }), /已仅保存在本机/);
});

test('题号优先用 payload.num，缺失时回退 qid', () => {
  const api = load().ITCERT_ISSUE_REPORT;
  assert.equal(api.questionLabel({ num: 1 }, "dva-c02-pdf-q1"), "第1题");
  assert.equal(api.questionLabel({ num: "第7题" }, "x"), "第7题");
  assert.equal(api.questionLabel({}, "q001"), "q001");
  assert.equal(api.questionLabel(null, "az305-pdf-t1-q1"), "az305-pdf-t1-q1");
});
