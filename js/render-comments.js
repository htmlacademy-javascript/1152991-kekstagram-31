const COMMENTS_SHOW_COUNT = 5;

const lisComments = document.querySelector('.social__comments');
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
const currentCommentsCount = document.querySelector('.social__comment-shown-count');
const TotalComments = document.querySelector('.social__comment-total-count');
const commentsLoader = document.querySelector('.comments-loader');

const renderComments = (comments, idx = 0, cb) => {
  const commentsLength = comments.length;
  const visibleCommentsCount = COMMENTS_SHOW_COUNT + (COMMENTS_SHOW_COUNT * idx);
  const resolvedComments = comments.slice(0, visibleCommentsCount);

  commentsLoader.removeEventListener('click', cb);

  lisComments.innerHTML = '';

  for (const item of resolvedComments) {
    const comment = commentTemplate.cloneNode(true);
    comment.querySelector('.social__picture').src = item.avatar;
    comment.querySelector('.social__picture').alt = item.name;
    comment.querySelector('.social__text').textContent = item.message;

    currentCommentsCount.textContent = resolvedComments.length;
    lisComments.append(comment);
  }

  TotalComments.textContent = commentsLength;

  if (commentsLength < COMMENTS_SHOW_COUNT || commentsLength <= visibleCommentsCount) {
    commentsLoader.classList.add('hidden');
  } else {
    commentsLoader.classList.remove('hidden');
  }

  const clickHandler = () => {
    renderComments(comments, idx + 1, clickHandler);
  };

  commentsLoader.addEventListener('click', clickHandler);
};

const closeComments = () => {
  const comments = document.querySelectorAll('.social__comment');
  comments.forEach((item) => item.remove());
};

export { renderComments, closeComments };
