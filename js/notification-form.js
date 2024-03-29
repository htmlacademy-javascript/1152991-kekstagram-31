const templateSuccess = document.querySelector('#success').content.querySelector('.success');
const successButton = templateSuccess.querySelector('.success__button');

const templateError = document.querySelector('#error').content.querySelector('.error');
const errorButton = templateError.querySelector('.error__button');

const onDocumentKeydownEscape = (evt, cb) => {
  if (evt.code === 'Escape') {
    templateSuccess.remove();
    templateError.remove();
    document.body.removeEventListener('keydown', cb);
  }
};

const closeNotification = (evt) => {
  evt.stopPropagation();

  const existElement = document.querySelector('.success') || document.querySelector('.error');

  if (
    evt.target === existElement ||
    evt.target === successButton ||
    evt.target === errorButton ||
    onDocumentKeydownEscape(evt, closeNotification)
  ) {
    existElement.remove();
    document.body.removeEventListener('click', closeNotification);
    document.body.removeEventListener('keydown', closeNotification);
  }
};

const onHandlerNotification = () => {
  document.body.addEventListener('click', closeNotification);
  document.body.addEventListener('keydown', closeNotification);
};

export { onHandlerNotification };
