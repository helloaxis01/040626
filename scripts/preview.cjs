"use strict";
const net = require("net");
const path = require("path");
const { spawnSync, spawn } = require("child_process");

const root = path.join(__dirname, "..");
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
      `\nPreview port ${PORT} is already in use. Another process may be serving the wrong folder (you can get 404 on /).\n` +
        `Free it, then retry:\n  lsof -i :${PORT}\n  kill <PID>\n`
    );
    process.exit(1);
  }

  const build = spawnSync(process.platform === "win32" ? "npm.cmd" : "npm", ["run", "build"], {
    cwd: root,
    stdio: "inherit",
    env: process.env,
  });
  if (build.status !== 0) process.exit(build.status ?? 1);

  const npx = process.platform === "win32" ? "npx.cmd" : "npx";
  const child = spawn(npx, ["--yes", "serve", "dist", "-p", String(PORT)], {
    cwd: root,
    stdio: "inherit",
    env: process.env,
  });
  child.on("exit", (code) => process.exit(code ?? 0));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
