import { Calculator } from './../src/js/calculator.js';

describe('Calculator', () => {

    test('Test #1 - Should create a calculator object with age property based on Calculator class.', () => {
        const calculator = new Calculator(20);
        expect(calculator.age).toEqual(20);
    });
});



describe('calcForPlanet', () => {

    test('Test #1 - Should reach to age property in its parent class and return the age in years based on planet Mercury solar year.', () => {
        const calculator = new Calculator(32);
        let planetYear = calculator.calcForPlanet();
        expect(planetYear).toEqual(133);
    });
});