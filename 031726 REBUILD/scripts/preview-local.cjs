"use strict";
/**
 * Serves 031726 REBUILD/public_web on http://localhost:4173/ (no parent-repo build).
 * Production-like bundle (dist/) + sync: from repo root run `npm run preview:dist`.
 */
const fs = require("fs");
const http = require("http");
const path = require("path");

const root = path.join(__dirname, "..");
const publicWeb = path.join(root, "public_web");
const PORT = Number(process.env.PREVIEW_PORT) || 4173;
/**
 * Default 127.0.0.1 so browsers and IDE previews reliably reach the server (localhost/IPv6 quirks).
 * LAN / device testing: PREVIEW_HOST=0.0.0.0 npm run preview
 */
const HOST = process.env.PREVIEW_HOST != null && process.env.PREVIEW_HOST !== ""
  ? process.env.PREVIEW_HOST
  : "127.0.0.1";
const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".mjs": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
  ".mov": "video/quicktime",
  ".m4v": "video/x-m4v",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".map": "application/json; charset=utf-8",
};

function portInUse(p) {
  return new Promise((resolve) => {
    const s = http.createServer();
    s.once("error", (err) => resolve(err.code === "EADDRINUSE"));
    const done = () => {
      s.close(() => resolve(false));
    };
    if (HOST) s.listen(p, HOST, done);
    else s.listen(p, done);
  });
}

function safePathname(input) {
  try {
    return decodeURIComponent((input || "/").split("?")[0].split("#")[0]);
  } catch {
    return "/";
  }
}

function resolveFile(pathname) {
  const normalized = pathname === "/" ? "/index.html" : pathname;
  const candidate = path.resolve(publicWeb, `.${normalized}`);
  if (!candidate.startsWith(publicWeb)) return null;

  if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) return candidate;

  // Support clean URLs like /foo => /foo.html if present.
  if (!path.extname(candidate)) {
    const htmlCandidate = `${candidate}.html`;
    if (fs.existsSync(htmlCandidate) && fs.statSync(htmlCandidate).isFile()) return htmlCandidate;
  }

  return null;
}

function sendFile(res, filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME[ext] || "application/octet-stream";
  const headers = { "Content-Type": contentType };
  if (ext === ".html") headers["Cache-Control"] = "no-cache, no-store, must-revalidate";

  res.writeHead(200, headers);
  fs.createReadStream(filePath).pipe(res);
}

async function main() {
  const busy = await portInUse(PORT);
  if (busy) {
    console.error(
      `\nPort ${PORT} is already in use.\n  lsof -i :${PORT}\n  kill <PID>\n`
    );
    process.exit(1);
  }

  const server = http.createServer((req, res) => {
    const pathname = safePathname(req.url);
    const filePath = resolveFile(pathname);
    if (!filePath) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Not Found");
      return;
    }

    sendFile(res, filePath);
  });

  const onListen = () => {
    const base = HOST === "0.0.0.0" ? `http://127.0.0.1:${PORT}` : `http://${HOST}:${PORT}`;
    console.log(`Preview ready: ${base}/`);
    if (HOST === "0.0.0.0") {
      console.log(`  (all interfaces) also try http://127.0.0.1:${PORT}/ on this machine`);
    }
    console.log(`  If an in-IDE browser shows error -102, use your system browser (Safari/Chrome) at the URL above.`);
    if (process.env.PREVIEW_OPEN === "1") {
      const { exec } = require("child_process");
      const url = `${base}/`;
      if (process.platform === "darwin") exec(`open ${JSON.stringify(url)}`);
      else if (process.platform === "win32") exec(`start ${JSON.stringify(url)}`);
      else exec(`xdg-open ${JSON.stringify(url)}`);
    }
  };
  server.listen(PORT, HOST, onListen);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
