import { listaPersonajes } from './personajes.js';

export function renderCards() {
    const characterList = document.querySelector('.characters-list');
    document.querySelector('.col').remove();

    const characterCard = document.createElement('li');
    characterCard.classList.add('character', 'col');

    characterCard.innerHTML = `
                    <div class="card character__card">
                        <img
                            src="./src/img/${listaPersonajes[0].alias}.jpg"
                            alt="Nombre y familia del personaje"
                            class="character__picture card-img-top"
                        />
                        <div class="card-body">
                            <h2 class="character__name card-title h4">
                                ${listaPersonajes[0].name} ${
        listaPersonajes[0].family
    }
                            </h2>
                            <div class="character__info">
                                <ul class="list-unstyled">
                                    <li>Edad: ${
                                        listaPersonajes[0].age
                                    } años</li>
                                    <li>
                                        Estado:
                                        ${listaPersonajes[0].thumbsUpOrDown()}
                                    </li>
                                </ul>
                            </div>
                            <div class="character__overlay">
                                ${listaPersonajes[0].characterOverlay()}
                            <div class="character__actions">
                                ${listaPersonajes[0].characterActions()}        
                            </div>
                        </div>
                    </div>
                    <i class="emoji"></i>
                </div>
    `;
    characterList.appendChild(characterCard);
}
