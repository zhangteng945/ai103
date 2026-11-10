// IT认证练习 — 管理后台 Edge Function（verify_jwt=true）
// 仅允许 app_metadata.role === "admin"；用 Auth getUser 读最新元数据，不信可伪造的 user_metadata。
// service_role 仅在函数内使用（平台注入），永不下发到前端。
import { createClient } from "npm:@supabase/supabase-js@2";
import { parseReportId, parseReportStatus, resolvePatch, questionLabel } from "./reports-lib.mjs";

const DOMAIN = "ai103.local";
const TZ = "Asia/Shanghai";
const TZ_OFFSET = "+08:00";
const DEFAULT_EXAMS = ["ai103"];
const DEFAULT_DAYS = 30;
const DEFAULT_MAX_DEVICES = 2;

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

function err(msg: string, status = 400) {
  return json({ ok: false, error: msg }, status);
}

function emailOf(n: string) {
  const s = String(n || "").trim().toLowerCase();
  if (!s) return "";
  return s.includes("@") ? s : `${s}@${DOMAIN}`;
}

function ymdShanghai(d = new Date()) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: TZ,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(d);
  const get = (t: string) => parts.find((p) => p.type === t)?.value || "";
  return `${get("year")}${get("month")}${get("day")}`;
}

function genPassword() {
  const bytes = new Uint8Array(3);
  crypto.getRandomValues(bytes);
  const letters = Array.from(bytes, (b) => String.fromCharCode(97 + (b % 26))).join("");
  return ymdShanghai() + letters;
}

function fmtZh(iso: string | null | undefined) {
  if (!iso) return "-";
  try {
    return new Date(iso).toLocaleString("zh-CN", { timeZone: TZ, hour12: false });
  } catch {
    return String(iso);
  }
}

function expiryIso(opts: { days?: number; until?: string; from?: string | null }) {
  if (opts.until) {
    const u = String(opts.until).trim();
    if (/^\d{4}-\d{2}-\d{2}$/.test(u)) return new Date(`${u}T23:59:59${TZ_OFFSET}`).toISOString();
    const t = Date.parse(u);
    if (!isNaN(t)) return new Date(t).toISOString();
    throw new Error("日期格式无效，请用 YYYY-MM-DD");
  }
  const days = Number(opts.days ?? DEFAULT_DAYS);
  if (!Number.isFinite(days) || days <= 0) throw new Error("天数须为正数");
  const base = opts.from && Date.parse(opts.from) > Date.now() ? new Date(opts.from) : new Date();
  base.setTime(base.getTime() + days * 86400000);
  return base.toISOString();
}

function statusOf(u: { banned_until?: string | null; app_metadata?: Record<string, unknown>; user_metadata?: Record<string, unknown> }) {
  if (u.banned_until && Date.parse(u.banned_until) > Date.now()) return "停用";
  const am = u.app_metadata || {};
  const um = u.user_metadata || {};
  const exp = (am.expires_at as string) || (um.expires_at as string);
  if (exp && Date.parse(exp) <= Date.now()) return "已过期";
  return "有效";
}

function rowOf(u: any) {
  const am = u.app_metadata || {};
  const um = u.user_metadata || {};
  const exp = am.expires_at || um.expires_at || null;
  const exams = Array.isArray(am.exams) ? am.exams : [];
  return {
    id: u.id,
    email: u.email,
    status: statusOf(u),
    expires_at: exp,
    expires_at_zh: fmtZh(exp),
    exams,
    max_devices: am.max_devices ?? DEFAULT_MAX_DEVICES,
    role: am.role || null,
    last_sign_in_at: u.last_sign_in_at || null,
    last_sign_in_zh: fmtZh(u.last_sign_in_at),
    created_at: u.created_at || null,
    created_at_zh: fmtZh(u.created_at),
  };
}

async function allUsers(admin: ReturnType<typeof createClient>) {
  const out: any[] = [];
  for (let page = 1; ; page++) {
    const { data, error } = await admin.auth.admin.listUsers({ page, perPage: 200 });
    if (error) throw new Error(error.message);
    out.push(...(data?.users || []));
    if (!data?.users || data.users.length < 200) break;
  }
  return out;
}

