/**
 * Optional whole-web search preview. Search output is not questions and is not fetched.
 * This module does not fetch arbitrary pages. Collection stays on the quizplay-io allowlist.
 * The provider key is supplied by the caller. This module never reads ambient secrets.
 * Tavily terms do not clearly allow us to store Output, and URLs/titles are Output too.
 */
import {
  discoverExamSources,
  normalizeExamCode,
  readBoundedBody,
} from "./bank-version-core.mjs";

export const WEB_SEARCH_ENDPOINT = "https://api.tavily.com/search";
export const OUR_QUOTA_NOTE = "本站用量周期是我们自己的计数周期，不等于供应商账单周期。供应商每月免费额度是整个账号共享的，本站计数不能保证供应商仍有余额。";
export const RIGHTS_NOTE = "供应商条款把链接和标题也算作输出，没有写清能否保存。本次只在预览中返回，选定来源前不写入题库版本。只保存网址也不能消除这份权利不确定。";
export const SEARCH_NOT_QUESTIONS = "检索结果不是题目，也不能证明题库最新或完整。";

export const WEB_LIMITS = Object.freeze({
  maxResults: 5,
  timeoutMs: 8000,
  maxRedirects: 2,
  maxFileBytes: 262144,
  maxProbeFiles: 2,
  retryAfterCapSeconds: 2,
});

export function ourQuotaPeriod(now = new Date()) {
  const d = now instanceof Date ? now : new Date(now);
  if (Number.isNaN(d.getTime())) throw new Error("用量周期无效");
  return d.toISOString().slice(0, 7);
}

export function createQuotaStore(opts = {}) {
  return {
    limit: opts.limit == null ? 20 : opts.limit,
    period: opts.period || ourQuotaPeriod(),
    reserved: opts.reserved || 0,
    billingBlocked: !!opts.billingBlocked,
    billingReason: opts.billingReason || null,
    available: opts.available !== false,
    queue: Promise.resolve(),
  };
}

export function reserveSearchCredits(store, n = 1) {
  if (!store || store.available === false) {
    return Promise.resolve({ ok: false, reason: "quota_unavailable", reserved: 0, remaining: 0 });
  }
  const amount = n === 1 ? 1 : NaN;
  const run = store.queue.then(() => {
    if (amount !== 1) return { ok: false, reason: "reserve_amount", reserved: store.reserved, remaining: Math.max(0, store.limit - store.reserved) };
    if (store.billingBlocked) return { ok: false, reason: "billing_blocked", reserved: store.reserved, remaining: Math.max(0, store.limit - store.reserved) };
    if (store.reserved + 1 > store.limit) return { ok: false, reason: "quota_exhausted", reserved: store.reserved, remaining: Math.max(0, store.limit - store.reserved) };
    store.reserved += 1;
    return { ok: true, reason: "reserved", reserved: store.reserved, remaining: store.limit - store.reserved };
  });
  store.queue = run.then(() => {}, () => {});
  return run;
}

export function markSearchBillingBlocked(store, reason) {
  if (!store) return;
  store.billingBlocked = true;
  store.billingReason = reason || "billing_blocked";
}

export function redactSecrets(text, secrets) {
  let out = String(text == null ? "" : text);
  (secrets || []).forEach((secret) => {
    if (secret) out = out.split(String(secret)).join("[redacted]");
  });
  return out;
}

export function tavilySearchBody(query) {
  return {
    query: String(query || "").slice(0, 180),
    search_depth: "basic",
    topic: "general",
    max_results: WEB_LIMITS.maxResults,
    chunks_per_source: 1,
    include_answer: false,
    include_raw_content: false,
    include_images: false,
  };
}

function disabledWeb(code) {
  return {
    ok: false,
    enabled: false,
    configured: false,
    status: "disabled",
    code: code || null,
    collected: false,
    network: false,
    message: "全网检索未启用：服务器没有配置检索密钥。若下面另有结果，只来自已标注的 quizplay-io 组织回退，不是全网搜索。",
    quotaNote: OUR_QUOTA_NOTE,
    rightsNote: RIGHTS_NOTE,
    candidates: [],
  };
}

