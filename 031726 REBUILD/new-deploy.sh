#!/bin/bash
# Push to a NEW GitHub repo and get a fresh Vercel URL
# Prereq: Create the empty repo at github.com/new first (e.g. "axis-app")
set -e
cd "$(dirname "$0")"

REPO_NAME="${1:?Usage: ./new-deploy.sh <repo-name>  (e.g. axis-app)}"
GITHUB_USER="${GITHUB_USER:-helloaxis01}"
REMOTE_URL="https://github.com/${GITHUB_USER}/${REPO_NAME}.git"

# Create repo via API if token is set (skips if already exists)
if [ -n "$GITHUB_TOKEN" ]; then
  echo "→ Creating repo ${GITHUB_USER}/${REPO_NAME}..."
  curl -s -X POST -H "Authorization: token $GITHUB_TOKEN" -H "Accept: application/vnd.github.v3+json" \
    "https://api.github.com/user/repos" -d "{\"name\":\"${REPO_NAME}\",\"private\":false}" 2>/dev/null || true
fi

echo "→ Adding remote 'deploy' → $REMOTE_URL"
git remote add deploy "$REMOTE_URL" 2>/dev/null || git remote set-url deploy "$REMOTE_URL"

echo "→ Pushing main to new repo..."
if [ -n "$GITHUB_TOKEN" ]; then
  git push "https://${GITHUB_TOKEN}@github.com/${GITHUB_USER}/${REPO_NAME}.git" main
else
  git push deploy main
fi

echo ""
echo "✓ Done. Now in Vercel:"
echo "  1. Add New → Project"
echo "  2. Import ${GITHUB_USER}/${REPO_NAME}"
echo "  3. Deploy"
echo ""
echo "  Your new URL: https://${REPO_NAME}.vercel.app (or similar)"