async function findUser(admin: ReturnType<typeof createClient>, nameOrEmail: string) {
  const e = emailOf(nameOrEmail);
  if (!e) throw new Error("请提供用户名或邮箱");
  const users = await allUsers(admin);
  const u = users.find((x) => (x.email || "").toLowerCase() === e);
  if (!u) throw new Error("找不到账号 " + e);
  return u;
}

async function nextLocalUsername(admin: ReturnType<typeof createClient>) {
  const users = await allUsers(admin);
  const taken = new Set(
    users
      .map((u) => (u.email || "").toLowerCase())
      .filter((e) => e.endsWith("@" + DOMAIN))
      .map((e) => e.slice(0, -(DOMAIN.length + 1))),
  );
  for (let i = 1; i < 10000; i++) {
    const n = "user" + i;
    if (!taken.has(n)) return n;
  }
  throw new Error("无法分配用户名");
}

async function setAppMeta(admin: ReturnType<typeof createClient>, u: any, patch: Record<string, unknown>) {
  const { data, error } = await admin.auth.admin.updateUserById(u.id, {
    app_metadata: { ...(u.app_metadata || {}), ...patch },
  });
  if (error) throw new Error(error.message);
  return data.user;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  if (req.method !== "POST") return err("仅支持 POST", 405);

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

  // 必须用 Auth 返回的最新 app_metadata，不可只信 JWT/user_metadata
  const role = (userData.user.app_metadata || {}).role;
  if (role !== "admin") return err("无管理员权限", 403);

  let body: any = {};
  try {
    body = await req.json();
  } catch {
    return err("请求体须为 JSON");
  }
  const action = String(body.action || "").trim();
  if (!action) return err("缺少 action");

  const admin = createClient(supabaseUrl, serviceKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  try {
    switch (action) {
      case "list": {
        const rows = (await allUsers(admin)).map(rowOf);
        rows.sort((a, b) => String(b.created_at || "").localeCompare(String(a.created_at || "")));
        return json({ ok: true, users: rows });
      }
      case "create": {
        let name = String(body.username || body.name || body.email || "").trim();
        if (!name) name = await nextLocalUsername(admin);
        const e = emailOf(name);
        const days = body.days != null ? Number(body.days) : DEFAULT_DAYS;
        let exams: string[];
        if (Array.isArray(body.exams) && body.exams.length) exams = body.exams.map(String);
        else if (typeof body.exams === "string" && body.exams.trim()) {
          exams = body.exams.split(",").map((s: string) => s.trim()).filter(Boolean);
        } else exams = [...DEFAULT_EXAMS];
        const max_devices = body.max_devices != null ? Number(body.max_devices) : DEFAULT_MAX_DEVICES;
        const password = body.password ? String(body.password) : genPassword();
        const expires_at = body.until
          ? expiryIso({ until: String(body.until) })
          : expiryIso({ days });
        const { data, error } = await admin.auth.admin.createUser({
          email: e,
          password,
          email_confirm: true,
          app_metadata: { expires_at, exams, max_devices },
        });
        if (error) throw new Error(error.message);
        return json({
          ok: true,
          user: rowOf(data.user),
          password,
          message: `已创建 ${e}，密码仅显示一次`,
        });
      }
      case "renew": {
        const u = await findUser(admin, body.username || body.email || body.name);
        const cur = (u.app_metadata || {}).expires_at || (u.user_metadata || {}).expires_at || null;
        const exp = body.until
          ? expiryIso({ until: String(body.until) })
          : expiryIso({ days: Number(body.days ?? DEFAULT_DAYS), from: cur });
        const nu = await setAppMeta(admin, u, { expires_at: exp });
        return json({ ok: true, user: rowOf(nu), message: `${u.email} 续期至 ${fmtZh(exp)}` });
      }
      case "exams": {
        const u = await findUser(admin, body.username || body.email || body.name);
        let exams: string[];
        if (Array.isArray(body.exams)) exams = body.exams.map(String);
        else if (typeof body.exams === "string") exams = body.exams.split(",").map((s: string) => s.trim()).filter(Boolean);
        else throw new Error("请提供 exams 数组或逗号分隔字符串");
        if (!exams.length) throw new Error("题库列表不能为空");
        const nu = await setAppMeta(admin, u, { exams });
        return json({ ok: true, user: rowOf(nu), message: `${u.email} 题库：${exams.join(",")}` });
      }
      case "disable": {
        const u = await findUser(admin, body.username || body.email || body.name);
        const { data, error } = await admin.auth.admin.updateUserById(u.id, { ban_duration: "876000h" } as any);
        if (error) throw new Error(error.message);
        return json({ ok: true, user: rowOf(data.user), message: `${u.email} 已停用` });
      }
      case "enable": {
        const u = await findUser(admin, body.username || body.email || body.name);
        const { data, error } = await admin.auth.admin.updateUserById(u.id, { ban_duration: "none" } as any);
        if (error) throw new Error(error.message);
        return json({ ok: true, user: rowOf(data.user), message: `${u.email} 已启用` });
      }
      case "reset-password": {
        const u = await findUser(admin, body.username || body.email || body.name);
        const password = body.password ? String(body.password) : genPassword();
        const { data, error } = await admin.auth.admin.updateUserById(u.id, { password });
        if (error) throw new Error(error.message);
        return json({
          ok: true,
          user: rowOf(data.user),
          password,
          message: `${u.email} 新密码仅显示一次`,
        });
      }
      case "reset-devices": {
        const u = await findUser(admin, body.username || body.email || body.name);
        const { error } = await admin.from("account_devices").delete().eq("user_id", u.id);
        if (error) throw new Error(error.message);
        return json({ ok: true, message: `${u.email} 设备记录已清空` });
      }
      case "max-devices": {
        const u = await findUser(admin, body.username || body.email || body.name);
        const n = Number(body.max_devices ?? body.n);
        if (!Number.isFinite(n) || n < 0) throw new Error("设备上限须为 ≥0 的数字（0=不限）");
        const nu = await setAppMeta(admin, u, { max_devices: n });
        return json({ ok: true, user: rowOf(nu), message: `${u.email} 设备上限：${n}` });
      }
      case "reports": {
        const limit = Math.min(200, Math.max(1, Number(body.limit || 50)));
        const { data, error } = await admin
          .from("issue_reports")
          .select("id,user_id,exam_id,qid,note,payload,created_at,status,resolved_at,resolved_by")
          .order("created_at", { ascending: false })
          .limit(limit);
        if (error) throw new Error(error.message);
        const users = await allUsers(admin);
        const emap = new Map(users.map((u) => [u.id, u.email]));
        const reports = (data || []).map((r: any) => ({
          ...r,
          status: r.status || "open",
          email: emap.get(r.user_id) || r.user_id,
          created_at_zh: fmtZh(r.created_at),
          resolved_at_zh: fmtZh(r.resolved_at),
          resolved_by_email: r.resolved_by ? (emap.get(r.resolved_by) || r.resolved_by) : null,
          question_label: questionLabel(r.payload, r.qid),
        }));
        return json({ ok: true, reports });
      }
      case "resolve-report": {
        const id = parseReportId(body.id);
        const status = parseReportStatus(body.status);
        const adminId = userData.user.id;
        const patch = resolvePatch(status, adminId);
        const { data, error } = await admin
          .from("issue_reports")
          .update(patch)
          .eq("id", id)
          .select("id,status,resolved_at,resolved_by")
          .maybeSingle();
        if (error) throw new Error(error.message);
        if (!data) throw new Error("找不到该报错");
        return json({
          ok: true,
          report: data,
          message: data.status === "resolved" ? "已标记为已处理" : "已标回未处理",
        });
      }
      case "delete-report": {
        const id = parseReportId(body.id);
        const { data, error } = await admin
          .from("issue_reports")
          .delete()
          .eq("id", id)
          .select("id")
          .maybeSingle();
        if (error) throw new Error(error.message);
        if (!data) throw new Error("找不到该报错");
        return json({ ok: true, id: data.id, message: "已删除该报错" });
      }
      default:
        return err("未知操作：" + action);
    }
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    return err(msg || "操作失败", 400);
  }
});
