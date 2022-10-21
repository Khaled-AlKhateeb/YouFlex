import moviesCounter from '../../../__mocks__/movieCounter.js';

test('Test movie counter function', () => {
  document.body.innerHTML = `
    <main class='main'>
      <section class='main-sector flex'>
        <div class='movie-details'></div>
        <div class='movie-details'></div>
        <div class='movie-details'></div>
        <div class='movie-details'></div>
        <div class='movie-details'></div>
      </section>
    </main>
  `;
  expect(moviesCounter()).toBe(5);
  expect(typeof moviesCounter()).toBe('number');
});

test('Test movie counter function', () => {
  document.body.innerHTML = `
    <main class='main'>
      <section class='main-sector flex'>
        <div class='movie-details'></div>
        <div class='movie-details'></div>
        <div class='movie-details'></div>
      </section>
    </main>
  `;
  expect(moviesCounter()).toBe(3);
  expect(typeof moviesCounter()).toBe('number');
});