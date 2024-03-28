const templateSuccess = document.querySelector('#success').content.querySelector('.success');
const successButton = templateSuccess.querySelector('.success__button');

const templateError = document.querySelector('#error').content.querySelector('.error');
const errorButton = templateError.querySelector('.error__button');

const onDocumentKeydownEscape = (evt) => {
  evt.stopPropagation();
  if (evt.code === 'Escape') {
    templateSuccess.remove();
    templateError.remove();
  }
};

const closeNotification = (evt) => {
  evt.stopPropagation();

  const existElement = document.querySelector('.success') || document.querySelector('.error');

  if (
    evt.target === existElement ||
    evt.target === successButton ||
    evt.target === errorButton ||
    onDocumentKeydownEscape(evt)
  ) {
    existElement.remove();
    document.body.addEventListener('click', closeNotification);
    document.body.addEventListener('keydown', closeNotification);
  }
};

const appendNotification = () => {
  document.body.addEventListener('click', closeNotification);
  document.body.addEventListener('keydown', closeNotification);
};

errorButton.addEventListener('click', () => {
  appendNotification(templateError);
});

successButton.addEventListener('click', () => {
  appendNotification(templateSuccess);
});
