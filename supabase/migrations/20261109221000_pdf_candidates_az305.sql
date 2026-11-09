-- 星火：本次发布唯一存储迁移，不触碰用户业务表。
begin;
-- 单独审批后执行，不修改账号、进度、设备绑定或旧库对象。
do $$ begin
 if not exists(select 1 from storage.buckets where id='banks' and public=false) then
  raise exception 'banks桶必须存在且保持私有，停止上线';
 end if;
end $$;
-- 拒绝任何anon/authenticated直接Storage访问新库；函数使用平台service_role签名。
drop policy if exists az305_private_isolation on storage.objects;
create policy az305_private_isolation on storage.objects as restrictive
for all to anon, authenticated
using (not(bucket_id='banks' and (storage.foldername(name))[1]='az305'))
with check (not(bucket_id='banks' and (storage.foldername(name))[1]='az305'));

-- 待上线明确批准后执行。独立私有桶；不修改 banks、旧题库或版本pin。
-- 使用部署角色运行。service_role通过候选函数写入，前端不持有此密钥。
insert into storage.buckets (id,name,public,file_size_limit,allowed_mime_types)
values ('pdf-candidates','pdf-candidates',false,3145728,array['application/json','image/jpeg'])
on conflict (id) do nothing;
do $$ begin if exists(select 1 from storage.buckets where id='pdf-candidates' and public=true) then raise exception '候选桶必须保持私有'; end if; end $$;
drop policy if exists pdf_candidates_isolation on storage.objects;
-- 限制性策略覆盖可能已有的宽泛允许策略；anon/authenticated不能直接访问候选。
create policy pdf_candidates_isolation on storage.objects as restrictive
for all to anon, authenticated
using (bucket_id <> 'pdf-candidates')
with check (bucket_id <> 'pdf-candidates');

commit;
