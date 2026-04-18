"use strict";
/**
 * Copies the canonical app shell into repo-root index.html before build.js → dist/.
 * Capacitor uses public_web/ — keep it in sync with 031726 REBUILD (or run npm run build).
 * To preview the same bundle as dist: npm run preview → http://localhost:4173/
 * After editing this file, run npm run refresh (or npm run build) so dist/ updates; preview does not auto-rebuild.
 * Repo-root public_web/index.html is kept in sync for Capacitor / serve public_web.
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const src = path.join(root, "031726 REBUILD", "public_web", "index.html");
const dest = path.join(root, "index.html");
const destPublic = path.join(root, "public", "index.html");
const destPublicWeb = path.join(root, "public_web", "index.html");

if (!fs.existsSync(src)) {
  console.warn("sync-main-index: skip (missing):", src);
  process.exit(0);
}
fs.copyFileSync(src, dest);
console.log("sync-main-index: copied →", path.relative(root, dest));
fs.copyFileSync(src, destPublic);
console.log("sync-main-index: copied →", path.relative(root, destPublic));
fs.copyFileSync(src, destPublicWeb);
console.log("sync-main-index: copied →", path.relative(root, destPublicWeb));

const iconsSrc = path.join(root, "031726 REBUILD", "public_web", "app-icons");
const iconsDest = path.join(root, "public_web", "app-icons");
if (fs.existsSync(iconsSrc) && typeof fs.cpSync === "function") {
  fs.mkdirSync(path.dirname(iconsDest), { recursive: true });
  fs.cpSync(iconsSrc, iconsDest, { recursive: true, force: true });
  console.log("sync-main-index: copied →", path.relative(root, iconsDest));
}
const catCowAssetsSrc = path.join(root, "031726 REBUILD", "public_web", "assets", "exercise-animations", "cat-cow");
const catCowAssetsDest = path.join(root, "public_web", "assets", "exercise-animations", "cat-cow");
if (fs.existsSync(catCowAssetsSrc) && typeof fs.cpSync === "function") {
  fs.mkdirSync(path.dirname(catCowAssetsDest), { recursive: true });
  fs.cpSync(catCowAssetsSrc, catCowAssetsDest, { recursive: true, force: true });
  console.log("sync-main-index: copied →", path.relative(root, catCowAssetsDest));
}
const sphinxPoseAssetsSrc = path.join(root, "031726 REBUILD", "public_web", "assets", "exercise-animations", "sphinx-pose");
const sphinxPoseAssetsDest = path.join(root, "public_web", "assets", "exercise-animations", "sphinx-pose");
if (fs.existsSync(sphinxPoseAssetsSrc) && typeof fs.cpSync === "function") {
  fs.mkdirSync(path.dirname(sphinxPoseAssetsDest), { recursive: true });
  fs.cpSync(sphinxPoseAssetsSrc, sphinxPoseAssetsDest, { recursive: true, force: true });
  console.log("sync-main-index: copied →", path.relative(root, sphinxPoseAssetsDest));
}
const videosAssetsSrc = path.join(root, "031726 REBUILD", "public_web", "assets", "videos");
const videosAssetsDest = path.join(root, "public_web", "assets", "videos");
if (fs.existsSync(videosAssetsSrc) && typeof fs.cpSync === "function") {
  fs.mkdirSync(path.dirname(videosAssetsDest), { recursive: true });
  fs.cpSync(videosAssetsSrc, videosAssetsDest, { recursive: true, force: true });
  console.log("sync-main-index: copied →", path.relative(root, videosAssetsDest));
}
