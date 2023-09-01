import { Calculator } from "../src/js/calculator";

describe('pastYears', () => {

    test('Test #1 - Should return how many years have passed on planet Earth since a past birthday.',
        () => {
            const calculator = new Calculator(56);
            calculator.pastYears(43);
            expect(calculator.earth.yearPassedSince).toEqual({ message: "It has been 13 years passed, since your birthday of 43 in planet Earth!" });
        });
});
