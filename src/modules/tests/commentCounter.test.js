/**
 * @jest-environment jsdom
 */

import commentsCounter from "../comments-counter";

test('testing the comment counter function', () => {
  document.body.innerHTML = `<div></div>`;

  //expect(commentsCounter(parentElement)).toBe('Comments (0)');
})