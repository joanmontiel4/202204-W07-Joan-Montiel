import { Personaje } from './personaje.js';

export class Rey extends Personaje {
    yearsOfReign;
    sentence = 'Vais a morir todos';
    constructor(name, family, age, alias, yearsOfReign) {
        super(name, family, age, alias);
        this.yearsOfReign = yearsOfReign;
    }

    characterOverlay() {
        return `
        <ul class="list-unstyled">
            <li>Años de reinado: ${this.yearsOfReign}</li>
        </ul>
    `;
    }

    characterActions() {
        return `
            <button class="character__action btn btn-talk-${this.name}">
                habla
            </button>
            <button class="character__action btn btn-die-${this.name}">
                muere
            </button>
        `;
    }

    speak() {
        super.speak();
        //'Vais a morir todos'
    }
}
