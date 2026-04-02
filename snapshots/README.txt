Gold copies of onboarding.html for recovery if public/onboarding.html is overwritten.
Latest: onboarding-v2.1+list-guided.html (11 steps, includes LIST & GUIDED screen before Navigation Map).

Production / Capacitor: npm run build copies this file to dist/onboarding.html (see build.js). That is what launch, first install, and Settings → “View Onboarding Again” load (same-origin onboarding.html next to index.html).

When you change onboarding: update this snapshot (or copy public/onboarding.html here), then build — dist always prefers this file over public/onboarding.html.

After restoring a snapshot: copy to public/onboarding.html, repo root onboarding.html, 031726 REBUILD/onboarding.html, then npm run build.
