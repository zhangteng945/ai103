# itc-ingest

管理端题库采集。本目录只是源码。合并本 PR **不会**部署函数、**不会**执行迁移、**不会**发布题库。

采集是一次请求内的有界读取（默认最多 80 题、单文件 512KB、总计 8MB、单次超时 8 秒、重试 2 次、重定向 2 次且每次重新校验）。AZ-305 已核对的公开来源约 36 道题，适合这个上限。没有定时任务。超时或中断只把任务标成失败/abandoned，不改 `active_version_id`。

## 部署前（人工，且不要在未确认时执行）

1. 阅读 `supabase/migrations/20261108183000_bank_versions.sql`。确认不会对生产库执行，直到明确同意。
2. 函数使用项目自带的 `SUPABASE_URL`、`SUPABASE_ANON_KEY`、`SUPABASE_SERVICE_ROLE_KEY`。不要把 service_role 写进前端或仓库。
3. 调用者必须是已登录且 `app_metadata.role = "admin"` 的用户 JWT。过期账号会被拒绝。
4. 存储沿用私有桶 `banks`。版本对象路径：`versions/<code>/<versionId>.json` 与 `versions/<code>/<versionId>/media/<sha256>`。不要给这些路径加公开读策略。
5. 管理页 `admin.html` 的「题库版本」会请求 `POST /functions/v1/itc-ingest`。函数未部署时页面显示「尚未部署」，按钮保持禁用。

未包含、也不要补进这次发布的事：自动排程、PDF 导入、把 azurecertprep 编成选择题、对生产库执行本迁移。
