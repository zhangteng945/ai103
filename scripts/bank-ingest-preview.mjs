/**
 * Offline preview of a local quizplay-shaped fixture.
 * Does not read secrets, does not call Supabase, and does not publish.
 * Usage: node scripts/bank-ingest-preview.mjs [fixture-dir]
 */
import fs from "node:fs";
import path from "node:path";
import { REGISTRY, normalizeQuizplayBundle } from "../supabase/functions/_shared/bank-version-core.mjs";

const dir = path.resolve(process.argv[2] || "js/fixtures/az305-sample");
const manifest = JSON.parse(fs.readFileSync(path.join(dir, "quiz.json"), "utf8"));
const files = {};
const scenarios = {};
const media = {};
for (const rel of manifest.questions || []) {
  files[rel] = JSON.parse(fs.readFileSync(path.join(dir, rel), "utf8"));
  if (files[rel].caseStudy) {
    scenarios[files[rel].caseStudy] = JSON.parse(fs.readFileSync(path.join(dir, files[rel].caseStudy), "utf8"));
  }
  if (files[rel].image) media[files[rel].image] = fs.readFileSync(path.join(dir, files[rel].image));
}
const source = REGISTRY.banks[0].sources[0];
const snap = normalizeQuizplayBundle({
  source: source,
  bankCode: "az-305",
  manifest: manifest,
  files: files,
  scenarios: scenarios,
  media: media,
  collectedAt: "2026-11-08T00:00:00.000Z",
  sourceUpdatedAt: null,
  commitSha: null,
  extraWarnings: ["fixture_not_live_corpus"],
});
const summary = {
  fixture: true,
  liveCorpus: false,
  versionId: snap.versionId,
  questionCount: snap.questionCount,
  mediaCount: snap.mediaCount,
  playableCount: snap.playableCount,
  types: snap.questions.map((q) => q.type),
  validation: snap.validation,
  license: snap.provenance.license,
  aiGenerated: snap.provenance.aiGenerated,
  official: snap.provenance.official,
  fullCorpus: snap.provenance.fullCorpus,
  accuracyCertified: snap.provenance.accuracyCertified,
  sourceUpdatedAt: snap.sourceUpdatedAt,
};
console.log(JSON.stringify(summary, null, 2));
