@echo off
:: Generate Final PROD Build
rmdir /S /Q dist >nul
xcopy /S /Q public\* dist\ >nul
npm run build
