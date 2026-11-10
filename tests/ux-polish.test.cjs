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
    assert.doesNotMatch(rule, /background:\s*var\(--(?:success|danger)-bg\)/);
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
  for (const id of ['admin-who', 'admin-msg', 'admin-gate', 'admin-app', 'btn-refresh', 'users-table', 'users-body', 'create-form', 'c-user', 'c-days', 'c-max', 'c-exams', 'c-all', 'reports-body']) {
    assert.ok(admin.includes('id="' + id + '"'), id);
  }
  assert.match(admin, /data-tab="users"/);
  assert.match(admin, /data-tab="create"/);
  assert.match(admin, /data-tab="reports"/);
  const visibleAdmin = admin.replace(/<!--[\s\S]*?-->/g, '');
  assert.doesNotMatch(visibleAdmin, /data-tab="pdf"/);
  assert.doesNotMatch(visibleAdmin, /id="tab-pdf"|pdf-import-core|tesseract\.min|pdf-import-ui/);
  assert.match(admin, /<!-- PDF 导入暂停 2026-11-10，恢复时取消注释 -->/);
  assert.match(admin, /data-tab="pdf"/);
  assert.match(admin, /id="tab-pdf"/);
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

function loadBoxRenderers() {
  const ctx = {
    window: { ITCERT_IMAGE: require('../js/image-questions.js') },
    state: { lang: 'zh', boxChoiceOrder: {} },
    UI_LANG: 'zh',
    revealOnly: false,
    shuffle: (a) => a.slice(),
    t: () => ({
      answerArea: '答题区域',
      pleaseSelect: '请选择…',
      dragPool: '备选项',
      dragSlots: '答题框',
      clearSlot: '清空',
      emptySlot: '（空）· 点击上方选项填入',
      undoLast: '撤销',
      correctAnswer: '正确答案：',
    }),
  };
  vm.createContext(ctx);
  const names = [
    'tidyText', 'pickText', 'choiceText', 'choiceKey', 'boxLabel', 'normKey', 'sameKey',
    'isBoxQ', 'isDropdownQ', 'isYNChoice', 'isYNBox', 'getControl', 'dragPoolChoices',
    'getBoxOrder', 'orderedChoices', 'emptyBoxAnswers', 'isSelfCheck', 'normalizeSelection',
    'allBoxesSelected', 'arraysEqualAsSet', 'isCorrect', 'correctSelection',
    'hasInlineTemplate', 'templateOf', 'positionNoteOf', 'renderOneSelectHtml',
    'renderInlineTemplateHtml', 'renderSelectBoxesHtml', 'renderYnBoxesHtml',
    'renderDragBoxesHtml', 'renderBoxesHtml', 'escapeHtml', 'boxFeedbackText',
    'caLabel', 'inl',
  ];
  for (const name of names) {
    const start = appSrc.indexOf('  function ' + name + '(');
    const end = appSrc.indexOf('\n  }', start);
    assert.ok(start >= 0 && end > start, name);
    vm.runInContext(appSrc.slice(start, end + 4), ctx);
  }
  return ctx;
}

function lastRule(cssText, selectorRe) {
  const re = new RegExp(selectorRe.source + '\\s*\\{[^}]*\\}', 'g');
  const all = cssText.match(re);
  return all ? all[all.length - 1] : '';
}

