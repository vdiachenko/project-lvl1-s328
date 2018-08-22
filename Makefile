install: 
	npm i
start:
	npm run babel-node -- src/bin/brain-games.js
publish:
	npm publish --access=public
lint:
	npm run eslint .
