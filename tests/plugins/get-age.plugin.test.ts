import { getAge } from '../../src/plugins';
describe('get-age.plugin.ts', () => {
	test('getAge() should return the age of a person', () => {
		const birthday = '11-06-1986';
		const age = getAge(birthday);

		expect(typeof age).toBe('number');
	});

	test('getAge() should return the current age', () => {
		const birthday = '11-06-1986';
		const age = getAge(birthday);
		const currentAge = getAge(birthday);

		expect(age).toBe(currentAge);
	});

	test('getAge() should return 0 years', () => {
		const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1986);

		const birthDate = '11-06-1986';
		const age = getAge(birthDate);

		console.log(age);

		expect(age).toBe(0);
		expect(spy).toHaveBeenCalled();
	});
});
