#!/usr/bin/env bash
set -euo pipefail
export PATH="$HOME/.nvm/versions/node/v24.15.0/bin:$PATH"
cd "$(dirname "$0")/../.."
exec node ./node_modules/next/dist/bin/next dev
