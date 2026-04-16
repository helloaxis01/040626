#!/usr/bin/env node
/**
 * Reads CatCow_*_Black.svg from Exercise Diagrams, prints EXERCISE_INSTRUCTION_FRAMES snippet
 * for pasting into public_web/index.html after EXERCISE_ANIMATION_SVGS.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..", "..");
const srcDir = path.join(root, "Exercise Diagrams", "Nano Banana", "Cat-Cow");
const files = ["CatCow_1_Black.svg", "CatCow_2_Black.svg", "CatCow_3_Black.svg"];

function prep(raw) {
  let s = raw.replace(/<\?xml[^?]*\?>/, "").replace(/<!--[\s\S]*?-->/g, "");
  s = s.replace(/\s+/g, " ").trim();
  if (!/preserveAspectRatio/i.test(s)) s = s.replace(/<svg\b/i, "<svg preserveAspectRatio=\"xMidYMid meet\"");
  return s;
}

const parts = files.map((f) => {
  const p = path.join(srcDir, f);
  const inner = prep(fs.readFileSync(p, "utf8")).replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
  return "    `" + inner + "`";
});

console.log(`/** Per-step instruction graphics (static 1920×1080); keys match EXERCISE_ANIMATION_SVGS. */
const EXERCISE_INSTRUCTION_FRAMES = {
  CatCow: [
${parts.join(",\n")}
  ]
};`);
