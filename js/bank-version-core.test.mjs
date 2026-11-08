/**
 * node js/bank-version-core.test.mjs
 * No production secrets and no network. Fixture text is original.
 */
import assert from "node:assert";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  sha256Text,
  resolveBankQuery,
  assertPublicUrl,
  isPrivateAddress,
  fetchAllowlisted,
  collectQuizplaySource,
  normalizeQuizplayBundle,
  diffQuestions,
  formatShanghai,
  assertAdmin,
  decideServeVersion,
  slicePinned,
  createBankStore,
  runBoundedCollect,
  publishVersion,
  rollbackVersion,
  confirmPhrase,
  REGISTRY,
  policyForSource,
} from "../supabase/functions/_shared/bank-version-core.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

assert.strictEqual(sha256Text("abc"), "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad");
assert.strictEqual(formatShanghai("2026-03-11T15:36:13Z"), "2026-03-11 23:36:13");
assert.strictEqual(formatShanghai(""), "未知");
assert.strictEqual(formatShanghai(null), "未知");

const az = resolveBankQuery(" AZ 305 ");
assert.strictEqual(az.ok, true);
assert.strictEqual(az.bank.code, "az-305");
assert.strictEqual(az.bank.sources[0].license, "AGPL-3.0");
assert.strictEqual(az.bank.sources[0].official, false);
assert.strictEqual(az.bank.sources[0].fullCorpus, false);
const refused = resolveBankQuery("azurecertprep");
assert.strictEqual(refused.configured, false);
assert.strictEqual(refused.refused, true);
assert.match(refused.message, /不会编造/);
const unknown = resolveBankQuery("dp-900");
assert.strictEqual(unknown.configured, false);
assert.match(unknown.message, /不会生成完整或最新题库/);

assert.strictEqual(isPrivateAddress("127.0.0.1"), true);
assert.strictEqual(isPrivateAddress("10.1.2.3"), true);
assert.strictEqual(isPrivateAddress("169.254.169.254"), true);
assert.strictEqual(isPrivateAddress("8.8.8.8"), false);
assert.throws(() => assertPublicUrl("http://raw.githubusercontent.com/quizplay-io/quiz-player-quizzes-az-305-question-set-1/main/quiz.json", policyForSource(az.bank.sources[0])), /https/);
assert.throws(() => assertPublicUrl("https://user:pw@raw.githubusercontent.com/quizplay-io/quiz-player-quizzes-az-305-question-set-1/main/quiz.json", policyForSource(az.bank.sources[0])), /凭据/);
assert.throws(() => assertPublicUrl("https://169.254.169.254/latest", policyForSource(az.bank.sources[0])), /私网|允许名单/);
assert.throws(() => assertPublicUrl("https://raw.githubusercontent.com/other/repo/main/quiz.json", policyForSource(az.bank.sources[0])), /允许名单/);
assert.throws(() => assertPublicUrl("https://raw.githubusercontent.com/quizplay-io/quiz-player-quizzes-az-305-question-set-1/main/../../other/secret", policyForSource(az.bank.sources[0])), /允许名单/);
assert.throws(() => assertPublicUrl("https://raw.githubusercontent.com/quizplay-io/quiz-player-quizzes-az-305-question-set-1/main/quiz%00.json", policyForSource(az.bank.sources[0])), /路径/);

