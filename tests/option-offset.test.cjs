const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');

const repo = path.resolve(__dirname, '..');
const index = fs.readFileSync(path.join(repo, 'index.html'), 'utf8');
const css = fs.readFileSync(path.join(repo, 'styles.css'), 'utf8');
const app = fs.readFileSync(path.join(repo, 'app.js'), 'utf8');

function slice(src, startMark, endMark) {
  const start = src.indexOf(startMark);
  const end = src.indexOf(endMark, start + startMark.length);
  assert.ok(start >= 0 && end > start, 'missing ' + startMark);
  return src.slice(start, end);
}

test('练习页题目和跳转包在滚动区内，底部操作栏在区外', () => {
  const practice = slice(index, 'id="view-practice"', 'id="view-exam-config"');
  const scrollAt = practice.indexOf('id="practice-scroll"');
  const bodyAt = practice.indexOf('id="practice-body"');
  const jumpAt = practice.indexOf('id="practice-jump"');
  const scrollClose = practice.indexOf('</div>', practice.indexOf('id="practice-jump-hint"'));
  const dockAt = practice.indexOf('id="practice-dock"');
  assert.ok(scrollAt >= 0 && bodyAt > scrollAt && jumpAt > bodyAt, '题目和跳转应在 #practice-scroll 内');
  assert.ok(scrollClose > jumpAt && dockAt > scrollClose, '底部操作栏应在滚动区之外');
  assert.match(practice, /class="q-scroll"/);
});

test('模考页题目和答题卡包在滚动区内，底部操作栏在区外', () => {
  const exam = slice(index, 'id="view-exam"', 'id="view-result"');
  const scrollAt = exam.indexOf('id="exam-scroll"');
  const bodyAt = exam.indexOf('id="exam-body"');
  const navAt = exam.indexOf('exam-nav-card');
  const dockAt = exam.indexOf('id="exam-dock"');
  assert.ok(scrollAt >= 0 && bodyAt > scrollAt && navAt > bodyAt && dockAt > navAt);
  assert.ok(exam.lastIndexOf('q-scroll', dockAt) === exam.lastIndexOf('q-scroll', navAt));
});

test('练习/模考使用整页壳层：题目在底栏上方滚动，底栏不再 fixed 遮住选项', () => {
  assert.match(css, /body\.view-practice,\s*body\.view-exam\s*\{[^}]*overflow:\s*hidden/);
  assert.match(css, /body\.view-practice #view-practice:not\(\.hidden\),\s*body\.view-exam #view-exam:not\(\.hidden\)\s*\{[^}]*padding-bottom:\s*0/);
  assert.match(css, /\.q-scroll\s*\{[^}]*overflow:\s*auto/);
  const dock = css.match(/body\.view-practice \.action-dock,\s*body\.view-exam \.action-dock\s*\{[^}]*\}/);
  assert.ok(dock, 'missing in-flow dock override');
  assert.match(dock[0], /position:\s*relative/);
  assert.doesNotMatch(dock[0], /position:\s*fixed/);
});

test('换题时立刻把题目滚回顶部，不使用 smooth，且同一题重绘不跳回顶部', () => {
  const fn = app.slice(app.indexOf('function scrollQuestionTop()'), app.indexOf('function questionList()'));
  assert.doesNotMatch(fn, /behavior:\s*["']smooth["']/);
  assert.match(fn, /scrollTop = 0/);
  assert.match(app, /function scrollIfQuestionChanged\(/);
  assert.match(app, /scrollIfQuestionChanged\(\(state\.practiceFilter \|\| ""\) \+ ":" \+ state\.practiceIndex/);
  assert.match(app, /scrollIfQuestionChanged\("exam:" \+ state\.examIndex/);
  assert.match(app, /scrollQuestionTop\(\);\s*return true;/);
});

test('选项和作答区在窄屏下限制在卡片宽度内', () => {
  assert.match(css, /#practice-options,\s*#exam-options,\s*#practice-boxes,\s*#exam-boxes/);
  const block = css.slice(css.lastIndexOf('#practice-options'));
  assert.match(block, /max-width:\s*100%/);
  assert.match(block, /min-width:\s*0/);
});

test('练习/模考不再用 50vw 做底栏通栏，避免把选项挤出卡片左边', () => {
  const start = css.lastIndexOf('Practice / exam options stay inside the card');
  assert.ok(start >= 0, 'missing 2026-11-18 options containment block');
  const block = css.slice(start);
  const dock = block.match(/body\.view-practice \.action-dock,\s*body\.view-exam \.action-dock\s*\{[^}]*\}/);
  assert.ok(dock, 'missing dock override in containment block');
  assert.match(dock[0], /margin-left:\s*0/);
  assert.match(dock[0], /margin-right:\s*0/);
  assert.match(dock[0], /width:\s*100%/);
  assert.doesNotMatch(dock[0], /50vw/);
  assert.match(block, /body\.view-practice \.app,\s*body\.view-exam \.app\s*\{[^}]*max-width:\s*none/);
  assert.match(block, /padding-left:\s*max\([^;]*calc\(50% - 410px\)/);
});

test('选项网格锁在卡片内：单列 100% 宽，不能 fixed/负边距/平移到视口左边', () => {
  const start = css.lastIndexOf('Practice / exam options stay inside the card');
  const block = css.slice(start);
  const opts = block.match(/body\.view-practice #practice-options,[\s\S]*?body\.view-exam \.options\s*\{[^}]*\}/);
  assert.ok(opts, 'missing options containment rule');
  assert.match(opts[0], /grid-template-columns:\s*minmax\(0,\s*1fr\)/);
  assert.match(opts[0], /width:\s*100%/);
  assert.match(opts[0], /position:\s*relative/);
  assert.match(opts[0], /left:\s*auto/);
  assert.match(opts[0], /margin-left:\s*0/);
  assert.match(opts[0], /transform:\s*none/);
  assert.match(block, /body\.view-practice \.q-scroll,\s*body\.view-exam \.q-scroll\s*\{[^}]*overflow-x:\s*hidden/);
  assert.match(block, /#practice-body\.card,\s*#exam-body\.card\s*\{[^}]*overflow-x:\s*hidden/);
  assert.match(block, /#practice-body\.card,\s*#exam-body\.card\s*\{[^}]*contain:\s*layout/);
});
