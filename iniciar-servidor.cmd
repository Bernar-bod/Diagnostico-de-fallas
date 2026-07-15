@echo off
REM Script para iniciar el servidor local automáticamente
REM Compatible con Windows

title Diagnostico de Fallas - Servidor Local

echo.
echo ======================================
echo   Diagnostico de Fallas - Servidor
echo ======================================
echo.

REM Verificar si Python está instalado
python --version >nul 2>&1
if %errorlevel% equ 0 (
    echo [✓] Python detectado
    echo.
    echo Iniciando servidor en http://localhost:8000
    echo.
    echo Presiona Ctrl+C para detener el servidor
    echo.
    start http://localhost:8000
    timeout /t 2 /nobreak
    python -m http.server 8000
    goto :end
)

REM Si Python no está, intentar con Node.js
node --version >nul 2>&1
if %errorlevel% equ 0 (
    echo [✓] Node.js detectado
    echo.
    echo Iniciando servidor en http://localhost:8000
    echo.
    echo Presiona Ctrl+C para detener el servidor
    echo.
    start http://localhost:8000
    timeout /t 2 /nobreak
    npx http-server -p 8000
    goto :end
)

REM Si nada está instalado, mostrar error
echo.
echo [!] Error: No se encontró Python ni Node.js
echo.
echo Por favor instala uno de los siguientes:
echo   - Python: https://www.python.org/downloads/
echo   - Node.js: https://nodejs.org/
echo.
echo Después vuelve a ejecutar este archivo.
echo.

:end
pause
