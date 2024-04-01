import { renderMiniatures } from './render-miniatures';

const pictureContainer = document.querySelector('.pictures');
let pictures = [];

const clearPublications = () => {
  pictureContainer.querySelectorAll('.picture').forEach((item) => item.remove());
};

const renderPublication = (picturesData) => {
  clearPublications();
  pictures = picturesData;
  renderMiniatures(pictures);
};

export { renderPublication };
