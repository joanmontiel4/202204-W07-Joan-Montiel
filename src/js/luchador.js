import { Personaje } from './personaje.js';

export class Luchador extends Personaje {
    arma;
    destreza; //Value between 0 to 10
    constructor() {
        super(nombre, familia, edad, estado, arma);
    }
    comunicar() {
        super.comunicar();
        //'Primero pego y luego pregunto'
    }
}
