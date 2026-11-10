#!/bin/sh
set -e

echo "=========================================================="
echo " Starting HAPUA Vientiane Backend"
echo "=========================================================="

# Create upload directories if not exist
mkdir -p "${EXTERNAL_STORAGE_PATH:-/app/uploads}/temp"

# Run database migrations
if [ -n "$DATABASE_URL" ]; then
    echo "[*] Checking and deploying database migrations..."
    npx prisma migrate deploy || {
        echo "[!] Warning: Prisma migrate deploy failed. Skipping to start app..."
    }
fi

echo "[*] Launching application on port ${APP_PORT:-3001}..."
exec "$@"

