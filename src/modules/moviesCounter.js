const navNumbers = document.querySelector('.numbers');

const moviesCounter = () => {
  const main = document.querySelector('.main-sector');
  if (main.children.length) {
    navNumbers.innerHTML = `Movies (${main.children.length})`;
  }
};

export default moviesCounter;