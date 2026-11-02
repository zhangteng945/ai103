// IT认证练习 — itc-bank
// Auth: Bearer JWT → getUser; expires_at + exams entitlement.
// Modes (response.mode):
//   meta    ?exam=&meta=1                 {total, domains?, index[]} and questions:[]
//   page    ?exam=&offset=&limit=         one page, max 80 (client uses 50)
//   ids     ?exam=&ids=a,b                only those questions, max 80
//   sample  ?exam=&sample=N               N random questions, max 80. Optional seed.
//   search  ?exam=&q=&offset=&limit=      stem/option match; echoes q and matchTotal
// index items have no stems: {id, domain, type, control, caseStudy, caseStudyId, boxes, yn, dd, n?}
// Rate limit: 120 requests / 5 min per user+exam.
import { createClient } from "npm:@supabase/supabase-js@2";

const ALLOWED_EXAMS = ["ai103", "dop-c02", "dp-700", "dp-420"] as const;
type ExamId = (typeof ALLOWED_EXAMS)[number];

const DEFAULT_VERSIONS: Record<ExamId, string> = {
  ai103: "202611011910",
  "dop-c02": "202611011900",
  "dp-700": "202611011900",
  "dp-420": "202611011900",
};

const DEFAULT_LIMIT = 50;
const MAX_LIMIT = 80;
const RATE_WINDOW_MS = 5 * 60 * 1000;
const RATE_MAX = 120;

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, prefer",
  "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
};

