import { Personaje } from './personaje.js';

export class Rey extends Personaje {
    anosDeReinado;
    constructor(nombre, familia, edad, anosDeReinado) {
        super(nombre, familia, edad);
        this.anosDeReinado = anosDeReinado;
    }
    comunicar() {
        super.comunicar();
        //'Vais a morir todos'
    }
}