const policy = policyForSource(az.bank.sources[0]);
let calls = 0;
await assert.rejects(fetchAllowlisted("https://evil.example/quiz.json", {
  policy: policy,
  resolveHost: async () => ["8.8.8.8"],
  fetchImpl: async () => { calls++; return { status: 200, headers: { get: () => "" }, arrayBuffer: async () => new Uint8Array() }; },
}), /允许名单/);
assert.strictEqual(calls, 0);
await assert.rejects(fetchAllowlisted("https://raw.githubusercontent.com/quizplay-io/quiz-player-quizzes-az-305-question-set-1/main/quiz.json", {
  policy: policy,
  resolveHost: async () => ["127.0.0.1"],
  fetchImpl: async () => { throw new Error("should not fetch"); },
}), /私网/);
let redirected = 0;
await assert.rejects(fetchAllowlisted("https://raw.githubusercontent.com/quizplay-io/quiz-player-quizzes-az-305-question-set-1/main/quiz.json", {
  policy: policy,
  resolveHost: async () => ["185.199.108.133"],
  fetchImpl: async () => {
    redirected++;
    return { status: 302, headers: { get: () => "http://127.0.0.1/secret" }, arrayBuffer: async () => new Uint8Array() };
  },
}), /https|私网|允许名单/);
assert.strictEqual(redirected, 1);
await assert.rejects(fetchAllowlisted("https://raw.githubusercontent.com/quizplay-io/quiz-player-quizzes-az-305-question-set-1/main/quiz.json", {
  policy: policy,
  limits: { retries: 0, timeoutMs: 1000, maxFileBytes: 1000, maxRedirects: 1 },
  resolveHost: async () => ["185.199.108.133"],
  fetchImpl: async () => ({ status: 404, headers: { get: () => "" }, arrayBuffer: async () => new Uint8Array() }),
}), /来源不可用/);
const denied = assertAdmin(null, Date.parse("2026-11-08T00:00:00Z"));
assert.strictEqual(denied.status, 401);
const student = assertAdmin({ id: "u", app_metadata: { role: "student" } }, Date.parse("2026-11-08T00:00:00Z"));
assert.strictEqual(student.status, 403);
const expired = assertAdmin({ id: "u", app_metadata: { role: "admin", expires_at: "2020-01-01T00:00:00Z" } }, Date.parse("2026-11-08T00:00:00Z"));
assert.strictEqual(expired.status, 403);
const admin = assertAdmin({ id: "admin-1", app_metadata: { role: "admin" } }, Date.parse("2026-11-08T00:00:00Z"));
assert.strictEqual(admin.ok, true);

function loadFixture() {
  const dir = path.join(root, "js/fixtures/az305-sample");
  const manifest = JSON.parse(fs.readFileSync(path.join(dir, "quiz.json"), "utf8"));
  const files = {};
  const scenarios = {};
  const media = {};
  for (const rel of manifest.questions) {
    files[rel] = JSON.parse(fs.readFileSync(path.join(dir, rel), "utf8"));
    if (files[rel].caseStudy) scenarios[files[rel].caseStudy] = JSON.parse(fs.readFileSync(path.join(dir, files[rel].caseStudy), "utf8"));
    if (files[rel].image) media[files[rel].image] = fs.readFileSync(path.join(dir, files[rel].image));
  }
  return { manifest, files, scenarios, media };
}
const fixture = loadFixture();
const source = Object.assign({}, REGISTRY.banks[0].sources[0], { advertisedCount: 4 });
const snap = normalizeQuizplayBundle({
  source: source,
  bankCode: "az-305",
  manifest: fixture.manifest,
  files: fixture.files,
  scenarios: fixture.scenarios,
  media: fixture.media,
  collectedAt: "2026-11-08T00:00:00.000Z",
  sourceUpdatedAt: "2026-03-11T15:36:13Z",
  commitSha: "a6c1b666c430bb47a45ae322e8ebe8fba6e3008a",
});
assert.strictEqual(snap.questionCount, 4);
assert.strictEqual(snap.mediaCount, 1);
assert.strictEqual(snap.playableCount, 3);
assert.strictEqual(snap.provenance.accuracyCertified, false);
assert.strictEqual(snap.provenance.aiGenerated, true);
assert.strictEqual(snap.provenance.license, "AGPL-3.0");
assert.strictEqual(snap.validation.promotionBlocked, false);
const single = snap.questions[0];
assert.strictEqual(single.caseStudyId, "case-sample");
assert.notStrictEqual(single.answer[0], "B");
assert.ok(single.options.some((o) => o.id === single.answer[0] && o.text === "Sample option beta"));
const swappedFiles = JSON.parse(JSON.stringify(fixture.files));
const opts = swappedFiles["questions/01-sample-single.json"].options;
swappedFiles["questions/01-sample-single.json"].options = [opts[1], opts[0], opts[2], opts[3]];
const swapped = normalizeQuizplayBundle({
  source: source, bankCode: "az-305", manifest: fixture.manifest, files: swappedFiles,
  scenarios: fixture.scenarios, media: fixture.media, collectedAt: "2026-11-08T01:00:00.000Z",
});
const swappedSingle = swapped.questions[0];
assert.strictEqual(swappedSingle.id, single.id);
assert.strictEqual(swappedSingle.answer[0], single.answer[0]);
assert.notStrictEqual(swappedSingle.options[0].id, single.options[0].id);
assert.strictEqual(snap.questions[3].playable, false);
assert.match(snap.questions[3].unsupportedReason, /不会记入错题/);
const again = normalizeQuizplayBundle({
  source: source, bankCode: "az-305", manifest: fixture.manifest, files: fixture.files,
  scenarios: fixture.scenarios, media: fixture.media, collectedAt: "2026-12-01T00:00:00.000Z",
  sourceUpdatedAt: null,
});
assert.strictEqual(again.versionId, snap.versionId);

