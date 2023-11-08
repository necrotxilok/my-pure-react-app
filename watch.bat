@echo off
:: Build and Watch in DEV Mode
rmdir /S /Q dist >nul
xcopy /S /Q public\* dist\ >nul
npm run watch
