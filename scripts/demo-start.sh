#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

for ENV_FILE in "$ROOT_DIR/.env" "$ROOT_DIR/.env.demo" "$ROOT_DIR/.env.demo.example"; do
  if [[ -f "$ENV_FILE" ]]; then
    set -a
    # shellcheck disable=SC1090
    source "$ENV_FILE"
    set +a
  fi
done

PORT="${DEMO_PORT:-4173}"
DEMO_DIR="$ROOT_DIR/.demo"
PID_FILE="$DEMO_DIR/vite.pid"
LOG_FILE="$DEMO_DIR/vite.log"
CONTAINER_NAME="${DEMO_NGROK_CONTAINER:-jutejeste-ngrok}"

mkdir -p "$DEMO_DIR"

if ! command -v docker >/dev/null 2>&1; then
  echo "Docker is required."
  exit 1
fi

if [[ -z "${NGROK_AUTHTOKEN:-}" ]]; then
  echo "Set your ngrok token first:"
  echo "Add NGROK_AUTHTOKEN to .env/.env.demo or export it in your shell."
  exit 1
fi

if ! ss -ltn "( sport = :$PORT )" | grep -q ":$PORT"; then
  nohup npm run dev -- --host 0.0.0.0 --port "$PORT" > "$LOG_FILE" 2>&1 &
  echo $! > "$PID_FILE"
  sleep 2
fi

docker rm -f "$CONTAINER_NAME" >/dev/null 2>&1 || true

docker run -d \
  --name "$CONTAINER_NAME" \
  --add-host=host.docker.internal:host-gateway \
  -e NGROK_AUTHTOKEN="$NGROK_AUTHTOKEN" \
  -p 4040:4040 \
  ngrok/ngrok:latest \
  http "http://host.docker.internal:$PORT" >/dev/null

URL=""
for _ in {1..20}; do
  URL="$(curl -fsS http://127.0.0.1:4040/api/tunnels 2>/dev/null | grep -Eo 'https://[A-Za-z0-9.-]+' | head -n1 || true)"
  if [[ -n "$URL" ]]; then
    break
  fi
  sleep 1
done

echo "Demo server: http://localhost:$PORT/"
if [[ -n "$URL" ]]; then
  echo "Public URL: $URL"
else
  echo "Tunnel is starting. Check: docker logs $CONTAINER_NAME"
fi
echo "Stop with: ./scripts/demo-stop.sh"
