import addLikes from './addLikes.js';
import retrieveLikes from './retrieveLikes.js';
import { display } from './display-popup.js';
import moviesCounter from './moviesCounter.js';

const mainSector = document.querySelector('.main-sector');
const navNumbers = document.querySelector('.numbers');

const displayShows = (shows) => {
  if (shows) {
    navNumbers.innerHTML = `(${shows.length})`;

    shows.forEach((show) => {
      const movieDetails = document.createElement('div');
      movieDetails.className = 'movie-details';
      mainSector.appendChild(movieDetails);

      const movieImage = document.createElement('img');
      movieImage.className = 'movie-img';
      movieDetails.appendChild(movieImage);
      movieImage.setAttribute('src', show.image.medium);

      const movieName = document.createElement('p');
      movieName.classList.add('movie-name');
      const name = document.createTextNode(show.name);
      movieDetails.appendChild(movieName);
      movieName.appendChild(name);

      const likeBtn = document.createElement('img');
      likeBtn.setAttribute('src', '../assets/heart.png');
      likeBtn.classList.add('like-btn');

      const likesDiv = document.createElement('div');
      likesDiv.className = 'likes-div';
      movieDetails.appendChild(likesDiv);

      const numberLikes = document.createElement('p');
      numberLikes.classList.add('number-likes');

      retrieveLikes().then((likes) => {
        likes.forEach((like) => {
          if (like.item_id === show.id) {
            numberLikes.innerHTML = `${like.likes} Likes`;
          }
        });
      });
      
      const commentBtn = document.createElement('button');
      commentBtn.classList.add('comments-btn');
      const commentBtnTxt = document.createTextNode('Comment');
      likesDiv.appendChild(commentBtn);
      commentBtn.appendChild(commentBtnTxt);
      likesDiv.appendChild(likeBtn);
      likesDiv.appendChild(numberLikes);
      commentBtn.addEventListener('click', (e) => {
        display(e);
      });
      likeBtn.addEventListener('click', () => {
        addLikes(show.id);
        numberLikes.innerHTML = '.. loading';
        addLikes(show.id);
        setTimeout(retrieveLikes().then((likes) => {
          likes.forEach((like) => {
            if (like.item_id === show.id) {
              numberLikes.innerHTML = `${like.likes} Likes`;
            }
          });
        }), 1000);
      });
    });
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
