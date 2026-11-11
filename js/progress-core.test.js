/**
 * node js/progress-core.test.js
 * Covers wrongIds merge (import path), full snapshot replace (practice overwrite),
 * and mock-exam history merge / dedup / cap for manual upload and download.
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

function hist(t, score, extra) {
  var h = { t: t, result: { correct: Math.round((score || 0) / 1000 * 65), total: 65, score1000: score, pass: (score || 0) >= 720 } };
  if (extra) Object.keys(extra).forEach(function (k) { h[k] = extra[k]; });
  return h;
}

var sameNoIdA = hist(1000, 700);
var sameNoIdB = hist(1000, 700);
var byId = hist(2000, 850, { id: "h_keep" });
var cloudDupOfId = hist(2000, 850); // no id, same exam+time+score as byId
var unique = hist(1500, 600, { id: "h_mid" });
var mergedHist = PC.mergeHist([sameNoIdA, byId], [sameNoIdB, cloudDupOfId, unique], "ai103");
assert.strictEqual(mergedHist.length, 3, "dedupes by id and by exam+time+score");
assert.strictEqual(mergedHist[0].t, 1000);
assert.strictEqual(mergedHist[1].id, "h_mid");
assert.strictEqual(mergedHist[2].id, "h_keep");
assert.ok(mergedHist[0].id, "assigns id when a history record has none");
assert.strictEqual(mergedHist[0].result.score1000, 700);

var sameIdDiffScore = PC.mergeHist(
  [hist(3000, 500, { id: "same" })],
  [hist(3000, 900, { id: "same" })],
  "ai103"
);
assert.strictEqual(sameIdDiffScore.length, 1, "id wins over composite when both have the same id");

var distinctIdsSameScore = PC.mergeHist(
  [hist(4000, 800, { id: "a1" })],
  [hist(4000, 800, { id: "a2" })],
  "ai103"
);
assert.strictEqual(distinctIdsSameScore.length, 2, "different ids stay distinct even with the same composite");

var overflow = [];
for (var i = 0; i < 60; i++) overflow.push(hist(5000 + i, 400 + i, { id: "cap_" + i }));
var capped = PC.mergeHist(overflow.slice(0, 40), overflow.slice(40), "ai103");
assert.strictEqual(capped.length, PC.HIST_MAX, "caps merged history at HIST_MAX");
assert.strictEqual(capped[0].id, "cap_10", "keeps the most recent HIST_MAX records");
assert.strictEqual(capped[capped.length - 1].id, "cap_59");

var localSnap = {
  v: 1, t: 1, exams: {
    ai103: { p: practice({ localOnly: true }, {}), pt: 9, last: { result: { score1000: 850 } }, lt: 9, hist: [sameNoIdA, byId] },
  },
};
var cloudSnap = {
  v: 1, t: 2, exams: {
    ai103: { p: practice({ q9: true }, { q1: ["A"] }), pt: 1, last: { result: { score1000: 500 } }, lt: 1, hist: [sameNoIdB, unique] },
    "dop-c02": { p: practice({ keepme: true }, {}), pt: 4, last: null, lt: 0, hist: [hist(800, 720, { id: "h_dop" })] },
  },
};
var uploaded = PC.composeOverwriteWithMergedHist(localSnap, cloudSnap);
assert.deepStrictEqual(uploaded.exams.ai103.p.wrongIds, { localOnly: true }, "upload keeps local practice");
assert.strictEqual(uploaded.exams.ai103.last.result.score1000, 850, "upload keeps local last exam");
assert.strictEqual(uploaded.exams.ai103.hist.length, 3, "upload merges history");
assert.strictEqual(uploaded.exams["dop-c02"].p, null, "upload does not keep cloud-only practice");
assert.strictEqual(uploaded.exams["dop-c02"].hist[0].id, "h_dop", "upload keeps cloud-only exam history");

var downloaded = PC.composeOverwriteWithMergedHist(cloudSnap, localSnap);
assert.strictEqual(downloaded.exams.ai103.p.wrongIds.q9, true, "download keeps cloud practice");
assert.strictEqual(downloaded.exams.ai103.p.wrongIds.localOnly, undefined, "download does not keep local-only practice");
assert.strictEqual(downloaded.exams.ai103.last.result.score1000, 500, "download keeps cloud last exam");
assert.strictEqual(downloaded.exams.ai103.hist.length, 3, "download merges history");
assert.ok(downloaded.exams.ai103.hist.some(function (h) { return h.id === "h_keep"; }));
assert.strictEqual(downloaded.exams["dop-c02"].p.wrongIds.keepme, true);

console.log("progress-core tests ok");
