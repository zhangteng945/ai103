/**
 * node js/progress-core.test.js
 * Covers wrongIds merge (import path) and full snapshot replace (manual download).
 */
var assert = require("assert");
var PC = require("./progress-core.js");

function mem() {
  var store = {};
  return {
    getItem: function (k) { return Object.prototype.hasOwnProperty.call(store, k) ? store[k] : null; },
    setItem: function (k, v) { store[k] = String(v); },
    removeItem: function (k) { delete store[k]; },
    get length() { return Object.keys(store).length; },
    key: function (i) { return Object.keys(store)[i] || null; },
    _store: store,
  };
}

function practice(wrong, answers, extra) {
  var p = { answers: answers || {}, submitted: {}, flags: {}, wrongIds: {}, clearedIds: {} };
  Object.keys(wrong || {}).forEach(function (id) { if (wrong[id]) p.wrongIds[id] = true; });
  Object.keys(p.answers).forEach(function (id) { p.submitted[id] = true; });
  if (extra) Object.keys(extra).forEach(function (k) { p[k] = extra[k]; });
  return p;
}

var newerCleared = practice({}, { q1: ["A"] }, { clearedIds: { q9: true } });
newerCleared.submitted = { q1: true };
var olderJunk = practice({ q9: true, q2: true }, { q9: ["B"], q2: ["C"] });
var merged = PC.mergePractice(olderJunk, 1, newerCleared, 5);
assert.strictEqual(merged.wrongIds.q9, undefined, "tombstone blocks remote wrong");
assert.strictEqual(merged.clearedIds.q9, true);
assert.strictEqual(merged.answers.q9, undefined);
assert.strictEqual(merged.wrongIds.q2, true, "unrelated older wrong kept");

var bothOld = practice({ q1: true }, { q1: ["B"] });
var bothNew = practice({}, { q1: ["A"] });
var validated = PC.mergePractice(bothOld, 1, bothNew, 9);
assert.strictEqual(validated.wrongIds.q1, undefined, "newer answer without wrong bit drops union");
assert.deepStrictEqual(validated.answers.q1, ["A"]);

var rewrong = practice({ q1: true }, { q1: ["C"] }, { clearedIds: {} });
var stamped = practice({}, {}, { clearedIds: { q1: true } });
var revived = PC.mergePractice(stamped, 1, rewrong, 8);
assert.strictEqual(revived.wrongIds.q1, true, "newer wrong revives id");
assert.strictEqual(revived.clearedIds.q1, undefined);

var onlyOlder = PC.mergePractice(practice({ q3: true }, {}), 2, practice({}, { q8: ["A"] }), 4);
assert.strictEqual(onlyOlder.wrongIds.q3, true, "older wrong survives when newer never saw it");

var ls = mem();
ls.setItem("itcert_practice_v1_ai103", JSON.stringify({ wrongIds: { junk: true }, answers: {}, submitted: {}, flags: {} }));
ls.setItem("itcert_practice_v1_dop-c02", JSON.stringify({ wrongIds: { keepme: true }, answers: {}, submitted: {}, flags: {} }));
var remote = {
  v: 1,
  exams: {
    ai103: { p: { answers: { q1: ["A"] }, submitted: { q1: true }, flags: {}, wrongIds: {}, clearedIds: {} }, pt: 3, last: null, lt: 0, hist: [] },
  },
};
PC.replaceAll(ls, remote);
assert.strictEqual(ls.getItem("itcert_practice_v1_dop-c02"), null, "download drops exams absent from cloud");
var applied = JSON.parse(ls.getItem("itcert_practice_v1_ai103"));
assert.deepStrictEqual(applied.answers.q1, ["A"]);
assert.strictEqual(applied.wrongIds.junk, undefined);

var stamped = PC.snapshot(ls, ["ai103"]);
assert.strictEqual(stamped.schema, "itcert-progress");
assert.strictEqual(stamped.compat, 2);
assert.strictEqual(PC.gradingDecision("rev-a", "rev-b").grade, false);
assert.strictEqual(PC.gradingDecision("", "rev-b").grade, true);
var bag = { answers: { q1: ["Z"] }, submitted: { q1: true }, flags: { q1: true }, wrongIds: { q1: true }, answerRevisions: { q1: "old" }, legacyIsolated: {} };
PC.isolateRecord(bag, "q1", "option-shape-unmapped");
assert.strictEqual(bag.wrongIds.q1, undefined);
assert.strictEqual(bag.legacyIsolated.q1.wrong, true);
assert.strictEqual(bag.legacyIsolated.q1.answers[0], "Z");
var withRev = {
  v: 1,
  schema: "itcert-progress",
  compat: 2,
  exams: { ai103: { p: { answers: { q1: ["A"] }, submitted: { q1: true }, flags: {}, wrongIds: {}, clearedIds: {}, answerRevisions: { q1: "rev-1" }, legacyIsolated: { q9: { reason: "kept" } } }, pt: 1, last: null, lt: 0, hist: [] } },
};
var ls2 = mem();
ls2.setItem("itcert_practice_v1_dop-c02", JSON.stringify({ wrongIds: { keepme: true } }));
PC.replaceAll(ls2, withRev);
var round = JSON.parse(ls2.getItem("itcert_practice_v1_ai103"));
assert.strictEqual(round.answerRevisions.q1, "rev-1");
assert.strictEqual(round.legacyIsolated.q9.reason, "kept");
assert.strictEqual(ls2.getItem("itcert_practice_v1_dop-c02"), null);
assert.throws(function () { PC.validate({ schema: "other", exams: {} }); }, /不兼容/);
assert.throws(function () { PC.validate({ compat: 9, exams: {} }); }, /过新/);
PC.validate({ exams: {} });

console.log("progress-core tests ok");
