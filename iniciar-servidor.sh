#!/bin/bash

# Script para iniciar el servidor local automáticamente
# Compatible con Mac y Linux

clear

echo ""
echo "======================================"
echo "  Diagnostico de Fallas - Servidor"
echo "======================================"
echo ""

# Verificar si Python 3 está instalado
if command -v python3 &> /dev/null; then
    echo "[✓] Python 3 detectado"
    echo ""
    echo "Iniciando servidor en http://localhost:8000"
    echo ""
    echo "Presiona Ctrl+C para detener el servidor"
    echo ""
    
    # Abrir en el navegador por defecto
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # Mac
        open http://localhost:8000
    else
        # Linux
        xdg-open http://localhost:8000 2>/dev/null || echo "Abre tu navegador en: http://localhost:8000"
    fi
    
    sleep 2
    python3 -m http.server 8000
    exit 0
fi

# Si Python 3 no está, intentar con Python 2
if command -v python &> /dev/null; then
    echo "[✓] Python detectado"
    echo ""
    echo "Iniciando servidor en http://localhost:8000"
    echo ""
    echo "Presiona Ctrl+C para detener el servidor"
    echo ""
    
    # Abrir en el navegador por defecto
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # Mac
        open http://localhost:8000
    else
        # Linux
        xdg-open http://localhost:8000 2>/dev/null || echo "Abre tu navegador en: http://localhost:8000"
    fi
    
    sleep 2
    python -m SimpleHTTPServer 8000
    exit 0
fi

# Si Python no está, intentar con Node.js
if command -v node &> /dev/null; then
    echo "[✓] Node.js detectado"
    echo ""
    echo "Iniciando servidor en http://localhost:8000"
    echo ""
    echo "Presiona Ctrl+C para detener el servidor"
    echo ""
    
    # Abrir en el navegador por defecto
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # Mac
        open http://localhost:8000
    else
        # Linux
        xdg-open http://localhost:8000 2>/dev/null || echo "Abre tu navegador en: http://localhost:8000"
    fi
    
    sleep 2
    npx http-server -p 8000
    exit 0
fi

# Si nada está instalado, mostrar error
echo ""
echo "[!] Error: No se encontró Python ni Node.js"
echo ""
echo "Por favor instala uno de los siguientes:"
echo ""
echo "  macOS (con Homebrew):"
echo "    brew install python3"
echo ""
echo "  Linux (Ubuntu/Debian):"
echo "    sudo apt-get install python3"
echo ""
echo "  O instala Node.js desde:"
echo "    https://nodejs.org/"
echo ""
echo "Después vuelve a ejecutar este archivo."
echo ""

exit 1
