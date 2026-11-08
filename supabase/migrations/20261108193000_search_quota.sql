-- App-local search quota. Not applied by this PR.
-- The period key is ours. It is not Tavily's billing month.
-- billing_blocked is not cleared when a new period row is inserted.
-- SECURITY INVOKER, search_path pg_catalog, service_role execute only.

create table if not exists public.bank_search_guard (
  provider text primary key,
  billing_blocked boolean not null default false,
  billing_reason text,
  blocked_at timestamptz
);

create table if not exists public.bank_search_usage (
  provider text not null,
  period_key text not null,
  reserved integer not null default 0,
  limit_n integer not null,
  primary key (provider, period_key)
);

insert into public.bank_search_guard (provider)
values ('tavily')
on conflict (provider) do nothing;

alter table public.bank_search_guard enable row level security;
alter table public.bank_search_usage enable row level security;
revoke all on public.bank_search_guard from public, anon, authenticated, service_role;
revoke all on public.bank_search_usage from public, anon, authenticated, service_role;
grant select, update on public.bank_search_guard to service_role;
grant select, insert, update on public.bank_search_usage to service_role;

create or replace function public.itc_search_reserve(p_provider text, p_period text, p_limit integer, p_n integer)
returns jsonb
language plpgsql
security invoker
set search_path = pg_catalog
as $$
declare
  blocked boolean;
  updated integer;
  now_reserved integer;
begin
  if p_n <> 1 or p_limit < 1 or p_period is null or length(p_period) < 4 then
    return jsonb_build_object('ok', false, 'reason', 'reserve_amount');
  end if;
  select billing_blocked into blocked from public.bank_search_guard where provider = p_provider;
  if blocked is null then
    return jsonb_build_object('ok', false, 'reason', 'quota_unavailable');
  end if;
  if blocked then
    return jsonb_build_object('ok', false, 'reason', 'billing_blocked');
  end if;
  insert into public.bank_search_usage (provider, period_key, reserved, limit_n)
  values (p_provider, p_period, 0, p_limit)
  on conflict (provider, period_key) do nothing;
  update public.bank_search_usage
    set reserved = reserved + 1
    where provider = p_provider and period_key = p_period and reserved + 1 <= limit_n
    returning reserved into now_reserved;
  get diagnostics updated = row_count;
  if updated <> 1 then
    return jsonb_build_object('ok', false, 'reason', 'quota_exhausted');
  end if;
  return jsonb_build_object('ok', true, 'reason', 'reserved', 'reserved', now_reserved);
end;
$$;

create or replace function public.itc_search_block(p_provider text, p_reason text)
returns void
language plpgsql
security invoker
set search_path = pg_catalog
as $$
begin
  update public.bank_search_guard
    set billing_blocked = true,
        billing_reason = p_reason,
        blocked_at = now()
    where provider = p_provider;
end;
$$;

revoke all on function public.itc_search_reserve(text, text, integer, integer) from public, anon, authenticated;
revoke all on function public.itc_search_block(text, text) from public, anon, authenticated;
grant execute on function public.itc_search_reserve(text, text, integer, integer) to service_role;
grant execute on function public.itc_search_block(text, text) to service_role;
