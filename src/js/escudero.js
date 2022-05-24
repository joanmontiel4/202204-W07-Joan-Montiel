import { Personaje } from './personaje.js';

export class Escudero extends Personaje {
    squireOf; //solo puede ser luchador
    #gradeOfBowing; //Un valor entre 0 y 10
    sentence = 'Soy un loser';
    constructor(name, house, age, alias, squireOf) {
        super(name, house, age, alias);
        this.squireOf = squireOf;
    }

    get gradeOfBowing() {
        return this.#gradeOfBowing;
    }

    set gradeOfBowing(value) {
        if (value >= 0 && value <= 10) {
            this.#gradeOfBowing = value;
        }
    }

    characterOverlay() {
        return `
        <ul class="list-unstyled">
            <li>Sirve a: ${this.squireOf}</li>
            <li>Grado de pelotismo: ${this.gradeOfBowing}</li>
        </ul>
    `;
    }
}
