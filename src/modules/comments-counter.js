const commentsDisplay = document.getElementById('commentsDisplay');

const commentsCounter = (element) => {
  commentsDisplay.innerHTML = `Comments (${element.children.length})`;
};

export default commentsCounter;