import { listenEvents, renderCards } from './js/helpers.js';

document.addEventListener('DOMContentLoaded', () => {
    renderCards();
    listenEvents();
});

////////// TEST dialog appear ///////////////////////
// const talkButton = document.querySelector('.btn-talk');
// document.addEventListener('click', () => {
//     const comunica = document.querySelector('.comunications');
//     comunica.classList.toggle('on');
// });
//////////////////////////////////////////////////////
