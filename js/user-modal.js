import {users} from './rendering-miniatures';

const picturesContainer = document.querySelector('.pictures');
const mainPicture = document.querySelector('.big-picture');
const mainPictureImg = mainPicture.querySelector('.big-picture__img img');
const mainlikes = mainPicture.querySelector('.likes-count');
const mainShowComments = mainPicture.querySelector('.social__comment-shown-count');
const mainTotalComments = mainPicture.querySelector('.social__comment-total-count');
const socialCaption = mainPicture.querySelector('.social__caption');
const pictures = document.querySelectorAll('.picture');

const mainSocialComments = document.querySelector('.social__comments');
const socialComments = mainSocialComments.querySelectorAll('.social__comment');
const socialPicture = mainSocialComments.querySelector('.social__picture');
const socialText = mainSocialComments.querySelector('.social__text');

const socialCommentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
socialCommentCount.classList.add('hidden');
commentsLoader.classList.add('hidden');

const mainPictureCancel = mainPicture.querySelector('.big-picture__cancel');


const openModal = (pictureIndex) => {
  mainPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');

  users.forEach((user, index) => {
    if (index === pictureIndex) {
      mainPictureImg.src = user.url;
      mainlikes.textContent = user.likes;
      mainShowComments.textContent = socialComments.length;
      mainTotalComments.textContent = user.comments.length;
      socialCaption.textContent = user.description;

      socialPicture.src = user.comments[0].avatar;
      socialPicture.alt = user.comments[0].name;
      socialText.textContent = user.comments[0].message;
    }

  });
};

const closeModal = () => {
  mainPicture.classList.add('hidden');
};

picturesContainer.addEventListener('click', (evt) => {
  const target = evt.target.parentNode;

  if (target.matches('.picture') || target.matches('.picture__info')) {
    pictures.forEach((picture, i) => {
      if (target === picture) {
        openModal(i);
      }
    });
  }
});

mainPictureCancel.addEventListener('click', () => {
  closeModal();
});

document.addEventListener('keydown', (evt) => {
  if (evt.code === 'Escape') {
    closeModal();
  }
});
