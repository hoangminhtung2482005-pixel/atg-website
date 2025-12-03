@echo off
REM Start Tomcat 9

set JAVA_HOME=C:\Program Files\Java\jdk-17
set CATALINA_HOME=C:\Program Files\Apache Software Foundation\Tomcat 9.0

echo Starting Tomcat...
echo.

REM Try to find and run Tomcat
if exist "%CATALINA_HOME%\bin\startup.bat" (
    call "%CATALINA_HOME%\bin\startup.bat"
    timeout /t 5 /nobreak
    echo.
    echo Tomcat started!
    echo Access at: http://localhost:8080
    pause
) else (
    echo Error: startup.bat not found at %CATALINA_HOME%\bin\
    echo.
    echo Trying alternative method...
    cd /d "%CATALINA_HOME%"
    
    if exist "bin\catalina.bat" (
        call bin\catalina.bat start
        timeout /t 5 /nobreak
        echo.
        echo Tomcat started!
        echo Access at: http://localhost:8080
        pause
    ) else (
        echo Error: Cannot find Tomcat startup scripts
        pause
    )
)
