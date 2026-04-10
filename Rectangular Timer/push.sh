#!/bin/bash
# Push to GitHub - handles auth for automated environments
cd "$(dirname "$0")"

if [ -n "$GITHUB_TOKEN" ]; then
  # Use token for HTTPS push (works in CI/automation)
  git push "https://${GITHUB_TOKEN}@github.com/helloaxis01/040626.git" main
else
  # Try normal push (uses your stored credentials)
  git push origin main
fi
