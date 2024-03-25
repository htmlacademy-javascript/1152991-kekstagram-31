const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const imgPreview = document.querySelector('.img-upload__preview img');


scaleSmaller.addEventListener('click', () => {
  if (scaleValue.value === '25%') {
    scaleValue.value = '25%';
    imgPreview.style.transform = `scale(${scaleValue.value})`;
  } else {
    scaleValue.value = `${parseInt(scaleValue.value, 10) - 25}%`;
    imgPreview.style.transform = `scale(${scaleValue.value})`;
  }
});

scaleBigger.addEventListener('click', () => {
  if (scaleValue.value === '100%') {
    scaleValue.value = '100%';
    imgPreview.style.transform = `scale(${scaleValue.value})`;
  } else {
    scaleValue.value = `${parseInt(scaleValue.value, 10) + 25}%`;
    imgPreview.style.transform = `scale(${scaleValue.value})`;
  }
});
