/**
 * node js/bank-web-discovery.test.mjs
 * Fixture provider only. Does not call api.tavily.com.
 */
import assert from "node:assert";
import {
  collectVerifiedQuizUrl,
  createQuotaStore,
  discoverWithOptionalWeb,
  markSearchBillingBlocked,
  ourQuotaPeriod,
  reserveSearchCredits,
  tavilySearch,
  tavilySearchBody,
  WEB_LIMITS,
} from "../supabase/functions/_shared/bank-web-discovery.mjs";

const SECRET = "tvly-test-secret-value";
assert.strictEqual(ourQuotaPeriod(new Date("2026-11-08T00:00:00Z")), "2026-11");
const body = tavilySearchBody("az-305 practice questions json");
assert.strictEqual(body.search_depth, "basic");
assert.strictEqual(body.include_answer, false);
assert.strictEqual(body.include_raw_content, false);
assert.ok(!("max_age_hours" in body));
assert.ok(!JSON.stringify(body).includes(SECRET));

function manifest(title, slug) {
  return { title: title, slug: slug, questions: ["questions/01.json"] };
}
function question(id) {
  return { id: id, question: "fixture stem " + id, options: [{ text: "one", correct: true }, { text: "two", correct: false }] };
}
const pages = {
  "https://quizzes.example/az-305/quiz.json": manifest("AZ-305 practice", "az-305-practice"),
  "https://quizzes.example/az-305/questions/01.json": question("az"),
  "https://notes.example/ai-103/quiz.json": manifest("AI-103 practice", "ai-103-practice"),
  "https://notes.example/ai-103/questions/01.json": question("ai"),
  "https://shop.example/dp-900/quiz.json": manifest("DP-900 practice", "dp-900-practice"),
  "https://blog.example/dp-700-notes": "<html><h1>DP-700 notes</h1><p>not a question bank</p></html>",
  "https://locked.example/dop-c02": "<html>DOP-C02 login required captcha</html>",
};
function jsonResponse(status, obj, headers) {
  const bytes = new TextEncoder().encode(typeof obj === "string" ? obj : JSON.stringify(obj));
  return {
    status: status,
    headers: { get: (name) => (headers && headers[name]) || "" },
    body: { getReader() { let done = false; return { async read() { if (done) return { done: true }; done = true; return { done: false, value: bytes }; }, async cancel() {} }; } },
    arrayBuffer: async () => bytes,
  };
}
const byCode = {
  "az-305": [
    { url: "https://quizzes.example/az-305/quiz.json", title: "AZ-305 practice json" },
    { url: "http://169.254.169.254/latest/meta-data", title: "metadata" },
    { url: "https://redirect.example/start", title: "AZ-305 mirror" },
  ],
  "ai-103": [{ url: "https://notes.example/ai-103/quiz.json", title: "AI-103 practice json" }],
  "dp-700": [
    { url: "https://shop.example/dp-900/quiz.json", title: "DP-900 practice" },
    { url: "https://blog.example/dp-700-notes", title: "DP-700 study notes" },
  ],
  "dop-c02": [{ url: "https://locked.example/dop-c02", title: "DOP-C02 login required" }],
};
let tavilyCalls = 0;
let privateFetches = 0;
let outsideSearch = 0;
async function fetchImpl(url, init) {
  const target = String(url);
  if (target !== "https://api.tavily.com/search") outsideSearch++;
  if (target.indexOf("127.0.0.1") >= 0 || target.indexOf("169.254.169.254") >= 0) {
    privateFetches++;
    throw new Error("private fetch " + SECRET);
  }
  if (target === "https://api.tavily.com/search") {
    tavilyCalls++;
    assert.ok(String(init.headers.Authorization).includes(SECRET));
    assert.ok(!String(init.body).includes(SECRET));
    const query = JSON.parse(init.body).query;
    const code = Object.keys(byCode).find((item) => query.indexOf(item) >= 0);
    return jsonResponse(200, { results: byCode[code] || [] });
  }
  if (target === "https://redirect.example/start") {
    return jsonResponse(302, "", { location: "http://127.0.0.1/secret" });
  }
  const hit = pages[target];
  if (!hit) return jsonResponse(404, {});
  const type = typeof hit === "string" ? "text/html" : "application/json";
  return jsonResponse(200, hit, { "content-type": type });
}
async function resolveHost(host) {
  if (host === "169.254.169.254" || host === "127.0.0.1") return [host];
  return ["1.1.1.1"];
}
async function orgFetch(url) {
  const u = String(url);
  if (u.indexOf("/orgs/quizplay-io/repos") >= 0) {
    return jsonResponse(200, [
      { name: "quiz-player-quizzes-az-305-question-set-1", description: "AZ-305", license: { spdx_id: "AGPL-3.0" } },
      { name: "quiz-player-quizzes-ai-103-question-set-1", description: "AI-103", license: { spdx_id: "AGPL-3.0" } },
    ]);
  }
  if (u.endsWith("/quiz.json")) {
    const code = u.indexOf("ai-103") >= 0 ? "ai-103" : "az-305";
    return jsonResponse(200, manifest(code, code + "-org"));
  }
  if (u.endsWith("/questions/01.json")) return jsonResponse(200, question("org"));
  if (u.endsWith("/README.md")) return jsonResponse(200, "These questions are AI-generated.");
  if (u.indexOf("/commits/") >= 0) return jsonResponse(200, { sha: "a".repeat(40), commit: { committer: { date: "2026-03-11T15:36:13Z" } } });
  return jsonResponse(404, {});
}
function deps(quota) {
  return { apiKey: SECRET, quota: quota, fetchImpl: fetchImpl, resolveHost: resolveHost, orgDeps: { fetchImpl: orgFetch, resolveHost: resolveHost, sleep: async () => {} } };
}
const quota = createQuotaStore({ limit: 8, period: "2026-11" });
const az = await discoverWithOptionalWeb("AZ305", deps(quota));
const ai = await discoverWithOptionalWeb("AI-103", deps(quota));
const dp = await discoverWithOptionalWeb("DP700", deps(quota));
const dop = await discoverWithOptionalWeb("DOP-C02", deps(quota));
const azHit = az.web.candidates.find((c) => c.url.indexOf("quizzes.example") >= 0);
assert.strictEqual(azHit.selectable, false);
assert.strictEqual(azHit.extraction, "pending-adapter");
assert.strictEqual(azHit.collected, false);
assert.ok(azHit.message.includes("不会抓取任意网页"));
assert.strictEqual(az.org.origin, "quizplay-org");
assert.ok(az.org.label.includes("不是全网搜索"));
assert.strictEqual(ai.web.candidates[0].extraction, "pending-adapter");
assert.strictEqual(ai.web.candidates[0].examMatch, "exact");
assert.strictEqual(ai.web.candidates[0].selectable, false);
assert.strictEqual(dp.web.candidates.find((c) => c.url.indexOf("dp-900") >= 0).examMatch, "mismatch");
assert.strictEqual(dp.web.candidates.find((c) => c.url.indexOf("dp-900") >= 0).selectable, false);
assert.strictEqual(dp.web.candidates.find((c) => c.url.indexOf("blog.example") >= 0).extraction, "pending-adapter");
assert.strictEqual(dp.web.candidates.find((c) => c.url.indexOf("blog.example") >= 0).collected, false);
assert.strictEqual(dop.web.candidates[0].status, "unsupported");
assert.strictEqual(dop.web.candidates[0].extraction, "pending-adapter");
assert.strictEqual(dop.web.candidates[0].collected, false);
assert.strictEqual(az.web.candidates.find((c) => c.url.indexOf("169.254") >= 0).selectable, false);
assert.strictEqual(az.web.candidates.find((c) => c.url.indexOf("redirect.example") >= 0).selectable, false);
assert.strictEqual(privateFetches, 0);
assert.strictEqual(outsideSearch, 0);
assert.ok(!JSON.stringify({ az, ai, dp, dop }).includes(SECRET));
assert.ok(!JSON.stringify({ az, ai, dp, dop }).includes("fixture stem"));

