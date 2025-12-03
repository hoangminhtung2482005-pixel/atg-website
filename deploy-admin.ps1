param(
    [switch]$Auto
)

$TomcatPath = "C:\Program Files\Apache Software Foundation\Tomcat 9.0"
$SourcePath = "C:\Users\ASUS\Desktop\atg-deploy"
$WebappPath = "$TomcatPath\webapps\ROOT"

Write-Host "=== ATG Deploy to Tomcat 9 ===" -ForegroundColor Cyan
Write-Host ""

# Check if running as admin
$isAdmin = ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator")
if (-not $isAdmin) {
    Write-Host "ERROR: Script must run as Administrator!" -ForegroundColor Red
    Write-Host "Please right-click PowerShell and select 'Run as Administrator'" -ForegroundColor Yellow
    exit 1
}

Write-Host "Status: Running as Administrator" -ForegroundColor Green
Write-Host ""

# Step 1: Stop Tomcat
Write-Host "[1/5] Stopping Tomcat..." -ForegroundColor Yellow
$shutdownBat = "$TomcatPath\bin\shutdown.bat"
if (Test-Path $shutdownBat) {
    & $shutdownBat 2>$null
    Start-Sleep -Seconds 4
    Write-Host "[OK] Tomcat stopped" -ForegroundColor Green
} else {
    Write-Host "[WARN] shutdown.bat not found" -ForegroundColor Yellow
}

Write-Host ""

# Step 2: Delete old ROOT folder
Write-Host "[2/5] Deleting old ROOT folder..." -ForegroundColor Yellow
if (Test-Path $WebappPath) {
    Remove-Item -Path $WebappPath -Recurse -Force -ErrorAction SilentlyContinue
    Write-Host "[OK] Old ROOT deleted" -ForegroundColor Green
} else {
    Write-Host "[INFO] ROOT folder doesn't exist (first time?)" -ForegroundColor Cyan
}

Write-Host ""

# Step 3: Create new ROOT folder
Write-Host "[3/5] Creating new ROOT folder..." -ForegroundColor Yellow
New-Item -ItemType Directory -Path $WebappPath -Force | Out-Null
Write-Host "[OK] ROOT folder created" -ForegroundColor Green

Write-Host ""

# Step 4: Copy files
Write-Host "[4/5] Copying website files..." -ForegroundColor Yellow
Copy-Item -Path "$SourcePath\*" -Destination $WebappPath -Recurse -Force
Write-Host "[OK] Files copied successfully" -ForegroundColor Green

Write-Host ""

# Step 5: Start Tomcat
Write-Host "[5/5] Starting Tomcat..." -ForegroundColor Yellow
$startupBat = "$TomcatPath\bin\startup.bat"
if (Test-Path $startupBat) {
    & $startupBat
    Start-Sleep -Seconds 5
    Write-Host "[OK] Tomcat started" -ForegroundColor Green
} else {
    Write-Host "[ERROR] startup.bat not found" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "=== DEPLOYMENT COMPLETE ===" -ForegroundColor Green
Write-Host ""
Write-Host "Website URL: http://localhost:8080" -ForegroundColor Cyan
Write-Host ""
Write-Host "Share with others on same Wi-Fi:" -ForegroundColor Yellow
Write-Host "  1. Find your IP: ipconfig (look for IPv4 Address)" -ForegroundColor Gray
Write-Host "  2. Share: http://<YOUR_IP>:8080" -ForegroundColor Gray
Write-Host ""
Write-Host "Press any key to continue..." -ForegroundColor Cyan
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
