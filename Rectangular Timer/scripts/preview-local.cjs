"use strict";
/**
 * Serves 031726 REBUILD/public_web on http://localhost:4173/ (no parent-repo build).
 * Production-like bundle (dist/) + sync: from repo root run `npm run preview:dist`.
 */
const net = require("net");
const path = require("path");
const { spawn } = require("child_process");

const root = path.join(__dirname, "..");
const publicWeb = path.join(root, "public_web");
const PORT = Number(process.env.PREVIEW_PORT) || 4173;

function portInUse(p) {
  return new Promise((resolve) => {
    const s = net.createServer();
    s.once("error", (err) => resolve(err.code === "EADDRINUSE"));
    s.listen(p, "0.0.0.0", () => {
      s.close(() => resolve(false));
    });
  });
}

async function main() {
  const busy = await portInUse(PORT);
  if (busy) {
    console.error(
      `\nPort ${PORT} is already in use.\n  lsof -i :${PORT}\n  kill <PID>\n`
    );
    process.exit(1);
  }

  const npx = process.platform === "win32" ? "npx.cmd" : "npx";
  const child = spawn(
    npx,
    ["--yes", "serve", publicWeb, "-p", String(PORT)],
    {
      cwd: root,
      stdio: "inherit",
      env: process.env,
    }
  );
  child.on("exit", (code) => process.exit(code ?? 0));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
