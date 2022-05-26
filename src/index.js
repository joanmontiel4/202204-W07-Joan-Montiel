import { listenEvents, renderCards } from './js/helpers.js';
// import { listaPersonajes } from './js/personajes.js';

document.addEventListener('DOMContentLoaded', () => {
    renderCards();
    listenEvents();

    /////////////////////////////////////////////////////
    // console.log(listaPersonajes[0].alias);
    // listaPersonajes[0].renderComunications();
    // const speakButton = document.querySelector(
    //     `.btn-talk-${listaPersonajes[0].alias}`
    // );
    // speakButton.addEventListener('click', () => {
    //     listaPersonajes[0].speak();
    // });

    // const talkButton = document.querySelector('.btn-talk');
    // document.addEventListener('click', () => {
    //     const comunica = document.querySelector('.comunications');
    //     comunica.classList.toggle('on');
    // });
});

////////// TEST dialog appear ///////////////////////
// const talkButton = document.querySelector('.btn-talk');
// document.addEventListener('click', () => {
//     const comunica = document.querySelector('.comunications');
//     comunica.classList.toggle('on');
// });
//////////////////////////////////////////////////////
