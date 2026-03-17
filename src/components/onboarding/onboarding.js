// Lightweight external onboarding component for incremental extraction.
// This registers a global factory `window.AXIS_Onboarding` so the main
// inline app can optionally delegate to this implementation while we
// move the full onboarding code out of index.html incrementally.
(function () {
  // Wait until React is available (index.html loads React before inline app).
  function mountWhenReady() {
    if (typeof React === "undefined") {
      setTimeout(mountWhenReady, 50);
      return;
    }
    // Provide a minimal, safe onboarding component that won't crash.
    window.AXIS_Onboarding = function OnboardingExternal(props) {
      const { theme, onComplete } = props || {};
      return React.createElement(
        "div",
        { style: { padding: 24, fontFamily: "'Barlow',sans-serif", color: "var(--ob-text-body)" } },
        React.createElement("div", { style: { fontWeight: 700, fontSize: 20, marginBottom: 8 } }, "Onboarding (external)"),
        React.createElement("div", { style: { marginBottom: 12, color: "var(--ob-text-sec)" } }, "This is a temporary external onboarding module while we move logic out of index.html."),
        React.createElement(
          "div",
          null,
          React.createElement(
            "button",
            {
              onClick: function () {
                try {
                  if (typeof onComplete === "function") onComplete();
                } catch (e) {
                  console.error("AXIS_Onboarding: onComplete failed", e);
                }
              },
              style: {
                padding: "10px 16px",
                borderRadius: 10,
                background: "var(--ob-accent, #FF9F43)",
                color: "white",
                border: "none",
                cursor: "pointer",
              },
            },
            "Finish Onboarding"
          )
        )
      );
    };
  }
  mountWhenReady();
})();

