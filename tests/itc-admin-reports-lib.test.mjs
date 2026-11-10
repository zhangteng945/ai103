import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parseReportId, parseReportStatus, resolvePatch, questionLabel } from '../supabase/functions/itc-admin/reports-lib.mjs';

test('resolve-report 校验 id/状态，并可切回未处理', () => {
  const id = "ce33e2d9-e2e3-40d7-ac8d-8190ee87f58b";
  assert.equal(parseReportId(id), id);
  assert.throws(() => parseReportId("nope"), /报错编号无效/);
  assert.equal(parseReportStatus("resolved"), "resolved");
  assert.equal(parseReportStatus("open"), "open");
  assert.throws(() => parseReportStatus("done"), /状态须为/);
  const now = new Date("2026-11-10T13:40:00Z");
  const admin = "d9071785-2241-42b9-909e-2797a4eafe0d";
  assert.deepEqual(resolvePatch("resolved", admin, now), {
    status: "resolved",
    resolved_at: "2026-11-10T13:40:00.000Z",
    resolved_by: admin
  });
  assert.deepEqual(resolvePatch("open", admin, now), {
    status: "open",
    resolved_at: null,
    resolved_by: null
  });
});

test('questionLabel 与前台一致', () => {
  assert.equal(questionLabel({ num: 12 }, "x"), "第12题");
  assert.equal(questionLabel({}, "q001"), "q001");
});
