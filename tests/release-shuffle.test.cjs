const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const vm = require('vm');
const source = fs.readFileSync('app.js', 'utf8');

function sliceBetween(startNeedle, endNeedle) {
  const start = source.indexOf(startNeedle);
  const end = source.indexOf(endNeedle);
  assert.ok(start >= 0, 'missing ' + startNeedle);
  assert.ok(end > start, 'missing end ' + endNeedle);
  return source.slice(start, end);
}

const resolveSrc = sliceBetween('  function resolvePracticeId(q) {', '  function hydratePracticeList()');
const hydrateSrc = sliceBetween('  function hydratePracticeList() {', '  function ensurePracticeWindow(');
const windowSrc = sliceBetween('  function ensurePracticeWindow(', '  function entryToPseudo(');
const applySrc = sliceBetween('  function applyPracticeOrder() {', '  function isPracticeShuffled() {');
const jumpSrc = sliceBetween('  function jumpToQuestionNumber(n) {', '  function renderJumpSelect() {');

test('全部+乱序回填按ID，不按原题库位置覆盖顺序', () => {
  const ctx = {
    state: { practiceFilter: 'all', practiceList: [{ id: 'b', _stub: true }, { id: 'a', _stub: true }] },
    qOrder: [{ id: 'a' }, { id: 'b' }],
    bankMeta: { index: [] },
    isPracticeShuffled: () => true,
    loadedQuestion: (id) => ({ id, loaded: true }),
    indexEntryId: (e) => (e && e.id != null ? String(e.id) : ''),
  };
  vm.runInNewContext(resolveSrc + hydrateSrc + ';hydratePracticeList()', ctx);
  assert.equal(ctx.state.practiceList.map((q) => q.id).join(','), 'b,a');
  assert.equal(ctx.state.practiceList[0].loaded, true);
});

test('全部+乱序按需批量拉取ID而非错误位置页码', async () => {
  let ids = [];
  const ctx = {
    Promise,
    window: {
      AI103Auth: {
        loadExamByIds: async (exam, part) => {
          ids = part;
          return part.map((id) => ({ id }));
        },
        loadExamPage: () => {
          throw Error('乱序不应按位置拉页');
        },
      },
    },
    state: { practiceFilter: 'all', practiceList: [{ id: 'far-250', _stub: true }, { id: 'near-5', _stub: true }] },
    currentExamId: 'az305',
    bankMeta: { index: [{ id: 'far-250', n: 250 }, { id: 'near-5', n: 5 }] },
    protectedBanksOn: () => true,
    isPracticeShuffled: () => true,
    loadedQuestion: () => null,
    absorbQuestions: () => {},
    indexEntryId: (e) => (e && e.id != null ? String(e.id) : ''),
  };
  vm.runInNewContext(resolveSrc + windowSrc, ctx);
  await ctx.ensurePracticeWindow(0);
  assert.equal(ids[0], 'far-250');
  assert.ok(!ids.includes('__off_0'));
});

test('乱序列表中的 __off 占位通过索引下标解析为真实ID再拉取', async () => {
  let ids = [];
  const ctx = {
    Promise,
    window: {
      AI103Auth: {
        loadExamByIds: async (exam, part) => {
          ids = part;
          return part.map((id) => ({ id }));
        },
        loadExamPage: () => {
          throw Error('乱序不应按位置拉页');
        },
      },
    },
    state: {
      practiceFilter: 'all',
      practiceList: [
        { id: '__off_249', _stub: true, _index: 249 },
        { id: '__off_4', _stub: true, _index: 4 },
      ],
    },
    currentExamId: 'az305',
    bankMeta: { index: Array.from({ length: 250 }, (_, i) => ({ id: 'q' + (i + 1), n: i + 1 })) },
    protectedBanksOn: () => true,
    isPracticeShuffled: () => true,
    loadedQuestion: () => null,
    absorbQuestions: () => {},
    indexEntryId: (e) => (e && e.id != null ? String(e.id) : ''),
  };
  vm.runInNewContext(resolveSrc + windowSrc, ctx);
  await ctx.ensurePracticeWindow(0);
  assert.equal(Array.from(ids).join(','), 'q250,q5');
});

test('保存的乱序按解析后的ID重排，不会退回题库原位置', () => {
  const ctx = {
    state: {
      practiceFilter: 'all',
      practiceOrder: { all: ['q250', 'q5', 'q1'] },
      practiceList: [
        { id: '__off_0', _stub: true, _index: 0 },
        { id: '__off_4', _stub: true, _index: 4 },
        { id: '__off_249', _stub: true, _index: 249 },
      ],
    },
    bankMeta: { index: Array.from({ length: 250 }, (_, i) => ({ id: 'q' + (i + 1), n: i + 1 })) },
    indexEntryId: (e) => (e && e.id != null ? String(e.id) : ''),
  };
  vm.runInNewContext(resolveSrc + applySrc + ';applyPracticeOrder()', ctx);
  assert.equal(Array.from(ctx.state.practiceList).map((q) => ctx.resolvePracticeId(q)).join(','), 'q250,q5,q1');
});

test('乱序跳题按题目ID定位，不回退到未打乱的页码位置', () => {
  let rendered = -1;
  const list = [
    { id: 'q250', _stub: true },
    { id: 'q5', _stub: true },
    { id: 'q1', _stub: true },
  ];
  const ctx = {
    state: { practiceFilter: 'all', practiceList: list, practiceIndex: 0, practiceOrder: { all: ['q250', 'q5', 'q1'] } },
    bankMeta: { ready: true, index: [{ id: 'q1', n: 1 }, { id: 'q5', n: 5 }, { id: 'q250', n: 250 }] },
    protectedBanksOn: () => true,
    isPracticeShuffled: () => true,
    statTotal: () => 250,
    maxQNum: () => 250,
    qNumOf: () => 0,
    setJumpHint: () => {},
    bi: () => 'invalid',
    renderPractice: () => { rendered = ctx.state.practiceIndex; },
    indexEntryId: (e) => (e && e.id != null ? String(e.id) : ''),
    $: () => ({ value: '', classList: { toggle() {} }, setAttribute() {}, removeAttribute() {} }),
  };
  vm.runInNewContext(resolveSrc + jumpSrc, ctx);
  assert.equal(ctx.jumpToQuestionNumber(5), true);
  assert.equal(ctx.state.practiceIndex, 1);
  assert.equal(rendered, 1);
  assert.equal(ctx.jumpToQuestionNumber(250), true);
  assert.equal(ctx.state.practiceIndex, 0);
});
