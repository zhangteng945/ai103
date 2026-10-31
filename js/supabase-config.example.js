/**
 * 复制本文件为 supabase-config.js 并填入真实值。
 * supabase-config.js 不应提交到公开仓库。
 *
 * 对应 .env.example：
 *   SUPABASE_URL      → url
 *   SUPABASE_ANON_KEY → anonKey
 *
 * 填入真实 url + anonKey 后：未登录只能看到标题/作者与登录面板，
 * 登录成功后才显示题库首页与练习/模考。无密钥 / 占位符时保持离线开放访问。
 *
 * 离线调试时可强制显示登录面板：
 *   authUi: true
 * 或访问 index.html?auth=1
 */
window.__AI103_SUPABASE__ = {
  url: "https://YOUR_PROJECT_REF.supabase.co",
  anonKey: "your_anon_public_key_here",
  /** 无有效密钥时：为 true 或 ?auth=1 仍可显示顶栏账号面板（操作会提示未配置） */
  authUi: false,
};
