import './util.js';
import { renderMiniatures } from './render-miniatures.js';
import './user-modal.js';
import './render-comments.js';
import './form.js';
import './photo-editor.js';
import './zoom.js';
import { getData } from './api.js';
import './notification-form.js';
import './validator.js';
import './render-filter-publications.js';
import { configFilter } from './filter.js';

getData.then((miniatures) => {
  renderMiniatures(miniatures);
  configFilter(miniatures);
});
