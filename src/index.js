import './styles.css';
import displayShows from './modules/displayShows.js';
import moviesCounter from './modules/moviesCounter.js';

window.addEventListener('load', () => {
  displayShows();
  moviesCounter();
  const mainSector = document.getElementById('mainSector');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  const nextSlide = () => {
    mainSector.scrollLeft -= 700;
  };

  const prevSlide = () => {
    mainSector.scrollLeft += 700;
  };

  prevBtn.addEventListener('click', nextSlide);
  nextBtn.addEventListener('click', prevSlide);
});
