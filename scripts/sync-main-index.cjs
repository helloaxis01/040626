"use strict";
/**
 * Copies the canonical app shell into repo-root index.html before build.js → dist/.
 * Capacitor uses public_web/; preview on :4173 typically serves dist/ from npm run build.
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const src = path.join(root, "031726 REBUILD", "public_web", "index.html");
const dest = path.join(root, "index.html");

if (!fs.existsSync(src)) {
  console.warn("sync-main-index: skip (missing):", src);
  process.exit(0);
}
fs.copyFileSync(src, dest);
console.log("sync-main-index: copied →", path.relative(root, dest));