const broken = JSON.parse(JSON.stringify(fixture.files));
broken["questions/01-sample-single.json"].options.forEach((o) => { o.correct = false; });
const invalid = normalizeQuizplayBundle({
  source: source, bankCode: "az-305", manifest: fixture.manifest, files: broken,
  scenarios: fixture.scenarios, media: fixture.media, collectedAt: "2026-11-08T00:00:00.000Z",
});
assert.ok(invalid.validation.reasons.indexOf("missing_answer") >= 0);
assert.strictEqual(invalid.validation.promotionBlocked, true);
const noMedia = normalizeQuizplayBundle({
  source: source, bankCode: "az-305", manifest: fixture.manifest, files: fixture.files,
  scenarios: fixture.scenarios, media: {}, collectedAt: "2026-11-08T00:00:00.000Z",
});
assert.ok(noMedia.validation.reasons.indexOf("missing_media") >= 0);

const dupFiles = Object.assign({}, fixture.files, { "questions/05-dup.json": fixture.files["questions/02-sample-multi.json"] });
const dupManifest = { questions: fixture.manifest.questions.concat(["questions/05-dup.json"]) };
const dups = normalizeQuizplayBundle({
  source: source, bankCode: "az-305", manifest: dupManifest, files: dupFiles,
  scenarios: fixture.scenarios, media: fixture.media, collectedAt: "2026-11-08T00:00:00.000Z",
});
assert.ok(dups.validation.reasons.indexOf("duplicate") >= 0);

const changedFiles = JSON.parse(JSON.stringify(fixture.files));
changedFiles["questions/01-sample-single.json"].explanation = "Different fixture explanation only.";
const changed = normalizeQuizplayBundle({
  source: source, bankCode: "az-305", manifest: fixture.manifest, files: changedFiles,
  scenarios: fixture.scenarios, media: fixture.media, collectedAt: "2026-11-08T00:00:00.000Z",
});
const answerFiles = JSON.parse(JSON.stringify(fixture.files));
answerFiles["questions/01-sample-single.json"].options[1].correct = false;
answerFiles["questions/01-sample-single.json"].options[0].correct = true;
const answerChanged = normalizeQuizplayBundle({
  source: source, bankCode: "az-305", manifest: fixture.manifest, files: answerFiles,
  scenarios: fixture.scenarios, media: fixture.media, collectedAt: "2026-11-08T00:00:00.000Z",
});
const diff = diffQuestions(snap.questions, changed.questions);
assert.strictEqual(diff.counts.changed, 1);
assert.strictEqual(diff.counts["answer-changed"] || 0, 0);
const diffAns = diffQuestions(snap.questions, answerChanged.questions);
assert.strictEqual(diffAns.counts["answer-changed"], 1);
const fuzzyPrev = [{ externalId: "other", id: "stable-other", revision: "r", stem: "alpha beta gamma delta epsilon zeta eta theta storage practice", options: [], answer: [] }];
const fuzzyNext = [{ externalId: "new-one", id: "stable-new", revision: "r2", stem: "alpha beta gamma delta epsilon zeta eta theta storage practice", options: [], answer: [] }];
const fuzzy = diffQuestions(fuzzyPrev, fuzzyNext);
assert.strictEqual(fuzzy.counts["fuzzy-review"], 1);
assert.strictEqual(fuzzy.items.find((item) => item.kind === "fuzzy-review").reviewOnly, true);
assert.notStrictEqual(fuzzy.items.find((item) => item.kind === "fuzzy-review").stableId, "stable-other");

