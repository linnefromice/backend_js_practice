import { Sample } from '../sample'

test('Sample.status', () => {
  expect(new Sample().status).toBeTruthy();
});
test('Sample#say()', () => {
  expect(new Sample().say()).toBe('Hello, World!!');
});
