import { Personaje } from './personaje.js';

export class Luchador extends Personaje {
    weapon;
    skill; //Value between 0 to 10
    constructor(name, family, age, weapon, skill) {
        super(name, family, age);
        this.weapon = weapon;
        this.skill = skill;
    }
    speak() {
        super.speak();
        //'Primero pego y luego pregunto'
    }
}
