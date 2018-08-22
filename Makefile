install: 
	npm i
start:
	npm run babel-node -- src/bin/brain-$(G).js
publish:
	npm publish --access=public
lint:
	npm run eslint .
