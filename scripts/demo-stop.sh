#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

DEMO_DIR="$ROOT_DIR/.demo"
PID_FILE="$DEMO_DIR/vite.pid"
CONTAINER_NAME="${DEMO_NGROK_CONTAINER:-jutejeste-ngrok}"

docker rm -f "$CONTAINER_NAME" >/dev/null 2>&1 || true

if [[ -f "$PID_FILE" ]]; then
  PID="$(cat "$PID_FILE")"
  if [[ -n "$PID" ]] && kill -0 "$PID" >/dev/null 2>&1; then
    kill "$PID" || true
  fi
  rm -f "$PID_FILE"
fi

echo "Stopped ngrok tunnel and local demo process (if started by script)."
