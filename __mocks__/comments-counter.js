const commentsCounter = () => {
  const commentsList = document.getElementById('commentsList');
  return commentsList.children.length;
};

export default commentsCounter;