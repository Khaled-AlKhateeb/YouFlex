import addLikes from './addLikes.js';
import retrieveLikes from './retrieveLikes.js';
import { display } from './display-popup.js';

const main = document.querySelector('.main');
const navNumbers = document.querySelector('.numbers');

const displayShows = (shows) => {
  if (shows) {
    for (let i = 0; i <= 5; i += 1) {
      navNumbers.innerHTML = `Movies (${i})`;

      const movieDetails = document.createElement('div');
      movieDetails.classList.add('movie-details');
      main.appendChild(movieDetails);

      const movieImage = document.createElement('img');
      movieDetails.appendChild(movieImage);
      movieImage.setAttribute('src', shows[i].image.medium);

      const nameLikes = document.createElement('div');
      nameLikes.classList.add('details');
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
      likesDiv.classList.add('likes-div');
      nameLikes.appendChild(likesDiv);

      const numberLikes = document.createElement('p');
      numberLikes.classList.add('number-likes');

      retrieveLikes().then((likes) => {
        likes.forEach((like) => {
          if (like.item_id === shows[i].id) {
            numberLikes.innerHTML = `${like.likes} Likes`;
          }
        });
      });
      movieDetails.appendChild(numberLikes);

      const commentBtn = document.createElement('button');
      commentBtn.classList.add('comments-btn');
      const commentBtnTxt = document.createTextNode('Comment');
      movieDetails.appendChild(commentBtn);
      commentBtn.appendChild(commentBtnTxt);

      commentBtn.addEventListener('click', (e) => {
        display(e);
      });

      likeBtn.addEventListener('click', () => {
        numberLikes.innerHTML = '';
        addLikes(shows[i].id);
        retrieveLikes().then((likes) => {
          likes.forEach((like) => {
            if (like.item_id === shows[i].id) {
              numberLikes.innerHTML = `${like.likes} Likes`;
            }
          });
        });
      });
    }
  }
};

const fetchShows = async () => {
  const fetchUrl = 'https://api.tvmaze.com/shows?page=1';
  const response = await fetch(fetchUrl);
  const fetchedData = await response.json();
  displayShows(fetchedData);
};

fetchShows();

export default displayShows;