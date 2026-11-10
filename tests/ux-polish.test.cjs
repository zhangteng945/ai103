const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const repo = path.resolve('.');
const appSrc = fs.readFileSync(path.join(repo, 'app.js'), 'utf8');
const css = fs.readFileSync(path.join(repo, 'styles.css'), 'utf8');
const index = fs.readFileSync(path.join(repo, 'index.html'), 'utf8');
const admin = fs.readFileSync(path.join(repo, 'admin.html'), 'utf8');

test('提交后漏选正确选项恢复虚线绿框，且不加「正确答案」标签', () => {
  const start = appSrc.indexOf('  function optGrade(q, opt, isSel, graded) {');
  const end = appSrc.indexOf('\n  function answerSummary', start);
  assert.ok(start >= 0 && end > start);
  const ctx = {
    L: (zh) => zh,
    escapeHtml: (s) => String(s),
  };
  vm.runInNewContext(appSrc.slice(start, end), ctx);
  const missed = ctx.optGrade({ answer: ['A', 'C'] }, { id: 'C' }, false, true);
  assert.match(missed.cls, /st-miss/);
  assert.doesNotMatch(missed.cls, /correct/);
  assert.equal(missed.tag, '');
  assert.doesNotMatch(missed.tag, /正确答案/);
  const picked = ctx.optGrade({ answer: ['A'] }, { id: 'A' }, true, true);
  assert.match(picked.cls, /st-ok/);
  assert.equal(picked.tag, '');
  const wrong = ctx.optGrade({ answer: ['A'] }, { id: 'B' }, true, true);
  assert.match(wrong.cls, /st-bad/);
  assert.doesNotMatch(wrong.tag, /✗/);

  assert.match(css, /\.option\.st-miss\{border:2px dashed var\(--success\)/);
  assert.match(css, /\.option\.st-miss \.oid\{[^}]*border:2px dashed var\(--success\)/);
  assert.match(css, /\.otag\.t-miss\{border:1\.5px dashed var\(--success\)/);
  assert.doesNotMatch(css, /\.option(?:\.correct)?\.st-miss[^{]*\{[^}]*border:2px solid/);
  assert.match(css, /\.option\.correct\.st-ok[,{]/);
});

test('答对后页面不含空的 .correct-only 节点', () => {
  assert.doesNotMatch(appSrc, /class="feedback ok correct-only"/);
  assert.doesNotMatch(appSrc, /correct-only/);
  assert.doesNotMatch(css, /\.correct-only/);
});

test('判断题/下拉卡片提交后不加彩色外框，是/否按钮不再套阴影圈', () => {
  const rows = css.match(/\.box-row\.(?:correct|wrong)\s*\{[^}]*\}/g) || [];
  assert.ok(rows.length >= 2, 'missing box-row grade rules');
  for (const rule of rows) {
    assert.match(rule, /border-color:\s*transparent/);
    assert.doesNotMatch(rule, /border-color:\s*var\(--(?:success|danger)\)/);
  }
  assert.match(css, /\.yn-btn\.picked\s*\{\s*box-shadow:\s*none/);
  assert.doesNotMatch(css, /\.yn-btn\.picked\s*\{[^}]*0 0 0 4px/);
  assert.match(css, /\.slot-value\.empty\s*\{[^}]*dashed/);
});

test('练习页工具栏与底部操作栏保留全部原有控件，重置不再抢眼', () => {
  for (const id of [
    'btn-practice-back', 'practice-filter', 'btn-practice-reset', 'btn-practice-shuffle',
    'chk-practice-showall', 'btn-practice-prev', 'btn-practice-flag', 'btn-practice-skip',
    'btn-practice-reveal', 'btn-practice-submit', 'btn-practice-next', 'practice-jump',
    'practice-jump-input', 'practice-jump-select', 'btn-exam-prev', 'btn-exam-flag',
    'btn-exam-next', 'btn-exam-submit',
  ]) {
    assert.ok(index.includes('id="' + id + '"'), id);
  }
  assert.match(index, /class="[^"]*toolbar-reset[^"]*" id="btn-practice-reset"/);
  assert.doesNotMatch(index, /id="btn-practice-reset"[^>]*btn-danger/);
  assert.match(index, /id="practice-dock"/);
  assert.match(index, /id="exam-dock"/);
  assert.match(index, /action-primary/);
  const practice = index.slice(index.indexOf('id="view-practice"'), index.indexOf('id="view-exam-config"'));
  const bodyAt = practice.indexOf('id="practice-body"');
  const jumpAt = practice.indexOf('id="practice-jump"');
  const dockAt = practice.indexOf('id="practice-dock"');
  assert.ok(bodyAt >= 0 && jumpAt > bodyAt && dockAt > jumpAt, '跳转应在题目和底部操作栏之间，不进底部栏');
  assert.match(practice, /jump-row-quiet/);
  const dock = practice.slice(dockAt);
  assert.doesNotMatch(dock, /id="practice-jump"/);
  assert.match(index, /进度按题库隔离保存在本机/);
  assert.doesNotMatch(index, /本地运行/);
  assert.match(index, /AZ-305/);
});

test('管理页保留原有功能入口与标识，样式改走全局主题', () => {
  for (const id of ['admin-who', 'admin-msg', 'admin-gate', 'admin-app', 'btn-refresh', 'users-table', 'users-body', 'create-form', 'c-user', 'c-days', 'c-max', 'c-exams', 'c-all', 'reports-body', 'tab-pdf', 'pdf-start', 'pdf-save']) {
    assert.ok(admin.includes('id="' + id + '"'), id);
  }
  assert.match(admin, /data-tab="users"/);
  assert.match(admin, /data-tab="create"/);
  assert.match(admin, /data-tab="reports"/);
  assert.match(admin, /data-tab="pdf"/);
  assert.match(admin, /作者：星火/);
  assert.match(admin, /class="admin-page"/);
  assert.doesNotMatch(admin, /<style>/);
  assert.match(css, /\.admin-page\s*\{/);
  assert.match(css, /\.pw-box\s*\{[^}]*var\(--warning-bg\)/s);
});

test('深色案例框与更正说明不再写死浅色背景', () => {
  assert.doesNotMatch(css, /#f4f6fb|#fff7ed|#ffedd5|#fdba74|#9a3412|#c2410c/);
  assert.match(css, /\.case-box\s*\{[^}]*var\(--bg-elevated\)/s);
  assert.match(css, /\.fix-note\s*\{[^}]*var\(--warning-bg\)/s);
  assert.match(css, /\.case-body\s*\{[^}]*var\(--text-muted\)/s);
});
