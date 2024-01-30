import { http } from '../../src/plugins';

describe('http-client.plugin.ts', () => {
	test('http.get should return a string', async () => {
		const data = await http.get('https://jsonplaceholder.typicode.com/todos/1');

		expect(data).toEqual({
			userId: 1,
			id: 1,
			title: 'delectus aut autem',
			completed: expect.any(Boolean),
		});
	});

	test('http should have POST, PUT, PATCH, and DELETE methods', () => {
		expect(http.post).toBeDefined();
		expect(typeof http.post).toBe('function');

		expect(http.put).toBeDefined();
		expect(typeof http.put).toBe('function');

		expect(http.patch).toBeDefined();
		expect(typeof http.patch).toBe('function');

		expect(http.delete).toBeDefined();
		expect(typeof http.delete).toBe('function');
	});
});
