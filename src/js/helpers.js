import { listaPersonajes } from './personajes.js';

export function renderCards() {
    const characterList = document.querySelector('.characters-list');
    document.querySelector('.col').remove();

    listaPersonajes.forEach((character) => {
        const characterCard = document.createElement('li');
        characterCard.classList.add('character', 'col');

        characterCard.innerHTML = `
                    <div class="card character__card">
                        <img
                            src="./src/img/${character.alias}.jpg"
                            alt="Nombre y familia del personaje"
                            class="character__picture card-img-top img-${
                                character.alias
                            }"
                        />
                        <div class="card-body">
                            <h2 class="character__name card-title h4">
                                ${character.name} ${character.house}
                            </h2>
                            <div class="character__info thumbs-${
                                character.alias
                            }">
                                <ul class="list-unstyled">
                                    <li>Edad: ${character.age} años</li>
                                    <li>
                                        Estado:
                                        ${character.thumbsUpOrDown()}
                                    </li>
                                </ul>
                            </div>
                            <div class="character__overlay">
                                ${character.characterOverlay()}
                            <div class="character__actions">
                                ${character.characterActions()}        
                            </div>
                        </div>
                    </div>
                    <i class="emoji">${character.emoji}</i>
                </div>
    `;
        characterList.appendChild(characterCard);
    });
}

export function listenEvents() {
    listaPersonajes.forEach((character) => {
        const speakButton = document.querySelector(
            `.btn-talk-${character.alias}`
        );
        speakButton.addEventListener('click', () => {
            character.speak();
        });
        const dieButton = document.querySelector(`.btn-die-${character.alias}`);
        dieButton.addEventListener('click', () => {
            character.die();
        });
    });
}
