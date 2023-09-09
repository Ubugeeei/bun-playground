# bun
echo "[Bun]" > time.txt
rm -rf node_modules
(time bun install) 2>> time.txt

echo "\n\n-------------------------------\n\n" >> time.txt

# npm
echo "[NPM]" >> time.txt
rm -rf node_modules
(time npm install) 2>> time.txt

echo "\n\n-------------------------------\n\n" >> time.txt

# yarn
echo "[Yarn]" >> time.txt
rm -rf node_modules
(time yarn install) 2>> time.txt

echo "\n\n-------------------------------\n\n" >> time.txt

# pnpm
echo "[PNPM]" >> time.txt
rm -rf node_modules
(time pnpm install) 2>> time.txt



