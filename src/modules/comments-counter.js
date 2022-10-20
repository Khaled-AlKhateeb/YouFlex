const listChildren = document.getElementById('commentsList');
const commentsDisplay = document.getElementById('commentsDisplay');

const commentsCounter = () => {
  if (listChildren.children.length > 0) {
    commentsDisplay.innerHTML = `Comments (${listChildren.children.length})`;
  } else {
    commentsDisplay.innerHTML = 'Comments (0)';
  }
};

export default commentsCounter;