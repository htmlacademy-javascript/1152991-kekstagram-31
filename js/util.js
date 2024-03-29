const closeModal = (element) => {
  element.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

export {
  closeModal
};
