import { closeModal } from './util.js';
import { sendData } from './api.js';
import { pristine } from './validator.js';
import { onHandlerNotification } from './notification-form.js';
//import { onEffectRadioBtnClick, resetFilter } from './photo-editor.js';

const FILE_TYPES = ['.jpg', '.jpeg', '.png', '.gif', '.jfif'];

const form = document.querySelector('.img-upload__form');

const imgOverlay = form.querySelector('.img-upload__overlay');
const imgUploadInput = form.querySelector('.img-upload__input');
const closeBtn = imgOverlay.querySelector('.cancel');
const hashtagInput = imgOverlay.querySelector('.text__hashtags');
const textarea = imgOverlay.querySelector('.text__description');
const mainPicture = imgOverlay.querySelector('.img-upload__preview img');
const sliderElement = imgOverlay.querySelector('.img-upload__effect-level');
const effectsPreview = imgOverlay.querySelectorAll('.effects__preview');
const radios = imgOverlay.querySelectorAll('.effects__radio');
const submitButton = imgOverlay.querySelector('.img-upload__submit');

const scaleValue = document.querySelector('.scale__control--value');

const templateSuccess = document.querySelector('#success').content.querySelector('.success');
const templateError = document.querySelector('#error').content.querySelector('.error');

const clearForm = () => {
  form.reset();

  radios.forEach((radio) => {
    radio.checked = false;
  });

  radios[0].checked = true;

  sliderElement.classList.add('hidden');
  mainPicture.style.filter = 'grayscale(0)';

  scaleValue.value = '100%';
  mainPicture.style.transform = 'scale(1)';
};

const closeForm = () => {
  effectsPreview.forEach((miniPicture) => {
    miniPicture.style.backgroundImage = '';
  });
  clearForm();
  pristine.reset(hashtagInput);
  closeModal(imgOverlay);
};

const onDocumentKeydownEscape = (evt) => {
  if (evt.code === 'Escape') {
    if (evt.target === hashtagInput || evt.target === textarea) {
      return;
    }

    closeForm();
    document.removeEventListener('keydown', onDocumentKeydownEscape);
  }
};

const onFileInputChange = () => {
  const file = imgUploadInput.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((type) => fileName.endsWith(type));

  if (matches) {
    const url = URL.createObjectURL(file);
    mainPicture.src = url;
    effectsPreview.forEach((miniPicture) => {
      miniPicture.style.backgroundImage = `url(${url})`;
    });
  }
};

form.addEventListener('change', () => {
  imgOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');

  onFileInputChange();
  //onEffectRadioBtnClick();
  document.addEventListener('keydown', onDocumentKeydownEscape);
});

closeBtn.addEventListener('click', closeForm);

const blockSubmitButton = () => {
  submitButton.disabled = true;
};


const setUserFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    templateSuccess.classList.remove('hidden');
    templateError.classList.remove('hidden');

    const isValid = pristine.validate(hashtagInput);

    if (isValid) {
      blockSubmitButton();
      onHandlerNotification();
      sendData(
        onSuccess,
        new FormData(evt.target),
      );
    }
  });
};

setUserFormSubmit(closeForm);
