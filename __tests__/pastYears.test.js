import { Calculator } from "../src/js/calculator";

describe('pastYears', () => {

    test('Test #1 - Should return how many years have passed on planet Earth since a past birthday.',
        () => {
            const calculator = new Calculator(56);
            calculator.pastYears(43);
            expect(calculator.earth.yearPassedSince).toEqual({ message: "It has been 13 years passed, since your birthday of 43 in planet Earth!" });
        });

    test('Test #2 - Should return how many years have passed on planet Mercury since a past birthday.',
        () => {
            const calculator = new Calculator(56);
            calculator.pastYears(43);
            expect(calculator.mercury).toEqual({ yearPassedSince: { message: "It has been 54.17 years passed, since your birthday of 179 in planet Mercury!" } });
        });


    test('Test #3 - Should return how many years have passed on planet Venus since a past birthday.',
        () => {
            const calculator = new Calculator(56);
            calculator.pastYears(43);
            expect(calculator.venus).toEqual({ yearPassedSince: { message: "It has been 20.96 years passed, since your birthday of 69 in planet Mercury!" } });
        });
});