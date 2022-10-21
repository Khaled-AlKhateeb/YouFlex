import commentsCounter from './comments-counter.js';

const closeBtn = document.getElementById('closeBtn');
const commentPopup = document.getElementById('commentPopup');
const main = document.querySelector('.main');
const thumbnail = document.getElementById('thumbnail');
const movieTitle = document.getElementById('movieTitle');
const details = document.getElementById('details');
const formCommentBtn = document.getElementById('formCommentBtn');
const nameInput = document.getElementById('nameInput');
const commentInput = document.getElementById('commentInput');
const commentsList = document.getElementById('commentsList');
const commentsDisplay = document.getElementById('commentsDisplay');
let aquiredData = [];
let commentsData = [];

const getCommentsApi = async (id) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CleVZYCORgbN3niQTjHc/comments?item_id=${id}`);
  commentsData = await response.json();
  // eslint-disable-next-line no-use-before-define
  commentsContent(commentsData);
};

export const popupContent = (movieData) => {
  thumbnail.src = movieData.image.original;
  movieTitle.innerHTML = movieData.name;
  details.innerHTML = movieData.summary;
  getCommentsApi(aquiredData.id);
};

const getApi = async (movie) => {
  const response = await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${movie}`);
  aquiredData = await response.json();
  popupContent(aquiredData);
};

export const commentsContent = (comment) => {
  if (comment) {
    comment.forEach((element) => {
      const commentItem = document.createElement('i');
      commentItem.classList.add('comments-item');
      commentItem.innerHTML = `${element.creation_date} ${element.username}: ${element.comment}`;
      commentsList.appendChild(commentItem);
    });
    commentsCounter(commentsList);
  }
};

export const display = (e) => {
  commentPopup.style.display = 'flex';
  main.style.display = 'none';
  const movieName = e.target.parentNode.parentNode.children[1].innerHTML;
  getApi(movieName);
};

closeBtn.addEventListener('click', () => {
  commentsList.innerHTML = '';
  commentsDisplay.innerHTML = '';
  commentPopup.style.display = 'none';
  main.style.display = 'block';
});

const sendData = async (data) => {
  const postUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CleVZYCORgbN3niQTjHc/comments';
  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  await fetch(postUrl, parameters);
};

formCommentBtn.addEventListener('click', (e) => {
  e.preventDefault();
  sendData({
    item_id: aquiredData.id,
    username: nameInput.value,
    comment: commentInput.value,
  });
  nameInput.value = '';
  commentInput.value = '';
});
