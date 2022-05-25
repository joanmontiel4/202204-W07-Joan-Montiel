import { Personaje } from './personaje.js';

export class Asesor extends Personaje {
    toWhom; //rey, luchador, asesor o escudero
    sentence = 'No sé por qué, pero creo que voy a morir pronto';
    emoji = '🎓';
    constructor(name, family, age, alias, toWhom) {
        super(name, family, age, alias);
        this.toWhom = toWhom;
    }

    characterOverlay() {
        return `
        <ul class="list-unstyled">
            <li>Asesora a: ${this.toWhom}</li>
        </ul>
    `;
    }
}
