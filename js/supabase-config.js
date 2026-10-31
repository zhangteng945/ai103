/**
 * Supabase config kept for later restore.
 * authUi: false — temporary shared-password gate (js/password-gate.js) is active;
 * index.html does not load supabase vendor/client for China access speed.
 *
 * --- Local-only Worker proxy experiment (do NOT push without Teng OK) ---
 * To try Auth via Cloudflare Worker instead of supabase.co:
 *   1. Deploy workers/supabase-proxy (see docs/workers-supabase-proxy.md)
 *   2. Set url to Worker root, e.g.:
 *        url: "https://ai103-supabase-proxy.XXXX.workers.dev"
 *      (supabase-js uses this as API base; Worker must expose /auth/v1/...)
 *   3. Set authUi: true and swap password-gate for supabase scripts in index.html
 *   4. Keep anonKey from this file; never commit or paste the full JWT into docs/chat
 * Example file: js/supabase-config.proxy.example.js
 */
window.__AI103_SUPABASE__ = {
  url: "https://paswovhtsoljydywdmvb.supabase.co",
  // Optional local override when testing the proxy (leave commented in production):
  // url: "https://ai103-supabase-proxy.XXXX.workers.dev",
  anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBhc3dvdmh0c29sanlkeXdkbXZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMxNTEwOTEsImV4cCI6MjEwODcyNzA5MX0.G9QlmFfrM5qeUuHtJ5wlFXgr2ALTrXAPhK-F6a_nGh8",
  authUi: false
};
