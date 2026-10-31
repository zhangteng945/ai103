/**
 * 本地试跑「经 Cloudflare Worker 代理 Supabase」时的配置示例。
 * 用法：复制相关字段到本机 js/supabase-config.js（该文件已 gitignore，勿提交）。
 *
 * supabase-js 会把 url 当作 API 根路径，请求：
 *   {url}/auth/v1/...
 * 因此 Worker 必须暴露与 supabase.co 相同的路径布局。
 *
 * 部署得到真实 URL 后，把下面 zhangteng-ai103 换成你的 workers.dev subdomain。
 * 切回直连新加坡时：url 改回 https://paswovhtsoljydywdmvb.supabase.co
 *
 * 重要：默认生产路径仍是共享密码门（authUi: false + password-gate.js）。
 * 试 Auth 前请读 docs/workers-supabase-proxy.md；未经 Teng 批准不要 push GH Pages。
 */
window.__AI103_SUPABASE__ = {
  // 示例：Worker 根（不要指向 supabase.co）
  url: "https://ai103-supabase-proxy.zhangteng-ai103.workers.dev",
  // anonKey：从现有 js/supabase-config.js 复制，勿写进公开文档或提交到 git
  anonKey: "YOUR_ANON_KEY_FROM_LOCAL_supabase-config.js",
  authUi: true,
};