const before = tavilyCalls;
const disabled = await discoverWithOptionalWeb("DP-700", { apiKey: "", quota: quota, fetchImpl: fetchImpl, resolveHost: resolveHost, orgDeps: deps(quota).orgDeps });
assert.strictEqual(disabled.web.enabled, false);
assert.strictEqual(disabled.web.network, false);
assert.ok(disabled.web.message.includes("不是全网搜索"));
assert.strictEqual(tavilyCalls, before);

const one = createQuotaStore({ limit: 1, period: "2026-11" });
const pair = await Promise.all([reserveSearchCredits(one, 1), reserveSearchCredits(one, 1)]);
assert.strictEqual(Number(pair[0].ok) + Number(pair[1].ok), 1);
assert.strictEqual(one.reserved, 1);
let zeroCalls = 0;
const zero = await tavilySearch({ apiKey: SECRET, code: "AZ-305", quota: createQuotaStore({ limit: 0, period: "2026-11" }), fetchImpl: async () => { zeroCalls++; throw new Error(SECRET); } });
assert.strictEqual(zeroCalls, 0);
assert.strictEqual(zero.network, false);
assert.ok(zero.message.includes("未发起新的计费请求"));
assert.ok(!JSON.stringify(zero).includes(SECRET));

let rateCalls = 0;
const rateQuota = createQuotaStore({ limit: 1, period: "2026-11" });
const rated = await tavilySearch({
  apiKey: SECRET,
  code: "AI-103",
  quota: rateQuota,
  fetchImpl: async () => {
    rateCalls++;
    return jsonResponse(429, {}, { "retry-after": "1" });
  },
});
assert.strictEqual(rateCalls, 1);
assert.strictEqual(rateQuota.reserved, 1);
assert.strictEqual(rated.status === "rate_limited" || rated.status === "quota_exhausted", true);

