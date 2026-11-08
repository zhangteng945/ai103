// IT认证练习 — itc-ingest
// Admin-only bounded collector. Does not publish unless the request includes the confirm phrase.
// service_role stays in the function environment. No schedule. No arbitrary URL from the browser.
import { createClient } from "npm:@supabase/supabase-js@2";
import {
  COLLECT_LIMITS,
  assertAdmin,
  casDecision,
  candidateToSource,
  collectQuizplaySource,
  confirmPhrase,
  diffQuestions,
  discoverExamSources,
  formatShanghai,
  normalizeExamCode,
  previewCandidate,
  REGISTRY,
  selectDiscoveryCandidate,
  SITE_EXAM_CODES,
} from "../_shared/bank-version-core.mjs";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, prefer",
  "Access-Control-Allow-Methods": "POST,OPTIONS",
};

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...cors, "Content-Type": "application/json; charset=utf-8" },
  });
}
function err(msg: string, status = 400, extra?: Record<string, unknown>) {
  return json({ ok: false, error: msg, ...(extra || {}) }, status);
}

function decodeDataUrl(dataUrl: string): Uint8Array {
  const m = /^data:image\/svg\+xml;base64,([a-z0-9+/=]+)$/i.exec(dataUrl || "");
  if (!m) throw new Error("媒体内容无效");
  const bin = atob(m[1]);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

async function resolveHost(host: string): Promise<string[]> {
  const out: string[] = [];
  try {
    for (const ip of await Deno.resolveDns(host, "A")) out.push(ip);
  } catch { /* fail closed if nothing resolves */ }
  try {
    for (const ip of await Deno.resolveDns(host, "AAAA")) out.push(ip);
  } catch { /* ignore */ }
  return out;
}

async function readJson(req: Request): Promise<Record<string, unknown>> {
  const len = Number(req.headers.get("content-length") || 0);
  if (len > 100_000) throw Object.assign(new Error("请求过大"), { status: 413 });
  const text = await req.text();
  if (text.length > 100_000) throw Object.assign(new Error("请求过大"), { status: 413 });
  const body = text ? JSON.parse(text) : {};
  if (!body || typeof body !== "object" || Array.isArray(body)) throw new Error("参数无效");
  return body as Record<string, unknown>;
}

function publicVersion(row: Record<string, unknown>) {
  const provenance = (row.provenance || {}) as Record<string, unknown>;
  const validation = (row.validation || {}) as Record<string, unknown>;
  return {
    id: row.id,
    status: row.status,
    questionCount: row.question_count,
    mediaCount: row.media_count,
    corpusHash: row.corpus_hash,
    sourceUpdatedAt: row.source_updated_at,
    collectedAt: row.collected_at,
    sourceUpdatedAtZh: formatShanghai(row.source_updated_at as string | null),
    collectedAtZh: formatShanghai(row.collected_at as string | null),
    createdAt: row.created_at,
    validation: validation,
    provenance: {
      license: provenance.license || null,
      aiGenerated: provenance.aiGenerated === true,
      official: false,
      fullCorpus: false,
      accuracyCertified: false,
      advertisedCount: provenance.advertisedCount ?? null,
      parsedCount: provenance.parsedCount ?? null,
      warning: provenance.warning || null,
      repo: provenance.repo || null,
      commitSha: provenance.commitSha || null,
    },
    promotionBlocked: validation.promotionBlocked === true,
  };
}

async function loadSnapshot(admin: any, path: string) {
  const { data, error } = await admin.storage.from("banks").download(path);
  if (error || !data) throw new Error("版本快照不存在");
  const parsed = JSON.parse(await data.text());
  if (!parsed || !Array.isArray(parsed.questions)) throw new Error("版本快照无效");
  return parsed;
}

async function collectOne(
  admin: any,
  code: string,
  actor: string,
  sourceRepo?: string,
) {
  const found = await discoverExamSources(code, { resolveHost, fetchImpl: fetch, limits: COLLECT_LIMITS });
  if (!found.ok) {
    return { ok: false, collected: false, discovered: true, code: found.code || normalizeExamCode(code), status: found.status, error: found.message, candidates: found.candidates || [] };
  }
  const chosen = selectDiscoveryCandidate(found, sourceRepo);
  if (!chosen) {
    return { ok: false, collected: false, discovered: true, code: found.code, status: "needs-review", error: found.message, candidates: found.candidates || [] };
  }
  const source = candidateToSource(chosen);
  const bank = { code: found.code, title: chosen.title || found.code };
  const jobId = "job-" + crypto.randomUUID();
  const now = new Date().toISOString();
  await admin.from("bank_catalog").upsert({ code: bank.code, title: bank.title }, { onConflict: "code" });
  await admin.rpc("itc_bank_abandon_stale", { p_code: bank.code });
  const { error: jobErr } = await admin.from("bank_jobs").insert({
    id: jobId,
    bank_code: bank.code,
    state: "running",
    actor,
    started_at: now,
  });
  if (jobErr) return { ok: false, code: bank.code, error: "无法记录采集任务" };
  const { data: locked, error: lockErr } = await admin.rpc("itc_bank_try_lock", {
    p_code: bank.code,
    p_job: jobId,
    p_ttl_seconds: 120,
  });
  if (lockErr || locked !== true) {
    await admin.from("bank_jobs").update({ state: "rejected", error: "该题库已有进行中的采集", finished_at: new Date().toISOString() }).eq("id", jobId);
    return { ok: false, code: bank.code, jobId, error: "该题库已有进行中的采集", status: 409 };
  }
  const started = Date.now();
  try {
    const snap = await collectQuizplaySource(source, {
      bankCode: bank.code,
      now,
      limits: COLLECT_LIMITS,
      resolveHost,
      fetchImpl: (url: string, init: RequestInit) => {
        if (Date.now() - started > 50_000) throw new Error("采集超过单次时限，未写入候选版本");
        return fetch(url, init);
      },
    });
    snap.bankCode = bank.code;
    const { data: existing } = await admin.from("bank_versions").select("id,status").eq("bank_code", bank.code).eq("corpus_hash", snap.corpusHash).maybeSingle();
    if (existing && existing.id) {
      await admin.rpc("itc_bank_release_lock", { p_code: bank.code, p_job: jobId });
      await admin.from("bank_jobs").update({
        state: "unchanged",
        result: { versionId: existing.id, unchanged: true },
        finished_at: new Date().toISOString(),
      }).eq("id", jobId);
      return { ok: true, code: bank.code, jobId, unchanged: true, versionId: existing.id, validation: snap.validation, provenance: snap.provenance };
    }
    const snapshotPath = "versions/" + bank.code + "/" + snap.versionId + ".json";
    const up = await admin.storage.from("banks").upload(snapshotPath, new TextEncoder().encode(JSON.stringify(snap)), {
      contentType: "application/json",
      upsert: false,
    });
    if (up.error && !/already exists|duplicate/i.test(up.error.message || "")) throw new Error("版本快照写入失败");
    const { error: insErr } = await admin.from("bank_versions").insert({
      id: snap.versionId,
      bank_code: bank.code,
      status: "candidate",
      corpus_hash: snap.corpusHash,
      question_count: snap.questionCount,
      media_count: snap.mediaCount,
      validation: snap.validation,
      provenance: snap.provenance,
      snapshot_path: snapshotPath,
      source_updated_at: snap.sourceUpdatedAt,
      collected_at: snap.collectedAt,
      created_by: actor,
    });
    if (insErr) throw new Error("候选版本写入失败");
    const mediaWarnings: string[] = [];
    for (const media of snap.media || []) {
      try {
        const bytes = decodeDataUrl(media.dataUrl);
        const mediaPath = "versions/" + bank.code + "/" + snap.versionId + "/media/" + media.sha256;
        const mediaUp = await admin.storage.from("banks").upload(mediaPath, bytes, { contentType: media.contentType, upsert: false });
        if (mediaUp.error && !/already exists|duplicate/i.test(mediaUp.error.message || "")) mediaWarnings.push(media.sha256);
        else {
          await admin.from("bank_media").upsert({
            version_id: snap.versionId,
            sha256: media.sha256,
            storage_path: mediaPath,
            content_type: media.contentType,
            byte_count: bytes.length,
          });
        }
      } catch {
        mediaWarnings.push(media.sha256);
      }
    }
    await admin.rpc("itc_bank_release_lock", { p_code: bank.code, p_job: jobId });
    await admin.from("bank_jobs").update({
      state: "preview_ready",
      result: { versionId: snap.versionId, questionCount: snap.questionCount, mediaCount: snap.mediaCount, validation: snap.validation, mediaWarnings },
      finished_at: new Date().toISOString(),
    }).eq("id", jobId);
    const { data: cat } = await admin.from("bank_catalog").select("active_version_id").eq("code", bank.code).maybeSingle();
    return {
      ok: true,
      code: bank.code,
      jobId,
      unchanged: false,
      versionId: snap.versionId,
      activeVersionId: cat ? cat.active_version_id : null,
      questionCount: snap.questionCount,
      mediaCount: snap.mediaCount,
      playableCount: snap.playableCount,
      mediaWarnings,
      validation: snap.validation,
      provenance: snap.provenance,
      sourceUpdatedAtZh: formatShanghai(snap.sourceUpdatedAt),
      collectedAtZh: formatShanghai(snap.collectedAt),
    };
  } catch (e) {
    const message = e instanceof Error ? e.message : "采集失败";
    await admin.rpc("itc_bank_release_lock", { p_code: bank.code, p_job: jobId });
    await admin.from("bank_jobs").update({ state: "failed", error: message, finished_at: new Date().toISOString() }).eq("id", jobId);
    return { ok: false, code: bank.code, jobId, error: message };
  }
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  if (req.method !== "POST") return err("仅支持 POST", 405);
  const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
  const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";
  const anonKey = Deno.env.get("SUPABASE_ANON_KEY") || "";
  if (!supabaseUrl || !serviceKey || !anonKey) return err("服务未配置", 500);
  const token = (req.headers.get("Authorization") || "").replace(/^Bearer\s+/i, "").trim();
  if (!token) return err("缺少登录凭证", 401);
  const userClient = createClient(supabaseUrl, anonKey, { global: { headers: { Authorization: `Bearer ${token}` } } });
  const { data: userData, error: userErr } = await userClient.auth.getUser(token);
  if (userErr || !userData?.user) return err("登录无效或已过期", 401);
  const gate = assertAdmin(userData.user);
  if (!gate.ok) return err(String(gate.error || "无权访问"), Number(gate.status || 403));
  const actor = userData.user.id;
  let body: Record<string, unknown>;
  try { body = await readJson(req); } catch (e) {
    const status = (e as { status?: number }).status || 400;
    return err(e instanceof Error ? e.message : "参数无效", status);
  }
  const action = String(body.action || "");
  const admin: any = createClient(supabaseUrl, serviceKey, { auth: { autoRefreshToken: false, persistSession: false } });

  if (action === "registry") {
    return json({
      ok: true,
      family: "quizplay-io",
      siteExamCodes: SITE_EXAM_CODES,
      discovery: "按题库代码在允许的公开组织中查找并核验清单，不是固定的一门考试，也不是任意网址。",
      refused: REGISTRY.refused.map((item) => ({ repo: item.repo, license: item.license, reason: item.reason })),
      scheduling: "disabled",
      grantsAccess: false,
    });
  }

  if (action === "resolve") {
    const found = await discoverExamSources(String(body.code || body.name || ""), { resolveHost, fetchImpl: fetch, limits: COLLECT_LIMITS });
    return json({
      ok: true,
      configured: found.configured === true,
      discovered: true,
      collected: false,
      refused: !!found.refused,
      status: found.status,
      code: found.code,
      message: found.message,
      truncated: !!found.truncated,
      license: found.license || null,
      candidates: (found.candidates || []).map((c: any) => Object.assign({}, c, {
        sourceUpdatedAtZh: formatShanghai(c.sourceUpdatedAt),
        collected: false,
      })),
    });
  }

  if (action === "list" || action === "preview" || action === "publish" || action === "rollback" || action === "collect") {
    if (action === "collect" && body.all === true) {
      const results = [];
      for (const examCode of SITE_EXAM_CODES) {
        try {
          results.push(await collectOne(admin, examCode, actor));
        } catch (e) {
          results.push({ ok: false, collected: false, code: examCode, error: e instanceof Error ? e.message : "检查失败" });
        }
      }
      return json({ ok: true, results, published: false });
    }
    const code = normalizeExamCode(String(body.code || ""));
    if (!code) return err("无法把该名称规范成题库代码", 404);
    if (action === "collect") {
      const result = await collectOne(admin, code, actor, body.sourceRepo ? String(body.sourceRepo) : undefined);
      const httpStatus = result.ok ? 200 : (result.status === "needs-review" ? 409 : (typeof result.status === "number" ? result.status : 422));
      return json(result, httpStatus);
    }
    if (action === "list") {
      const { data: cat } = await admin.from("bank_catalog").select("code,title,active_version_id,lock_job_id,lock_until").eq("code", code).maybeSingle();
      const { data: versions, error } = await admin.from("bank_versions").select("id,status,question_count,media_count,corpus_hash,validation,provenance,source_updated_at,collected_at,created_at,snapshot_path").eq("bank_code", code).order("created_at", { ascending: false });
      if (error) return err("无法读取版本", 500);
      const { data: jobs } = await admin.from("bank_jobs").select("id,state,error,result,started_at,finished_at").eq("bank_code", code).order("started_at", { ascending: false }).limit(10);
      return json({
        ok: true,
        code,
        activeVersionId: cat ? cat.active_version_id : null,
        lockJobId: cat ? cat.lock_job_id : null,
        versions: (versions || []).map((row: any) => publicVersion(row as Record<string, unknown>)),
        jobs: jobs || [],
      });
    }
    const versionId = String(body.versionId || "");
    if (!/^[A-Za-z0-9._-]{1,64}$/.test(versionId)) return err("version 无效");
    const { data: row, error: rowErr } = await admin.from("bank_versions").select("id,bank_code,status,validation,snapshot_path,question_count,media_count,provenance,source_updated_at,collected_at").eq("id", versionId).eq("bank_code", code).maybeSingle();
    if (rowErr || !row) return err("版本不存在", 404);
    if (action === "preview") {
      const snap = await loadSnapshot(admin, row.snapshot_path);
      const { data: cat } = await admin.from("bank_catalog").select("active_version_id").eq("code", code).maybeSingle();
      let prevQuestions: unknown[] = [];
      if (cat && cat.active_version_id) {
        const { data: active } = await admin.from("bank_versions").select("snapshot_path").eq("id", cat.active_version_id).maybeSingle();
        if (active && active.snapshot_path) {
          const prev = await loadSnapshot(admin, active.snapshot_path);
          prevQuestions = prev.questions || [];
        }
      }
      const diff = diffQuestions(prevQuestions, snap.questions || []);
      const validation = row.validation || snap.validation || {};
      const blocked = validation.promotionBlocked === true || diff.promotionBlocked;
      const store = {
        catalog: { [code]: { code, activeVersionId: cat ? cat.active_version_id : null, lockJobId: null, lockUntil: 0 } },
        versions: {
          [versionId]: { id: versionId, bankCode: code, status: row.status, questions: snap.questions, media: snap.media || [], validation, provenance: snap.provenance },
        },
        jobs: {},
        audit: [],
        progress: {},
        permissions: {},
      };
      if (cat && cat.active_version_id && cat.active_version_id !== versionId) {
        store.versions[cat.active_version_id] = { id: cat.active_version_id, bankCode: code, status: "published", questions: prevQuestions, media: [], validation: {}, provenance: {} };
      }
      const view = previewCandidate(store, code, versionId);
      return json({
        ok: true,
        versionId,
        status: row.status,
        activeVersionId: cat ? cat.active_version_id : null,
        questionCount: snap.questionCount,
        mediaCount: snap.mediaCount,
        sourceUpdatedAt: snap.sourceUpdatedAt,
        collectedAt: snap.collectedAt,
        sourceUpdatedAtZh: formatShanghai(snap.sourceUpdatedAt),
        collectedAtZh: formatShanghai(snap.collectedAt),
        validation,
        provenance: snap.provenance,
        diff,
        promotionBlocked: blocked,
        preview: view,
      });
    }
    const expected = body.expectedActiveId == null || body.expectedActiveId === "" ? null : String(body.expectedActiveId);
    const confirm = String(body.confirm || "");
    const { data: cat } = await admin.from("bank_catalog").select("active_version_id").eq("code", code).maybeSingle();
    const activeId = cat ? cat.active_version_id : null;
    if ((activeId || null) !== expected) return err("生效版本已变化", 409, { code: "cas_conflict" });
    if (confirm !== confirmPhrase(action, versionId)) return err("确认短语不正确，已取消");
    if (action === "publish") {
      const validation = row.validation || {};
      if (validation.promotionBlocked === true) return err("校验未通过，已阻止发布", 409, { reasons: validation.reasons || [] });
      if (row.status !== "candidate" && row.status !== "published") return err("只能发布候选版本", 409);
      if (activeId && activeId !== versionId) {
        const snap = await loadSnapshot(admin, row.snapshot_path);
        const { data: active } = await admin.from("bank_versions").select("snapshot_path").eq("id", activeId).maybeSingle();
        const prev = active && active.snapshot_path ? await loadSnapshot(admin, active.snapshot_path) : { questions: [] };
        const diff = diffQuestions(prev.questions || [], snap.questions || []);
        if (diff.promotionBlocked) return err("相对当前生效版本的差异不安全，已阻止发布", 409, { reasons: diff.blockReasons });
      }
    } else if (row.status !== "retained" && row.status !== "published") {
      return err("只能回滚到曾经发布的版本", 409);
    } else if (activeId === versionId) {
      return err("该版本已是当前生效版本", 409);
    }
    const decision = casDecision({
      catalog: { [code]: { code, activeVersionId: activeId, lockJobId: null, lockUntil: 0 } },
      versions: { [versionId]: { id: versionId, bankCode: code, status: row.status, validation: row.validation, questions: [] } },
      jobs: {},
      audit: [],
      progress: {},
      permissions: {},
    }, { bankCode: code, targetId: versionId, expectedActiveId: expected, confirm, action, actor, now: new Date().toISOString() });
    if (!decision.ok && decision.code !== "cas_conflict") {
      // SQL is authoritative for the pointer. Intrinsic blocks were already returned.
      if (decision.status === 400) return err(decision.error, 400);
    }
    const { data: casData, error: casErr } = await admin.rpc("itc_bank_cas_active", {
      p_code: code,
      p_expected: expected,
      p_target: versionId,
      p_actor: actor,
      p_action: action,
    });
    if (casErr) {
      const msg = String(casErr.message || "");
      if (/cas_conflict/.test(msg)) return err("生效版本已变化", 409, { code: "cas_conflict" });
      if (/promotion_blocked/.test(msg)) return err("校验未通过，已阻止发布", 409);
      if (/bad_status/.test(msg)) return err(action === "rollback" ? "只能回滚到曾经发布的版本" : "只能发布候选版本", 409);
      return err("版本切换失败", 409);
    }
    return json({ ok: true, action, code, activeVersionId: casData || versionId, fromVersionId: expected, toVersionId: versionId });
  }

  if (action === "job") {
    const jobId = String(body.jobId || "");
    const { data, error } = await admin.from("bank_jobs").select("id,bank_code,state,error,result,started_at,finished_at").eq("id", jobId).maybeSingle();
    if (error || !data) return err("任务不存在", 404);
    return json({ ok: true, job: data });
  }

  return err("未知操作");
});
