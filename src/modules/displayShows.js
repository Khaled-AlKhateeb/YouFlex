import addLikes from './addLikes.js';
import retrieveLikes from './retrieveLikes.js';
import { display } from './display-popup.js';
import moviesCounter from './moviesCounter.js';

const mainSector = document.querySelector('.main-sector');

const displayShows = (shows) => {
  if (shows) {
    for (let i = 0; i < 20; i += 1) {
      const movieDetails = document.createElement('div');
      movieDetails.className = 'movie-details flex';
      mainSector.appendChild(movieDetails);

      const movieImage = document.createElement('img');
      movieImage.className = 'movie-img';
      movieDetails.appendChild(movieImage);
      movieImage.setAttribute('src', shows[i].image.medium);

      const nameLikes = document.createElement('div');
      nameLikes.className = 'mov-details flex';
      movieDetails.appendChild(nameLikes);

      const movieName = document.createElement('p');
      movieName.classList.add('movie-name');
      const name = document.createTextNode(shows[i].name);
      nameLikes.appendChild(movieName);
      movieName.appendChild(name);

      const likeBtn = document.createElement('img');
      likeBtn.setAttribute('src', '../assets/heart.png');
      likeBtn.classList.add('like-btn');
      nameLikes.appendChild(likeBtn);

      const likesDiv = document.createElement('div');
      likesDiv.className = 'likes-div flex';
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
      likesDiv.appendChild(numberLikes);

      const commentBtn = document.createElement('button');
      commentBtn.classList.add('comments-btn');
      const commentBtnTxt = document.createTextNode('Comment');
      likesDiv.appendChild(commentBtn);
      commentBtn.appendChild(commentBtnTxt);
      commentBtn.addEventListener('click', (e) => {
        display(e);
      });
      likeBtn.addEventListener('click', () => {
        addLikes(shows[i].id);
        setTimeout(retrieveLikes().then((likes) => {
          likes.forEach((like) => {
            if (like.item_id === shows[i].id) {
              numberLikes.innerHTML = `${like.likes} Likes`;
            }
          });
        }), 1000);
      });
    }
  }
  moviesCounter();
};

const fetchShows = async () => {
  const fetchUrl = 'https://api.tvmaze.com/shows?page=1';
  const response = await fetch(fetchUrl);
  const fetchedData = await response.json();
  displayShows(fetchedData);
};

fetchShows();

export default displayShows;
