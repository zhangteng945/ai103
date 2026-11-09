-- 单独审批后执行，不修改账号、进度、设备绑定或旧库对象。
begin;
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
commit;
