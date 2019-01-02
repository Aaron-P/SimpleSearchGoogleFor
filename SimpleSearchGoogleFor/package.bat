@echo off
cd .\SimpleSearchGoogleFor

rmdir /S /Q ..\Firefox
..\7za.exe a -tzip ..\Firefox\SimpleSearchGoogleFor.zip ^
    ..\..\LICENSE.md^
    ..\..\README.md^
    ..\..\PRIVACY^
    background.js^
    icon.svg^
    manifest.json
