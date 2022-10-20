import moviesCounter from '../moviesCounter.js';

test('Test movie counter function', () => {
  expect(moviesCounter()).toBe(5);
});