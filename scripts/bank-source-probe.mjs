/**
 * Public read-only check of the allowlisted quizplay-io family.
 * Prints discovery status only. Does not save question text or call Supabase.
 * node scripts/bank-source-probe.mjs
 */
import dns from "node:dns/promises";
import { discoverExamSources, SITE_EXAM_CODES } from "../supabase/functions/_shared/bank-version-core.mjs";

async function resolveHost(host) {
  const out = [];
  try { out.push(...await dns.resolve4(host)); } catch { /* none */ }
  try { out.push(...await dns.resolve6(host)); } catch { /* none */ }
  return out;
}

const codes = SITE_EXAM_CODES;
const summary = [];
for (const code of codes) {
  const found = await discoverExamSources(code, { resolveHost, fetchImpl: fetch, sleep: async (ms) => new Promise((r) => setTimeout(r, ms)) });
  summary.push({
    code: found.code || code,
    status: found.status,
    collected: found.collected,
    message: found.message,
    candidates: (found.candidates || []).map((c) => ({
      repo: c.repo,
      status: c.status,
      set: c.set,
      questionCount: c.questionCount,
      license: c.license,
      sourceUpdatedAt: c.sourceUpdatedAt,
      aiGenerated: c.aiGenerated,
      official: c.official,
      fullCorpus: c.fullCorpus,
      retirementNote: c.retirementNote || null,
    })),
  });
}
console.log(JSON.stringify(summary, null, 2));
