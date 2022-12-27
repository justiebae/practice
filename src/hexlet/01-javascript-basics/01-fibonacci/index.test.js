import { fibRecursion, fibLoop } from './index.js';

test('fib loop more than 0', () => {
  expect(fibRecursion(-1)).toBe(-1);
})