type Params = {
  exam: string;
  offset: number;
  limit: number;
  version: string | null;
  ids: string[] | null;
  sample: number | null;
  seed: string | null;
  meta: boolean;
  q: string | null;
};

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...cors, "Content-Type": "application/json; charset=utf-8" },
  });
}
function err(msg: string, status = 400) {
  return json({ ok: false, error: msg }, status);
}
function isExamId(s: string): s is ExamId {
  return (ALLOWED_EXAMS as readonly string[]).includes(s);
}
function clampInt(n: unknown, def: number, min: number, max: number) {
  const v = Number(n);
  if (!Number.isFinite(v)) return def;
  return Math.min(max, Math.max(min, Math.trunc(v)));
}
function accountActive(am: Record<string, unknown>): boolean {
  const exp = am.expires_at;
  if (exp == null || exp === "") return true;
  const t = Date.parse(String(exp));
  if (Number.isNaN(t)) return false;
  return t > Date.now();
}
function hasExam(am: Record<string, unknown>, examId: string): boolean {
  const exams = am.exams;
  if (exams == null) return true;
  if (!Array.isArray(exams)) return false;
  return exams.map(String).some((e) => e === examId || e === "*");
}
function extractQuestionsFromJs(js: string): unknown[] {
  const m = js.match(/const\s+QUESTIONS[_A-Z0-9]*\s*=\s*/);
  if (!m || m.index == null) throw new Error("题库 JS 格式无效");
  const start = js.indexOf("[", m.index + m[0].length - 1);
  if (start < 0) throw new Error("题库 JS 缺少数组");
  let i = start, depth = 0, inStr = false, quote = "", esc = false;
  for (; i < js.length; i++) {
    const c = js[i];
    if (inStr) {
      if (esc) { esc = false; continue; }
      if (c === "\\") { esc = true; continue; }
      if (c === quote) inStr = false;
      continue;
    }
    if (c === '"' || c === "'" || c === "`") { inStr = true; quote = c; continue; }
    if (c === "[") depth++;
    else if (c === "]") {
      depth--;
      if (depth === 0) {
        const arr = JSON.parse(js.slice(start, i + 1));
        if (!Array.isArray(arr)) throw new Error("题库不是数组");
        return arr;
      }
    }
  }
  throw new Error("题库 JS 数组未闭合");
}
async function loadBank(
  admin: ReturnType<typeof createClient>,
  examId: ExamId,
  version: string,
): Promise<{ questions: unknown[]; version: string }> {
  const jsonPath = `${examId}/${version}.json`;
  const { data: jsonBlob, error: jsonErr } = await admin.storage.from("banks").download(jsonPath);
  if (!jsonErr && jsonBlob) {
    const text = await jsonBlob.text();
    const questions = JSON.parse(text);
    if (!Array.isArray(questions)) throw new Error("题库 JSON 不是数组");
    return { questions, version };
  }
  const jsPath = `${examId}/${version}.js`;
  const { data: jsBlob, error: jsErr } = await admin.storage.from("banks").download(jsPath);
  if (jsErr || !jsBlob) throw new Error(`题库不存在：${jsonPath} / ${jsPath}`);
  return { questions: extractQuestionsFromJs(await jsBlob.text()), version };
}
function questionId(q: unknown): string | null {
  if (!q || typeof q !== "object") return null;
  const o = q as Record<string, unknown>;
  if (o.id != null && o.id !== "") return String(o.id);
  if (o.qid != null && o.qid !== "") return String(o.qid);
  return null;
}
function questionDomain(q: unknown): string | null {
  if (!q || typeof q !== "object") return null;
  const o = q as Record<string, unknown>;
  if (o.domain == null || o.domain === "") return null;
  return String(o.domain);
}
function seededRng(seed: string): () => number {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  let t = h >>> 0;
  return () => {
    t = (t + 0x6d2b79f5) >>> 0;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}
function sampleQuestions(questions: unknown[], n: number, seed: string | null): unknown[] {
  const take = Math.min(n, questions.length);
  if (take <= 0) return [];
  const rng = seed ? seededRng(seed) : Math.random;
  const idx = questions.map((_, i) => i);
  for (let i = idx.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    const tmp = idx[i];
    idx[i] = idx[j];
    idx[j] = tmp;
  }
  return idx.slice(0, take).map((i) => questions[i]);
}
function parseIds(raw: unknown): string[] | null {
  if (raw == null || raw === "") return null;
  if (Array.isArray(raw)) return raw.map((x) => String(x).trim()).filter((s) => s.length > 0);
  const s = String(raw).trim();
  if (!s) return null;
  if (s.startsWith("[")) {
    try {
      const parsed = JSON.parse(s);
      if (Array.isArray(parsed)) return parsed.map((x) => String(x).trim()).filter((x) => x.length > 0);
    } catch { /* comma split */ }
  }
  return s.split(",").map((x) => x.trim()).filter((x) => x.length > 0);
}
function parseSample(raw: unknown): number | null {
  if (raw == null || raw === "") return null;
  const v = Number(raw);
  if (!Number.isFinite(v) || v <= 0) return null;
  return Math.trunc(v);
}
function parseMeta(raw: unknown): boolean {
  if (raw == null || raw === "") return false;
  if (raw === true || raw === 1) return true;
  const s = String(raw).trim().toLowerCase();
  return s === "1" || s === "true" || s === "yes";
}
function isYNToken(v: unknown): boolean {
  if (v == null) return false;
  const s = String(v).replace(/[\u00a0\u3000]/g, " ").trim().toLowerCase();
  return s === "yes" || s === "no" || s === "y" || s === "n" || s === "true" || s === "false" || s === "是" || s === "否";
}
function choiceIsYN(c: unknown): boolean {
  if (typeof c === "string") return isYNToken(c);
  if (!c || typeof c !== "object") return false;
  const o = c as Record<string, unknown>;
  return [o.text, o.textZh, o.textEn, o.zh, o.en, o.key].some(isYNToken);
}
const DD_RULES: RegExp[] = [
  /CodePipeline|CodeBuild|CodeDeploy|CodeCommit|CodeArtifact|CodeGuru|pipeline|blue\/green|canary|CI\/CD|unit test|integration test|buildspec|appspec|Elastic Beanstalk|ECR|deploy/gi,
  /CloudFormation|StackSets?|\bCDK\b|Systems Manager|State Manager|OpsWorks|Image Builder|\bAMIs?\b|Service Catalog|Organizations|Control Tower|Terraform|template|Parameter Store|Patch Manager|AppConfig|Proton/gi,
  /Auto Scaling|Multi-AZ|failover|disaster recovery|\bRTO\b|\bRPO\b|Route 53|global table|global database|AWS Backup|highly? availab|load balancer|cross-Region|resilien|fault[- ]toleran|read replica/gi,
  /CloudWatch|metrics?\b|dashboard|X-Ray|Logs Insights|OpenSearch|Kinesis|log group|logging|\blogs?\b|Athena|QuickSight|trace/gi,
  /EventBridge|\bSNS\b|incident|remediat|AWS Health|Incident Manager|troubleshoot|runbook|alarms?\b|notif|Step Functions/gi,
  /\bIAM\b|\bKMS\b|Secrets Manager|GuardDuty|Security Hub|AWS Config|\bSCPs?\b|Inspector|Macie|encrypt|complian|\bWAF\b|permission|least privilege|CloudTrail|vulnerab|Access Analyzer|credential/gi,
];
function ddOf(q: unknown): string {
  const o = (q && typeof q === "object" ? q : {}) as Record<string, unknown>;
  const stem = String(o.stemEn || o.stem || "");
  const opts = Array.isArray(o.options)
    ? o.options.map((opt) => {
      if (!opt || typeof opt !== "object") return "";
      const x = opt as Record<string, unknown>;
      return String(x.text || x.textEn || "");
    }).join(" ")
    : "";
  let best = 0, bs = -1;
  DD_RULES.forEach((re, i) => {
    const s = (stem.match(re) || []).length * 2 + (opts.match(re) || []).length;
    if (s > bs) { bs = s; best = i; }
  });
  return "dd" + (best + 1);
}
function entryNum(o: Record<string, unknown>, id: string): number | null {
  const pdf = o.pdfQuestionNum;
  if (typeof pdf === "number" && pdf > 0) return pdf;
  if (typeof pdf === "string" && /^\d+$/.test(pdf)) return parseInt(pdf, 10);
  const m = /(\d+)$/.exec(id);
  return m ? parseInt(m[1], 10) : null;
}
function indexEntry(q: unknown): Record<string, unknown> | null {
  if (!q || typeof q !== "object") return null;
  const o = q as Record<string, unknown>;
  const id = questionId(q);
  if (!id) return null;
  const boxes = Array.isArray(o.boxes) ? o.boxes : [];
  const opts = Array.isArray(o.options) ? o.options : [];
  let yn = o.control === "yn";
  if (!yn && boxes.length) {
    yn = boxes.every((b) => {
      if (!b || typeof b !== "object") return false;
      const ch = (b as Record<string, unknown>).choices;
      return Array.isArray(ch) && ch.length > 0 && ch.every(choiceIsYN);
    });
  }
  if (!yn && opts.length === 2 && o.type !== "multi") yn = opts.every(choiceIsYN);
  const n = entryNum(o, id);
  const entry: Record<string, unknown> = {
    id,
    domain: questionDomain(q),
    type: o.type ?? null,
    control: o.control ?? null,
    caseStudy: !!o.caseStudy,
    caseStudyId: o.caseStudyId ?? null,
    boxes: boxes.length,
    yn: !!yn,
    dd: ddOf(q),
  };
  if (n != null) entry.n = n;
  return entry;
}
function questionSearchText(q: unknown): string {
  if (!q || typeof q !== "object") return "";
  const o = q as Record<string, unknown>;
  const parts: string[] = [];
  ["id", "qid", "stem", "stemZh", "stemEn", "pdfQuestionNum", "domain"].forEach((k) => {
    if (o[k] != null) parts.push(String(o[k]));
  });
  const opts = Array.isArray(o.options) ? o.options : [];
  for (const opt of opts) {
    if (!opt || typeof opt !== "object") continue;
    const x = opt as Record<string, unknown>;
    ["text", "textZh", "textEn", "id"].forEach((k) => { if (x[k] != null) parts.push(String(x[k])); });
  }
  return parts.join("\n").toLowerCase();
}
function matchesQuery(q: unknown, query: string): boolean {
  const blob = questionSearchText(q);
  return query.toLowerCase().split(/\s+/).filter(Boolean).every((w) => blob.indexOf(w) >= 0);
}
async function parseParams(req: Request): Promise<Params> {
  const url = new URL(req.url);
  let exam = url.searchParams.get("exam") || "";
  let offset: unknown = url.searchParams.get("offset");
  let limit: unknown = url.searchParams.get("limit");
  let version = url.searchParams.get("version");
  let idsRaw: unknown = url.searchParams.get("ids");
  let sampleRaw: unknown = url.searchParams.get("sample");
  let seed: string | null = url.searchParams.get("seed");
  let metaRaw: unknown = url.searchParams.get("meta");
  let qRaw: string | null = url.searchParams.get("q");
  if (req.method === "POST") {
    const ct = req.headers.get("content-type") || "";
    if (ct.includes("application/json")) {
      try {
        const body = await req.json();
        if (body && typeof body === "object") {
          if (body.exam != null) exam = String(body.exam);
          if (body.offset != null) offset = body.offset;
          if (body.limit != null) limit = body.limit;
          if (body.version != null) version = String(body.version);
          if (body.ids != null) idsRaw = body.ids;
          if (body.sample != null) sampleRaw = body.sample;
          if (body.seed != null) seed = String(body.seed);
          if (body.meta != null) metaRaw = body.meta;
          if (body.q != null) qRaw = String(body.q);
        }
      } catch { /* query still used */ }
    }
  }
  const q = qRaw ? String(qRaw).trim().slice(0, 200) : null;
  return {
    exam: String(exam || "").trim().toLowerCase(),
    offset: clampInt(offset == null || offset === "" ? 0 : offset, 0, 0, 1_000_000),
    limit: clampInt(limit == null || limit === "" ? DEFAULT_LIMIT : limit, DEFAULT_LIMIT, 1, MAX_LIMIT),
    version: version ? String(version).trim().replace(/\.(js|json)$/i, "") : null,
    ids: parseIds(idsRaw),
    sample: parseSample(sampleRaw),
    seed: seed ? String(seed).trim() || null : null,
    meta: parseMeta(metaRaw),
    q: q || null,
  };
}
async function logAccess(
  admin: ReturnType<typeof createClient>,
  userId: string,
  examId: string,
  offset: number,
  limit: number,
  total: number,
) {
  try {
    await admin.from("bank_access_log").insert({
      user_id: userId,
      exam_id: examId,
      offset_n: offset,
      limit_n: limit,
      total,
    });
  } catch { /* ignore */ }
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  if (req.method !== "GET" && req.method !== "POST") return err("仅支持 GET 或 POST", 405);

  const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
  const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";
  const anonKey = Deno.env.get("SUPABASE_ANON_KEY") || "";
  if (!supabaseUrl || !serviceKey || !anonKey) return err("服务未配置", 500);

  const authHeader = req.headers.get("Authorization") || "";
  const token = authHeader.replace(/^Bearer\s+/i, "").trim();
  if (!token) return err("缺少登录凭证", 401);

  const userClient = createClient(supabaseUrl, anonKey, {
    global: { headers: { Authorization: `Bearer ${token}` } },
  });
  const { data: userData, error: userErr } = await userClient.auth.getUser(token);
  if (userErr || !userData?.user) return err("登录无效或已过期", 401);
  const user = userData.user;
  const am = (user.app_metadata || {}) as Record<string, unknown>;
  if (!accountActive(am)) return err("账号已过期", 403);

  let params: Params;
  try { params = await parseParams(req); } catch { return err("参数无效"); }
  if (!params.exam) return err("缺少 exam");
  if (!isExamId(params.exam)) return err("未知 exam：" + params.exam);
  if (!hasExam(am, params.exam)) return err("无该题库权限", 403);
  if (params.ids && params.sample != null) return err("ids 与 sample 不能同时使用");
  if (params.q && (params.ids || params.sample != null)) return err("q 不能与 ids 或 sample 同时使用");
  if (params.ids && params.ids.length > MAX_LIMIT) return err(`ids 最多 ${MAX_LIMIT} 个`, 400);
  if (params.sample != null && params.sample > MAX_LIMIT) return err(`sample 最多 ${MAX_LIMIT}`, 400);

  const version = params.version || DEFAULT_VERSIONS[params.exam];
  if (!/^[A-Za-z0-9._-]{1,64}$/.test(version)) return err("version 无效");

  const admin = createClient(supabaseUrl, serviceKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
  try {
    const since = new Date(Date.now() - RATE_WINDOW_MS).toISOString();
    const { count, error: cErr } = await admin
      .from("bank_access_log")
      .select("id", { count: "exact", head: true })
      .eq("user_id", user.id)
      .eq("exam_id", params.exam)
      .gte("created_at", since);
    if (!cErr && typeof count === "number" && count >= RATE_MAX) return err("请求过于频繁，请稍后再试", 429);
  } catch { /* best-effort */ }

  let questions: unknown[];
  let usedVersion = version;
  try {
    const loaded = await loadBank(admin, params.exam, version);
    questions = loaded.questions;
    usedVersion = loaded.version;
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    return err(msg || "题库加载失败", 500);
  }
  const total = questions.length;

  if (params.meta && !params.q) {
    const domains: Record<string, number> = {};
    let hasDomain = false;
    const index: Record<string, unknown>[] = [];
    for (const q of questions) {
      const d = questionDomain(q);
      if (d != null) {
        hasDomain = true;
        domains[d] = (domains[d] || 0) + 1;
      }
      const entry = indexEntry(q);
      if (entry) index.push(entry);
    }
    await logAccess(admin, user.id, params.exam, 0, 0, total);
    const body: Record<string, unknown> = {
      ok: true,
      mode: "meta",
      examId: params.exam,
      version: usedVersion,
      total,
      questions: [],
      index,
    };
    if (hasDomain) body.domains = domains;
    return json(body);
  }

  let slice: unknown[];
  let offset = 0;
  let limit = params.limit;
  let mode = "page";
  let matchTotal: number | undefined;

  if (params.ids) {
    const byId = new Map<string, unknown>();
    for (const q of questions) {
      const id = questionId(q);
      if (id != null && !byId.has(id)) byId.set(id, q);
    }
    slice = [];
    for (const id of params.ids) {
      const q = byId.get(id);
      if (q != null) slice.push(q);
    }
    offset = 0;
    limit = slice.length;
    mode = "ids";
  } else if (params.sample != null) {
    slice = sampleQuestions(questions, params.sample, params.seed);
    offset = 0;
    limit = slice.length;
    mode = "sample";
  } else if (params.q) {
    const matched = questions.filter((q) => matchesQuery(q, params.q as string));
    matchTotal = matched.length;
    offset = Math.min(params.offset, matched.length);
    limit = params.limit;
    slice = matched.slice(offset, offset + limit);
    mode = "search";
  } else {
    offset = Math.min(params.offset, total);
    limit = params.limit;
    slice = questions.slice(offset, offset + limit);
    mode = "page";
  }

  await logAccess(admin, user.id, params.exam, offset, limit, total);
  const body: Record<string, unknown> = {
    ok: true,
    mode,
    examId: params.exam,
    version: usedVersion,
    total,
    offset,
    limit,
    questions: slice,
  };
  if (mode === "search") {
    body.q = params.q;
    body.matchTotal = matchTotal;
  }
  return json(body);
});
