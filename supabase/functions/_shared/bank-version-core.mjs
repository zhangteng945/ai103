/**
 * Question-bank version core (no network, no secrets).
 * Used by itc-ingest / itc-bank and by Node tests.
 * Timestamps stored as UTC ISO strings. Display conversion is Asia/Shanghai.
 * License metadata is recorded; it is not a publish gate.
 */

const K = new Uint32Array([
  0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
  0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
  0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
  0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
  0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
  0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
  0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
  0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2,
]);

function rotr(x, n) { return (x >>> n) | (x << (32 - n)); }

export function sha256Bytes(data) {
  const bytes = data instanceof Uint8Array ? data : new Uint8Array(data);
  const bitLen = bytes.length * 8;
  const withPad = new Uint8Array(((bytes.length + 9 + 63) >> 6) << 6);
  withPad.set(bytes);
  withPad[bytes.length] = 0x80;
  const view = new DataView(withPad.buffer);
  view.setUint32(withPad.length - 8, Math.floor(bitLen / 0x100000000));
  view.setUint32(withPad.length - 4, bitLen >>> 0);
  let h0 = 0x6a09e667, h1 = 0xbb67ae85, h2 = 0x3c6ef372, h3 = 0xa54ff53a;
  let h4 = 0x510e527f, h5 = 0x9b05688c, h6 = 0x1f83d9ab, h7 = 0x5be0cd19;
  const w = new Uint32Array(64);
  for (let i = 0; i < withPad.length; i += 64) {
    for (let t = 0; t < 16; t++) w[t] = view.getUint32(i + t * 4);
    for (let t = 16; t < 64; t++) {
      const s0 = rotr(w[t - 15], 7) ^ rotr(w[t - 15], 18) ^ (w[t - 15] >>> 3);
      const s1 = rotr(w[t - 2], 17) ^ rotr(w[t - 2], 19) ^ (w[t - 2] >>> 10);
      w[t] = (w[t - 16] + s0 + w[t - 7] + s1) >>> 0;
    }
    let a = h0, b = h1, c = h2, d = h3, e = h4, f = h5, g = h6, h = h7;
    for (let t = 0; t < 64; t++) {
      const S1 = rotr(e, 6) ^ rotr(e, 11) ^ rotr(e, 25);
      const ch = ((e & f) ^ (~e & g)) >>> 0;
      const t1 = (h + S1 + ch + K[t] + w[t]) >>> 0;
      const S0 = rotr(a, 2) ^ rotr(a, 13) ^ rotr(a, 22);
      const maj = ((a & b) ^ (a & c) ^ (b & c)) >>> 0;
      const t2 = (S0 + maj) >>> 0;
      h = g; g = f; f = e; e = (d + t1) >>> 0; d = c; c = b; b = a; a = (t1 + t2) >>> 0;
    }
    h0 = (h0 + a) >>> 0; h1 = (h1 + b) >>> 0; h2 = (h2 + c) >>> 0; h3 = (h3 + d) >>> 0;
    h4 = (h4 + e) >>> 0; h5 = (h5 + f) >>> 0; h6 = (h6 + g) >>> 0; h7 = (h7 + h) >>> 0;
  }
  return [h0, h1, h2, h3, h4, h5, h6, h7].map((x) => x.toString(16).padStart(8, "0")).join("");
}

export function sha256Text(s) {
  return sha256Bytes(new TextEncoder().encode(String(s)));
}

function uuidFromSha(hex) {
  const b = hex.slice(0, 32).split("");
  b[12] = "5";
  b[16] = ((parseInt(b[16], 16) & 0x3) | 0x8).toString(16);
  const h = b.join("");
  return h.slice(0, 8) + "-" + h.slice(8, 12) + "-" + h.slice(12, 16) + "-" + h.slice(16, 20) + "-" + h.slice(20);
}

export function stableQuestionId(sourceId, externalId) {
  return uuidFromSha(sha256Text("itcert-question\n" + sourceId + "\n" + externalId));
}

function canonical(value) {
  if (Array.isArray(value)) return "[" + value.map(canonical).join(",") + "]";
  if (value && typeof value === "object") {
    return "{" + Object.keys(value).sort().map((k) => JSON.stringify(k) + ":" + canonical(value[k])).join(",") + "}";
  }
  return JSON.stringify(value);
}

export function contentHash(value) {
  return sha256Text(canonical(value));
}

export const COLLECT_LIMITS = Object.freeze({
  maxQuestions: 80,
  maxFileBytes: 512 * 1024,
  maxTotalBytes: 8 * 1024 * 1024,
  maxMediaBytes: 200 * 1024,
  timeoutMs: 8000,
  retries: 2,
  maxRedirects: 2,
});

export const USER_AGENT = "itcert-bank-ingest/0.1 (admin collector)";

const AZ305_NOTE = "公开仓库 quizplay-io/quiz-player-quizzes-az-305-question-set-1：按题 JSON，README 写明 36 道 AI 生成练习题。不是 Microsoft 官方题库，不是完整题库，也不是最新考试题库。许可 AGPL-3.0。答案未经本站核验。";

export const REGISTRY = Object.freeze({
  banks: [
    {
      code: "az-305",
      title: "AZ-305",
      aliases: ["az-305", "az305", "azure-solutions-architect-expert", "designing-microsoft-azure-infrastructure-solutions"],
      sources: [
        {
          id: "quizplay-az305-set1",
          adapter: "quizplay-question-set",
          repo: "quizplay-io/quiz-player-quizzes-az-305-question-set-1",
          gitRef: "main",
          license: "AGPL-3.0",
          aiGenerated: true,
          official: false,
          fullCorpus: false,
          accuracyCertified: false,
          advertisedCount: 36,
          manifestPath: "quiz.json",
          note: AZ305_NOTE,
          lastInspectedCommit: "a6c1b666c430bb47a45ae322e8ebe8fba6e3008a",
          lastInspectedAt: "2026-03-11T15:36:13Z",
        },
      ],
    },
  ],
  refused: [
    {
      aliases: ["azurecertprep", "azurecertprep-github-io", "azurecertprep.github.io"],
      repo: "azurecertprep/azurecertprep.github.io",
      license: "MIT",
      reason: "该仓库是 MIT 实践挑战和开放式知识检查，不是现成选择题。本工具不会编造选项或答案来转换它。",
    },
  ],
});

