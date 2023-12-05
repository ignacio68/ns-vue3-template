import Icon from '@/components/Icon.vue';
import { Label } from '@nativescript/core';
import { mount, VueWrapper } from '@vue/test-utils';
import { beforeEach, describe, expect, test } from 'vitest';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let wrapper: VueWrapper<Label, any>;

beforeEach(async () => {
	wrapper = mount(Icon, {
		props: {
			icon: 'my-icon',
		},
	});
});
describe('Icon Component', async () => {
	test('mount component', async () => {
		expect(wrapper.html()).toBeTruthy();
	});

	test('should have icon as text', async () => {
		expect(wrapper.attributes('text')).toContain('my-icon');
	});

	test('should update icon ', async () => {
		expect(wrapper.attributes('text')).toContain('my-icon');
		await wrapper.setProps({ icon: 'updated-icon' });
		expect(wrapper.attributes('text')).toContain('updated-icon');
	});
});
