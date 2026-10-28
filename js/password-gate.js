/**
 * AI-103 temporary shared-password gate (replaces Supabase Auth UI for now).
 * Unlock persists in localStorage key ai103_gate_v1.
 * Exposes window.AI103Auth so app.js authAllowsApp / ai103-auth-change keep working.
 * Does not load or call supabase.co.
 */
(function (global) {
  "use strict";

  var GATE_KEY = "ai103_gate_v1";
  var GATE_PASSWORD = "20261028";

  var state = {
    unlocked: false,
    ready: false,
    mode: "password-gate",
  };

  function readUnlock() {
    try {
      return global.localStorage && localStorage.getItem(GATE_KEY) === "1";
    } catch (e) {
      return false;
    }
  }

  function writeUnlock(on) {
    try {
      if (!global.localStorage) return;
      if (on) localStorage.setItem(GATE_KEY, "1");
      else localStorage.removeItem(GATE_KEY);
    } catch (e) {}
  }

  function isLoggedIn() {
    return !!state.unlocked;
  }

  function setStatus(text) {
    var el = document.getElementById("auth-status");
    if (el) el.textContent = text || "";
  }

  function showPanel(show) {
    var panel = document.getElementById("auth-panel");
    if (!panel) return;
    if (show) panel.classList.remove("hidden");
    else panel.classList.add("hidden");
  }

  function applyAppGate() {
    var html = document.documentElement;
    var body = document.body;
    if (html) html.classList.add("auth-required");
    if (body) {
      body.classList.add("auth-gated");
      if (isLoggedIn()) body.classList.add("auth-ok");
      else body.classList.remove("auth-ok");
    }
  }

  function emitAuthChange() {
    try {
      document.dispatchEvent(
        new CustomEvent("ai103-auth-change", {
          detail: {
            enabled: true,
            ready: state.ready,
            user: isLoggedIn() ? { id: "shared", email: "shared@local" } : null,
            loggedIn: isLoggedIn(),
          },
        })
      );
    } catch (e) {}
  }

  function refreshUi() {
    showPanel(true);
    applyAppGate();
    var loggedIn = isLoggedIn();
    var loginBtn = document.getElementById("btn-auth-login");
    var regBtn = document.getElementById("btn-auth-register");
    var logoutBtn = document.getElementById("btn-auth-logout");
    var form = document.getElementById("auth-form");
    var emailEl = document.getElementById("auth-email");
    if (emailEl) emailEl.classList.add("hidden");
    if (loginBtn) loginBtn.classList.toggle("hidden", loggedIn);
    if (regBtn) regBtn.classList.add("hidden");
    if (logoutBtn) logoutBtn.classList.toggle("hidden", !loggedIn);
    if (form) form.classList.toggle("hidden", loggedIn);
    if (loggedIn) {
      setStatus("已解锁 · 练习可用（本机记住）");
    } else if (!state.ready) {
      setStatus("请输入访问密码");
    }
    emitAuthChange();
  }

  function unlock() {
    state.unlocked = true;
    writeUnlock(true);
    state.ready = true;
    setStatus("已解锁 · 练习可用（本机记住）");
    refreshUi();
  }

  function lock() {
    state.unlocked = false;
    writeUnlock(false);
    state.ready = true;
    setStatus("请输入访问密码");
    var passEl = document.getElementById("auth-password");
    if (passEl) passEl.value = "";
    refreshUi();
  }

  function tryLogin(ev) {
    if (ev && ev.preventDefault) ev.preventDefault();
    var passEl = document.getElementById("auth-password");
    var pw = passEl ? String(passEl.value || "") : "";
    if (!pw) {
      setStatus("请输入密码");
      return;
    }
    if (pw === GATE_PASSWORD) {
      unlock();
      return;
    }
    setStatus("密码错误");
    if (passEl) {
      passEl.value = "";
      try {
        passEl.focus();
      } catch (e) {}
    }
  }

  var wired = false;
  function wireDom() {
    if (wired) return;
    wired = true;

    state.unlocked = readUnlock();
    state.ready = true;

    // Early gate classes before paint of views
    applyAppGate();
    showPanel(true);
    refreshUi();

    var authForm = document.getElementById("auth-form");
    var loginBtn = document.getElementById("btn-auth-login");
    var logoutBtn = document.getElementById("btn-auth-logout");
    var regBtn = document.getElementById("btn-auth-register");

    if (authForm) authForm.addEventListener("submit", tryLogin);
    else if (loginBtn) loginBtn.addEventListener("click", tryLogin);

    if (logoutBtn) {
      logoutBtn.addEventListener("click", function () {
        lock();
      });
    }
    if (regBtn) regBtn.classList.add("hidden");

    var emailEl = document.getElementById("auth-email");
    if (emailEl) {
      emailEl.classList.add("hidden");
      emailEl.removeAttribute("required");
      emailEl.disabled = true;
    }
  }

  var API = {
    enabled: true,
    featureUi: true,
    requiresAuth: function () {
      return true;
    },
    isLoggedIn: isLoggedIn,
    getClient: function () {
      return null;
    },
    getState: function () {
      return {
        user: isLoggedIn() ? { id: "shared", email: "shared@local" } : null,
        ready: state.ready,
        mode: state.mode,
        enabled: true,
        featureUi: true,
        loggedIn: isLoggedIn(),
      };
    },
    statusMessage: function () {
      return isLoggedIn() ? "已解锁 · 练习可用（本机记住）" : "请输入访问密码";
    },
    signIn: function (_email, password) {
      if (String(password || "") === GATE_PASSWORD) {
        unlock();
        return Promise.resolve({ ok: true });
      }
      setStatus("密码错误");
      return Promise.resolve({ ok: false, reason: "bad-password" });
    },
    signUp: function () {
      setStatus("当前为共享密码访问，无需注册。");
      return Promise.resolve({ ok: false, reason: "password-gate" });
    },
    signOut: function () {
      lock();
      return Promise.resolve({ ok: true });
    },
    getSession: function () {
      return Promise.resolve(isLoggedIn() ? { user: { id: "shared" } } : null);
    },
    migrateLocalToCloudIfNeeded: function () {
      return Promise.resolve({ ok: false, reason: "password-gate" });
    },
    pullProgress: function () {
      return Promise.resolve(null);
    },
    pushProgress: function () {
      return Promise.resolve({ ok: false, reason: "password-gate" });
    },
    refreshUi: refreshUi,
    applyAppGate: applyAppGate,
    init: wireDom,
  };

  global.AI103Auth = API;

  if (document.getElementById("auth-panel")) {
    wireDom();
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", wireDom);
  } else {
    wireDom();
  }
})(typeof window !== "undefined" ? window : this);