export function canonBankCode(input) {
  return String(input || "").trim().toLowerCase().replace(/[\s_]+/g, "-").replace(/[^a-z0-9.-]/g, "");
}

export function resolveBankQuery(input) {
  const key = canonBankCode(input);
  if (!key) return { ok: false, configured: false, message: "请输入题库代码或名称。" };
  for (const item of REGISTRY.refused) {
    if (item.aliases.indexOf(key) >= 0) {
      return { ok: false, configured: false, refused: true, license: item.license, repo: item.repo, message: item.reason };
    }
  }
  for (const bank of REGISTRY.banks) {
    if (bank.code === key || bank.aliases.indexOf(key) >= 0) {
      return { ok: true, configured: true, bank: bank };
    }
  }
  return {
    ok: false,
    configured: false,
    message: "未配置该名称的公开来源。任意题库名称不会生成完整或最新题库。PDF 导入尚未提供。",
  };
}

export function policyForSource(source) {
  const repo = source.repo;
  return {
    rules: [
      { host: "raw.githubusercontent.com", pathPrefix: "/" + repo + "/" },
      { host: "api.github.com", pathPrefix: "/repos/" + repo + "/commits/" },
    ],
  };
}

export function isPrivateAddress(ip) {
  const s = String(ip || "").trim().toLowerCase().replace(/^\[|\]$/g, "");
  if (!s) return true;
  if (s.indexOf(":") >= 0) {
    if (s === "::" || s === "::1") return true;
    const mapped = /(?:::ffff:)(\d+\.\d+\.\d+\.\d+)$/.exec(s);
    if (mapped) return isPrivateAddress(mapped[1]);
    const head = s.split(":")[0] || "0";
    const n = parseInt(head, 16);
    if (Number.isNaN(n)) return true;
    if ((n & 0xfe00) === 0xfc00) return true;
    if ((n & 0xffc0) === 0xfe80) return true;
    if ((n & 0xff00) === 0xff00) return true;
    return false;
  }
  const p = s.split(".").map((x) => Number(x));
  if (p.length !== 4 || p.some((n) => !Number.isInteger(n) || n < 0 || n > 255)) return true;
  const [a, b] = p;
  if (a === 0 || a === 10 || a === 127) return true;
  if (a === 169 && b === 254) return true;
  if (a === 172 && b >= 16 && b <= 31) return true;
  if (a === 192 && b === 168) return true;
  if (a === 100 && b >= 64 && b <= 127) return true;
  if (a === 192 && b === 0) return true;
  if (a === 198 && (b === 18 || b === 19)) return true;
  if (a === 198 && b === 51) return true;
  if (a === 203 && b === 113) return true;
  if (a >= 224) return true;
  return false;
}

function blockedHost(host) {
  const h = String(host || "").toLowerCase().replace(/\.$/, "");
  if (!h) return true;
  if (h === "localhost" || h.endsWith(".localhost") || h.endsWith(".local") || h.endsWith(".internal")) return true;
  if (h === "metadata.google.internal" || h === "metadata") return true;
  if (/^\d+\.\d+\.\d+\.\d+$/.test(h) || h.indexOf(":") >= 0) return true;
  return false;
}

export function assertPublicUrl(raw, policy) {
  let u;
  try { u = new URL(raw); } catch (e) { throw new Error("来源 URL 无效"); }
  if (u.protocol !== "https:") throw new Error("仅允许 https 来源");
  if (u.username || u.password) throw new Error("来源 URL 不得携带凭据");
  if (u.port && u.port !== "443") throw new Error("来源端口不被允许");
  if (u.search) throw new Error("来源 URL 不得携带查询参数");
  const host = u.hostname.toLowerCase();
  if (blockedHost(host)) throw new Error("已拒绝私网或非公开主机");
  let path;
  try { path = decodeURIComponent(u.pathname); } catch (e) { throw new Error("来源路径无效"); }
  if (path.indexOf("..") >= 0 || path.indexOf("\\") >= 0 || path.indexOf("\0") >= 0) throw new Error("来源路径无效");
  const rules = (policy && policy.rules) || [];
  const ok = rules.some((r) => host === r.host && path.indexOf(r.pathPrefix) === 0);
  if (!ok) throw new Error("来源不在允许名单");
  return u;
}

