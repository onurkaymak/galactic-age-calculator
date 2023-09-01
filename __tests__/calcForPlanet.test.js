import { Calculator } from "../src/js/calculator";

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

    test('Test #4 - Should return a calculated age in a created jupiter object based on planet Jupiter solar year.',
        () => {
            const calculator = new Calculator(32);
            calculator.calcForPlanet();
            expect(calculator.jupiter).toEqual({ ageInJupiter: 3 });
        });
});
