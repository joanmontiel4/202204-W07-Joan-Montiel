import { Personaje } from './personaje.js';

export class Escudero extends Personaje {
    squireOf; //solo puede ser luchador
    gradeOfBowing; //Un valor entre 0 y 10
    constructor(name, family, age, squireOf, gradeOfBowing) {
        super(name, family, age);
        this.squireOf = squireOf;
        this.gradeOfBowing = gradeOfBowing;
    }
    speak() {
        super.speak();
        //'Soy un loser'
    }
}
