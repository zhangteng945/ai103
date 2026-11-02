/**
 * Account login + progress sync config (IT认证练习).
 * enabled:false → site uses the shared password gate exactly as today (no network calls).
 * enabled:true  → email/password login (Supabase Auth via REST) gates the bank; progress syncs per account.
 *
 * apiBase: where /auth/v1 and /rest/v1 are reached. For mainland China use a China-reachable
 *          proxy (EdgeOne Makers/Pages Function, see edgeone/README.md), NOT *.supabase.co directly.
 * anonKey: Supabase anon (public) key — read from js/supabase-config.js if left empty.
 *          NEVER put the service_role key in any front-end file.
 */
window.__ITCERT_ACCOUNT__ = {
  enabled: true,
  apiBase: "https://1521755270-k0eh7082k7.ap-hongkong.tencentscf.com", // Tencent SCF HK proxy (allowlisted Supabase paths)
  anonKey: "",            // empty → window.__AI103_SUPABASE__.anonKey
  emailDomain: "ai103.local", // short name "zhangsan" → zhangsan@ai103.local
  timeoutMs: 8000,
  retries: 3,
  syncDebounceMs: 45000,      // upload at most ~45s after last local change
  syncPullMinIntervalMs: 300000, // re-pull when tab visible again only if ≥5 min since last pull
  allowOfflineCachedLogin: true, // already-logged-in device keeps working offline until account expiry
  deviceLimit: true,
  maxDevices: 2,          // display/default only; server enforces app_metadata.max_devices (default 2) in claim_device
  // protectedBanks:true → the browser never downloads public bank files or Storage objects.
  // After login it fetches one exam at a time, in batches, from Edge Function itc-bank
  // (js/account-auth.js). Set false to keep shipping banks as public static files.
  // `banks` is the private Storage catalog the function should serve; the browser does not fetch these paths.
  // Fill versions after: node scripts/admin-accounts.mjs upload-bank <examId> <file.js> <version>
  protectedBanks: true,
  banks: {
    "ai103":   "ai103/202611011910.js",
    "dop-c02": "dop-c02/202611011900.js",
    "dp-700":  "dp-700/202611011900.js",
    "dp-420":  "dp-420/202611011900.js"
  }
};
