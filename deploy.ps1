param(
    [string]$TomcatPath = "C:\Program Files\Apache Software Foundation\Tomcat 9.0",
    [string]$AppName = "ROOT",
    [switch]$Start
)

$ErrorActionPreference = "Stop"

Write-Host "=== ATG Deploy to Tomcat 9 ===" -ForegroundColor Cyan

Write-Host "[1/5] Stopping Tomcat..." -ForegroundColor Yellow
try {
    & "$TomcatPath\bin\shutdown.bat" 2>$null
    Start-Sleep -Seconds 3
    Write-Host "[OK] Tomcat stopped" -ForegroundColor Green
}
catch {
    Write-Host "[WARN] Tomcat might not be running" -ForegroundColor Yellow
}

Write-Host "[2/5] Building project..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "[ERROR] Build failed" -ForegroundColor Red
    exit 1
}
Write-Host "[OK] Build completed" -ForegroundColor Green

Write-Host "[3/5] Deleting old files..." -ForegroundColor Yellow
$webappsPath = "$TomcatPath\webapps\$AppName"
if (Test-Path $webappsPath) {
    Remove-Item "$webappsPath\*" -Recurse -Force -ErrorAction SilentlyContinue
    Write-Host "[OK] Old files deleted" -ForegroundColor Green
}

Write-Host "[4/5] Copying new files..." -ForegroundColor Yellow
if (-not (Test-Path $webappsPath)) {
    New-Item -ItemType Directory -Path $webappsPath -Force | Out-Null
}
Copy-Item "out\*" -Destination $webappsPath -Recurse -Force
Write-Host "[OK] Files copied to $webappsPath" -ForegroundColor Green

if ($Start) {
    Write-Host "[5/5] Starting Tomcat..." -ForegroundColor Yellow
    & "$TomcatPath\bin\startup.bat" 2>$null
    Start-Sleep -Seconds 3
    Write-Host "[OK] Tomcat started" -ForegroundColor Green
    Write-Host "`n=== DEPLOYMENT COMPLETE ===" -ForegroundColor Cyan
    Write-Host "Website: http://localhost:8080" -ForegroundColor Green
    if ($AppName -ne "ROOT") {
        Write-Host "Website: http://localhost:8080/$AppName" -ForegroundColor Green
    }
}
