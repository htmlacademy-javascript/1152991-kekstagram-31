import { renderComments } from './render-comments.js';
import { users } from './render-miniatures.js';
import { closeModal } from './util.js';

const modal = document.querySelector('.big-picture');
const modalCancel = modal.querySelector('.big-picture__cancel');
const mainPicture = modal.querySelector('.big-picture__img img');
const likes = modal.querySelector('.likes-count');

const socialCaption = modal.querySelector('.social__caption');
const pictures = document.querySelectorAll('.picture');

const onDocumentKeydown = (evt) => {
  if (evt.code === 'Escape') {
    closeModal(modal);
    document.removeEventListener(onDocumentKeydown);
  }
};

const openModal = (user) => {
  modal.classList.remove('hidden');
  document.body.classList.add('modal-open');

  mainPicture.src = user.url;
  likes.textContent = user.likes;
  socialCaption.textContent = user.description;

  renderComments(user.comments);

  document.addEventListener('keydown', onDocumentKeydown);
};

const pictureClickHandler = (evt, i) => {
  evt.preventDefault();

  const idx = i + 1;
  const finalUser = users.find((user) => user.id === idx);
  openModal(finalUser);
};

pictures.forEach((picture, i) => picture.addEventListener('click', (evt) => pictureClickHandler(evt, i)));

modalCancel.addEventListener('click', () => {
  closeModal(modal);
  document.removeEventListener('keydown', onDocumentKeydown);
});

