const navNumbers = document.querySelector('.numbers');

const moviesCounter = () => {
  const main = document.querySelector('.main');
  if (main.children.length) {
    navNumbers.innerHTML = `Movies (${main.children.length})`;
  }
};

export default moviesCounter;