const bigPrev = Array.from({ length: 10 }, (_, i) => ({ externalId: "q" + i, id: "id" + i, revision: "a", stem: "stem " + i, options: [], answer: [] }));
const bigNext = bigPrev.slice(0, 3).map((q) => Object.assign({}, q));
const drop = diffQuestions(bigPrev, bigNext);
assert.ok(drop.blockReasons.indexOf("massive_drop") >= 0);

const legacy = decideServeVersion({ examId: "ai103", requested: null, catalog: null, versions: [], legacyDefaults: { ai103: "202611011910" } });
assert.strictEqual(legacy.kind, "legacy");
assert.strictEqual(legacy.version, "202611011910");
const unpublished = decideServeVersion({ examId: "az-305", requested: null, catalog: { activeVersionId: null }, versions: [], legacyDefaults: { ai103: "202611011910" } });
assert.strictEqual(unpublished.ok, false);
const pinned = decideServeVersion({
  examId: "az-305",
  requested: "c-old",
  catalog: { activeVersionId: "c-new" },
  versions: [
    { id: "c-old", status: "retained", bankCode: "az-305" },
    { id: "c-new", status: "published", bankCode: "az-305" },
    { id: "c-draft", status: "candidate", bankCode: "az-305" },
  ],
  legacyDefaults: {},
});
assert.strictEqual(pinned.version, "c-old");
const candidate = decideServeVersion({
  examId: "az-305", requested: "c-draft", catalog: { activeVersionId: "c-new" },
  versions: [{ id: "c-draft", status: "candidate", bankCode: "az-305" }], legacyDefaults: {},
});
assert.strictEqual(candidate.status, 403);
const v1 = Array.from({ length: 60 }, (_, i) => ({ id: "v1-" + i, externalId: "e" + i }));
const v2 = [{ id: "v2-only", externalId: "only" }];
const page = slicePinned(v1, { version: "c-old", offset: 50, limit: 50 });
assert.strictEqual(page.version, "c-old");
assert.strictEqual(page.questions.length, 10);
assert.strictEqual(page.questions[0].id, "v1-50");
assert.ok(!page.questions.some((q) => q.id === "v2-only"));
const metaIds = slicePinned(v1, { version: "c-old", offset: 0, limit: 50 }).questions.map((q) => q.id);
const byId = slicePinned(v1, { version: "c-old", ids: metaIds.slice(0, 3) });
assert.deepStrictEqual(byId.questions.map((q) => q.id), metaIds.slice(0, 3));
const sample = slicePinned(v1, { version: "c-old", sample: 5 });
assert.ok(sample.questions.every((q) => q.id.indexOf("v1-") === 0));
assert.ok(!slicePinned(v2, { version: "c-new", offset: 0, limit: 50 }).questions.some((q) => String(q.id).indexOf("v1-") === 0));

