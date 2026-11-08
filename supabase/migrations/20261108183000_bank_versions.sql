-- Question-bank versions. Source only: do not apply this against production from the agent.
-- Existing exams keep working through itc-bank legacy files until a catalog row is published.
-- anon/authenticated have no grants and no policies.
-- Lock/publish functions stay in public so PostgREST /rpc keeps working, but they are
-- SECURITY INVOKER with search_path = pg_catalog. service_role (BYPASSRLS) is the only
-- EXECUTE grantee and the only role granted the table writes the functions perform.
-- Versions and media are not deleted by this migration. There is no cleanup job.

create table if not exists public.bank_catalog (
  code text primary key,
  title text not null,
  active_version_id text,
  lock_job_id text,
  lock_until timestamptz,
  updated_at timestamptz not null default now()
);

create table if not exists public.bank_versions (
  id text primary key,
  bank_code text not null references public.bank_catalog(code),
  status text not null check (status in ('candidate', 'published', 'retained')),
  corpus_hash text not null,
  question_count integer not null default 0,
  media_count integer not null default 0,
  validation jsonb not null default '{}'::jsonb,
  provenance jsonb not null default '{}'::jsonb,
  snapshot_path text not null,
  source_updated_at timestamptz,
  collected_at timestamptz not null,
  created_by uuid,
  created_at timestamptz not null default now(),
  unique (bank_code, corpus_hash)
);

alter table public.bank_catalog
  drop constraint if exists bank_catalog_active_version_fk;
alter table public.bank_catalog
  add constraint bank_catalog_active_version_fk
  foreign key (active_version_id) references public.bank_versions(id) on delete restrict;

create table if not exists public.bank_jobs (
  id text primary key,
  bank_code text not null references public.bank_catalog(code),
  state text not null check (state in ('running', 'preview_ready', 'unchanged', 'failed', 'abandoned', 'rejected')),
  actor uuid,
  error text,
  result jsonb,
  started_at timestamptz not null default now(),
  finished_at timestamptz
);

create table if not exists public.bank_audit (
  id bigint generated always as identity primary key,
  bank_code text not null,
  action text not null,
  actor uuid,
  from_version_id text,
  to_version_id text,
  at timestamptz not null default now(),
  detail jsonb not null default '{}'::jsonb
);

create table if not exists public.bank_media (
  version_id text not null references public.bank_versions(id) on delete restrict,
  sha256 text not null,
  storage_path text not null,
  content_type text not null,
  byte_count integer not null,
  primary key (version_id, sha256)
);

create index if not exists bank_versions_bank_idx on public.bank_versions (bank_code, created_at desc);
create index if not exists bank_jobs_bank_idx on public.bank_jobs (bank_code, started_at desc);
create index if not exists bank_audit_bank_idx on public.bank_audit (bank_code, at desc);

alter table public.bank_catalog enable row level security;
alter table public.bank_versions enable row level security;
alter table public.bank_jobs enable row level security;
alter table public.bank_audit enable row level security;
alter table public.bank_media enable row level security;

revoke all on public.bank_catalog from public, anon, authenticated, service_role;
revoke all on public.bank_versions from public, anon, authenticated, service_role;
revoke all on public.bank_jobs from public, anon, authenticated, service_role;
revoke all on public.bank_audit from public, anon, authenticated, service_role;
revoke all on public.bank_media from public, anon, authenticated, service_role;

grant select, insert, update on public.bank_catalog to service_role;
grant select, insert, update on public.bank_versions to service_role;
grant select, insert, update on public.bank_jobs to service_role;
grant select, insert on public.bank_audit to service_role;
grant select, insert, update on public.bank_media to service_role;
revoke all on sequence public.bank_audit_id_seq from public, anon, authenticated, service_role;
grant usage, select on sequence public.bank_audit_id_seq to service_role;

insert into public.bank_catalog (code, title)
values ('az-305', 'AZ-305')
on conflict (code) do nothing;

create or replace function public.itc_bank_try_lock(p_code text, p_job text, p_ttl_seconds integer)
returns boolean
language plpgsql
security invoker
set search_path = pg_catalog
as $$
declare
  updated integer;
begin
  update public.bank_catalog
    set lock_job_id = p_job,
        lock_until = now() + make_interval(secs => (CASE WHEN p_ttl_seconds < 1 THEN 1 ELSE p_ttl_seconds END)::double precision),
        updated_at = now()
    where code = p_code
      and (lock_job_id is null or lock_job_id = p_job or lock_until < now());
  get diagnostics updated = row_count;
  return updated = 1;
end;
$$;

create or replace function public.itc_bank_release_lock(p_code text, p_job text)
returns void
language plpgsql
security invoker
set search_path = pg_catalog
as $$
begin
  update public.bank_catalog
    set lock_job_id = null, lock_until = null, updated_at = now()
    where code = p_code and lock_job_id = p_job;
end;
$$;

create or replace function public.itc_bank_abandon_stale(p_code text)
returns void
language plpgsql
security invoker
set search_path = pg_catalog
as $$
begin
  update public.bank_jobs
    set state = 'abandoned',
        error = '采集超时或中断，未发布任何版本',
        finished_at = now()
    where bank_code = p_code
      and state = 'running'
      and started_at < now() - make_interval(mins => 2);
end;
$$;

create or replace function public.itc_bank_cas_active(
  p_code text,
  p_expected text,
  p_target text,
  p_actor uuid,
  p_action text
) returns text
language plpgsql
security invoker
set search_path = pg_catalog
as $$
declare
  st text;
  blocked boolean;
  updated integer;
begin
  if p_action not in ('publish', 'rollback') then
    raise exception 'bad_action';
  end if;
  select status, coalesce((validation->>'promotionBlocked')::boolean, false)
    into st, blocked
  from public.bank_versions
  where id = p_target and bank_code = p_code;
  if st is null then
    raise exception 'missing_version';
  end if;
  if p_action = 'publish' then
    if st not in ('candidate', 'published') then
      raise exception 'bad_status';
    end if;
    if blocked then
      raise exception 'promotion_blocked';
    end if;
  else
    if st not in ('retained', 'published') then
      raise exception 'bad_status';
    end if;
  end if;
  update public.bank_catalog
    set active_version_id = p_target, updated_at = now()
    where code = p_code
      and active_version_id is not distinct from p_expected;
  get diagnostics updated = row_count;
  if updated <> 1 then
    raise exception 'cas_conflict';
  end if;
  if p_expected is not null and p_expected is distinct from p_target then
    update public.bank_versions
      set status = 'retained'
      where id = p_expected and bank_code = p_code and status = 'published';
  end if;
  update public.bank_versions
    set status = 'published'
    where id = p_target and bank_code = p_code;
  insert into public.bank_audit (bank_code, action, actor, from_version_id, to_version_id)
  values (p_code, p_action, p_actor, p_expected, p_target);
  return p_target;
end;
$$;

revoke all on function public.itc_bank_try_lock(text, text, integer) from public, anon, authenticated;
revoke all on function public.itc_bank_release_lock(text, text) from public, anon, authenticated;
revoke all on function public.itc_bank_abandon_stale(text) from public, anon, authenticated;
revoke all on function public.itc_bank_cas_active(text, text, text, uuid, text) from public, anon, authenticated;
grant execute on function public.itc_bank_try_lock(text, text, integer) to service_role;
grant execute on function public.itc_bank_release_lock(text, text) to service_role;
grant execute on function public.itc_bank_abandon_stale(text) to service_role;
grant execute on function public.itc_bank_cas_active(text, text, text, uuid, text) to service_role;