test('判断/下拉/拖拽提交后与单选多选同一套对错漏选样式', () => {
  const c = loadBoxRenderers();
  const ynChoices = [
    { key: 'Yes', zh: '是', en: 'Yes' },
    { key: 'No', zh: '否', en: 'No' },
  ];
  const ynBox = { id: '1', label: '陈述', labelZh: '陈述', answer: 'Yes', choices: ynChoices };
  const ynQ = { id: 'yn-q', type: 'hotspot', control: 'yn', boxes: [ynBox] };

  const beforeYn = c.renderYnBoxesHtml(ynQ, {}, false, 'test');
  assert.doesNotMatch(beforeYn, /is-answer|is-wrong|is-miss|box-mark|正确答案|你的选择/);
  assert.match(beforeYn, /yn-btn(?![^>]*is-)/);
  assert.ok(beforeYn.indexOf('>是<') < beforeYn.indexOf('>否<'), '是应在否之前');

  const ynRight = c.renderYnBoxesHtml(ynQ, { '1': 'Yes' }, true, 'test');
  assert.match(ynRight, /yn-btn is-answer picked/);
  assert.match(ynRight, /yn-btn is-dim/);
  assert.doesNotMatch(ynRight, /box-mark|正确答案|你的选择/);
  assert.doesNotMatch(ynRight, /漏选|✗|✓/);

  const ynWrong = c.renderYnBoxesHtml(ynQ, { '1': 'No' }, true, 'test');
  assert.match(ynWrong, /yn-btn is-answer"(?![^>]*picked)|yn-btn is-answer /);
  assert.match(ynWrong, /yn-btn is-wrong picked/);
  assert.doesNotMatch(ynWrong, /class="[^"]*is-answer picked/);
  assert.match(ynWrong, /正确答案：是 ｜ 你的选择：否/);
  assert.doesNotMatch(ynWrong, /漏选/);

  const ynEmpty = c.renderYnBoxesHtml(ynQ, {}, true, 'test');
  assert.match(ynEmpty, /yn-btn is-answer"/);
  assert.doesNotMatch(ynEmpty, /is-answer picked/);
  assert.match(ynEmpty, /正确答案：是 ｜ 你的选择：未选择/);

  const selChoices = [
    { key: 'A', zh: '选项A', en: 'A' },
    { key: 'B', zh: '选项B', en: 'B' },
  ];
  const selBox = { id: '1', label: '空位', answer: 'A', choices: selChoices };
  const selQ = { id: 'sel-q', type: 'hotspot', control: 'select', boxes: [selBox] };
  const selBefore = c.renderOneSelectHtml(selQ, selBox, '', false, 'test', false);
  assert.doesNotMatch(selBefore, /is-correct|is-wrong|is-miss/);
  const selRight = c.renderOneSelectHtml(selQ, selBox, 'A', true, 'test', false);
  assert.match(selRight, /box-select is-correct/);
  assert.doesNotMatch(selRight, /is-wrong|is-miss|box-mark/);
  const selWrong = c.renderOneSelectHtml(selQ, selBox, 'B', true, 'test', false);
  assert.match(selWrong, /box-select is-wrong/);
  assert.doesNotMatch(selWrong, /is-correct|is-miss/);
  assert.match(selWrong, /正确答案：选项A ｜ 你的选择：选项B/);
  const selMiss = c.renderOneSelectHtml(selQ, selBox, '', true, 'test', false);
  assert.match(selMiss, /box-select is-miss/);
  assert.doesNotMatch(selMiss, /is-wrong|is-correct/);
  assert.match(selMiss, /正确答案：选项A ｜ 你的选择：未选择/);
  const selInlineMiss = c.renderOneSelectHtml(selQ, selBox, '', true, 'test', true);
  assert.match(selInlineMiss, /box-select inline-select is-miss/);

  const dragChoices = [
    { key: 'A', zh: '答案A', en: 'A' },
    { key: 'B', zh: '答案B', en: 'B' },
  ];
  const dragBox = { id: '1', label: '位置1', answer: 'A', choices: dragChoices };
  const dragQ = { id: 'drag-q', type: 'drag', control: 'drag', boxes: [dragBox] };
  const dragBeforeEmpty = c.renderDragBoxesHtml(dragQ, {}, false, 'test');
  assert.match(dragBeforeEmpty, /slot-value empty/);
  assert.doesNotMatch(dragBeforeEmpty, /is-correct|is-wrong|is-miss|box-mark|正确答案/);
  const dragBeforeFilled = c.renderDragBoxesHtml(dragQ, { '1': 'A' }, false, 'test');
  assert.match(dragBeforeFilled, /slot-value filled"/);
  assert.doesNotMatch(dragBeforeFilled, /is-correct|is-wrong|is-miss/);
  const dragRight = c.renderDragBoxesHtml(dragQ, { '1': 'A' }, true, 'test');
  assert.match(dragRight, /slot-value filled is-correct/);
  assert.doesNotMatch(dragRight, /box-mark|正确答案|你的选择/);
  const dragWrong = c.renderDragBoxesHtml(dragQ, { '1': 'B' }, true, 'test');
  assert.match(dragWrong, /slot-value filled is-wrong/);
  assert.match(dragWrong, /正确答案：答案A ｜ 你的选择：答案B/);
  const dragMiss = c.renderDragBoxesHtml(dragQ, {}, true, 'test');
  assert.match(dragMiss, /slot-value empty is-miss/);
  assert.doesNotMatch(dragMiss, /slot-value empty"/);
  assert.match(dragMiss, /正确答案：答案A ｜ 你的选择：未选择/);

  c.revealOnly = true;
  const revealed = c.boxFeedbackText(ynBox, 'Yes');
  assert.match(revealed, /正确答案：是/);
  assert.doesNotMatch(revealed, /你的选择/);
  c.revealOnly = false;

  const rows = css.match(/\.box-row\.(?:correct|wrong)\s*\{[^}]*\}/g) || [];
  assert.ok(rows.length >= 2);
  for (const rule of rows) {
    assert.match(rule, /border-color:\s*transparent/);
    assert.doesNotMatch(rule, /background:\s*var\(--(?:success|danger)-bg\)/);
  }
  assert.doesNotMatch(css, /\.yn-btn\.is-answer(?:\.picked)?[^{]*\{[^}]*color:\s*#fff/);
  assert.doesNotMatch(css, /\.yn-btn\.is-wrong[^{]*\{[^}]*color:\s*#fff/);
  assert.doesNotMatch(css, /\.yn-btn\.is-answer(?:\.picked)?[^{]*\{[^}]*background:\s*var\(--success\)/);
  assert.doesNotMatch(css, /\.yn-btn\.is-wrong[^{]*\{[^}]*background:\s*var\(--danger\)[;}]/);

  const okLock = lastRule(css, /\.yn-btn\.is-answer\.picked,\s*\.box-select\.is-correct,\s*\.slot-value\.filled\.is-correct/);
  assert.match(okLock, /border:\s*2px solid var\(--success\)/);
  assert.match(okLock, /background:\s*transparent/);
  assert.doesNotMatch(okLock, /background:\s*var\(--success(?:-bg)?\)/);

  const badLock = lastRule(css, /\.yn-btn\.is-wrong,\s*\.box-select\.is-wrong,\s*\.slot-value\.filled\.is-wrong/);
  assert.match(badLock, /border:\s*2px solid var\(--danger\)/);
  assert.match(badLock, /background:\s*var\(--danger-bg\)/);

  const missLock = lastRule(css, /\.yn-btn\.is-answer:not\(\.picked\),\s*\.box-select\.is-miss,\s*\.slot-value\.empty\.is-miss/);
  assert.match(missLock, /border:\s*2px dashed var\(--success\)/);
  assert.match(missLock, /background:\s*var\(--success-bg\)/);

  assert.match(css, /\.slot-value\.filled\s*\{[^}]*var\(--primary\)/);
  assert.match(css, /\.slot-value\.empty\s*\{[^}]*dashed/);
  assert.doesNotMatch(css, /\.correct-only/);
  assert.match(css, /\.yn-btn\.picked\s*\{\s*box-shadow:\s*none/);
});
