import { Personaje } from './personaje.js';

export class Luchador extends Personaje {
    weapon;
    #skill;
    sentence = 'Primero pego y luego pregunto';
    constructor(name, house, age, alias, weapon) {
        super(name, house, age, alias);
        this.weapon = weapon;
    }

    get skill() {
        return this.#skill;
    }

    set skill(value) {
        if (value >= 0 && value <= 10) {
            this.#skill = value;
        }
    }

    characterOverlay() {
        return `
        <ul class="list-unstyled">
            <li>Arma que usa: ${this.weapon}</li>
            <li>Destreza: ${this.skill}</li>
        </ul>
    `;
    }
}
