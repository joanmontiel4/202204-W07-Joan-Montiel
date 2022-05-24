import { Personaje } from './personaje.js';

export class Escudero extends Personaje {
    soyEscuderoDe; //solo puede ser luchador
    gradoPelotismo; //Un valor entre 0 y 10
    constructor(nombre, familia, edad, soyEscuderoDe, gradoPelotismo) {
        super(nombre, familia, edad);
        this.soyEscuderoDe = soyEscuderoDe;
        this.gradoPelotismo = gradoPelotismo;
    }
    comunicar() {
        super.comunicar();
        //'Soy un loser'
    }
}
