install:
	npm install
start:
	npx babel-node -- src/bin/brain-games.js
start_calc:
	npx babel-node -- src/bin/brain-calc.js
start_even:
	npx babel-node -- src/bin/brain-even.js
start_gcd:
	npx babel-node -- src/bin/brain-gcd.js
start_prime:
	npx babel-node -- src/bin/brain-prime.js
start_progression:
	npx babel-node -- src/bin/brain-progression.js
publish:
	npm publish
lint:
	npx eslint ./