import { Personaje } from './personaje.js';

export class Asesor extends Personaje {
    toWhom; //rey, luchador, asesor o escudero
    constructor(name, family, age, toWhom) {
        super(name, family, age);
        this.toWhom = toWhom;
    }
    speak() {
        super.speak();
        //"No sé por qué, pero creo que voy a morir pronto"
    }
}