function sleepDefault(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetchAllowlisted(rawUrl, deps) {
  const limits = Object.assign({}, COLLECT_LIMITS, deps.limits || {});
  const policy = deps.policy;
  const fetchImpl = deps.fetchImpl;
  const resolveHost = deps.resolveHost;
  const sleep = deps.sleep || sleepDefault;
  if (typeof fetchImpl !== "function") throw new Error("采集缺少读取实现");
  if (typeof resolveHost !== "function") throw new Error("采集缺少地址检查");
  let current = rawUrl;
  let redirects = limits.maxRedirects;
  let attempt = 0;
  while (true) {
    const u = assertPublicUrl(current, policy);
    const ips = await resolveHost(u.hostname);
    if (!ips || !ips.length) throw new Error("无法确认来源地址，已拒绝");
    for (const ip of ips) {
      if (isPrivateAddress(ip)) throw new Error("来源地址落在私网，已拒绝");
    }
    const ctl = typeof AbortController === "function" ? new AbortController() : null;
    const timer = setTimeout(() => { if (ctl) ctl.abort(); }, limits.timeoutMs);
    let res;
    try {
      res = await fetchImpl(u.toString(), {
        method: "GET",
        redirect: "manual",
        headers: { "User-Agent": USER_AGENT, Accept: "application/json, image/svg+xml, text/plain, */*;q=0.1" },
        signal: ctl ? ctl.signal : undefined,
      });
    } catch (e) {
      clearTimeout(timer);
      if (attempt < limits.retries) { attempt++; await sleep(0); continue; }
      throw new Error("来源读取失败");
    }
    clearTimeout(timer);
    const status = res.status;
    if (status >= 300 && status < 400) {
      if (redirects <= 0) throw new Error("来源重定向次数过多");
      const loc = res.headers && res.headers.get ? res.headers.get("location") : "";
      if (!loc) throw new Error("来源重定向无效");
      current = new URL(loc, u).toString();
      redirects--;
      continue;
    }
    if (status === 429 || status >= 500) {
      if (attempt < limits.retries) { attempt++; await sleep(0); continue; }
      const err = new Error("来源不可用");
      err.code = "source_unavailable";
      err.status = status;
      throw err;
    }
    if (status === 401 || status === 403 || status === 404) {
      const err = new Error("来源不可用");
      err.code = "source_unavailable";
      err.status = status;
      throw err;
    }
    if (status !== 200) throw new Error("来源读取失败 " + status);
    const buf = new Uint8Array(await res.arrayBuffer());
    if (buf.byteLength > limits.maxFileBytes) throw new Error("来源响应超过大小限制");
    return buf;
  }
}

function safeRel(path, kind) {
  const s = String(path || "");
  if (kind === "question" && /^questions\/[A-Za-z0-9._-]+\.json$/.test(s)) return s;
  if (kind === "scenario" && /^scenarios\/[A-Za-z0-9._-]+\.json$/.test(s)) return s;
  if (kind === "image" && /^assets\/images\/[A-Za-z0-9._-]+\.svg$/.test(s)) return s;
  return null;
}

async function readJsonAt(base, rel, deps, total) {
  const buf = await fetchAllowlisted(base + rel, deps);
  total.n += buf.byteLength;
  if (total.n > (deps.limits || COLLECT_LIMITS).maxTotalBytes) throw new Error("来源总体积超过限制");
  try { return JSON.parse(new TextDecoder().decode(buf)); } catch (e) { throw new Error("来源 JSON 无法解析：" + rel); }
}

export async function collectQuizplaySource(source, deps) {
  const limits = Object.assign({}, COLLECT_LIMITS, deps.limits || {});
  const policy = policyForSource(source);
  const fetchDeps = Object.assign({}, deps, { policy: policy, limits: limits });
  let sourceUpdatedAt = null;
  let commitSha = null;
  const warnings = [];
  try {
    const commitUrl = "https://api.github.com/repos/" + source.repo + "/commits/" + (source.gitRef || "main");
    const buf = await fetchAllowlisted(commitUrl, fetchDeps);
    const commit = JSON.parse(new TextDecoder().decode(buf));
    if (commit && /^[0-9a-f]{40}$/.test(commit.sha || "")) commitSha = commit.sha;
    const date = commit && commit.commit && commit.commit.committer && commit.commit.committer.date;
    if (date && !Number.isNaN(Date.parse(date))) sourceUpdatedAt = new Date(date).toISOString();
  } catch (e) {
    warnings.push("source_updated_unknown");
  }
  if (!commitSha) warnings.push("source_revision_unverified");
  const ref = commitSha || source.gitRef || "main";
  if (!/^[A-Za-z0-9._-]{1,64}$/.test(ref)) throw new Error("来源修订号无效");
  const base = "https://raw.githubusercontent.com/" + source.repo + "/" + ref + "/";
  let manifest;
  try { manifest = await readJsonAt(base, source.manifestPath || "quiz.json", fetchDeps, { n: 0 }); }
  catch (e) {
    const err = new Error("来源不可用");
    err.code = "source_unavailable";
    throw err;
  }
  const listed = manifest && Array.isArray(manifest.questions) ? manifest.questions : null;
  if (!listed || !listed.length) throw new Error("来源清单没有题目");
  if (listed.length > limits.maxQuestions) throw new Error("题目数量超过单次采集上限，未写入候选版本");
  const total = { n: 0 };
  const files = {};
  for (const rel of listed) {
    const safe = safeRel(rel, "question");
    if (!safe) throw new Error("清单中的题目路径不在允许范围内");
    try { files[safe] = await readJsonAt(base, safe, fetchDeps, total); }
    catch (e) {
      const err = new Error("题目采集不完整，未写入候选版本");
      err.code = "incomplete";
      throw err;
    }
  }
  const scenarios = {};
  const media = {};
  const scenarioPaths = new Set();
  const imagePaths = new Set();
  Object.keys(files).forEach((k) => {
    const q = files[k];
    if (q && q.caseStudy) scenarioPaths.add(q.caseStudy);
    if (q && q.image) imagePaths.add(q.image);
  });
  for (const rel of scenarioPaths) {
    const safe = safeRel(rel, "scenario");
    if (!safe) continue;
    try { scenarios[safe] = await readJsonAt(base, safe, fetchDeps, total); }
    catch (e) { scenarios[safe] = null; }
  }
  for (const rel of imagePaths) {
    const safe = safeRel(rel, "image");
    if (!safe) continue;
    try {
      const buf = await fetchAllowlisted(base + safe, fetchDeps);
      total.n += buf.byteLength;
      media[safe] = buf;
    } catch (e) { media[safe] = null; }
  }
  return normalizeQuizplayBundle({
    source: source,
    bankCode: deps.bankCode || "az-305",
    manifest: manifest,
    files: files,
    scenarios: scenarios,
    media: media,
    sourceUpdatedAt: sourceUpdatedAt,
    commitSha: commitSha,
    collectedAt: deps.now || new Date().toISOString(),
    extraWarnings: warnings,
  });
}

function optionId(externalId, text, seen) {
  let n = 0;
  let id;
  do {
    id = "o" + sha256Text(externalId + "\n" + text + (n ? "\n#" + n : "")).slice(0, 16);
    n++;
  } while (seen[id]);
  seen[id] = 1;
  return id;
}

export function categorySlug(category) {
  const s = String(category || "").toLowerCase();
  if (!s) return { id: "other", warning: "missing_category" };
  if (/identit|governance|monitor/.test(s)) return { id: "identity" };
  if (/infrastructure/.test(s)) return { id: "infra" };
  if (/data storage|storage solution/.test(s)) return { id: "data" };
  if (/business continuity|continu|disaster/.test(s)) return { id: "bcdr" };
  return { id: "other", warning: "unknown_category" };
}

function looksLikeSvg(bytes) {
  const head = new TextDecoder().decode(bytes.slice(0, 400)).replace(/^\uFEFF/, "").trim().toLowerCase();
  if (head.startsWith("<svg")) return true;
  if (head.startsWith("<?xml") && head.indexOf("<svg") >= 0) return true;
  return false;
}

function base64Bytes(bytes) {
  if (typeof Buffer !== "undefined") return Buffer.from(bytes).toString("base64");
  let s = "";
  for (let i = 0; i < bytes.length; i++) s += String.fromCharCode(bytes[i]);
  return btoa(s);
}

function mediaRecord(path, bytes) {
  if (!(bytes instanceof Uint8Array) || !bytes.byteLength) return { error: "missing_media" };
  if (bytes.byteLength > COLLECT_LIMITS.maxMediaBytes) return { error: "media_too_large" };
  if (!looksLikeSvg(bytes)) return { error: "invalid_media" };
  const sha = sha256Bytes(bytes);
  return {
    sha256: sha,
    contentType: "image/svg+xml",
    sourcePath: path,
    role: "image",
    dataUrl: "data:image/svg+xml;base64," + base64Bytes(bytes),
  };
}

function answerFingerprint(q) {
  if (q.control === "select" && Array.isArray(q.boxes)) {
    return q.boxes.map((b) => {
      const ch = (b.choices || []).find((c) => c.key === b.answer || c.id === b.answer);
      return b.id + "=" + (ch ? ch.text : "");
    }).join("|");
  }
  if (q.type === "ordering") return "order:" + (q.correctOrder || []).map((id) => {
    const item = (q.items || []).find((x) => x.id === id);
    return item ? item.text : id;
  }).join(">");
  if (q.type === "matching") return "match:" + JSON.stringify(q.correctMapping || []);
  const texts = (q.answer || []).map((id) => {
    const opt = (q.options || []).find((o) => o.id === id);
    return opt ? opt.text : "";
  }).slice().sort();
  return "mcq:" + texts.join("|");
}

export function normalizeQuizplayBundle(input) {
  const source = Object.assign({ bankCode: input.bankCode || "az-305" }, input.source || {});
  const files = input.files || {};
  const order = (input.manifest && input.manifest.questions) || Object.keys(files);
  const warnings = (input.extraWarnings || []).slice();
  const blockReasons = [];
  const mediaOut = [];
  const mediaSeen = {};
  const questions = [];
  order.forEach((rel, position) => {
    const raw = files[rel];
    if (!raw || typeof raw !== "object") {
      blockReasons.push("missing_file");
      return;
    }
    const externalId = raw.id != null ? String(raw.id) : "";
    if (!externalId) blockReasons.push("missing_external_id");
    const cat = categorySlug(raw.category);
    if (cat.warning) warnings.push(cat.warning);
    const seen = {};
    const issues = [];
    let built;
    const type = raw.type || "single";
    if (type === "ordering") {
      const items = (raw.items || []).map((text) => ({ id: optionId(externalId, "item:" + text, seen), text: String(text) }));
      const correctOrder = (raw.correctOrder || []).map((text) => {
        const hit = items.find((item) => item.text === String(text));
        return hit ? hit.id : "";
      });
      if (!raw.correctOrder || correctOrder.length !== (raw.items || []).length || correctOrder.some((id) => !id)) issues.push("missing_answer");
      built = { type: "ordering", playable: false, items: items, correctOrder: correctOrder, options: [], answer: [], unsupportedReason: "排序题已按原结构保存。当前练习页不能作答，也不会记入错题。" };
    } else if (type === "matching") {
      const sourceItems = (raw.sourceItems || []).map((text) => ({ id: optionId(externalId, "src:" + text, seen), text: String(text) }));
      const targetSlots = (raw.targetSlots || []).map((text) => ({ id: optionId(externalId, "dst:" + text, seen), text: String(text) }));
      const mapping = Array.isArray(raw.correctMapping) ? raw.correctMapping : null;
      if (!mapping || mapping.length !== sourceItems.length || mapping.some((n) => !Number.isInteger(n) || n < 0 || n >= targetSlots.length)) issues.push("missing_answer");
      built = { type: "matching", playable: false, sourceItems: sourceItems, targetSlots: targetSlots, correctMapping: mapping || [], options: [], answer: [], unsupportedReason: "匹配题已按原结构保存。当前练习页不能作答，也不会记入错题。" };
    } else if (type === "hotspot-dropdown" || type === "hotspot") {
      const img = safeRel(raw.image, "image");
      let mediaRef = null;
      if (!img) issues.push("missing_media");
      else {
        const rec = mediaRecord(img, input.media && input.media[img]);
        if (rec.error) issues.push(rec.error);
        else {
          mediaRef = { sha256: rec.sha256, contentType: rec.contentType, role: "image", dataUrl: rec.dataUrl };
          if (!mediaSeen[rec.sha256]) { mediaSeen[rec.sha256] = 1; mediaOut.push(rec); }
        }
      }
      const boxes = (raw.dropdowns || []).map((d, i) => {
        const choices = (d.options || []).map((text) => {
          const id = optionId(externalId, "dd" + i + ":" + text, seen);
          return { id: id, key: id, text: String(text), textEn: String(text) };
        });
        const idx = d.correctIndex;
        if (!Number.isInteger(idx) || !choices[idx]) issues.push("missing_answer");
        return { id: "b" + i, label: String(d.label || ""), choices: choices, answer: choices[idx] ? choices[idx].key : "" };
      });
      if (!boxes.length) issues.push("missing_answer");
      built = { type: "hotspot", control: "select", playable: true, boxes: boxes, options: [], answer: [], media: mediaRef ? [mediaRef] : [] };
    } else if (type === "single" || type === "multi" || !raw.type) {
      const options = (raw.options || []).map((o) => {
        const text = String((o && o.text) || "");
        const id = optionId(externalId, text, seen);
        return { id: id, text: text, textEn: text, correct: !!(o && o.correct) };
      });
      const answer = options.filter((o) => o.correct).map((o) => o.id);
      if (!options.length || !answer.length) issues.push("missing_answer");
      const qType = type === "multi" || answer.length > 1 ? "multi" : "single";
      built = { type: qType, playable: true, options: options.map(({ correct, ...rest }) => rest), answer: answer };
    } else {
      issues.push("unsupported_type");
      built = { type: String(type), playable: false, options: [], answer: [], unsupportedReason: "该题型未转换，未编造选项。" };
    }
    let caseStudyId = null;
    let caseText = "";
    if (raw.caseStudy) {
      const relCase = safeRel(raw.caseStudy, "scenario");
      if (!relCase) issues.push("bad_case_path");
      else {
        const sc = input.scenarios && input.scenarios[relCase];
        if (!sc || !Array.isArray(sc.tabs)) issues.push("missing_case");
        else {
          caseStudyId = String(sc.id || relCase);
          caseText = sc.tabs.map((tab) => String(tab.title || "") + "\n" + String(tab.content || "")).join("\n\n");
        }
      }
    }
    const exhibits = Array.isArray(raw.exhibits) ? raw.exhibits.map((ex) => ({ title: String(ex.title || ""), content: String(ex.content || "") })) : [];
    issues.forEach((issue) => blockReasons.push(issue));
    const stem = String(raw.question || "");
    const explanation = String(raw.explanation || "");
    const revision = contentHash({
      externalId: externalId,
      type: built.type,
      stem: stem,
      options: built.options || null,
      boxes: built.boxes || null,
      items: built.items || null,
      correctOrder: built.correctOrder || null,
      sourceItems: built.sourceItems || null,
      targetSlots: built.targetSlots || null,
      correctMapping: built.correctMapping || null,
      answer: built.answer || null,
      explanation: explanation,
      category: raw.category || "",
      caseStudyId: caseStudyId,
      exhibits: exhibits,
      media: (built.media || []).map((m) => m.sha256),
    });
    const q = {
      id: externalId ? stableQuestionId(source.id, externalId) : "",
      externalId: externalId,
      sourceId: source.id,
      position: position,
      revision: revision,
      type: built.type,
      control: built.control || null,
      playable: built.playable !== false,
      stem: stem,
      stemEn: stem,
      domain: cat.id,
      domainLabel: String(raw.category || ""),
      domainLabelEn: String(raw.category || ""),
      explanation: explanation,
      options: built.options || [],
      answer: built.answer || [],
      caseStudy: !!raw.caseStudy,
      caseStudyId: caseStudyId,
      caseStudyText: caseText,
      caseStudyTextEn: caseText,
      exhibits: exhibits,
      provenance: {
        sourceId: source.id,
        repo: source.repo,
        externalId: externalId,
        license: source.license,
        aiGenerated: !!source.aiGenerated,
        official: false,
        fullCorpus: false,
        accuracyCertified: false,
      },
    };
    if (built.boxes) q.boxes = built.boxes;
    if (built.items) q.items = built.items;
    if (built.correctOrder) q.correctOrder = built.correctOrder;
    if (built.sourceItems) q.sourceItems = built.sourceItems;
    if (built.targetSlots) q.targetSlots = built.targetSlots;
    if (built.correctMapping) q.correctMapping = built.correctMapping;
    if (built.media) q.media = built.media;
    if (built.unsupportedReason) q.unsupportedReason = built.unsupportedReason;
    questions.push(q);
  });
  const byExt = {};
  questions.forEach((q) => {
    if (!q.externalId) return;
    if (!byExt[q.externalId]) byExt[q.externalId] = [];
    byExt[q.externalId].push(q.revision);
  });
  Object.keys(byExt).forEach((id) => {
    if (byExt[id].length < 2) return;
    blockReasons.push(new Set(byExt[id]).size > 1 ? "conflict" : "duplicate");
  });
  if (!questions.length) blockReasons.push("empty");
  if (source.advertisedCount != null && questions.length !== source.advertisedCount) warnings.push("count_differs_from_advertised");
  const uniqueReasons = Array.from(new Set(blockReasons));
  const corpusHash = contentHash(questions.map((q) => ({ externalId: q.externalId, revision: q.revision })).sort((a, b) => a.externalId < b.externalId ? -1 : 1));
  const versionId = "c" + corpusHash.slice(0, 20);
  const provenance = {
    sourceId: source.id,
    repo: source.repo,
    license: source.license,
    aiGenerated: !!source.aiGenerated,
    official: false,
    fullCorpus: false,
    accuracyCertified: false,
    advertisedCount: source.advertisedCount,
    parsedCount: questions.length,
    countMatchesAdvertised: questions.length === source.advertisedCount,
    commitSha: input.commitSha || null,
    sourceUpdatedAt: input.sourceUpdatedAt || null,
    collectedAt: input.collectedAt,
    warning: source.note || AZ305_NOTE,
    lastInspectedCommit: source.lastInspectedCommit || null,
    lastInspectedAt: source.lastInspectedAt || null,
  };
  return {
    format: "itc-bank-version-1",
    versionId: versionId,
    bankCode: source.bankCode,
    corpusHash: corpusHash,
    collectedAt: input.collectedAt,
    sourceUpdatedAt: input.sourceUpdatedAt || null,
    commitSha: input.commitSha || null,
    questionCount: questions.length,
    mediaCount: mediaOut.length,
    playableCount: questions.filter((q) => q.playable !== false).length,
    provenance: provenance,
    validation: {
      promotionBlocked: uniqueReasons.length > 0,
      reasons: uniqueReasons,
      warnings: Array.from(new Set(warnings)),
    },
    media: mediaOut,
    questions: questions,
  };
}

function tokensOf(s) {
  return String(s || "").toLowerCase().replace(/[^a-z0-9\u4e00-\u9fff]+/g, " ").split(/\s+/).filter((w) => w.length > 1);
}
function jaccard(a, b) {
  const A = new Set(tokensOf(a));
  const B = new Set(tokensOf(b));
  if (A.size < 6 || B.size < 6) return 0;
  let inter = 0;
  A.forEach((x) => { if (B.has(x)) inter++; });
  return inter / (A.size + B.size - inter);
}
function excerpt(s) {
  const t = String(s || "").replace(/\s+/g, " ").trim();
  return t.length > 80 ? t.slice(0, 80) + "…" : t;
}

export function diffQuestions(prev, next) {
  const prevList = prev || [];
  const nextList = next || [];
  const prevBy = new Map();
  prevList.forEach((q) => { if (q && q.externalId && !prevBy.has(q.externalId)) prevBy.set(q.externalId, q); });
  const groups = new Map();
  nextList.forEach((q) => {
    if (!q || !q.externalId) return;
    if (!groups.has(q.externalId)) groups.set(q.externalId, []);
    groups.get(q.externalId).push(q);
  });
  const items = [];
  groups.forEach((list, externalId) => {
    if (list.length > 1) {
      const revisions = new Set(list.map((q) => q.revision));
      items.push({ kind: revisions.size > 1 ? "conflict" : "duplicate", externalId: externalId, stableId: list[0].id, stemExcerpt: excerpt(list[0].stem), reviewOnly: false });
    }
    const q = list[0];
    const old = prevBy.get(externalId);
    if (!old) items.push({ kind: "new", externalId: externalId, stableId: q.id, stemExcerpt: excerpt(q.stem), reviewOnly: false });
    else if (old.revision !== q.revision) {
      const kind = answerFingerprint(old) === answerFingerprint(q) ? "changed" : "answer-changed";
      items.push({ kind: kind, externalId: externalId, stableId: q.id, stemExcerpt: excerpt(q.stem), reviewOnly: false });
    }
  });
  prevList.forEach((q) => {
    if (q && q.externalId && !groups.has(q.externalId)) {
      items.push({ kind: "possibly-removed", externalId: q.externalId, stableId: q.id, stemExcerpt: excerpt(q.stem), reviewOnly: false });
    }
  });
  const fuzzy = [];
  nextList.forEach((q) => {
    prevList.forEach((old) => {
      if (!q || !old || q.externalId === old.externalId) return;
      if (jaccard(q.stem, old.stem) >= 0.82) {
        fuzzy.push({ kind: "fuzzy-review", externalId: q.externalId, otherExternalId: old.externalId, stableId: q.id, otherStableId: old.id, stemExcerpt: excerpt(q.stem), reviewOnly: true });
      }
    });
  });
  const removed = items.filter((x) => x.kind === "possibly-removed").length;
  const blockReasons = [];
  if (prevList.length >= 8 && (removed / prevList.length >= 0.2 || nextList.length < prevList.length * 0.8)) blockReasons.push("massive_drop");
  items.push.apply(items, fuzzy);
  const counts = {};
  items.forEach((item) => { counts[item.kind] = (counts[item.kind] || 0) + 1; });
  return { items: items.slice(0, 200), counts: counts, blockReasons: blockReasons, promotionBlocked: blockReasons.length > 0 };
}

export function formatShanghai(iso) {
  if (iso == null || iso === "") return "未知";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "未知";
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  }).formatToParts(d);
  const g = (t) => {
    const hit = parts.find((p) => p.type === t);
    return hit ? hit.value : "00";
  };
  return g("year") + "-" + g("month") + "-" + g("day") + " " + g("hour") + ":" + g("minute") + ":" + g("second");
}

