import { openModal } from './user-modal.js';

const listPictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderPublications = (miniatures) => {
  const similarFragment = document.createDocumentFragment();

  miniatures.forEach((miniature) => {
    const userElement = pictureTemplate.cloneNode(true);

    userElement.querySelector('.picture__img').src = miniature.url;
    userElement.querySelector('.picture__img').alt = miniature.description;
    userElement.querySelector('.picture__likes').textContent = miniature.likes;
    userElement.querySelector('.picture__comments').textContent = miniature.comments.length;

    similarFragment.appendChild(userElement);

    userElement.addEventListener('click', (evt) => openModal(evt, miniature));
  });

  listPictures.appendChild(similarFragment);
};

export { renderPublications };
