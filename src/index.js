import { listaPersonajes } from './js/personajes.js';
import { renderCards } from './js/helpers.js';
// import { listenEvents } from './js/helpers.js';

document.addEventListener('DOMContentLoaded', () => {
    // Copiar els elements tantes vegades com personatges tinguem
    // Comence per duplicar un element
    // const characterList = document.querySelector('.characters-list');
    // const characterCard = document.querySelector('.col');
    // // Canviar imatge
    // const imgTop = document.querySelector('.card-img-top');
    // imgTop.setAttribute('src', './src/img/joffrey.jpg');

    // INICIALITZAR
    // document.querySelector('comunications').remove();

    // const comunications = document.querySelector('.comunications');
    // comunications.classList.add('on');
    // listaPersonajes[0].speak();

    /////////////////////////////////////////////////////////////
    renderCards();

    ////////////  EVENT LISTENER /////////////////////////
    //////////////////////////////////////////////////////
    const speakButton = document.querySelector('.btn');

    // console.dir(speakButton);
    speakButton.addEventListener('click', () => {
        listaPersonajes[0].speak();
    });
    //////////////////////////////////////////////////////

    //${listaPersonajes[0].edad}

    // listaPersonajes.forEach((element) => {
    //     const characterColumn = document.createElement('li');
    //     characterColumn.classList.add('character');
    //     characterColumn.classList.add('col');
    //     characterColumn.innerHTML = characterCol.innerHTML;
    //     characterList.appendChild(characterColumn);
    // });
});
