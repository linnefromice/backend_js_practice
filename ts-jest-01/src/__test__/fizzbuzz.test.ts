import { FizzBuzz } from "../fizzbuzz"

describe("FizzBuzzは", () => {
	const fizzbuzz = new FizzBuzz()

  test('3の倍数を受け取るとFizzを返す', () => {
    expect(fizzbuzz.execute(3)).toEqual("Fizz");
  });
  test('5の倍数を受け取るとBuzzを返す', () => {
    expect(fizzbuzz.execute(5)).toEqual("Buzz");
  });
});
