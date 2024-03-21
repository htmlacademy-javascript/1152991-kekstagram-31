const COMMENTS_SHOW_COUNT = 5;

const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
const currentComments = document.querySelector('.social__comment-shown-count');
const totalComments = document.querySelector('.social__comment-total-count');
const listComments = document.querySelector('.social__comments');
const commentsLoader = document.querySelector('.comments-loader');

const totalAmountComments = document.querySelector('.social__comment-count');

const renderComments = (comments, idx = 0, cb) => {
  listComments.innerHTML = '';
  const commentsLength = comments.length;

  const visibleCommentsCount = COMMENTS_SHOW_COUNT + (COMMENTS_SHOW_COUNT * idx);
  const resolvedComments = comments.slice(0, visibleCommentsCount);

  commentsLoader.removeEventListener('click', cb);

  for (const item of resolvedComments) {
    const comment = commentTemplate.cloneNode(true);
    comment.querySelector('.social__picture').src = item.avatar;
    comment.querySelector('.social__picture').alt = item.name;
    comment.querySelector('.social__text').textContent = item.message;

    currentComments.textContent = resolvedComments.length;

    listComments.append(comment);
  }

  totalComments.textContent = commentsLength;

  if (commentsLength <= COMMENTS_SHOW_COUNT) {
    totalAmountComments.classList.add('hidden');
    commentsLoader.classList.add('hidden');
    return;
  } else {
    totalAmountComments.classList.remove('hidden');
    commentsLoader.classList.remove('hidden');
  }

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

export { renderComments };
