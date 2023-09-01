import { Calculator } from './../src/js/calculator.js';

describe('Calculator', () => {

    test('Test #1 - Should create a calculator object with age property based on Calculator class.', () => {
        const calculator = new Calculator(20);
        expect(calculator.age).toEqual(20);
    });
});