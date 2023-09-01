import { Calculator } from "../src/js/calculator";

describe('futureBirthday', () => {

    test('Test #1 - Should return how many years left for a future birthday based on planet Earth.',
        () => {
            const calculator = new Calculator(56);
            calculator.futureBirthday(61);
            expect(calculator.earth.futureBirthday).toEqual({ message: "You have 5 years left to turn in 61 in planet Earth!" });
        });


    test('Test #2 - Should return how many years left for a future birthday based on planet Mercury.',
        () => {
            const calculator = new Calculator(56);
            calculator.futureBirthday(61);
            expect(calculator.mercury).toEqual({ futureBirthday: { message: "You have 20.83 years left to turn in 254 in planet Mercury!" } });
        });


    test('Test #3 - Should return how many years left for a future birthday based on planet Venus.',
        () => {
            const calculator = new Calculator(56);
            calculator.futureBirthday(61);
            expect(calculator.venus).toEqual({ futureBirthday: { message: "You have 8.06 years left to turn in 98 in planet Venus!" } });
        });

    test('Test #4 - Should return how many years left for a future birthday based on planet Mars.',
        () => {
            const calculator = new Calculator(56);
            calculator.futureBirthday(61);
            expect(calculator.mars).toEqual({ futureBirthday: { message: "You have 2.65 years left to turn in 5 in planet Mars!" } });
        });
});