const store = createBankStore();
const progress = store.progress;
const perms = store.permissions;
const failed = await runBoundedCollect(store, {
  bankCode: "az-305", actor: "admin-1", now: "2026-11-08T00:00:00.000Z", jobId: "job-fail",
  collect: async () => { throw new Error("题目采集不完整，未写入候选版本"); },
});
assert.strictEqual(failed.ok, false);
assert.strictEqual(store.catalog["az-305"].activeVersionId, null);
assert.strictEqual(Object.keys(store.versions).length, 0);
assert.strictEqual(store.progress, progress);
assert.strictEqual(store.permissions, perms);
const saved = await runBoundedCollect(store, {
  bankCode: "az-305", actor: "admin-1", now: "2026-11-08T00:05:00.000Z", jobId: "job-ok",
  collect: async () => snap,
});
assert.strictEqual(saved.ok, true);
assert.strictEqual(store.catalog["az-305"].activeVersionId, null);
const same = await runBoundedCollect(store, {
  bankCode: "az-305", actor: "admin-1", now: "2026-11-08T00:06:00.000Z", jobId: "job-same",
  collect: async () => snap,
});
assert.strictEqual(same.unchanged, true);
assert.strictEqual(Object.keys(store.versions).length, 1);
const locked = await runBoundedCollect(store, {
  bankCode: "az-305", actor: "admin-2", now: "2026-11-08T00:07:00.000Z", jobId: "job-held",
  collect: async () => snap,
});
assert.strictEqual(locked.ok, true);
store.catalog["az-305"].lockJobId = "other-job";
store.catalog["az-305"].lockUntil = Date.parse("2026-11-08T00:10:00.000Z");
const parallel = await runBoundedCollect(store, {
  bankCode: "az-305", actor: "admin-1", now: "2026-11-08T00:08:00.000Z", jobId: "job-parallel",
  collect: async () => snap,
});
assert.strictEqual(parallel.code, "locked");
const badPublish = publishVersion(store, {
  bankCode: "az-305", targetId: snap.versionId, expectedActiveId: "nope", actor: "admin-1",
  confirm: confirmPhrase("publish", snap.versionId), now: "2026-11-08T00:09:00.000Z",
});
assert.strictEqual(badPublish.code, "cas_conflict");
assert.strictEqual(store.catalog["az-305"].activeVersionId, null);
store.catalog["az-305"].lockJobId = null;
const published = publishVersion(store, {
  bankCode: "az-305", targetId: snap.versionId, expectedActiveId: null, actor: "admin-1",
  confirm: confirmPhrase("publish", snap.versionId), now: "2026-11-08T00:09:00.000Z",
});
assert.strictEqual(published.activeVersionId, snap.versionId);
assert.strictEqual(store.audit[0].fromVersionId, null);
assert.strictEqual(store.audit[0].toVersionId, snap.versionId);
const blockedPublish = await runBoundedCollect(store, {
  bankCode: "az-305", actor: "admin-1", now: "2026-11-08T00:20:00.000Z", jobId: "job-bad",
  collect: async () => invalid,
});
assert.strictEqual(blockedPublish.ok, true);
const refusedPublish = publishVersion(store, {
  bankCode: "az-305", targetId: invalid.versionId, expectedActiveId: snap.versionId, actor: "admin-1",
  confirm: confirmPhrase("publish", invalid.versionId), now: "2026-11-08T00:21:00.000Z",
});
assert.strictEqual(refusedPublish.ok, false);
assert.strictEqual(store.catalog["az-305"].activeVersionId, snap.versionId);
const second = await runBoundedCollect(store, {
  bankCode: "az-305", actor: "admin-1", now: "2026-11-08T00:30:00.000Z", jobId: "job-2",
  collect: async () => changed,
});
assert.strictEqual(second.ok, true);
const published2 = publishVersion(store, {
  bankCode: "az-305", targetId: changed.versionId, expectedActiveId: snap.versionId, actor: "admin-1",
  confirm: confirmPhrase("publish", changed.versionId), now: "2026-11-08T00:31:00.000Z",
});
assert.strictEqual(published2.ok, true);
assert.strictEqual(store.versions[snap.versionId].status, "retained");
assert.strictEqual(store.versions[changed.versionId].status, "published");
const mediaBefore = store.versions[snap.versionId].media.length;
const rolled = rollbackVersion(store, {
  bankCode: "az-305", targetId: snap.versionId, expectedActiveId: changed.versionId, actor: "admin-1",
  confirm: confirmPhrase("rollback", snap.versionId), now: "2026-11-08T00:40:00.000Z",
});
assert.strictEqual(rolled.activeVersionId, snap.versionId);
assert.ok(store.versions[changed.versionId]);
assert.strictEqual(store.versions[snap.versionId].media.length, mediaBefore);
assert.strictEqual(store.versions[invalid.versionId].status, "candidate");
assert.strictEqual(store.progress, progress);
assert.strictEqual(store.permissions, perms);
assert.ok(store.audit.length >= 3);

