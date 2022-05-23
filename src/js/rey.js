import { Personaje } from './personaje.js';

export class Rey extends Personaje {
    anosDeReinado;
    constructor() {
        super(nombre, familia, edad, estado);
    }
    comunicar() {
        super.comunicar();
        //'Vais a morir todos'
    }
}
