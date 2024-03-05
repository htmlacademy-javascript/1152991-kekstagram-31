import { similarUser } from './data.js';

const listPictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const users = similarUser(25);

const similarFragment = document.createDocumentFragment();

users.forEach(({url, description, likes, comments}) => {
  const userElement = pictureTemplate.cloneNode(true);

  userElement.querySelector('.picture__img').src = url;
  userElement.querySelector('.picture__img').alt = description;
  userElement.querySelector('.picture__likes').textContent = likes;
  userElement.querySelector('.picture__comments').textContent = comments.length;

  similarFragment.appendChild(userElement);

});

listPictures.appendChild(similarFragment);

export { users };
