// import { create, get, mount } from './libraries/Sortable.min.js';

var dropContainer = document.getElementById('drop-items');

const sortUsers = new Sortable(dropContainer, {
  animation: 150,
  chosenClass: 'active-item-chosen',
  ghostClass: 'active-item-drag',
});
