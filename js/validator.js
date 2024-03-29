const form = document.querySelector('.img-upload__form');

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

export { pristine };
