# AXIS good build — 2026-04-13 (`AXIS_goodbuild_041326`)

Frozen snapshot of the shipped shell + onboarding. Produced after `npm run build` from repo root (`AXIS`).

## Built copies (match `dist/` after build)

- **`AXIS_goodbuild_041326_Main.html`** — `dist/index.html` (inline compiled app).
- **`AXIS_goodbuild_041326_Onboarding.html`** — `dist/onboarding.html`.

## Bundled assets (same as deploy folder)

- **`auth-bundle.js`**, **`axis-icon.png`**, **`axis_data.json`**, **`onboarding.css`**, brand **SVGs** listed in this folder.

## Source copies (revert / diff)

- **`SOURCE_public_web_index_041326.html`** — `031726 REBUILD/public_web/index.html` at snapshot time.
- **`SOURCE_onboarding_snapshot_041326.html`** — `snapshots/onboarding-v2.1+list-guided.html` (build input for onboarding).
- **`SOURCE_public_web_auth-bundle_041326.js`** — `public_web/auth-bundle.js` when present.

## Restore (outline)

1. **Main:** copy `SOURCE_public_web_index_041326.html` → `031726 REBUILD/public_web/index.html`, then `npm run build`; or replace `dist/index.html` with `AXIS_goodbuild_041326_Main.html` for a static rollback.
2. **Onboarding:** copy `SOURCE_onboarding_snapshot_041326.html` → `snapshots/onboarding-v2.1+list-guided.html`, then `npm run build`.
3. **Assets:** copy files from this folder into `dist/` as needed, or let `npm run build` repopulate after HTML restore.
