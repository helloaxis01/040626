import { createRequire } from "module";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const require = createRequire(import.meta.url);
const esbuild = require("esbuild");

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const outPublic = join(root, "public", "auth-bundle.js");

await esbuild.build({
  entryPoints: [join(root, "src", "auth-entry.js")],
  bundle: true,
  outfile: outPublic,
  format: "iife",
  platform: "browser",
  define: {
    "process.env.NODE_ENV": '"production"',
  },
  legalComments: "none",
});

fs.copyFileSync(outPublic, join(root, "auth-bundle.js"));
console.log("Built public/auth-bundle.js and auth-bundle.js (repo root)");