const blocked = createQuotaStore({ limit: 5, period: "2026-11" });
let billCalls = 0;
await tavilySearch({
  apiKey: SECRET,
  code: "AZ305",
  quota: blocked,
  fetchImpl: async () => { billCalls++; return jsonResponse(432, {}); },
});
assert.strictEqual(billCalls, 1);
assert.strictEqual(blocked.billingBlocked, true);
const nextMonth = createQuotaStore({ limit: 5, period: "2026-12", billingBlocked: true, billingReason: blocked.billingReason });
const still = await reserveSearchCredits(nextMonth, 1);
assert.strictEqual(still.reason, "billing_blocked");
markSearchBillingBlocked(blocked, "paygo_limited");
const unavailable = await tavilySearch({ apiKey: SECRET, code: "DOP-C02", quota: { available: false }, fetchImpl: async () => { throw new Error(SECRET); } });
assert.strictEqual(unavailable.network, false);
assert.strictEqual(unavailable.status, "quota_unavailable");
assert.ok(!JSON.stringify(unavailable).includes(SECRET));

let refusedFetches = 0;
const refused = await collectVerifiedQuizUrl("https://quizzes.example/az-305/quiz.json", "AZ-305", { fetchImpl: async () => { refusedFetches++; throw new Error("fetched " + SECRET); }, resolveHost: async () => ["127.0.0.1"] });
assert.strictEqual(refused.collected, false);
assert.strictEqual(refused.fetched, false);
assert.strictEqual(refusedFetches, 0);
assert.ok(refused.error.includes("没有向外抓取"));
assert.ok(!JSON.stringify(refused).includes(SECRET));

let followed = 0;
const redirected = await tavilySearch({
  apiKey: SECRET,
  code: "AZ-305",
  quota: createQuotaStore({ limit: 2, period: "2026-11" }),
  fetchImpl: async (url) => {
    if (String(url) !== "https://api.tavily.com/search") { followed++; throw new Error("followed " + SECRET); }
    return { status: 302, headers: { get: () => "http://169.254.169.254/latest/meta-data" }, body: { getReader() { return { async read() { return { done: true }; }, async cancel() {} }; } } };
  },
});
assert.strictEqual(followed, 0);
assert.strictEqual(redirected.ok, false);
assert.ok(redirected.message.includes("没有跟随"));
assert.ok(!JSON.stringify(redirected).includes(SECRET));

let oversizedCancelled = false;
const oversized = await tavilySearch({
  apiKey: SECRET,
  code: "AZ-305",
  quota: createQuotaStore({ limit: 2, period: "2026-11" }),
  fetchImpl: async () => ({
    status: 200,
    headers: { get: () => "" },
    body: { getReader() { return { async read() { return { done: false, value: new Uint8Array(WEB_LIMITS.maxFileBytes + 1) }; }, async cancel() { oversizedCancelled = true; } }; } },
  }),
});
assert.strictEqual(oversized.status, "timeout");
assert.strictEqual(oversizedCancelled, true);
assert.ok(oversized.message.includes("响应过大"));

let hungCancelled = false;
const hung = await tavilySearch({
  apiKey: SECRET,
  code: "AZ-305",
  timeoutMs: 40,
  quota: createQuotaStore({ limit: 2, period: "2026-11" }),
  fetchImpl: async () => ({
    status: 200,
    headers: { get: () => "" },
    body: { getReader() { return { read() { return new Promise(() => {}); }, async cancel() { hungCancelled = true; } }; } },
  }),
});
assert.strictEqual(hung.status, "timeout");
assert.strictEqual(hungCancelled, true);
assert.ok(hung.message.includes("超时"));

console.log("bank-web-discovery tests ok");
