import { users } from './render-miniatures.js';

const SocialComments = document.querySelectorAll('.social__comment');
SocialComments.forEach((comment) => comment.remove());

const lisComments = document.querySelector('.social__comments');
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');

const showComments = (i) => {
  users.forEach(({comments}, index) => {
    if (index === i) {
      comments.forEach(({avatar, name, message}) => {
        const comment = commentTemplate.cloneNode(true);
        comment.querySelector('.social__picture').src = avatar;
        comment.querySelector('.social__picture').alt = name;
        comment.querySelector('.social__text').textContent = message;
        lisComments.appendChild(comment);
      });
    }
  });
};

const closeComments = () => {
  const comments = document.querySelectorAll('.social__comment');
  comments.forEach((item) => item.remove());
};

export { showComments, closeComments };
