/* eslint-env node */
module.exports = {
	root: true,
	env: { node: true, es2024: true },
	parser: 'vue-eslint-parser',
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 'latest',
		parser: '@typescript-eslint/parser',
	},
	plugins: ['vue', '@typescript-eslint', 'prettier'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:vue/vue3-recommended',
		'prettier',
	],
	rules: {
		'no-console': 0,
		'prettier/prettier': 'warn',
		'vue/multi-word-component-names': 'off',
		'@typescript-eslint/no-unused-vars': 'error',
		'vue/attribute-hyphenation': 0,
		'vue/v-on-event-hyphenation': 0,
	},
	ignorePatterns: ['src/**/*.test.ts'],
};
