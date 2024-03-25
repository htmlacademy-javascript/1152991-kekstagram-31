import { closeModal } from './util.js';

const imgOverlay = document.querySelector('.img-upload__overlay');
const form = document.querySelector('.img-upload__form');

const cancel = imgOverlay.querySelector('.cancel');
const hashtagInput = document.querySelector('.text__hashtags');
const textarea = document.querySelector('.text__description');
const effectItems = document.querySelectorAll('.effects__radio');

const stylePicture = document.querySelector('.img-upload__preview img');
const sliderElement = document.querySelector('.img-upload__effect-level');
const checkBoxes = document.querySelectorAll('.effects__radio');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'form--invalid',
  successClass: 'form--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'img-upload__field-wrapper--error'
});

const validateHashtag = (value) => {

  if (value.length === 0) {
    return true;
  }

  const hashtags = value.toLowerCase().trim().split(' ');

  if (hashtags.length > 5) {
    return false;
  }

  if (hashtags.some((item, index, array) => {
    if (array.indexOf(item, index + 1) >= index + 1) {
      return true;
    }
  })) {
    return false;
  }

  return hashtags.every((hashtag) => (/^#[a-zа-яё0-9]{1,19}$/i).test(hashtag));
};

const message = (value) => {

  if (value.length === 0) {
    return true;
  }

  const hashtags = value.toLowerCase().trim().split(' ');

  if (hashtags.length > 5) {
    return 'превышено количество хэштегов';
  }

  if (hashtags.some((item, index, array) => {
    if (array.indexOf(item, index + 1) >= index + 1) {
      return true;
    }
  })) {
    return 'хэштеги повторяются';
  }

  if (hashtags.every((hashtag) => {
    if ((/^#[a-zа-яё0-9]{1,19}$/i).test(hashtag)) {
      return true;
    } else {
      return true;
    }
  })) {
    return 'введён невалидный хэштег';
  }
};

pristine.addValidator(
  form.querySelector('.text__hashtags'),
  validateHashtag,
  message
);

const onDocumentKeydownEscape = (evt) => {
  if (evt.code === 'Escape') {
    if (evt.target === hashtagInput || evt.target === textarea) {
      return;
    }
    hashtagInput.value = '';
    textarea.value = '';

    effectItems.forEach((input) => {
      input.value = '0';
    });

    checkBoxes.forEach((checkBox) => {
      checkBox.checked = false;
    });
    checkBoxes[0].checked = true;

    sliderElement.classList.add('hidden');
    stylePicture.style.filter = 'grayscale(0)';

    pristine.reset(hashtagInput);
    closeModal(imgOverlay);
    document.removeEventListener('keydown', onDocumentKeydownEscape);
  }
};

form.addEventListener('change', () => {
  imgOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydownEscape);
});

const onCancelClick = () => {
  hashtagInput.value = '';
  textarea.value = '';

  effectItems.forEach((input) => {
    input.value = '0';
  });

  sliderElement.classList.add('hidden');
  stylePicture.style.filter = 'grayscale(0)';

  pristine.reset(hashtagInput);
  closeModal(imgOverlay);
};

cancel.addEventListener('click', onCancelClick);

form.addEventListener('submit', (evt) => {
  if (pristine.validate(hashtagInput)) {
    return false;
  }
  evt.preventDefault();
});