export function assertAdmin(user, nowMs) {
  if (!user) return { ok: false, status: 401, error: "缺少登录凭证" };
  const am = user.app_metadata || {};
  const now = nowMs == null ? Date.now() : nowMs;
  if (am.expires_at != null && am.expires_at !== "") {
    const t = Date.parse(String(am.expires_at));
    if (Number.isNaN(t) || t <= now) return { ok: false, status: 403, error: "账号已过期" };
  }
  if (am.role !== "admin") return { ok: false, status: 403, error: "当前账号不是管理员" };
  return { ok: true, userId: user.id || null };
}

export function isMissingRelation(message) {
  return /bank_catalog|bank_versions|schema cache|does not exist|42P01/i.test(String(message || ""));
}

/** Server-side legacy file names. Not taken from the client. First entry is the default. */
export const LEGACY_BANK_VERSIONS = Object.freeze({
  ai103: Object.freeze(["202611011910"]),
  "dop-c02": Object.freeze(["202611011900"]),
  "dp-700": Object.freeze(["202611011900"]),
  "dp-420": Object.freeze(["202611011900"]),
});

const VERSION_TOKEN = /^[A-Za-z0-9._-]{1,64}$/;
const EXAM_TOKEN = /^[a-z0-9-]{1,32}$/;