const filesByUrl = {};
function put(url, body, status) {
  filesByUrl[url] = { status: status || 200, body: body };
}
const repo = "https://raw.githubusercontent.com/quizplay-io/quiz-player-quizzes-az-305-question-set-1/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/";
put("https://api.github.com/repos/quizplay-io/quiz-player-quizzes-az-305-question-set-1/commits/main", JSON.stringify({ sha: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", commit: { committer: { date: "2026-03-11T15:36:13Z" } } }));
put(repo + "quiz.json", JSON.stringify({ questions: ["questions/01-sample-single.json"] }));
put(repo + "questions/01-sample-single.json", JSON.stringify(fixture.files["questions/01-sample-single.json"]));
put(repo + "scenarios/case-sample.json", JSON.stringify(fixture.scenarios["scenarios/case-sample.json"]));
const live = await collectQuizplaySource(REGISTRY.banks[0].sources[0], {
  bankCode: "az-305",
  now: "2026-11-08T00:00:00.000Z",
  resolveHost: async () => ["185.199.108.133"],
  fetchImpl: async (url) => {
    const hit = filesByUrl[url];
    if (!hit) return { status: 404, headers: { get: () => "" }, arrayBuffer: async () => new Uint8Array() };
    const bytes = new TextEncoder().encode(hit.body);
    return { status: hit.status, headers: { get: () => "" }, arrayBuffer: async () => bytes };
  },
});
assert.strictEqual(live.questionCount, 1);
assert.strictEqual(live.provenance.official, false);
assert.strictEqual(live.provenance.countMatchesAdvertised, false);
assert.ok(live.validation.warnings.indexOf("count_differs_from_advertised") >= 0);
await assert.rejects(collectQuizplaySource(REGISTRY.banks[0].sources[0], {
  bankCode: "az-305",
  now: "2026-11-08T00:00:00.000Z",
  resolveHost: async () => ["185.199.108.133"],
  fetchImpl: async (url) => {
    if (url.indexOf("questions/") >= 0) return { status: 404, headers: { get: () => "" }, arrayBuffer: async () => new Uint8Array() };
    const hit = filesByUrl[url];
    const bytes = new TextEncoder().encode(hit.body);
    return { status: 200, headers: { get: () => "" }, arrayBuffer: async () => bytes };
  },
}), /不完整|不可用/);

const sql = fs.readFileSync(path.join(root, "supabase/migrations/20261108183000_bank_versions.sql"), "utf8");
assert.match(sql, /enable row level security/);
assert.match(sql, /revoke all on public\.bank_versions from public, anon, authenticated/);
assert.match(sql, /active_version_id is not distinct from p_expected/);
assert.match(sql, /promotion_blocked/);
assert.match(sql, /on delete restrict/);
assert.match(sql, /grant execute on function public\.itc_bank_cas_active/);
assert.doesNotMatch(sql, /grant execute on function public\.itc_bank_cas_active[\s\S]*to anon/);
const ingest = fs.readFileSync(path.join(root, "supabase/functions/itc-ingest/index.ts"), "utf8");
assert.match(ingest, /itc_bank_try_lock/);
assert.match(ingest, /itc_bank_cas_active/);
assert.doesNotMatch(ingest, /user_progress/);
const bankFn = fs.readFileSync(path.join(root, "supabase/functions/itc-bank/index.ts"), "utf8");
assert.match(bankFn, /decideServeVersion/);
assert.match(bankFn, /accountActive/);

console.log("bank-version-core tests ok");
console.log("fixture parse: questions=" + snap.questionCount + " media=" + snap.mediaCount + " playable=" + snap.playableCount + " types=" + snap.questions.map((q) => q.type).join(",") + " version=" + snap.versionId);
