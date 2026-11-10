/** Shared helpers for itc-admin report actions. No Deno/Supabase APIs. */
const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export function parseReportId(id) {
  const s = String(id || "").trim();
  if (!UUID_RE.test(s)) throw new Error("报错编号无效");
  return s;
}

export function parseReportStatus(status) {
  const s = String(status || "").trim();
  if (s === "open" || s === "resolved") return s;
  throw new Error("状态须为 open 或 resolved");
}

export function resolvePatch(status, adminUserId, now = new Date()) {
  const st = parseReportStatus(status);
  if (!adminUserId) throw new Error("缺少管理员标识");
  if (st === "resolved") {
    return { status: "resolved", resolved_at: now.toISOString(), resolved_by: adminUserId };
  }
  return { status: "open", resolved_at: null, resolved_by: null };
}

export function questionLabel(payload, qid) {
  const raw = payload && typeof payload === "object" ? payload.num : null;
  if (raw != null && String(raw).trim() !== "") {
    const n = String(raw).trim();
    return /^第/.test(n) ? n : ("第" + n + "题");
  }
  return String(qid || "");
}