function trustedLegacyIds(legacyVersions, examId) {
  const raw = legacyVersions && legacyVersions[examId];
  if (!Array.isArray(raw)) return [];
  const out = [];
  for (const id of raw) {
    if (typeof id === "string" && VERSION_TOKEN.test(id) && out.indexOf(id) < 0) out.push(id);
  }
  return out;
}

function catalogSnapshotPath(examId, version) {
  if (!EXAM_TOKEN.test(examId) || !VERSION_TOKEN.test(version)) return null;
  return "versions/" + examId + "/" + version + ".json";
}

/**
 * Pick one stored bank for this request.
 * Trusted legacy ids keep serving the existing exam/version file until that session
 * asks for a published catalog version. A catalog row with no active version does
 * not hide the legacy default. Client strings that are not an allowlisted legacy id
 * or a published/retained row do not become storage paths.
 */
export function decideServeVersion({ examId, requested, catalog, versions, legacyVersions }) {
  const exam = String(examId || "");
  if (!EXAM_TOKEN.test(exam)) return { ok: false, status: 404, error: "该题库尚未发布" };
  const trusted = trustedLegacyIds(legacyVersions, exam);
  const want = requested == null || requested === "" ? null : String(requested);
  const active = catalog && typeof catalog.activeVersionId === "string" && VERSION_TOKEN.test(catalog.activeVersionId)
    ? catalog.activeVersionId
    : null;
  if (want && active && want === active) {
    const path = catalogSnapshotPath(exam, active);
    return path
      ? { ok: true, kind: "catalog", version: active, path: path }
      : { ok: false, status: 404, error: "请求的题库版本不存在" };
  }
  if (want) {
    const pin = trusted.find((id) => id === want);
    if (pin) return { ok: true, kind: "legacy", version: pin };
  }
  if (!want) {
    if (active) {
      const path = catalogSnapshotPath(exam, active);
      return path
        ? { ok: true, kind: "catalog", version: active, path: path }
        : { ok: false, status: 404, error: "该题库尚未发布" };
    }
    if (trusted.length) return { ok: true, kind: "legacy", version: trusted[0] };
    return { ok: false, status: 404, error: "该题库尚未发布" };
  }
  if (!VERSION_TOKEN.test(want)) return { ok: false, status: 404, error: "请求的题库版本不存在" };
  const row = (versions || []).find((v) => v && v.id === want && v.bankCode === exam);
  if (!row) return { ok: false, status: 404, error: "请求的题库版本不存在" };
  if (row.status === "candidate") return { ok: false, status: 403, error: "候选版本未发布" };
  if ((row.status === "published" || row.status === "retained") && VERSION_TOKEN.test(row.id)) {
    const path = catalogSnapshotPath(exam, row.id);
    if (!path) return { ok: false, status: 404, error: "请求的题库版本不存在" };
    return { ok: true, kind: "catalog", version: row.id, path: path };
  }
  return { ok: false, status: 404, error: "题库版本不可用" };
}

