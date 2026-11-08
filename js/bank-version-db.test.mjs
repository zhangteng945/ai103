/**
 * Local Postgres only. Applies the migration to a throwaway database and checks
 * role behavior. Does not connect to production.
 * node js/bank-version-db.test.mjs
 */
import { execFileSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const migration = path.join(root, "supabase/migrations/20261108183000_bank_versions.sql");
const quotaMigration = path.join(root, "supabase/migrations/20261108193000_search_quota.sql");
const db = "itc_bank_preflight";

function psql(database, args, sql) {
  return execFileSync("sudo", ["-u", "postgres", "psql", "-d", database, "-v", "ON_ERROR_STOP=1", "-X", "-q", ...args], {
    encoding: "utf8",
    input: sql,
    stdio: ["pipe", "pipe", "pipe"],
  });
}
function q(database, sql) {
  return psql(database, ["-t", "-A"], sql).trim();
}
function expectDenied(sql) {
  try {
    psql(db, [], sql);
  } catch (e) {
    const text = String(e.stderr || "") + String(e.stdout || "");
    if (/permission denied/i.test(text)) return;
    throw new Error("expected permission denied, got: " + text);
  }
  throw new Error("statement was allowed:\n" + sql);
}

psql("postgres", [], "DROP DATABASE IF EXISTS " + db + ";");
psql("postgres", [], "CREATE DATABASE " + db + ";");
psql(db, [], `
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'anon') THEN CREATE ROLE anon NOLOGIN; END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'authenticated') THEN CREATE ROLE authenticated NOLOGIN; END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'service_role') THEN CREATE ROLE service_role NOLOGIN BYPASSRLS; END IF;
END $$;
ALTER ROLE service_role NOLOGIN BYPASSRLS;
GRANT anon TO postgres;
GRANT authenticated TO postgres;
GRANT service_role TO postgres;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO anon, authenticated, service_role;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON SEQUENCES TO anon, authenticated, service_role;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT EXECUTE ON FUNCTIONS TO anon, authenticated, service_role;
`);
psql(db, ["-f", migration], "");
psql(db, ["-f", quotaMigration], "");

const funcs = q(db, `
SELECT proname || '|' || prosecdef::text || '|' || coalesce(array_to_string(proconfig, ','), '')
FROM pg_proc
JOIN pg_namespace n ON n.oid = pronamespace
WHERE n.nspname = 'public' AND proname LIKE 'itc_bank_%'
ORDER BY 1;
`);
const lines = funcs.split("\n").filter(Boolean);
if (lines.length !== 4) throw new Error("expected 4 functions, got " + JSON.stringify(lines));
for (const line of lines) {
  const [name, definer, config] = line.split("|");
  if (definer !== "false") throw new Error(name + " is security definer");
  if (config !== "search_path=pg_catalog") throw new Error(name + " search_path is " + config);
}

function priv(role, kind, object) {
  if (kind === "execute") return q(db, `SELECT has_function_privilege('${role}', '${object}', 'EXECUTE')`);
  return q(db, `SELECT has_table_privilege('${role}', '${object}', '${kind}')`);
}
for (const role of ["anon", "authenticated"]) {
  if (priv(role, "execute", "public.itc_bank_try_lock(text,text,integer)") !== "f") throw new Error(role + " can execute try_lock");
  if (priv(role, "execute", "public.itc_bank_release_lock(text,text)") !== "f") throw new Error(role + " can execute release_lock");
  if (priv(role, "execute", "public.itc_bank_abandon_stale(text)") !== "f") throw new Error(role + " can execute abandon_stale");
  if (priv(role, "execute", "public.itc_bank_cas_active(text,text,text,uuid,text)") !== "f") throw new Error(role + " can execute cas_active");
  for (const table of ["bank_catalog", "bank_versions", "bank_jobs", "bank_audit", "bank_media"]) {
    for (const right of ["INSERT", "UPDATE", "DELETE"]) {
      if (priv(role, right, "public." + table) !== "f") throw new Error(role + " has " + right + " on " + table);
    }
  }
}
if (priv("service_role", "execute", "public.itc_bank_cas_active(text,text,text,uuid,text)") !== "t") throw new Error("service_role cannot execute cas");
if (priv("service_role", "UPDATE", "public.bank_catalog") !== "t") throw new Error("service_role cannot update catalog");
if (priv("service_role", "DELETE", "public.bank_catalog") !== "f") throw new Error("service_role can delete catalog");
if (priv("service_role", "DELETE", "public.bank_versions") !== "f") throw new Error("service_role can delete versions");

expectDenied("BEGIN; SET LOCAL ROLE anon; SELECT public.itc_bank_try_lock('az-305','evil',30); COMMIT;");
expectDenied("BEGIN; SET LOCAL ROLE authenticated; SELECT public.itc_bank_cas_active('az-305', NULL, 'missing', NULL, 'publish'); COMMIT;");
expectDenied("BEGIN; SET LOCAL ROLE anon; UPDATE public.bank_catalog SET title = 'hacked' WHERE code = 'az-305'; COMMIT;");
expectDenied("BEGIN; SET LOCAL ROLE authenticated; INSERT INTO public.bank_versions (id, bank_code, status, corpus_hash, snapshot_path, collected_at) VALUES ('x','az-305','candidate','h','p', now()); COMMIT;");
if (q(db, "SELECT title FROM public.bank_catalog WHERE code = 'az-305'") !== "AZ-305") throw new Error("catalog title changed");

psql(db, [], `
CREATE FUNCTION public.now() RETURNS timestamptz LANGUAGE sql AS $$ SELECT timestamptz '2000-01-01' $$;
`);
psql(db, [], `
BEGIN;
SET LOCAL ROLE service_role;
SELECT public.itc_bank_try_lock('az-305', 'job-1', 120);
COMMIT;
`);
const locked = q(db, "SELECT lock_job_id || '|' || (lock_until > timestamptz '2026-01-01')::text FROM public.bank_catalog WHERE code = 'az-305'");
if (locked !== "job-1|true") throw new Error("lock result " + locked);

psql(db, [], `
BEGIN;
SET LOCAL ROLE service_role;
INSERT INTO public.bank_versions (id, bank_code, status, corpus_hash, question_count, media_count, validation, snapshot_path, collected_at)
VALUES ('c-one', 'az-305', 'candidate', 'h1', 1, 0, '{}'::jsonb, 'versions/az-305/c-one.json', pg_catalog.now());
SELECT public.itc_bank_cas_active('az-305', NULL, 'c-one', NULL, 'publish');
INSERT INTO public.bank_versions (id, bank_code, status, corpus_hash, question_count, media_count, validation, snapshot_path, collected_at)
VALUES ('c-two', 'az-305', 'candidate', 'h2', 1, 0, '{}'::jsonb, 'versions/az-305/c-two.json', pg_catalog.now());
SELECT public.itc_bank_cas_active('az-305', 'c-one', 'c-two', NULL, 'publish');
COMMIT;
`);
const cas = q(db, `
SELECT c.active_version_id || '|' || v1.status || '|' || v2.status
FROM public.bank_catalog c
JOIN public.bank_versions v1 ON v1.id = 'c-one'
JOIN public.bank_versions v2 ON v2.id = 'c-two'
WHERE c.code = 'az-305';
`);
if (cas !== "c-two|retained|published") throw new Error("publish transition " + cas);

let conflict = "";
try {
  psql(db, [], "BEGIN; SET LOCAL ROLE service_role; SELECT public.itc_bank_cas_active('az-305', 'c-one', 'c-two', NULL, 'publish'); COMMIT;");
} catch (e) {
  conflict = String(e.stderr || "");
}
if (!/cas_conflict/.test(conflict)) throw new Error("expected cas_conflict, got " + conflict);
if (q(db, "SELECT active_version_id FROM public.bank_catalog WHERE code = 'az-305'") !== "c-two") throw new Error("conflict changed active");

psql(db, [], `
BEGIN;
SET LOCAL ROLE service_role;
SELECT public.itc_bank_cas_active('az-305', 'c-two', 'c-one', NULL, 'rollback');
COMMIT;
`);
const rolled = q(db, `
SELECT c.active_version_id || '|' || v1.status || '|' || v2.status || '|' || (SELECT count(*) FROM public.bank_audit WHERE bank_code = 'az-305')::text
FROM public.bank_catalog c
JOIN public.bank_versions v1 ON v1.id = 'c-one'
JOIN public.bank_versions v2 ON v2.id = 'c-two'
WHERE c.code = 'az-305';
`);
if (rolled !== "c-one|published|retained|3") throw new Error("rollback result " + rolled);

psql(db, [], `
BEGIN;
SET LOCAL ROLE service_role;
INSERT INTO public.bank_jobs (id, bank_code, state, started_at)
VALUES ('old-job', 'az-305', 'running', pg_catalog.now() - pg_catalog.make_interval(mins => 5));
SELECT public.itc_bank_abandon_stale('az-305');
SELECT public.itc_bank_release_lock('az-305', 'job-1');
COMMIT;
`);
if (q(db, "SELECT state FROM public.bank_jobs WHERE id = 'old-job'") !== "abandoned") throw new Error("stale job was not abandoned");
if (q(db, "SELECT lock_job_id IS NULL FROM public.bank_catalog WHERE code = 'az-305'") !== "t") throw new Error("lock was not released");
expectDenied("BEGIN; SET LOCAL ROLE anon; SELECT public.itc_search_reserve('tavily','2026-11',20,1); COMMIT;");
psql(db, [], `
BEGIN;
SET LOCAL ROLE service_role;
SELECT public.itc_search_reserve('tavily','2026-11',1,1);
SELECT public.itc_search_block('tavily','provider_billing_limit');
COMMIT;
`);
if (q(db, "SELECT reserved::text FROM public.bank_search_usage WHERE provider = 'tavily' AND period_key = '2026-11'") !== "1") throw new Error("quota reserve failed");
const blockedNext = q(db, "BEGIN; SET LOCAL ROLE service_role; SELECT public.itc_search_reserve('tavily','2026-12',20,1)->>'reason'; COMMIT;");
if (!blockedNext.includes("billing_blocked")) throw new Error("new period cleared billing block: " + blockedNext);
expectDenied("BEGIN; SET LOCAL ROLE service_role; DELETE FROM public.bank_versions WHERE id = 'c-two'; COMMIT;");
if (q(db, "SELECT count(*) FROM public.bank_versions WHERE id = 'c-two'") !== "1") throw new Error("version row was deleted");

psql("postgres", [], "DROP DATABASE IF EXISTS " + db + ";");
console.log("bank-version-db tests ok");
