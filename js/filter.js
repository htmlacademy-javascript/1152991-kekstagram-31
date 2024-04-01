import { renderPublication } from './render-filter-publications.js';
import { debounce } from './util.js';

const FILTERS = {
  default: 'filter-default',
  random: 'filter-random',
  discussed: 'filter-discussed'
};

let currentFilter = 'filter-default';
let pictures = [];

const filterElement = document.querySelector('.img-filters');
const ACTIVE_BUTTON_CLASS = 'img-filters__button--active';

const debounceRender = debounce(renderPublication);

const applyFilter = () => {
  let filteredPictures = [];

  switch(currentFilter) {
    case FILTERS.default:
      filteredPictures = pictures;
      break;

    case FILTERS.random:
      filteredPictures = pictures.toSorted(() => 0.5 - Math.random()).slice(0, 10);
      break;

    case FILTERS.discussed:
      filteredPictures = pictures.toSorted((a, b) => b.comments.length - a.comments.length);
      break;
  }

  debounceRender(filteredPictures);
};


const onFilterChange = (evt) => {
  const targetBtn = evt.target;
  const activeBtn = document.querySelector(`.${ACTIVE_BUTTON_CLASS}`);

  if (!targetBtn.matches('button')) {
    return;
  }

  if (activeBtn === targetBtn) {
    return;
  }

  activeBtn.classList.toggle(ACTIVE_BUTTON_CLASS);
  targetBtn.classList.toggle(ACTIVE_BUTTON_CLASS);
  currentFilter = targetBtn.getAttribute('id');

  applyFilter();
};

const configFilter = (picturesData) => {
  filterElement.classList.remove('img-filters--inactive');
  filterElement.addEventListener('click', onFilterChange);
  pictures = picturesData;
};

export { configFilter };
