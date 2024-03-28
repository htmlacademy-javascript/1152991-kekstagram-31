const sliderElement = document.querySelector('.img-upload__effect-level');
const mainPicture = document.querySelector('.img-upload__preview img');
const listEffects = document.querySelectorAll('.effects__item');

const effectChrome = document.querySelector('#effect-chrome');
const effectNone = document.querySelector('#effect-none');
const effectSepia = document.querySelector('#effect-sepia');
const effectMarvin = document.querySelector('#effect-marvin');
const effectPhobos = document.querySelector('#effect-phobos');
const effectHeat = document.querySelector('#effect-heat');
const effectValue = document.querySelector('.effect-level__value');

sliderElement.classList.add('hidden');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 0.1,
  step: 0,
  connect: 'lower',
});

const applyingEffects = (target) => {
  switch(target) {
    case effectNone:
      sliderElement.classList.add('hidden');
      mainPicture.style.filter = 'grayscale(0)';
      effectValue.value = '';
      break;

    case effectChrome:
      sliderElement.classList.remove('hidden');

      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start: 1,
        step: 0.1,
      });

      sliderElement.noUiSlider.on('update', () => {
        const value = sliderElement.noUiSlider.get();
        mainPicture.style.filter = `grayscale(${value})`;
        effectValue.value = value;
      });
      break;

    case effectSepia:
      sliderElement.classList.remove('hidden');

      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start: 1,
        step: 0.1,
      });

      sliderElement.noUiSlider.on('update', () => {
        const value = sliderElement.noUiSlider.get();
        mainPicture.style.filter = `sepia(${value})`;
        effectValue.value = value;
      });
      break;

    case effectMarvin:
      sliderElement.classList.remove('hidden');

      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 100,
        },
        start: 100,
        step: 1,
      });

      sliderElement.noUiSlider.on('update', () => {
        const value = sliderElement.noUiSlider.get();
        mainPicture.style.filter = `invert(${value}%)`;
        effectValue.value = value;
      });
      break;

    case effectPhobos:
      sliderElement.classList.remove('hidden');

      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3,
        },
        start: 3,
        step: 0.1,
      });

      sliderElement.noUiSlider.on('update', () => {
        const value = sliderElement.noUiSlider.get();
        mainPicture.style.filter = `blur(${value}px)`;
        effectValue.value = value;
      });
      break;

    case effectHeat:
      sliderElement.classList.remove('hidden');

      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 1,
          max: 3,
        },
        start: 3,
        step: 0.1,
      });

      sliderElement.noUiSlider.on('update', () => {
        const value = sliderElement.noUiSlider.get();
        mainPicture.style.filter = `brightness(${value})`;
        effectValue.value = value;
      });
      break;
  }
};

listEffects.forEach((effectsItem) => {
  effectsItem.addEventListener('click', (evt) => {
    if (evt.target.tagName === 'INPUT') {
      applyingEffects(evt.target);
    }
  });
});
