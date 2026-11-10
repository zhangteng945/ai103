-- issue_reports：增加处理状态。学员 RLS 不变（仍仅能 insert/select 自己的行，不能 update/delete）。
-- 查询/编写日期随发布迁移执行；本文件可回滚。
-- 回滚：
--   alter table public.issue_reports drop constraint if exists issue_reports_status_check;
--   drop index if exists issue_reports_status_created_at_idx;
--   alter table public.issue_reports
--     drop column if exists resolved_by,
--     drop column if exists resolved_at,
--     drop column if exists status;

alter table public.issue_reports
  add column if not exists status text not null default 'open',
  add column if not exists resolved_at timestamptz,
  add column if not exists resolved_by uuid references auth.users(id) on delete set null;

update public.issue_reports set status = 'open' where status is null or status = '';

alter table public.issue_reports drop constraint if exists issue_reports_status_check;
alter table public.issue_reports
  add constraint issue_reports_status_check check (status in ('open', 'resolved'));

create index if not exists issue_reports_status_created_at_idx
  on public.issue_reports (status, created_at desc);

comment on column public.issue_reports.status is 'open=未处理, resolved=已处理';
comment on column public.issue_reports.resolved_at is '标记已处理的时间（切回未处理时清空）';
comment on column public.issue_reports.resolved_by is '标记已处理的管理员 user id（切回未处理时清空）';

-- 明确不给学员/匿名 update、delete 权限（与建表时 grant select, insert to authenticated 一致）
revoke update, delete on public.issue_reports from authenticated, anon;
