import Vue from '@vitejs/plugin-vue';
import path from 'path';
import { configDefaults, defineConfig } from 'vitest/config';
import { NSMockViews } from './__tests__/NSMockViews';

export default defineConfig({
	plugins: [
		Vue({
			template: {
				compilerOptions: {
					isCustomElement: tag =>
						NSMockViews.map(nsView => nsView.toLowerCase()).includes(
							tag.toLowerCase(),
						),
				},
			},
		}),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'~': path.resolve(__dirname, './src'),
		},
		extensions: ['.mjs', '.js', '.ts', '.json', '.vue'],
	},
	test: {
		globals: true,
		name: 'jsdom',
		environment: 'jsdom',
		setupFiles: ['__tests__/setup.ts'],
		coverage: {
			provider: 'v8',
			reporter: ['text', 'json', 'html'],
			include: ['src/**'],
			exclude: [...configDefaults.exclude, '**/test/**'],
			reportsDirectory: '__tests__/coverage',
			all: false,
		},
		exclude: [
			'.stryker-tmp',
			'node_modules',
			'coverage',
			'App_Resources',
			'platforms',
			'hooks',
		],
	},
});
