import { Personaje } from './personaje.js';

export class Rey extends Personaje {
    yearsOfReign;
    sentence = 'Vais a morir todos';
    emoji = '👑';
    constructor(name, house, age, alias, yearsOfReign) {
        super(name, house, age, alias);
        this.yearsOfReign = yearsOfReign;
    }

    characterOverlay() {
        return `
        <ul class="list-unstyled">
            <li>Años de reinado: ${this.yearsOfReign}</li>
        </ul>
    `;
    }
}
