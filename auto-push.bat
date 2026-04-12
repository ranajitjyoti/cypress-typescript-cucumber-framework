@echo off
cd /d "c:\Users\Acer\OneDrive\Desktop\cypress-typescript-cucumber-framework\base-cypress-cucumber-typescript"

:: Write today's date into a log file
echo Last auto-push: %date% %time% > auto-push-log.txt

:: Git operations
git add .
git commit -m "Auto daily push: %date% %time%"
git push origin master

echo Push completed at %date% %time%