export function unwrapBankDocument(parsed) {
  if (Array.isArray(parsed)) return { questions: parsed, versionId: null, media: [], meta: null };
  if (!parsed || typeof parsed !== "object" || !Array.isArray(parsed.questions)) throw new Error("题库 JSON 不是数组");
  return { questions: parsed.questions, versionId: parsed.versionId || null, media: parsed.media || [], meta: parsed };
}

export function findVersionMedia(doc, sha) {
  const want = String(sha || "");
  const pools = [doc && doc.media, doc && doc.meta && doc.meta.media];
  for (const pool of pools) {
    if (!Array.isArray(pool)) continue;
    const hit = pool.find((m) => m && m.sha256 === want && typeof m.dataUrl === "string");
    if (hit) return hit;
  }
  return null;
}

export function slicePinned(questions, params) {
  const version = params && params.version;
  if (!version) throw new Error("缺少版本");
  const list = questions || [];
  if (params.ids) {
    const map = new Map();
    list.forEach((q) => { if (q && q.id != null && !map.has(String(q.id))) map.set(String(q.id), q); });
    return { version: version, mode: "ids", questions: params.ids.map((id) => map.get(String(id))).filter(Boolean) };
  }
  if (params.sample) {
    const n = Math.max(0, Math.trunc(Number(params.sample) || 0));
    return { version: version, mode: "sample", questions: list.slice(0, n) };
  }
  const offset = Math.max(0, Math.trunc(Number(params.offset) || 0));
  const limit = Math.max(1, Math.trunc(Number(params.limit) || 50));
  return { version: version, mode: params.q ? "search" : "page", offset: offset, limit: limit, total: list.length, questions: list.slice(offset, offset + limit) };
}

