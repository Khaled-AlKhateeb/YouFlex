/**
 * @jest-environment jsdom
 */

import commentsCounter from '../../../__mocks__/comments-counter.js';

test('testing the comment counter function', () => {
  document.body.innerHTML = '<ul id="commentsList" class="comments-list"></ul>';

  expect(commentsCounter()).toBe(0);
});

test('testing the comment counter function', () => {
  document.body.innerHTML = `<ul id='commentsList' class='comments-list'>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>`;

  expect(commentsCounter()).toBe(5);
});
