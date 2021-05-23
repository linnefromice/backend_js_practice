import { FizzBuzz } from "../fizzbuzz";

test('1を渡すと文字列1を返す', () => {
  const fizzbuzz = new FizzBuzz();
  expect("1").toEqual(fizzbuzz.convert(1));
});

