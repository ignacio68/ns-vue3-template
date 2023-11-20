import { sum } from '@/utils/sum';

describe('test utils/sum', () => {
	test('should return a number', () => {
		const first = 1;
		const second = 2;
		const result = sum(first, second);
		expect(result).toBe(3);
	});
});
