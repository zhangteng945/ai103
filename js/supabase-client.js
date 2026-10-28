/**
 * AI-103 Supabase Auth (Phase 1.1 — email + password + login gate).
 * - No valid url/anonKey: all APIs no-op; localStorage practice unchanged (open access).
 * - With real keys: hide home/practice/exam until session; logout returns to login-only.
 * - Requires supabase-js CDN before this file (window.supabase.createClient).
 * - Public sign-up is disabled; register shows admin-assigned message.
 * - Docs: docs/auth-plan.md
 */
(function (global) {
  "use strict";

  var cfg = global.__AI103_SUPABASE__ || {};
  var PLACEHOLDER =
    !cfg.url ||
    !cfg.anonKey ||
    String(cfg.url).indexOf("YOUR_PROJECT") >= 0 ||
    String(cfg.anonKey).indexOf("your_anon") >= 0;

  var enabled = !PLACEHOLDER;
  var featureUi =
    cfg.authUi === true ||
    (typeof location !== "undefined" &&
      /(?:^|[?&])auth=1(?:&|$)/.test(location.search || ""));

  var client = null;
  var state = {
    user: null,
    ready: false,
    mode: enabled ? "connecting" : "offline-noop",
  };

  function log() {
    if (typeof console !== "undefined" && console.info) {
      try {
        console.info.apply(console, ["[AI103Auth]"].concat([].slice.call(arguments)));
      } catch (e) {}
    }
  }

  function statusMessage() {
    if (!enabled) {
      return "未配置 Supabase（离线模式）。进度仅保存在本机 localStorage。";
    }
    if (state.mode === "no-sdk") {
      return "已配置云端，但 supabase-js 未加载。请检查 CDN。";
    }
    if (state.user && state.user.email) {
      return "已登录：" + state.user.email;
    }
    if (!state.ready) {
      return "正在恢复登录会话…";
    }
    return "已配置云端，尚未登录。账号由管理员分配。";
  }

  function setStatusEl(text) {
    var el = document.getElementById("auth-status");
    if (el) el.textContent = text || statusMessage();
  }

  function setBusy(busy) {
    ["btn-auth-login", "btn-auth-register", "btn-auth-logout"].forEach(function (id) {
      var b = document.getElementById(id);
      if (b) b.disabled = !!busy;
    });
  }

  function showPanel(show) {
    var panel = document.getElementById("auth-panel");
    if (!panel) return;
    if (show) panel.classList.remove("hidden");
    else panel.classList.add("hidden");
  }

  function applyUser(user) {
    state.user = user
      ? { id: user.id, email: user.email || "" }
      : null;
  }

  function isLoggedIn() {
    return !!(state.user && state.user.email);
  }

  function emitAuthChange() {
    try {
      document.dispatchEvent(
        new CustomEvent("ai103-auth-change", {
          detail: {
            enabled: enabled,
            ready: state.ready,
            user: state.user,
            loggedIn: isLoggedIn(),
          },
        })
      );
    } catch (e) {}
  }

  /** When Supabase is configured: hide app until session; show login panel. Offline: no gate. */
  function applyAppGate() {
    var html = document.documentElement;
    var body = document.body;
    if (!html) return;
    if (!enabled) {
      html.classList.remove("auth-required");
      if (body) {
        body.classList.remove("auth-gated", "auth-ok");
      }
      return;
    }
    html.classList.add("auth-required");
    if (body) {
      body.classList.add("auth-gated");
      if (isLoggedIn()) body.classList.add("auth-ok");
      else body.classList.remove("auth-ok");
    }
  }

  function refreshUi() {
    // Real keys → always show panel + gate. Offline → panel only if featureUi / ?auth=1.
    showPanel(enabled || featureUi);
    applyAppGate();
    setStatusEl(statusMessage());
    var loggedIn = isLoggedIn();
    var loginBtn = document.getElementById("btn-auth-login");
    var regBtn = document.getElementById("btn-auth-register");
    var logoutBtn = document.getElementById("btn-auth-logout");
    var form = document.getElementById("auth-form-fields");
    if (loginBtn) loginBtn.classList.toggle("hidden", loggedIn);
    // Public sign-up disabled: keep register visible when logged out so it can explain admin-assigned accounts
    if (regBtn) regBtn.classList.toggle("hidden", loggedIn);
    if (logoutBtn) logoutBtn.classList.toggle("hidden", !loggedIn);
    if (form) form.classList.toggle("hidden", loggedIn);
    emitAuthChange();
  }

  function ensureClient() {
    if (!enabled) return null;
    if (client) return client;
    var sb = global.supabase;
    if (!sb || typeof sb.createClient !== "function") {
      state.mode = "no-sdk";
      state.ready = true;
      log("supabase-js missing — load CDN before this script");
      return null;
    }
    try {
      client = sb.createClient(String(cfg.url), String(cfg.anonKey), {
        auth: {
          persistSession: true,
          autoRefreshToken: true,
          detectSessionInUrl: true,
        },
      });
      state.mode = "live";
      return client;
    } catch (e) {
      state.mode = "error";
      state.ready = true;
      log("createClient failed", e && e.message ? e.message : e);
      return null;
    }
  }

  async function signIn(email, password) {
    if (!enabled) {
      setStatusEl("请先创建 Supabase 项目，并填写 js/supabase-config.js（见 docs/auth-plan.md）。");
      log("signIn no-op: missing config");
      return { ok: false, reason: "no-config" };
    }
    var c = ensureClient();
    if (!c) {
      setStatusEl(statusMessage());
      return { ok: false, reason: "no-sdk" };
    }
    setStatusEl("正在登录…");
    var result = await c.auth.signInWithPassword({
      email: String(email || "").trim(),
      password: String(password || ""),
    });
    if (result.error) {
      var msg = result.error.message || "登录失败";
      setStatusEl("登录失败：" + msg);
      log("signIn error", msg);
      return { ok: false, reason: "auth-error", error: result.error };
    }
    applyUser(result.data && result.data.user ? result.data.user : null);
    state.ready = true;
    setStatusEl(statusMessage());
    refreshUi();
    log("signIn ok");
    return { ok: true, user: state.user };
  }

  async function signUp(_email, _password) {
    // Public sign-up disabled in Supabase; do not call auth.signUp.
    setStatusEl("公开注册已关闭。账号由管理员（Teng）在后台分配，请联系管理员开通。");
    log("signUp blocked: admin-assigned accounts only");
    return { ok: false, reason: "invite-only" };
  }

  async function signOut() {
    if (!enabled) {
      state.user = null;
      refreshUi();
      return { ok: true };
    }
    var c = ensureClient();
    if (c) {
      var result = await c.auth.signOut();
      if (result && result.error) {
        setStatusEl("退出失败：" + (result.error.message || "未知错误"));
        log("signOut error", result.error.message);
        return { ok: false, reason: "auth-error", error: result.error };
      }
    }
    applyUser(null);
    state.ready = true;
    setStatusEl(statusMessage());
    refreshUi();
    log("signOut ok");
    return { ok: true };
  }

  async function getSession() {
    if (!enabled) return null;
    var c = ensureClient();
    if (!c) return null;
    var result = await c.auth.getSession();
    if (result.error) {
      log("getSession error", result.error.message);
      return null;
    }
    var session = result.data && result.data.session ? result.data.session : null;
    applyUser(session && session.user ? session.user : null);
    return session;
  }

  /** 预留：登录后把 ai103_practice_v3 / ai103_exam_last_v1 迁到云端 */
  async function migrateLocalToCloudIfNeeded() {
    log("migrateLocalToCloudIfNeeded: not wired yet");
    return { ok: false, reason: "stub" };
  }

  /** 预留：云端读写进度；未接线时调用方可忽略 */
  async function pullProgress() {
    return null;
  }

  async function pushProgress(_payload) {
    return { ok: false, reason: "stub" };
  }

  async function restoreSession() {
    if (!enabled) {
      state.ready = true;
      state.mode = "offline-noop";
      refreshUi();
      return;
    }
    var c = ensureClient();
    if (!c) {
      refreshUi();
      return;
    }
    try {
      var session = await getSession();
      state.ready = true;
      if (session && session.user) {
        log("session restored");
      } else {
        log("no existing session");
      }
    } catch (e) {
      state.ready = true;
      log("restoreSession failed", e && e.message ? e.message : e);
    }
    refreshUi();

    c.auth.onAuthStateChange(function (_event, session) {
      applyUser(session && session.user ? session.user : null);
      state.ready = true;
      refreshUi();
    });
  }

  function wireDom() {
    // Early gate class before session restore (prevents home flash when keys present)
    if (enabled) {
      document.documentElement.classList.add("auth-required");
      if (document.body) document.body.classList.add("auth-gated");
    }
    showPanel(enabled || featureUi);
    refreshUi();

    var loginBtn = document.getElementById("btn-auth-login");
    var regBtn = document.getElementById("btn-auth-register");
    var logoutBtn = document.getElementById("btn-auth-logout");

    function readCreds() {
      var emailEl = document.getElementById("auth-email");
      var passEl = document.getElementById("auth-password");
      return {
        email: emailEl ? String(emailEl.value || "").trim() : "",
        password: passEl ? String(passEl.value || "") : "",
      };
    }

    if (loginBtn) {
      loginBtn.addEventListener("click", function () {
        var creds = readCreds();
        if (!creds.email || !creds.password) {
          setStatusEl("请输入邮箱和密码。");
          return;
        }
        setBusy(true);
        Promise.resolve(signIn(creds.email, creds.password)).finally(function () {
          setBusy(false);
          refreshUi();
        });
      });
    }
    if (regBtn) {
      regBtn.addEventListener("click", function () {
        setBusy(true);
        Promise.resolve(signUp()).finally(function () {
          setBusy(false);
          refreshUi();
        });
      });
    }
    if (logoutBtn) {
      logoutBtn.addEventListener("click", function () {
        setBusy(true);
        Promise.resolve(signOut()).finally(function () {
          setBusy(false);
          refreshUi();
        });
      });
    }

    if (!enabled) {
      log("offline no-op mode — site works without Supabase keys");
      state.ready = true;
    } else {
      log("config present — restoring session");
      Promise.resolve(restoreSession());
    }
  }

  var API = {
    enabled: enabled,
    featureUi: featureUi,
    requiresAuth: function () {
      return enabled;
    },
    isLoggedIn: isLoggedIn,
    getClient: function () {
      return ensureClient();
    },
    getState: function () {
      return {
        user: state.user,
        ready: state.ready,
        mode: state.mode,
        enabled: enabled,
        featureUi: featureUi,
        loggedIn: isLoggedIn(),
      };
    },
    statusMessage: statusMessage,
    signIn: signIn,
    signUp: signUp,
    signOut: signOut,
    getSession: getSession,
    migrateLocalToCloudIfNeeded: migrateLocalToCloudIfNeeded,
    pullProgress: pullProgress,
    pushProgress: pushProgress,
    refreshUi: refreshUi,
    applyAppGate: applyAppGate,
    init: wireDom,
  };

  global.AI103Auth = API;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", wireDom);
  } else {
    wireDom();
  }
})(typeof window !== "undefined" ? window : this);