function providerError(status, retryAfter) {
  if (status === 401) return { status: "unauthorized", retry: false, billing: false, message: "检索密钥无效或缺失（401）。没有重试，也没有改用付费深度。" };
  if (status === 429) return { status: "rate_limited", retry: true, billing: false, retryAfter: retryAfter, message: "检索请求过于频繁（429）。" };
  if (status === 432) return { status: "plan_limited", retry: false, billing: true, message: "检索被供应商以套餐上限拒绝（432）。本站不会在下个自然月自动恢复，也没有自动升级套餐。" };
  if (status === 433) return { status: "paygo_limited", retry: false, billing: true, message: "检索被供应商以按量上限拒绝（433）。本站不会在下个自然月自动恢复，也没有改用付费额度。" };
  if (status === 434) return { status: "flex_limited", retry: false, billing: false, message: "供应商临时容量不足（434）。本次没有设置付费抓取参数，也没有自动改用更高档。" };
  return { status: "provider_error", retry: false, billing: false, message: "检索服务返回错误（" + status + "）。没有无限重试。" };
}

export async function tavilySearch(opts) {
  const key = opts && opts.apiKey ? String(opts.apiKey) : "";
  const code = normalizeExamCode(opts && opts.code);
  if (!key) return disabledWeb(code);
  const quota = opts.quota;
  const secrets = [key];
  const calls = opts.calls || [];
  async function oneAttempt() {
    const reserved = opts.reserve ? await opts.reserve() : await reserveSearchCredits(quota, 1);
    if (!reserved.ok) {
      return { ok: false, enabled: true, configured: true, status: reserved.reason, code: code, collected: false, network: false, message: reserved.reason === "quota_exhausted" ? "本站检索额度已用完。" + OUR_QUOTA_NOTE + "未发起新的计费请求。" : (reserved.reason === "billing_blocked" ? "检索此前已被供应商以套餐或按量上限拒绝。本站不会按自然月自动恢复。" : "用量记录不可用，已停止检索，没有向供应商发起请求。"), quotaNote: OUR_QUOTA_NOTE, rightsNote: RIGHTS_NOTE, candidates: [] };
    }
    const ctl = typeof AbortController === "function" ? new AbortController() : null;
    const timer = setTimeout(() => { if (ctl) ctl.abort(); }, opts.timeoutMs || WEB_LIMITS.timeoutMs);
    try {
      const res = await opts.fetchImpl(WEB_SEARCH_ENDPOINT, {
        method: "POST",
        redirect: "manual",
        headers: { Authorization: "Bearer " + key, "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(tavilySearchBody(code + " practice questions json")),
        signal: ctl ? ctl.signal : undefined,
      });
      calls.push({ url: WEB_SEARCH_ENDPOINT, status: res.status });
      if (res.status >= 300 && res.status < 400) {
        return { ok: false, enabled: true, configured: true, status: "provider_error", retry: false, billing: false, code: code, collected: false, network: true, message: "检索服务返回重定向，没有跟随。", quotaNote: OUR_QUOTA_NOTE, rightsNote: RIGHTS_NOTE, candidates: [] };
      }
      if (res.status !== 200) {
        const mapped = providerError(res.status, Number(res.headers && res.headers.get ? res.headers.get("retry-after") : 0) || 0);
        return { ok: false, enabled: true, network: true, code: code, collected: false, quotaNote: OUR_QUOTA_NOTE, rightsNote: RIGHTS_NOTE, candidates: [], ...mapped };
      }
      const parsed = JSON.parse(new TextDecoder().decode(await readBoundedBody(res, WEB_LIMITS.maxFileBytes, ctl ? ctl.signal : null)));
      const results = Array.isArray(parsed.results) ? parsed.results.slice(0, WEB_LIMITS.maxResults) : [];
      return { ok: true, enabled: true, configured: true, status: "ready", code: code, collected: false, network: true, message: SEARCH_NOT_QUESTIONS, quotaNote: OUR_QUOTA_NOTE, rightsNote: RIGHTS_NOTE, results: results };
    } catch (e) {
      const aborted = e && (e.name === "AbortError" || e.code === "too_large");
      return { ok: false, enabled: true, configured: true, status: aborted ? "timeout" : "provider_error", retry: false, billing: false, code: code, collected: false, network: true, message: redactSecrets(aborted ? "检索超时或响应过大，没有继续重试。" : "检索请求失败，没有继续重试。", secrets), quotaNote: OUR_QUOTA_NOTE, rightsNote: RIGHTS_NOTE, candidates: [] };
    } finally {
      clearTimeout(timer);
    }
  }
  const first = await oneAttempt();
  if (first.ok) return first;
  const retryAfter = Number(first.retryAfter) || 0;
  if (first.status === "rate_limited" && first.retry && retryAfter >= 0 && retryAfter <= WEB_LIMITS.retryAfterCapSeconds) {
    const second = await oneAttempt();
    if (!second.ok && second.reason === undefined && second.status === "quota_exhausted") return second;
    return second;
  }
  if (first.billing && quota) markSearchBillingBlocked(quota, first.status);
  if (first.billing && opts.onBillingBlock) await opts.onBillingBlock(first.status);
  return first;
}

function examCodesInText(text) {
  const found = new Set();
  const raw = String(text || "").toLowerCase();
  const re = /[a-z]{2,4}-?[a-z]?\d{2,4}/g;
  let m;
  while ((m = re.exec(raw))) {
    const code = normalizeExamCode(m[0]);
    if (code) found.add(code);
  }
  return Array.from(found);
}

export function classifyExamIdentity(examCode, text) {
  const codes = examCodesInText(text);
  if (!codes.length) return "uncertain";
  if (codes.length === 1 && codes[0] === examCode) return "exact";
  if (codes.indexOf(examCode) >= 0 && codes.length > 1) return "mismatch";
  if (codes.indexOf(examCode) < 0) return "mismatch";
  return "uncertain";
}

function previewCandidate(row) {
  const selectable = row.extraction === "quizplay-json" && row.examMatch === "exact" && row.access === "open" && row.status === "ready";
  return {
    origin: row.origin,
    status: row.status,
    extraction: row.extraction,
    examMatch: row.examMatch,
    access: row.access,
    url: row.url,
    title: row.title || "",
    repo: row.repo || null,
    set: row.set == null ? null : row.set,
    questionCount: row.questionCount == null ? null : row.questionCount,
    license: row.license || null,
    selectable: selectable,
    collected: false,
    message: row.message,
  };
}

const PENDING_FETCH = "检索结果只作预览。当前不会抓取任意网页，也没有通用的安全抓取。只有已核对的 quizplay-io 题集可以采集。";

export function searchHitPreview(hit, examCode) {
  const url = hit && hit.url ? String(hit.url) : "";
  const title = hit && hit.title ? String(hit.title) : "";
  const identity = classifyExamIdentity(examCode, title + " " + url);
  return previewCandidate({
    origin: "web-search",
    status: identity === "mismatch" ? "needs-review" : "unsupported",
    extraction: "pending-adapter",
    examMatch: identity,
    access: "unknown",
    url: url,
    title: title,
    message: identity === "mismatch" ? "检索标题或网址与输入的考试代码不一致。只作预览，没有抓取正文。" : PENDING_FETCH,
  });
}

export async function probePublicSource(url, examCode) {
  return searchHitPreview({ url: url, title: "" }, examCode);
}

export async function collectVerifiedQuizUrl() {
  return {
    ok: false,
    collected: false,
    published: false,
    fetched: false,
    error: "不能按任意网址采集。请改选已核对的 quizplay-io 题集。本次没有向外抓取。",
  };
}

export async function discoverWithOptionalWeb(input, deps) {
  const code = normalizeExamCode(input);
  const org = await discoverExamSources(input, deps.orgDeps || deps);
  const orgLabeled = Object.assign({}, org, {
    origin: "quizplay-org",
    label: "quizplay-io 组织回退，不是全网搜索",
    collected: false,
  });
  const web = await tavilySearch(Object.assign({}, deps, { code: code, apiKey: deps.apiKey || "" }));
  if (!web.enabled) {
    return { ok: true, code: code, collected: false, published: false, web: web, org: orgLabeled, message: web.message };
  }
  if (!web.ok) {
    return { ok: true, code: code, collected: false, published: false, web: Object.assign({}, web, { candidates: [] }), org: orgLabeled, message: web.message };
  }
  const candidates = [];
  const seen = {};
  for (const hit of web.results || []) {
    const url = hit && hit.url ? String(hit.url) : "";
    if (!url || seen[url]) continue;
    seen[url] = 1;
    candidates.push(searchHitPreview(hit, code));
  }
  return {
    ok: true,
    code: code,
    collected: false,
    published: false,
    web: { enabled: true, configured: true, status: web.status, message: SEARCH_NOT_QUESTIONS, quotaNote: OUR_QUOTA_NOTE, rightsNote: RIGHTS_NOTE, candidates: candidates },
    org: orgLabeled,
    message: SEARCH_NOT_QUESTIONS,
  };
}
