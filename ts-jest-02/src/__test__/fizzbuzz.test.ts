import { FizzBuzz } from "../fizzbuzz";

let fizzbuzz: FizzBuzz;
describe('FizzBuzz', () => {
  beforeEach(() => {
    fizzbuzz = new FizzBuzz();
  });
  test('1を渡すと文字列1を返す', () => {
    expect("1").toEqual(fizzbuzz.convert(1));
  });
  test('2を渡すと文字列2を返す', () => {
    expect("2").toEqual(fizzbuzz.convert(2));
  });
  test('3を渡すと文字列Fizzを返す', () => {
    expect("Fizz").toEqual(fizzbuzz.convert(3));
  });  
});


