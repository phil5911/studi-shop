@echo off
cd client
npm run build
rd /s /q ..\server\public
mkdir ..\server\public
xcopy build ..\server\public /E /H /C /I
cd ..\server
npm run start >> logs.log &
