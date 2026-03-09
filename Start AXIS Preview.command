#!/bin/bash
cd "$(dirname "$0")"
echo ""
echo "  Opening AXIS in your browser..."
echo ""
open "$(pwd)/index.html"
sleep 1
echo "  Done. You can close this window."
echo ""
