import { Calculator } from "../calculator"

describe("Calculator", () => {
  const calculator = new Calculator();
  const inputs: {left: number, right: number} = {
    left: 10,
    right: 2
  };

  test('#add - 10 + 2 = 12', () => {
    expect(calculator.plus(inputs)).toEqual(12);
  });
  test('#minus - 10 - 2 = 8', () => {
    expect(calculator.minus(inputs)).toEqual(8);
  });
  test('#multiple - 10 * 2 = 20', () => {
    expect(calculator.multiple(inputs)).toEqual(20);
  });
  test('#divide - 10 / 2 = 5', () => {
    expect(calculator.divide(inputs)).toEqual(5);
  });
});
