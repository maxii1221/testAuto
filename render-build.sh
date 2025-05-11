#!/bin/bash

echo "🔧 Actualizando sistema e instalando Java..."
apt-get update && apt-get install -y default-jre

echo "🧪 Instalando navegadores Playwright..."
npx playwright install --with-deps

echo "✅ Instalación completada."
