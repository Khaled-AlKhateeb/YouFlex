import addLikes from './addLikes.js';
import retrieveLikes from './retrieveLikes.js';
import { display } from './display-popup.js';
import moviesCounter from './moviesCounter.js';
import getCommentCounterApi from './comments-counter.js';

const mainSector = document.querySelector('.main-sector');
const commentsIdArr = [];

const displayShows = (shows) => {
  if (shows) {
    for (let i = 0; i < 20; i += 1) {
      const movieDetails = document.createElement('div');
      movieDetails.className = 'movie-details';
      movieDetails.setAttribute('id', shows[i].id);
      mainSector.appendChild(movieDetails);

      const movieImage = document.createElement('img');
      movieImage.className = 'movie-img';
      movieDetails.appendChild(movieImage);
      movieImage.setAttribute('src', shows[i].image.medium);
      const movieName = document.createElement('p');
      movieName.classList.add('movie-name');
      movieDetails.appendChild(movieName);

      const name = document.createTextNode(shows[i].name);
      movieName.appendChild(name);

      const likeBtn = document.createElement('img');
      likeBtn.setAttribute('src', './assets/heart.png');
      likeBtn.classList.add('like-btn');

      const likesDiv = document.createElement('div');
      likesDiv.className = 'likes-div';
      movieDetails.appendChild(likesDiv);

      const numberLikes = document.createElement('p');
      numberLikes.classList.add('number-likes');
      numberLikes.innerHTML = '0 Likes';

      retrieveLikes().then((likes) => {
        likes.forEach((like) => {
          if (like.item_id === shows[i].id) {
            numberLikes.innerHTML = `${like.likes} Likes`;
          }
        });
      });
      commentsIdArr.push(shows[i].id);

      const commentBtn = document.createElement('button');
      commentBtn.classList.add('comments-btn');
      likesDiv.appendChild(commentBtn);
      likesDiv.appendChild(likeBtn);
      likesDiv.appendChild(numberLikes);
      commentBtn.addEventListener('click', (e) => {
        display(e);
      });
      likeBtn.addEventListener('click', async () => {
        const showId = shows[i].id;
        await addLikes(showId);
        // const x = await retrieveLikes();
        // console.log(x);
        await retrieveLikes().then((likes) => {
          likes.forEach((like) => {
            if (like.item_id === shows[i].id) {
              numberLikes.innerHTML = `${like.likes} Likes`;
            }
          });
        });
      });
    }
  }
  moviesCounter();
  getCommentCounterApi(commentsIdArr);
};

const fetchShows = async () => {
  const fetchUrl = 'https://api.tvmaze.com/shows?page=1';
  const response = await fetch(fetchUrl);
  const fetchedData = await response.json();
  displayShows(fetchedData);
};

fetchShows();

export default displayShows;
