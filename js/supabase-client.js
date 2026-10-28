/**
 * AI-103 Supabase Auth (Phase 1.1 — email + password + login gate).
 * - No valid url/anonKey: all APIs no-op; localStorage practice unchanged (open access).
 * - With real keys: hide home/practice/exam until session; logout returns to login-only.
 * - Requires supabase-js before this file (vendored js/vendor/… or CDN; window.supabase.createClient).
 * - Public sign-up is disabled; register shows admin-assigned message.
 * - Optional user_metadata.expires_at (ISO): past → signOut + 「账号已过期，请联系管理员」.
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
  var EXPIRED_MSG = "账号已过期，请联系管理员";
  var enforcingExpiry = false;
  /** Sticky status survives refreshUi so login errors are not wiped by finally→refreshUi. */
  var stickyStatus = null;

  function normalizeEmail(raw) {
    var e = String(raw || "").trim().toLowerCase();
    if (!e) return e;
    if (e.indexOf("@") < 0) e += "@ai103.local";
    return e;
  }

  var SIGNIN_TIMEOUT_MS = 15000;
  var TIMEOUT_MSG = "网络超时，请重试";

  function mapAuthError(err, emailRaw) {
    var raw = (err && (err.message || err.error_description || err.msg)) || "";
    var msg = String(raw);
    var low = msg.toLowerCase();
    var code = String((err && (err.code || err.error_code)) || "").toLowerCase();
    if (
      low.indexOf("invalid login credentials") >= 0 ||
      code === "invalid_credentials" ||
      low.indexOf("invalid_credentials") >= 0
    ) {
      // Neutral for full emails (e.g. Outlook); student short-name hint only when no @
      var typed = String(emailRaw || "").trim();
      if (typed && typed.indexOf("@") < 0) {
        return "邮箱或密码错误（短名将补全为 姓名@ai103.local）";
      }
      return "邮箱或密码错误";
    }
    if (
      low.indexOf("email not confirmed") >= 0 ||
      code === "email_not_confirmed" ||
      low.indexOf("email_not_confirmed") >= 0
    ) {
      return "账号未确认，请联系管理员";
    }
    if (low.indexOf("network") >= 0 || low.indexOf("failed to fetch") >= 0) {
      return "网络异常，请检查网络后重试";
    }
    return msg || "登录失败";
  }

  function withTimeout(promise, ms, timeoutMsg) {
    return new Promise(function (resolve, reject) {
      var done = false;
      var timer = setTimeout(function () {
        if (done) return;
        done = true;
        var err = new Error(timeoutMsg || TIMEOUT_MSG);
        err.name = "TimeoutError";
        reject(err);
      }, ms);
      Promise.resolve(promise).then(
        function (v) {
          if (done) return;
          done = true;
          clearTimeout(timer);
          resolve(v);
        },
        function (e) {
          if (done) return;
          done = true;
          clearTimeout(timer);
          reject(e);
        }
      );
    });
  }

  var state = {
    user: null,
    ready: false,
    mode: enabled ? "connecting" : "offline-noop",
    expired: false,
  };

  function log() {
    if (typeof console !== "undefined" && console.info) {
      try {
        console.info.apply(console, ["[AI103Auth]"].concat([].slice.call(arguments)));
      } catch (e) {}
    }
  }

  function statusMessage() {
    if (state.expired) {
      return EXPIRED_MSG;
    }
    if (stickyStatus) {
      return stickyStatus;
    }
    if (!enabled) {
      return "未配置 Supabase（离线模式）。进度仅保存在本机 localStorage。";
    }
    if (state.mode === "no-sdk") {
      return "登录组件加载失败（脚本/网络），请强制刷新或换 Chrome 重试。";
    }
    if (state.user && state.user.email) {
      return "已登录：" + state.user.email;
    }
    if (!state.ready) {
      return "正在恢复登录会话…";
    }
    return "已配置云端，尚未登录。账号由管理员分配。";
  }

  function clearStickyStatus() {
    stickyStatus = null;
  }

  /**
   * @param {string=} text  If omitted/empty, fall back to statusMessage().
   * @param {boolean=} sticky  When true, keep this text across refreshUi until cleared.
   */
  function setStatusEl(text, sticky) {
    if (sticky) {
      stickyStatus = text || null;
    }
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

  /** Read expires_at ISO from user_metadata (Dashboard / raw_user_meta_data). */
  function userExpiresAt(user) {
    if (!user) return null;
    var meta = user.user_metadata || {};
    var v = meta.expires_at;
    if (v == null || v === "") return null;
    return String(v);
  }

  function isAccountExpired(user) {
    var iso = userExpiresAt(user);
    if (!iso) return false;
    var t = Date.parse(iso);
    if (isNaN(t)) return false;
    return Date.now() > t;
  }

  /**
   * If user_metadata.expires_at is past now: clear session, show Chinese expiry
   * message, return true. No expires_at → treat as unlimited.
   */
  async function rejectIfExpired(user) {
    if (!isAccountExpired(user)) return false;
    if (enforcingExpiry) return true;
    enforcingExpiry = true;
    try {
      log("account expired", userExpiresAt(user));
      state.expired = true;
      applyUser(null);
      var c = ensureClient();
      if (c) {
        try {
          await c.auth.signOut();
        } catch (e) {}
      }
      state.ready = true;
      setStatusEl(EXPIRED_MSG, true);
      refreshUi();
    } finally {
      enforcingExpiry = false;
    }
    return true;
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
    var form = document.getElementById("auth-form");
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
      log("supabase-js missing — load js/vendor/supabase-js before this script");
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
    state.expired = false;
    clearStickyStatus();
    if (!enabled) {
      setStatusEl("请先创建 Supabase 项目，并填写 js/supabase-config.js（见 docs/auth-plan.md）。", true);
      log("signIn no-op: missing config");
      return { ok: false, reason: "no-config" };
    }
    var c = ensureClient();
    if (!c) {
      setStatusEl(statusMessage() || "登录组件加载失败（脚本/网络），请强制刷新或换 Chrome 重试。", true);
      return { ok: false, reason: "no-sdk" };
    }
    setStatusEl("正在登录…");
    var result;
    try {
      result = await withTimeout(
        c.auth.signInWithPassword({
          email: normalizeEmail(email),
          password: String(password || ""),
        }),
        SIGNIN_TIMEOUT_MS,
        TIMEOUT_MSG
      );
    } catch (e) {
      if (e && e.name === "TimeoutError") {
        setStatusEl(TIMEOUT_MSG, true);
        log("signIn timeout");
        return { ok: false, reason: "timeout" };
      }
      var netMsg = mapAuthError(e, email) || TIMEOUT_MSG;
      setStatusEl("登录失败：" + netMsg, true);
      log("signIn exception", e && e.message ? e.message : e);
      return { ok: false, reason: "network-error", error: e };
    }
    if (!result) {
      setStatusEl("登录失败：无响应，请重试", true);
      log("signIn empty result");
      return { ok: false, reason: "empty-result" };
    }
    if (result.error) {
      var msg = mapAuthError(result.error, email) || "登录失败";
      setStatusEl("登录失败：" + msg, true);
      log("signIn error", result.error.message || msg);
      return { ok: false, reason: "auth-error", error: result.error };
    }
    var user = result.data && result.data.user ? result.data.user : null;
    var session = result.data && result.data.session ? result.data.session : null;
    if (!user && !session) {
      setStatusEl("登录失败：未建立会话，请检查账号或联系管理员", true);
      log("signIn null session/user without error");
      return { ok: false, reason: "null-session" };
    }
    if (await rejectIfExpired(user || (session && session.user))) {
      return { ok: false, reason: "expired" };
    }
    state.expired = false;
    clearStickyStatus();
    applyUser(user || (session && session.user) || null);
    if (!isLoggedIn()) {
      setStatusEl("登录失败：会话无效，请重试", true);
      log("signIn applied user but not logged in");
      return { ok: false, reason: "invalid-user" };
    }
    state.ready = true;
    setStatusEl(statusMessage());
    refreshUi();
    log("signIn ok");
    return { ok: true, user: state.user };
  }

  async function signUp(_email, _password) {
    // Public sign-up disabled in Supabase; do not call auth.signUp.
    setStatusEl("公开注册已关闭。账号由管理员（Teng）在后台分配，请联系管理员开通。", true);
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
        setStatusEl("退出失败：" + (result.error.message || "未知错误"), true);
        log("signOut error", result.error.message);
        return { ok: false, reason: "auth-error", error: result.error };
      }
    }
    clearStickyStatus();
    state.expired = false;
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
    var user = session && session.user ? session.user : null;
    if (user && (await rejectIfExpired(user))) {
      return null;
    }
    if (user) state.expired = false;
    applyUser(user);
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
      var user = session && session.user ? session.user : null;
      if (user && isAccountExpired(user)) {
        Promise.resolve(rejectIfExpired(user));
        return;
      }
      if (user) {
        state.expired = false;
        clearStickyStatus();
      }
      // Keep stickyStatus / state.expired when session is null (failed login or
      // signOut-after-expiry); refreshUi must not wipe the Chinese error.
      applyUser(user);
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

    var loginInFlight = false;
    function doLogin(ev) {
      if (ev && ev.preventDefault) ev.preventDefault();
      if (loginInFlight) return;
      var creds = readCreds();
      if (!creds.email || !creds.password) {
        setStatusEl("请输入邮箱和密码。", true);
        return;
      }
      loginInFlight = true;
      setBusy(true);
      Promise.resolve(signIn(creds.email, creds.password)).finally(function () {
        loginInFlight = false;
        setBusy(false);
        // refreshUi reads stickyStatus / state.expired — do not clear them here
        refreshUi();
      });
    }

    var authForm = document.getElementById("auth-form");
    if (authForm) {
      // Form submit covers Enter-in-field and #btn-auth-login type=submit
      authForm.addEventListener("submit", doLogin);
    } else {
      if (loginBtn) loginBtn.addEventListener("click", doLogin);
      ["auth-email", "auth-password"].forEach(function (id) {
        var el = document.getElementById(id);
        if (!el) return;
        el.addEventListener("keydown", function (ev) {
          if (ev.key === "Enter" || ev.keyCode === 13) {
            ev.preventDefault();
            doLogin(ev);
          }
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
