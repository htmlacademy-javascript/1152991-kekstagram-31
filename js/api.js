const templateDataError = document.querySelector('#data-error').content.querySelector('.data-error');

const templateSuccess = document.querySelector('#success').content.querySelector('.success');
const templateError = document.querySelector('#error').content.querySelector('.error');

const getData = fetch('https://31.javascript.htmlacademy.pro/kekstagram/data')
  .then((response) => response.json())
  .catch(() => {
    document.body.append(templateDataError);
    setTimeout(() => {
      templateDataError.remove();
    }, 5000);
  });

const sendData = (onSuccess, formData) => {
  fetch(
    'https://31.javascript.htmlacademy.pro/kekstagram',
    {
      method: 'POST',
      body: formData,
    },
  ).then((response) => {
    if (response.ok) {
      onSuccess();
      document.body.append(templateSuccess);
    } else {
      document.body.append(templateError);
    }
  })
    .catch(() => {
      document.body.append(templateError);
    });
};

export {getData, sendData};
