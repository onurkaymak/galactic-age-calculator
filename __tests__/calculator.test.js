import { Calculator } from './../src/js/calculator.js';

describe('Calculator', () => {

    test('Test #1 - Should create a calculator object with age property based on Calculator class.', () => {
        const calculator = new Calculator(20);
        expect(calculator.earth.earthAge).toEqual(20);
    });
});



describe('calcForPlanet', () => {

    test('Test #1 - Should reach to earthAge property in its parent and return the age in a created mercury object based on planet Mercury solar year.',
        () => {
            const calculator = new Calculator(32);
            calculator.calcForPlanet();
            expect(calculator.mercury).toEqual({ ageInMercury: 133 });
        });
});