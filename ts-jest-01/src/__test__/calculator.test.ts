import { Calculator } from "../calculator"

describe("Calculator", () => {
  test('#add - 10 + 2 = 12', () => {
    expect(new Calculator().plus(10, 2)).toEqual(12);
  });
  test('#minus - 10 - 2 = 8', () => {
    expect(new Calculator().minus(10, 2)).toEqual(8);
  });
  test('#multiple - 10 * 2 = 20', () => {
    expect(new Calculator().multiple(10, 2)).toEqual(20);
  });
  test('#divide - 10 / 2 = 5', () => {
    expect(new Calculator().divide(10, 2)).toEqual(5);
  });
});
