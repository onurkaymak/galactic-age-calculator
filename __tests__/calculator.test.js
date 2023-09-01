import { Calculator } from './../src/js/calculator.js';

describe('Calculator', () => {

    test('Test #1 - Should create a calculator object with age property based on Calculator class.', () => {
        const calculator = new Calculator(20);
        expect(calculator.earth.earthAge).toEqual(20);
    });
});



describe('calcForPlanet', () => {

    test('Test #1 - Should return a calculated age in a created mercury object based on planet Mercury solar year.',
        () => {
            const calculator = new Calculator(32);
            calculator.calcForPlanet();
            expect(calculator.mercury).toEqual({ ageInMercury: 133 });
        });

    test('Test #2 - Should return a calculated age in a created venus object based on planet Venus solar year.',
        () => {
            const calculator = new Calculator(32);
            calculator.calcForPlanet();
            expect(calculator.venus).toEqual({ ageInVenus: 52 });
        });

    test('Test #3 - Should return a calculated age in a created mars object based on planet Mars solar year.',
        () => {
            const calculator = new Calculator(32);
            calculator.calcForPlanet();
            expect(calculator.mars).toEqual({ ageInMars: 17 });
        });
});