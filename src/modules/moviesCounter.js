const navNumbers = document.querySelector('.numbers');

const moviesCounter = () => {
  const main = document.querySelector('.main-sector');
  if (main.children.length) {
    const number = main.childElementCount - 2;
    navNumbers.innerHTML = `Movies (${number})`;
  }
};

export default moviesCounter;