export function createBankStore() {
  return {
    catalog: {},
    versions: {},
    jobs: {},
    audit: [],
    progress: { exams: { ai103: { wrongIds: { keep: true } } } },
    permissions: { exams: ["ai103"], role: "student" },
  };
}

function ensureCatalog(store, code) {
  if (!store.catalog[code]) store.catalog[code] = { code: code, activeVersionId: null, lockJobId: null, lockUntil: 0 };
  return store.catalog[code];
}

function abandonStale(store, code, nowMs) {
  Object.keys(store.jobs).forEach((id) => {
    const job = store.jobs[id];
    if (job.bankCode === code && job.state === "running" && Date.parse(job.startedAt) + 120000 <= nowMs) {
      job.state = "abandoned";
      job.error = "采集超时或中断，未发布任何版本";
      job.finishedAt = new Date(nowMs).toISOString();
    }
  });
}

export function beginCollect(store, opts) {
  const resolved = resolveBankQuery(opts.bankCode || opts.code);
  if (!resolved.ok) return { ok: false, status: 404, error: resolved.message, refused: !!resolved.refused };
  const code = resolved.bank.code;
  const nowMs = Date.parse(opts.now);
  const cat = ensureCatalog(store, code);
  abandonStale(store, code, nowMs);
  const jobId = opts.jobId || ("job-" + sha256Text(code + "\n" + opts.now).slice(0, 12));
  if (cat.lockJobId && cat.lockJobId !== jobId && cat.lockUntil > nowMs) {
    return { ok: false, status: 409, error: "该题库已有进行中的采集", code: "locked" };
  }
  cat.lockJobId = jobId;
  cat.lockUntil = nowMs + (opts.ttlMs || 120000);
  store.jobs[jobId] = { id: jobId, bankCode: code, state: "running", actor: opts.actor || null, error: null, result: null, startedAt: opts.now };
  return { ok: true, jobId: jobId, bankCode: code, activeVersionId: cat.activeVersionId };
}

export function abortCollect(store, opts) {
  const cat = store.catalog[opts.bankCode];
  const job = store.jobs[opts.jobId];
  if (!cat || !job || cat.lockJobId !== opts.jobId) return { ok: false, status: 409, error: "采集锁无效" };
  cat.lockJobId = null;
  cat.lockUntil = 0;
  job.state = "failed";
  job.error = opts.error || "采集失败";
  job.finishedAt = opts.now;
  return { ok: false, status: 422, error: job.error, jobId: job.id, bankCode: opts.bankCode, activeVersionId: cat.activeVersionId };
}

export function saveCandidate(store, opts) {
  const cat = store.catalog[opts.bankCode];
  const job = store.jobs[opts.jobId];
  const snap = opts.snapshot;
  if (!cat || !job || cat.lockJobId !== opts.jobId) return { ok: false, status: 409, error: "采集锁无效" };
  if (!snap || !Array.isArray(snap.questions) || !snap.versionId) return { ok: false, status: 422, error: "候选版本无效" };
  const existing = Object.keys(store.versions).map((id) => store.versions[id]).find((v) => v.bankCode === opts.bankCode && v.corpusHash === snap.corpusHash);
  cat.lockJobId = null;
  cat.lockUntil = 0;
  if (existing) {
    job.state = "unchanged";
    job.result = { versionId: existing.id, unchanged: true };
    job.finishedAt = opts.now;
    return { ok: true, unchanged: true, versionId: existing.id, activeVersionId: cat.activeVersionId, bankCode: opts.bankCode };
  }
  store.versions[snap.versionId] = {
    id: snap.versionId,
    bankCode: opts.bankCode,
    status: "candidate",
    corpusHash: snap.corpusHash,
    snapshot: snap,
    questions: snap.questions,
    media: snap.media || [],
    validation: snap.validation,
    provenance: snap.provenance,
    createdBy: opts.actor || null,
    createdAt: opts.now,
  };
  job.state = "preview_ready";
  job.result = { versionId: snap.versionId, questionCount: snap.questionCount, mediaCount: snap.mediaCount, validation: snap.validation };
  job.finishedAt = opts.now;
  return { ok: true, unchanged: false, versionId: snap.versionId, activeVersionId: cat.activeVersionId, bankCode: opts.bankCode, validation: snap.validation };
}

