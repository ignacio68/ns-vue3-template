import type { JestConfigWithTsJest } from 'ts-jest';

const jestConfig: JestConfigWithTsJest = {
	clearMocks: true,
	verbose: true,
	collectCoverage: true,
	coverageDirectory: 'coverage',
	coveragePathIgnorePatterns: ['/node_modules/'],
	coverageProvider: 'v8',
	coverageReporters: ['json', 'text', 'lcov', 'clover'],
	moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
	testEnvironment: 'jsdom',
	// testEnvironment: 'node',
	preset: 'ts-jest',
	roots: ['<rootDir>/__tests__'],
	testPathIgnorePatterns: [
		'<rootDir>/hooks/',
		'<rootDir>/platforms/',
		'<rootDir>/node_modules/',
		'<rootDir>/coverage/',
		'<rootDir>/types/',
	],
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
		'^/(.*)$': '<rootDir>/src/$1',
	},
	testMatch: ['<rootDir>/__tests__/**/?(*.)+(spec|test).[tj]s?(x)'],
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest',
		'^.+\\.vue$': '@vue/vue3-jest',
	},
	setupFiles: ['<rootDir>/__tests__/setup.ts'],
	testEnvironmentOptions: {
		customExportConditions: ['node', 'node-addons'],
	},
	// globals: {
	// 	'vue-jest': {
	// 		compilerOptions: {
	// 			propsDestructureTransform: true,
	// 		},
	// 	},
	// },
};

export default jestConfig;
