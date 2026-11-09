# AZ-305 PDF interactive correction

Only `examId: az305` + `contentFormat: pdf_text_v1` opts into safe text/table/code formatting. The data uses existing automatic `single`, `multi`, `select`, `yn`, and `drag` controls. No AZ-305 self-evaluation records are packaged. Every case follow-up carries its full bilingual background.

Private PDF/candidate/evidence files stay outside this public repository. The local candidate path is `/workspace/ai103-redo-work/interactive/full-draft/bank-final.json`.

Local release gates:

```sh
npm run package:az305
npm run test:release
npm test
```

`test:release` now explicitly checks real app functions in Node, including scoring, wrong-question membership, two-correct clearing, daily/seen statistics, complete bilingual fields and legacy-bank grading. It is **not browser E2E**; browser screenshots were waived for this correction. Historical browser/self-evaluation tests remain under `test:release:legacy`, not the new gate.

Do not run the original PR #6 deployment/upload/packaging scripts unchanged: they hard-code the old artifact/version and may rerun a migration. This correction only needs one new private AZ-305 JSON object, an AZ default-version bump in `itc-bank/media.mjs`, and a normal frontend PR/cache upgrade. No database, account, progress, device, policy or legacy-bank changes are needed.
