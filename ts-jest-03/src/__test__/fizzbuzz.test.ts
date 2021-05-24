import { FizzBuzz } from "../fizzbuzz";

let fizzbuzz: FizzBuzz;
describe('FizzBuzz', () => {
  beforeEach(() => {
    fizzbuzz = new FizzBuzz();
  });
  describe("convertメソッドは数を文字列に変換する", () => {
    describe('3の倍数の時は数の代わりに"Fizz"に変換する', () => {
      test('3を渡すと文字列Fizzを返す', () => {
        expect("Fizz").toEqual(fizzbuzz.convert(3));
      });
      test('6を渡すと文字列Fizzを返す', () => {
        expect("Fizz").toEqual(fizzbuzz.convert(6));
      });
    });
    describe('同値類の中の最小の5の倍数5の時は数の代わりに"Buzz"に変換する', () => {
      test('5を渡すと文字列Buzzを返す', () => {
        expect("Buzz").toEqual(fizzbuzz.convert(5));
      });
      test('上限の境界値100を渡すと文字列Buzzを返す', () => {
        expect("Buzz").toEqual(fizzbuzz.convert(10));
      });
    });
    describe('3と5両方の倍数の時はFizzBuzzに変換する', () => {
      test('同値類の中の最小の3と5の公倍数15を渡すと文字列"FizzBuzz"を返す', () => {
        expect("FizzBuzz").toEqual(fizzbuzz.convert(15));
      });
    });
    describe('その他の数はそのまま文字列に変換する', () => {
      test('1を渡すと文字列1を返す', () => {
        expect("1").toEqual(fizzbuzz.convert(1));
      });
      test('2を渡すと文字列2を返す', () => {
        expect("2").toEqual(fizzbuzz.convert(2));
      });
    });
  });
});


