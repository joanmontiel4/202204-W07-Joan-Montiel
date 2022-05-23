import { Personaje } from './personaje.js';

export class Escudero extends Personaje {
    aQuienSirvo; //solo puede ser luchador
    gradoPelotismo; //Un valor entre 0 y 10
    constructor() {
        super(nombre, familia, edad, estado);
    }
    comunicar() {
        super.comunicar();
        //'Soy un loser'
    }
}
