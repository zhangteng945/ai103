#!/usr/bin/env bash
# 星火 · 默认只打印；部署须显式批准、完整本地验收、合法CLI/DB/Storage凭据。
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/../.." && pwd)"; cd "$ROOT"
PROJECT=paswovhtsoljydywdmvb
ARTIFACTS=${ARTIFACTS:-/workspace/ai103-pdf-upload-demo/release/artifacts}
BACKUP=${BACKUP:-/workspace/ai103-pdf-upload-demo/release/backup-$(date +%Y%m%d%H%M%S)}
sb(){ npx --yes supabase@3.1.0 "$@"; }
if [[ ${1:-} != --execute || ${TENG_RELEASE_APPROVED:-} != YES ]]; then echo '预演：测试→备份源码/状态→迁移→私有存储上传→Edge部署→PR合并→Pages→真实验收；尚未执行';exit 0;fi
: "${DATABASE_URL:?缺少已授权数据库连接，不寻找其它凭据}"
: "${ADMIN_ACCESS_TOKEN:?缺少真实管理员验收令牌，须先准备}"
: "${STUDENT_ACCESS_TOKEN:?缺少普通学员验收令牌，须先准备}"
: "${SUPABASE_SERVICE_ROLE_KEY:?缺少已授权Storage凭据，不寻找其它凭据}"
for tool in node gh psql pg_dump python3;do command -v "$tool" >/dev/null || { echo "缺少工具 $tool";exit 1;};done
[[ -z $(git status --porcelain) ]] || { echo '工作区不干净，停止';exit 1; }
npm test
if ! node --input-type=module -e 'const r=await fetch("http://127.0.0.1:8766/index.html");if(!r.ok)process.exit(1)' >/dev/null 2>&1;then
 python3 -m http.server 8766 --bind 127.0.0.1 > /tmp/itcert-release-local-server.log 2>&1 & SERVER=$!
 trap 'kill "$SERVER" 2>/dev/null || true' EXIT
 node --input-type=module -e 'for(let n=0;n<20;n++){try{if((await fetch("http://127.0.0.1:8766/index.html")).ok)process.exit(0)}catch{}await new Promise(r=>setTimeout(r,100))}process.exit(1)'
fi
node tooling/test-release.mjs
node -e 'const f=require("fs");if(!JSON.parse(f.readFileSync("/workspace/ai103-pdf-upload-demo/release/e2e-results.json")).passed)process.exit(1)'
mkdir -p "$BACKUP/supabase";chmod 700 "$BACKUP"
gh api repos/zhangteng945/ai103/commits/main --jq .sha > "$BACKUP/pages-before.sha"
git merge-base --is-ancestor "$(<"$BACKUP/pages-before.sha")" feature/pdf-upload || { echo 'main已变化，请先合并并重新验收';exit 1; }
node --input-type=module -e 'import fs from"node:fs/promises";const root=process.argv[1];for(const file of ["index.html","sw.js"]){const r=await fetch("https://zhangteng945.github.io/ai103/"+file,{cache:"no-store"});if(!r.ok)throw Error("前端基线备份失败");await fs.writeFile(root+"/pages-before-"+file,await r.text())}' "$BACKUP"
sb functions list --remote="$PROJECT" --output=json > "$BACKUP/functions-before.json"
sb functions download itc-bank --remote="$PROJECT" --use-api --workdir "$BACKUP"
if grep -q 'itc-pdf-candidate' "$BACKUP/functions-before.json";then sb functions download itc-pdf-candidate --remote="$PROJECT" --use-api --workdir "$BACKUP";fi
pg_dump "$DATABASE_URL" --schema-only --schema=storage --no-owner --no-privileges > "$BACKUP/storage-schema-before.sql"
psql "$DATABASE_URL" -X -At -c "select json_agg(b) from storage.buckets b" > "$BACKUP/buckets-before.json"
psql "$DATABASE_URL" -X -At -c "select json_agg(p) from pg_policies p where schemaname='storage'" > "$BACKUP/policies-before.json"
COUNT=$(psql "$DATABASE_URL" -X -At -c "select count(*) from storage.objects where bucket_id='banks' and name like 'az305/202611092210%'")
[[ "$COUNT" = 0 ]] || { echo '本版本已有对象，禁止重复覆盖';exit 1; }
printf '%s\n' "$BACKUP" > /workspace/ai103-pdf-upload-demo/release/last-backup.txt
# From this point any failure triggers a controlled rollback. Nothing touches auth/progress/devices.
trap 'trap - ERR; echo "上线失败；恢复备份"; bash "$ROOT/scripts/release/rollback.sh" --execute "$BACKUP"; exit 1' ERR
psql "$DATABASE_URL" -X -v ON_ERROR_STOP=1 -f supabase/migrations/20261109221000_pdf_candidates_az305.sql
node scripts/release/upload.mjs "$ARTIFACTS" "$BACKUP/uploaded.jsonl"
sb functions deploy itc-bank itc-pdf-candidate --remote="$PROJECT" --use-api --yes
# Existing convention is feature→PR→merge. No force push and no remote branch deletion.
git push -u origin feature/pdf-upload
PR=$(gh pr create --base main --head feature/pdf-upload --title 'PDF导入与AZ-305私有题库' --body '星火：本机OCR、候选保存、图片题自评；已通过本地验收，按本次明确批准发布。')
printf '%s\n' "$PR" > "$BACKUP/release-pr.txt"
gh pr merge "$PR" --merge
gh pr view "$PR" --json mergeCommit --jq '.mergeCommit.oid' > "$BACKUP/release-merge.sha"
# Poll bounded workflow completion; failure/timeout rolls back. No polling forever.
SHA=$(<"$BACKUP/release-merge.sha")
for ((i=0;i<60;i++));do
 STATUS=$(gh api "repos/zhangteng945/ai103/actions/runs?head_sha=$SHA" --jq '.workflow_runs[] | select(.name|test("pages";"i")) | [.status,.conclusion] | @tsv')
 if [[ "$STATUS" == *completed* ]];then [[ "$STATUS" == *success* ]] || { echo 'Pages构建失败';false; };break;fi
 if (( i==59 ));then echo 'Pages构建超时，回滚';false;fi
 node --input-type=module -e 'await new Promise(r=>setTimeout(r,5000))'
 done
# This script requires the real authenticated smoke fixture; never claims mocked checks are production checks.
node scripts/release/live-smoke.mjs "$BACKUP"
trap - ERR
echo "已发布；回滚点 $BACKUP"
