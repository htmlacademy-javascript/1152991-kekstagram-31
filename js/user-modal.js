import { renderComments } from './render-comments.js';
import { closeModal } from './util.js';

const modal = document.querySelector('.big-picture');
const mainPicture = modal.querySelector('.big-picture__img img');
const imageCaption = modal.querySelector('.social__caption');
const likes = modal.querySelector('.likes-count');
const modalBtnClose = modal.querySelector('.big-picture__cancel');

const onDocumentKeydown = (evt) => {
  if (evt.code === 'Escape') {
    closeModal(modal);
  }
};

const openModal = (evt, user) => {
  evt.preventDefault();

  modal.classList.remove('hidden');
  document.body.classList.add('modal-open');

  mainPicture.src = user.url;
  likes.textContent = user.likes;
  imageCaption.textContent = user.description;

  renderComments(user.comments);

  document.addEventListener('keydown', onDocumentKeydown);
};

modalBtnClose.addEventListener('click', () => {
  closeModal(modal);
  document.removeEventListener('keydown', onDocumentKeydown);
});

export { openModal };
