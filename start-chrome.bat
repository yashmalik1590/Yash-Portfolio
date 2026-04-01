@echo off
setlocal
cd /d "%~dp0"

set "CHROME1=%ProgramFiles%\Google\Chrome\Application\chrome.exe"
set "CHROME2=%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe"
set "CHROME3=%LocalAppData%\Google\Chrome\Application\chrome.exe"

echo Starting local server at http://localhost:8000 ...
start "" python -m http.server 8000
timeout /t 2 /nobreak >nul

if exist "%CHROME1%" (
    start "" "%CHROME1%" "http://localhost:8000"
) else if exist "%CHROME2%" (
    start "" "%CHROME2%" "http://localhost:8000"
) else if exist "%CHROME3%" (
    start "" "%CHROME3%" "http://localhost:8000"
) else (
    start "" "http://localhost:8000"
)

echo.
echo Site is running. Keep this window open.
echo Press Ctrl + C to stop server.
echo.
pause
