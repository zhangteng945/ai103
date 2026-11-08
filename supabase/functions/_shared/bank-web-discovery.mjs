/**
 * Optional whole-web source discovery. Search is not questions and not a quizplay lookup.
 * The provider key is supplied by the caller. This module never reads ambient secrets.
 * Tavily terms do not clearly allow us to store Output, and URLs/titles are Output too.
 * Previews stay in the response until an admin selects a source and we fetch that site ourselves.
 */
import {
  USER_AGENT,
  discoverExamSources,
  isPrivateAddress,
  normalizeExamCode,
  normalizeQuizplayBundle,
  questionShapeOk,
  verifyQuizManifest,
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

async function readBody(res, limit) {
  const buf = new Uint8Array(await res.arrayBuffer());
  if (buf.byteLength > limit) {
    const err = new Error("响应超过大小限制");
    err.code = "too_large";
    throw err;
  }
  return buf;
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
      clearTimeout(timer);
      calls.push({ url: WEB_SEARCH_ENDPOINT, status: res.status });
      if (res.status !== 200) {
        const mapped = providerError(res.status, Number(res.headers && res.headers.get ? res.headers.get("retry-after") : 0) || 0);
        return { ok: false, enabled: true, network: true, code: code, collected: false, quotaNote: OUR_QUOTA_NOTE, rightsNote: RIGHTS_NOTE, candidates: [], ...mapped };
      }
      const parsed = JSON.parse(new TextDecoder().decode(await readBody(res, WEB_LIMITS.maxFileBytes)));
      const results = Array.isArray(parsed.results) ? parsed.results.slice(0, WEB_LIMITS.maxResults) : [];
      return { ok: true, enabled: true, configured: true, status: "ready", code: code, collected: false, network: true, message: SEARCH_NOT_QUESTIONS, quotaNote: OUR_QUOTA_NOTE, rightsNote: RIGHTS_NOTE, results: results };
    } catch (e) {
      clearTimeout(timer);
      const aborted = e && (e.name === "AbortError" || e.code === "too_large");
      return { ok: false, enabled: true, configured: true, status: aborted ? "timeout" : "provider_error", retry: false, billing: false, code: code, collected: false, network: true, message: redactSecrets(aborted ? "检索超时或响应过大，没有继续重试。" : "检索请求失败，没有继续重试。", secrets), quotaNote: OUR_QUOTA_NOTE, rightsNote: RIGHTS_NOTE, candidates: [] };
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

function blockedHost(hostname) {
  const host = String(hostname || "").toLowerCase().replace(/\.$/, "");
  if (!host || host === "localhost" || host.endsWith(".localhost") || host.endsWith(".local") || host.endsWith(".internal")) return true;
  if (host === "metadata.google.internal" || host === "metadata") return true;
  return false;
}

export function assertFetchUrl(raw) {
  let u;
  try { u = new URL(raw); } catch (e) { throw new Error("来源 URL 无效"); }
  if (u.protocol !== "https:" && u.protocol !== "http:") throw new Error("仅允许 http 或 https");
  if (u.username || u.password) throw new Error("来源 URL 不得携带凭据");
  if (u.port && u.port !== "80" && u.port !== "443") throw new Error("来源端口不被允许");
  const host = u.hostname.toLowerCase();
  if (blockedHost(host)) throw new Error("已拒绝私网或元数据地址");
  const literalIp = /^\d+\.\d+\.\d+\.\d+$/.test(host) || host.indexOf(":") >= 0;
  if (literalIp && isPrivateAddress(host)) throw new Error("已拒绝私网或元数据地址");
  let path;
  try { path = decodeURIComponent(u.pathname); } catch (e) { throw new Error("来源路径无效"); }
  if (path.indexOf("..") >= 0 || path.indexOf("\\") >= 0 || path.indexOf("\0") >= 0) throw new Error("来源路径无效");
  return u;
}

async function safeFetch(url, deps, accept) {
  let current = url;
  let redirects = WEB_LIMITS.maxRedirects;
  while (true) {
    const u = assertFetchUrl(current);
    const ips = deps.resolveHost ? await deps.resolveHost(u.hostname) : [];
    if (!ips || !ips.length) throw new Error("无法确认来源地址，已拒绝");
    for (const ip of ips) if (isPrivateAddress(ip)) throw new Error("来源地址落在私网，已拒绝");
    const ctl = typeof AbortController === "function" ? new AbortController() : null;
    const timer = setTimeout(() => { if (ctl) ctl.abort(); }, deps.timeoutMs || WEB_LIMITS.timeoutMs);
    const res = await deps.fetchImpl(u.toString(), {
      method: "GET",
      redirect: "manual",
      headers: { Accept: accept || "application/json, text/html;q=0.5, */*;q=0.1", "User-Agent": USER_AGENT },
      signal: ctl ? ctl.signal : undefined,
    });
    clearTimeout(timer);
    if (res.status >= 300 && res.status < 400) {
      if (redirects <= 0) throw new Error("来源重定向次数过多");
      const loc = res.headers && res.headers.get ? res.headers.get("location") : "";
      if (!loc) throw new Error("来源重定向无效");
      current = new URL(loc, u).toString();
      redirects--;
      continue;
    }
    return { url: u.toString(), res: res };
  }
}

function accessFrom(status, text) {
  const blob = String(text || "").toLowerCase();
  if (/captcha|recaptcha|hcaptcha/.test(blob)) return "captcha";
  if (/paywall|subscribe to continue|upgrade to read/.test(blob)) return "paywall";
  if (status === 401 || /sign in|log in|login required/.test(blob)) return "login";
  if (status === 403 || status === 402) return "blocked";
  return "open";
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

export async function probePublicSource(url, examCode, deps) {
  const identity = classifyExamIdentity(examCode, url);
  try {
    const got = await safeFetch(url, deps, "application/json, text/html;q=0.5, application/pdf;q=0.2");
    const type = String(got.res.headers && got.res.headers.get ? got.res.headers.get("content-type") || "" : "");
    const buf = await readBody(got.res, WEB_LIMITS.maxFileBytes);
    const text = new TextDecoder().decode(buf.slice(0, 4000));
    const access = accessFrom(got.res.status, text);
    if (access !== "open") {
      return previewCandidate({ origin: "web-search", status: "access-blocked", extraction: "unknown", examMatch: identity, access: access, url: got.url, title: "", collected: false, message: "来源要求登录、付费或验证码。已标出，没有绕过，也没有使用其他网站的凭据。" });
    }
    if (/pdf/.test(type) || /\.pdf($|\?)/i.test(got.url)) {
      return previewCandidate({ origin: "web-search", status: "unsupported", extraction: "pdf", examMatch: identity, access: "open", url: got.url, message: "PDF 只作为将来的补充来源，当前不能采集，也没有编造题目。" });
    }
    let parsed = null;
    try { parsed = JSON.parse(new TextDecoder().decode(buf)); } catch (e) { parsed = null; }
    const manifest = parsed && verifyQuizManifest(parsed);
    if (manifest && manifest.ok) {
      const sampleUrl = new URL(parsed.questions[0], got.url).toString();
      const sample = await safeFetch(sampleUrl, deps, "application/json");
      const sampleJson = JSON.parse(new TextDecoder().decode(await readBody(sample.res, WEB_LIMITS.maxFileBytes)));
      if (!questionShapeOk(sampleJson)) {
        return previewCandidate({ origin: "web-search", status: "unsupported", extraction: "unknown", examMatch: identity, access: "open", url: got.url, message: "清单看起来像题库，但题目结构未通过校验，没有采集。" });
      }
      const match = classifyExamIdentity(examCode, got.url + " " + (parsed.title || "") + " " + (parsed.slug || ""));
      return previewCandidate({
        origin: "web-search",
        status: match === "exact" ? "ready" : "needs-review",
        extraction: "quizplay-json",
        examMatch: match,
        access: "open",
        url: got.url,
        title: parsed.title || "",
        questionCount: manifest.questionCount,
        message: match === "exact" ? "清单结构可被现有适配器读取。检索摘要不是题目，选定后才会重新向该网站读取。" : "清单结构可读，但页面身份与输入的考试代码不一致，不会当成这门考试。",
      });
    }
    return previewCandidate({ origin: "web-search", status: "unsupported", extraction: /<html|<!doctype html/i.test(text) ? "html" : "unknown", examMatch: identity, access: "open", url: got.url, message: "普通网页或未知格式。尚未支持提取，没有采集，也不会编造选项。" });
  } catch (e) {
    return previewCandidate({ origin: "web-search", status: "unsupported", extraction: "unknown", examMatch: identity, access: "unknown", url: String(url || ""), message: "来源地址未通过安全检查或无法读取，没有采集。" });
  }
}

export async function collectVerifiedQuizUrl(url, bankCode, deps) {
  const code = normalizeExamCode(bankCode);
  if (!code) return { ok: false, collected: false, error: "无法识别题库代码" };
  const preview = await probePublicSource(url, code, deps);
  if (!preview.selectable) return { ok: false, collected: false, published: false, error: preview.message, candidate: preview };
  const got = await safeFetch(preview.url, deps, "application/json");
  const manifest = JSON.parse(new TextDecoder().decode(await readBody(got.res, WEB_LIMITS.maxFileBytes)));
  const verified = verifyQuizManifest(manifest);
  if (!verified.ok) return { ok: false, collected: false, error: verified.reason };
  const files = {};
  for (const rel of manifest.questions) {
    const fileUrl = new URL(rel, got.url).toString();
    const file = await safeFetch(fileUrl, deps, "application/json");
    files[rel] = JSON.parse(new TextDecoder().decode(await readBody(file.res, WEB_LIMITS.maxFileBytes)));
  }
  const snap = normalizeQuizplayBundle({
    source: {
      id: "web-" + code,
      repo: new URL(got.url).host,
      license: null,
      aiGenerated: false,
      official: false,
      fullCorpus: false,
      accuracyCertified: false,
      advertisedCount: verified.questionCount,
      note: "由管理员选定后直接向来源网站读取。检索结果没有被当作题目。供应商输出的保存权利仍不确定。",
      bankCode: code,
    },
    bankCode: code,
    manifest,
    files,
    scenarios: {},
    media: {},
    collectedAt: deps.now || new Date().toISOString(),
    sourceUpdatedAt: null,
    extraWarnings: ["web_preview_not_a_corpus", "provider_retention_rights_unresolved"],
  });
  return { ok: true, collected: true, published: false, snapshot: snap, candidate: preview };
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
    const titleIdentity = classifyExamIdentity(code, (hit.title || "") + " " + url);
    if (titleIdentity === "mismatch") {
      candidates.push(previewCandidate({ origin: "web-search", status: "needs-review", extraction: "unknown", examMatch: "mismatch", access: "unknown", url: url, title: hit.title || "", message: "检索标题或网址与输入的考试代码不一致，不会当成这门考试，也没有抓取正文。" }));
      continue;
    }
    candidates.push(await probePublicSource(url, code, deps));
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
