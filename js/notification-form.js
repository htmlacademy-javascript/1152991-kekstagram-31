const isEscapeKey = (evt) => evt.key === 'Escape';

const closeNotification = (evt) => {
  evt.stopPropagation();

  const existElement = document.querySelector('.success') || document.querySelector('.error');
  const closeBtn = existElement.querySelector(`.${existElement.classList}__button`);

  if (
    evt.target === existElement ||
    evt.target === closeBtn ||
    isEscapeKey(evt)
  ) {
    existElement.remove();
    document.body.removeEventListener('click', closeNotification);
    document.body.removeEventListener('keydown', closeNotification);
  }
};

const appendNotification = (template) => {
  const notificationCloneNode = template.cloneNode(true);
  document.body.append(notificationCloneNode);

  document.body.addEventListener('click', closeNotification);
  document.body.addEventListener('keydown', closeNotification);
};

export { appendNotification };
