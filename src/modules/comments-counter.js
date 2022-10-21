const commentsDisplay = document.querySelector('.comments-btn');

const commentsCounter = (element) => {
  commentsDisplay.innerHTML = `Comments (${element.children.length})`;
};

export default commentsCounter;