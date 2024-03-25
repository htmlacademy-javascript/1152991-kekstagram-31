const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');

scaleSmaller.addEventListener('click', () => {
  if (scaleValue.value === '25%') {
    scaleValue.value = '25%';
  } else {
    scaleValue.value = `${parseInt(scaleValue.value, 10) - 25}%`;
  }
});

scaleBigger.addEventListener('click', () => {
  if (scaleValue.value === '100%') {
    scaleValue.value = '100%';
  } else {
    scaleValue.value = `${parseInt(scaleValue.value, 10) + 25}%`;
  }
});
