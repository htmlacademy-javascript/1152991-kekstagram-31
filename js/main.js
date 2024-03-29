import './util.js';
import { renderPublications } from './render-miniatures.js';
import './user-modal.js';
import './render-comments.js';
import './form.js';
import './photo-editor.js';
import './scale-picture.js';
import { getData } from './api.js';
import './notification-form.js';
import './validator.js';

getData.then((miniatures) => {
  renderPublications(miniatures);
});
