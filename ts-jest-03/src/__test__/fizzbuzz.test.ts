import { FizzBuzz } from "../fizzbuzz";

let fizzbuzz: FizzBuzz;
describe('FizzBuzz', () => {
  beforeEach(() => {
    fizzbuzz = new FizzBuzz();
  });
  describe("convertメソッドは数を文字列に変換する", () => {
    describe('3の倍数の時は数の代わりに"Fizz"に変換する', () => {
      test.each([3, 6, 99])("%iを渡すと文字列Fizzを返す", (input) => {
        expect("Fizz").toEqual(fizzbuzz.convert(input));
      });
    });
    describe('同値類の中の最小の5の倍数5の時は数の代わりに"Buzz"に変換する', () => {
      test.each([5, 10, 100])("%iを渡すと文字列Buzzを返す", (input) => {
        expect("Buzz").toEqual(fizzbuzz.convert(input));
      });
    });
    describe('3と5両方の倍数の時はFizzBuzzに変換する', () => {
      test('同値類の中の最小の3と5の公倍数15を渡すと文字列"FizzBuzz"を返す', () => {
        expect("FizzBuzz").toEqual(fizzbuzz.convert(15));
      });
      test('下限の境界値の1つ外側の値0は3の倍数でも5の倍数でもあるので文字列"FizzBuzz"を返す', () => {
        expect("FizzBuzz").toEqual(fizzbuzz.convert(0));
      });
    });
    describe('その他の数はそのまま文字列に変換する', () => {
      test.each([1, 2, 98])("%iを渡すと文字列Fizzを返す", (input) => {
        expect(String(input)).toEqual(fizzbuzz.convert(input));
      });
      test('上限の境界値の1つ外側の101を渡すと文字列101を返す', () => {
        expect("101").toEqual(fizzbuzz.convert(101));
      });
    });
  });
});


