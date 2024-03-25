const sliderElement = document.querySelector('.img-upload__effect-level');
const stylePicture = document.querySelector('.img-upload__preview img');
const effectsItems = document.querySelectorAll('.effects__item');

const effectChrome = document.querySelector('#effect-chrome');
const effectNone = document.querySelector('#effect-none');
const effectSepia = document.querySelector('#effect-sepia');
const effectMarvin = document.querySelector('#effect-marvin');
const effectPhobos = document.querySelector('#effect-phobos');
const effectHeat = document.querySelector('#effect-heat');
const effectValue = document.querySelector('.effect-level__value');

//sliderElement.classList.add('hidden');

//noUiSlider.create(sliderElement, {
//  range: {
//    min: 0,
//    max: 10,
//  },
//  start: 10,
//  step: 0,
//  connect: 'lower',
//});

//const effects = (target) => {
//  switch(target) {
//    case effectNone:
//      sliderElement.classList.add('hidden');
//      stylePicture.style.filter = 'grayscale(0)';
//      effectValue.value = 'none';
//      break;

//    case effectChrome:
//      sliderElement.classList.remove('hidden');

//      sliderElement.noUiSlider.updateOptions({
//        range: {
//          min: 0,
//          max: 1,
//        },
//        start: 1,
//        step: 0.1,
//      });

//      sliderElement.noUiSlider.on('update', () => {
//        const value = sliderElement.noUiSlider.get();
//        stylePicture.style.filter = `grayscale(${value})`;
//        effectValue.value = value;
//      });
//      break;

//    case effectSepia:
//      sliderElement.classList.remove('hidden');

//      sliderElement.noUiSlider.updateOptions({
//        range: {
//          min: 0,
//          max: 1,
//        },
//        start: 1,
//        step: 0.1,
//      });

//      sliderElement.noUiSlider.on('update', () => {
//        const value = sliderElement.noUiSlider.get();
//        effectValue.value = value;
//        stylePicture.style.filter = `sepia(${value})`;
//      });
//      break;

//    case effectMarvin:
//      sliderElement.classList.remove('hidden');

//      sliderElement.noUiSlider.updateOptions({
//        range: {
//          min: 0,
//          max: 100,
//        },
//        start: 100,
//        step: 1,
//      });

//      sliderElement.noUiSlider.on('update', () => {
//        const value = sliderElement.noUiSlider.get();
//        effectValue.value = value;
//        stylePicture.style.filter = `invert(${value}%)`;
//      });
//      break;

//    case effectPhobos:
//      sliderElement.classList.remove('hidden');

//      sliderElement.noUiSlider.updateOptions({
//        range: {
//          min: 0,
//          max: 3,
//        },
//        start: 3,
//        step: 0.1,
//      });

//      sliderElement.noUiSlider.on('update', () => {
//        const value = sliderElement.noUiSlider.get();
//        effectValue.value = value;
//        stylePicture.style.filter = `blur(${value}px)`;
//      });
//      break;

//    case effectHeat:
//      sliderElement.classList.remove('hidden');

//      sliderElement.noUiSlider.updateOptions({
//        range: {
//          min: 1,
//          max: 3,
//        },
//        start: 3,
//        step: 0.1,
//      });

//      sliderElement.noUiSlider.on('update', () => {
//        const value = sliderElement.noUiSlider.get();
//        effectValue.value = value;
//        stylePicture.style.filter = `brightness(${value})`;
//      });
//      break;
//  }
//};

//effectsItems.forEach((effectsItem) => {
//  effectsItem.addEventListener('click', (evt) => {
//    if (evt.target.tagName === 'INPUT') {
//      effects(evt.target);
//    }
//  });
//});
