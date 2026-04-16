/**
 * Reads CatCow SVGs from public_web and prints JS template literals for index.html.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(__dirname, "../public_web/assets/exercise-animations/cat-cow");
const files = ["CatCow_1.svg", "CatCow_2.svg", "CatCow_3.svg"];

function prepSvg(raw) {
  let s = raw.replace(/^\uFEFF?<\?xml[^?]*\?>\s*/i, "");
  s = s.replace(/\bfill="#000000"/gi, 'fill="currentColor"');
  s = s.replace(/\bfill='#000000'/gi, "fill='currentColor'");
  if (!/viewBox\s*=/.test(s)) {
    s = s.replace(/<svg(\s[^>]*)>/i, (full, attrs) => {
      const w = attrs.match(/\bwidth="(\d+)"/);
      const h = attrs.match(/\bheight="(\d+)"/);
      if (w && h) return `<svg${attrs} viewBox="0 0 ${w[1]} ${h[1]}">`;
      return full;
    });
  }
  if (!/preserveAspectRatio\s*=/.test(s)) {
    s = s.replace(/<svg(\s[^>]*)>/i, (full, attrs) => {
      return `<svg${attrs} preserveAspectRatio="xMidYMid meet">`;
    });
  }
  return s.replace(/\s+/g, " ").trim();
}

for (const f of files) {
  const raw = fs.readFileSync(path.join(dir, f), "utf8");
  const svg = prepSvg(raw);
  const escaped = svg.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
  process.stdout.write("    `" + escaped + "`,\n");
}
