@echo off
REM Deploy ATG to Tomcat 9

set TOMCAT_PATH=C:\Program Files\Apache Software Foundation\Tomcat 9.0
set APP_NAME=ROOT

echo.
echo === ATG Deploy to Tomcat 9 ===
echo.

REM Stop Tomcat
echo [1/4] Stopping Tomcat...
call "%TOMCAT_PATH%\bin\shutdown.bat" >nul 2>&1
timeout /t 3 /nobreak

REM Delete old files
echo [2/4] Deleting old files...
if exist "%TOMCAT_PATH%\webapps\%APP_NAME%" (
    rmdir /s /q "%TOMCAT_PATH%\webapps\%APP_NAME%"
)
timeout /t 1 /nobreak

REM Create directory
echo [3/4] Creating directory...
mkdir "%TOMCAT_PATH%\webapps\%APP_NAME%"

REM Copy files
echo [4/4] Copying files...
xcopy "out\*" "%TOMCAT_PATH%\webapps\%APP_NAME%\" /E /I /Y

REM Start Tomcat
echo.
echo [5/5] Starting Tomcat...
call "%TOMCAT_PATH%\bin\startup.bat"

echo.
echo === DEPLOYMENT COMPLETE ===
echo.
echo Website: http://localhost:8080
echo.
pause
