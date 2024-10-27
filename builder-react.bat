
@echo off
:: Build the React app in the client folder
echo Starting React build...
npm --prefix client run build
if %errorlevel% neq 0 (
    echo Error: React build failed.
    exit /b %errorlevel%
)
echo React build completed successfully.

:: Remove existing files in server\public if necessary
echo Removing old public files...
rd /s /q server\public
echo Old public files removed.

:: Create server\public directory
echo Creating new public directory...
mkdir server\public
echo New public directory created.

:: Copy new build files to server\public
echo Copying new build files to public directory...
xcopy client\build server\public /E /H /C /I
echo Build files copied successfully.

:: Install server dependencies
echo Installing server dependencies...
cd server
npm install
echo Server dependencies installed.

:: Set environment variable and start server
echo Setting environment variable and starting server...
set NODE_ENV=prod
npm run start >> ../logs.log 2>&1
echo Server started successfully. Logs are being saved to logs.log.
