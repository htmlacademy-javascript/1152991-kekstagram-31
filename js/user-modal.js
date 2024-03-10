import {renderComments, closeComments} from './render-comments.js';
import { users } from './render-miniatures.js';

const mainPicture = document.querySelector('.big-picture');
const mainPictureCancel = mainPicture.querySelector('.big-picture__cancel');
const mainPictureImg = mainPicture.querySelector('.big-picture__img img');
const mainlikes = mainPicture.querySelector('.likes-count');

const socialCaption = mainPicture.querySelector('.social__caption');
const pictures = document.querySelectorAll('.picture');

const openModal = (user) => {
  mainPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');

  mainPictureImg.src = user.url;
  mainlikes.textContent = user.likes;
  socialCaption.textContent = user.description;

  renderComments(user.comments);
};

const closeModal = () => {
  mainPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  closeComments();
};

const pictureClickHandler = (evt, i) => {
  evt.preventDefault();

  const idx = i + 1;
  const finalUser = users.find((user) => user.id === idx);
  openModal(finalUser);
};

pictures.forEach((picture, i) => picture.addEventListener('click', (evt) => pictureClickHandler(evt, i)));

mainPictureCancel.addEventListener('click', () => {
  closeModal();
});

document.addEventListener('keydown', (evt) => {
  if (evt.code === 'Escape') {
    closeModal();
  }
});
