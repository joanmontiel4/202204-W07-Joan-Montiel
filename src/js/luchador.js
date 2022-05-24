import { Personaje } from './personaje.js';

export class Luchador extends Personaje {
    arma;
    destreza; //Value between 0 to 10
    constructor(nombre, familia, edad, arma, destreza) {
        super(nombre, familia, edad);
        this.arma = arma;
        this.destreza = destreza;
    }
    comunicar() {
        super.comunicar();
        //'Primero pego y luego pregunto'
    }
}
