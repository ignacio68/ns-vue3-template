import Vue from '@vue/test-utils';
import { vi } from 'vitest';

/* MOCK Vue & Nativescript */
vi.mock('nativescript-vue', () => Vue);
vi.mock('@nativescript/core', async () => {
	return {
		default: () => ({}),
		TouchManager: {},
	};
});