export async function runBoundedCollect(store, opts) {
  const begun = beginCollect(store, opts);
  if (!begun.ok) return begun;
  const progressBefore = store.progress;
  const permsBefore = store.permissions;
  try {
    const snapshot = await opts.collect();
    const saved = saveCandidate(store, { bankCode: begun.bankCode, jobId: begun.jobId, snapshot: snapshot, actor: opts.actor, now: opts.now });
    saved.progressUntouched = store.progress === progressBefore;
    saved.permissionsUntouched = store.permissions === permsBefore;
    return saved;
  } catch (e) {
    const aborted = abortCollect(store, { bankCode: begun.bankCode, jobId: begun.jobId, error: e.message || String(e), now: opts.now });
    aborted.progressUntouched = store.progress === progressBefore;
    aborted.permissionsUntouched = store.permissions === permsBefore;
    return aborted;
  }
}

export function confirmPhrase(action, versionId) {
  if (action === "rollback") return "回滚到版本 " + versionId;
  return "发布版本 " + versionId;
}

export function casDecision(store, cmd) {
  const cat = store.catalog[cmd.bankCode];
  if (!cat) return { ok: false, status: 404, error: "题库未配置" };
  const target = store.versions[cmd.targetId];
  if (!target || target.bankCode !== cmd.bankCode) return { ok: false, status: 404, error: "版本不存在" };
  if (cmd.confirm !== confirmPhrase(cmd.action, cmd.targetId)) return { ok: false, status: 400, error: "确认短语不正确，已取消" };
  const expected = cmd.expectedActiveId || null;
  if ((cat.activeVersionId || null) !== expected) return { ok: false, status: 409, error: "生效版本已变化", code: "cas_conflict" };
  if (cmd.action === "publish") {
    if (target.status !== "candidate" && target.status !== "published") return { ok: false, status: 409, error: "只能发布候选版本" };
    if (target.validation && target.validation.promotionBlocked) {
      return { ok: false, status: 409, error: "校验未通过，已阻止发布", reasons: target.validation.reasons };
    }
    if (cat.activeVersionId && cat.activeVersionId !== target.id) {
      const prev = store.versions[cat.activeVersionId];
      const diff = diffQuestions(prev ? prev.questions : [], target.questions);
      if (diff.promotionBlocked) return { ok: false, status: 409, error: "相对当前生效版本的差异不安全，已阻止发布", reasons: diff.blockReasons };
    }
  } else if (cmd.action === "rollback") {
    if (target.status !== "retained" && target.status !== "published") return { ok: false, status: 409, error: "只能回滚到曾经发布的版本" };
    if (target.id === cat.activeVersionId) return { ok: false, status: 409, error: "该版本已是当前生效版本" };
  } else return { ok: false, status: 400, error: "未知操作" };
  return { ok: true, from: cat.activeVersionId, to: target.id };
}

function applyCas(store, cmd) {
  const cat = store.catalog[cmd.bankCode];
  const target = store.versions[cmd.targetId];
  if (cat.activeVersionId && cat.activeVersionId !== target.id) {
    const prev = store.versions[cat.activeVersionId];
    if (prev && prev.status === "published") prev.status = "retained";
  }
  target.status = "published";
  cat.activeVersionId = target.id;
  store.audit.push({
    action: cmd.action,
    actor: cmd.actor || null,
    bankCode: cmd.bankCode,
    fromVersionId: cmd.expectedActiveId || null,
    toVersionId: target.id,
    at: cmd.now,
  });
  return { ok: true, activeVersionId: target.id, fromVersionId: cmd.expectedActiveId || null, toVersionId: target.id };
}

export function publishVersion(store, cmd) {
  const progress = store.progress;
  const perms = store.permissions;
  const decision = casDecision(store, Object.assign({ action: "publish" }, cmd));
  if (!decision.ok) return decision;
  const applied = applyCas(store, Object.assign({ action: "publish" }, cmd));
  applied.progressUntouched = store.progress === progress;
  applied.permissionsUntouched = store.permissions === perms;
  return applied;
}

export function rollbackVersion(store, cmd) {
  const progress = store.progress;
  const perms = store.permissions;
  const decision = casDecision(store, Object.assign({ action: "rollback" }, cmd));
  if (!decision.ok) return decision;
  const applied = applyCas(store, Object.assign({ action: "rollback" }, cmd));
  applied.progressUntouched = store.progress === progress;
  applied.permissionsUntouched = store.permissions === perms;
  return applied;
}

export function previewCandidate(store, bankCode, versionId) {
  const target = store.versions[versionId];
  if (!target || target.bankCode !== bankCode) return { ok: false, status: 404, error: "版本不存在" };
  const cat = store.catalog[bankCode];
  const prev = cat && cat.activeVersionId ? store.versions[cat.activeVersionId] : null;
  const diff = diffQuestions(prev ? prev.questions : [], target.questions);
  const blocked = !!(target.validation && target.validation.promotionBlocked) || diff.promotionBlocked;
  return {
    ok: true,
    versionId: target.id,
    status: target.status,
    activeVersionId: cat ? cat.activeVersionId : null,
    questionCount: target.questions.length,
    mediaCount: (target.media || []).length,
    sourceUpdatedAt: target.provenance ? target.provenance.sourceUpdatedAt : null,
    collectedAt: target.provenance ? target.provenance.collectedAt : null,
    sourceUpdatedAtZh: formatShanghai(target.provenance && target.provenance.sourceUpdatedAt),
    collectedAtZh: formatShanghai(target.provenance && target.provenance.collectedAt),
    validation: target.validation,
    provenance: target.provenance,
    diff: diff,
    promotionBlocked: blocked,
  };
}
