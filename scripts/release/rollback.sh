#!/usr/bin/env bash
# 星火 · 仅恢复本次发布，不强推、不删除题库/账号/进度。
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/../.." && pwd)";BACKUP=${2:-};PROJECT=paswovhtsoljydywdmvb
if [[ ${1:-} != --execute || ${TENG_RELEASE_APPROVED:-} != YES ]];then echo '预演：恢复备份函数；若已合并，创建正常revert PR；保留隔离私有对象，不删除数据';exit 0;fi
[[ -f "$BACKUP/supabase/functions/itc-bank/index.ts" && -f "$BACKUP/functions-before.json" ]] || { echo '备份不完整，停止，禁止猜测回滚源';exit 1; }
npx --yes supabase@3.1.0 functions deploy itc-bank --remote="$PROJECT" --use-api --yes --workdir "$BACKUP"
if [[ -f "$BACKUP/supabase/functions/itc-pdf-candidate/index.ts" ]];then
 npx --yes supabase@3.1.0 functions deploy itc-pdf-candidate --remote="$PROJECT" --use-api --yes --workdir "$BACKUP"
else
 npx --yes supabase@3.1.0 functions list --remote="$PROJECT" --output=json > "$BACKUP/functions-at-rollback.json"
 if grep -q 'itc-pdf-candidate' "$BACKUP/functions-at-rollback.json";then npx --yes supabase@3.1.0 functions delete itc-pdf-candidate --remote="$PROJECT" --yes;fi
fi
if [[ -s "$BACKUP/release-pr.txt" && ! -s "$BACKUP/release-merge.sha" ]];then
 PR=$(<"$BACKUP/release-pr.txt")
 gh pr view "$PR" --json mergeCommit --jq '.mergeCommit.oid // empty' > "$BACKUP/release-merge.sha"
 if [[ ! -s "$BACKUP/release-merge.sha" ]];then gh pr close "$PR";fi
fi
if [[ -s "$BACKUP/release-merge.sha" ]];then
 SHA=$(<"$BACKUP/release-merge.sha");DIR="$BACKUP/revert-worktree";BRANCH="rollback/pdf-$(date +%Y%m%d%H%M%S)"
 git -C "$ROOT" fetch origin main
 git -C "$ROOT" worktree add -b "$BRANCH" "$DIR" origin/main
 PARENTS=$(git -C "$DIR" rev-list --parents -n 1 "$SHA" | awk '{print NF-1}')
 if (( PARENTS>1 ));then git -C "$DIR" revert --no-edit -m 1 "$SHA";else git -C "$DIR" revert --no-edit "$SHA";fi
 git -C "$DIR" push -u origin "$BRANCH"
 PR=$(cd "$DIR" && gh pr create --base main --head "$BRANCH" --title '回滚PDF导入发布' --body '按本次发布的失败回滚规则恢复前端，不触碰账号、进度或设备。')
 (cd "$DIR" && gh pr merge "$PR" --merge)
 (cd "$DIR" && gh pr view "$PR" --json mergeCommit --jq '.mergeCommit.oid') > "$BACKUP/rollback-merge.sha"
 SHA=$(<"$BACKUP/rollback-merge.sha")
 for ((i=0;i<60;i++));do
  STATUS=$(gh api "repos/zhangteng945/ai103/actions/runs?head_sha=$SHA" --jq '.workflow_runs[] | select(.name|test("pages";"i")) | [.status,.conclusion] | @tsv')
  if [[ "$STATUS" == *completed* ]];then [[ "$STATUS" == *success* ]] || { echo '回滚Pages构建失败，停止并人工处理';exit 1; };break;fi
  if ((i==59));then echo '回滚Pages构建超时，停止并人工处理';exit 1;fi
  node --input-type=module -e 'await new Promise(r=>setTimeout(r,5000))'
 done
fi
echo '功能已回滚；新增私有媒体与隔离限制策略安全保留，不删除任何旧库或用户数据。请验证Pages回滚构建与原4库。'
