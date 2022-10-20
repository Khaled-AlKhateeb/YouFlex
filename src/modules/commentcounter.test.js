import commentsCounter from './comments-counter.js';

test('Comments counter testing', () => {
  expect(commentsCounter.toBe(`Comments (${0})`))
})