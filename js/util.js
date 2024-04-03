const closeModal = (element) => {
  element.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {
  closeModal,
  debounce,
};
