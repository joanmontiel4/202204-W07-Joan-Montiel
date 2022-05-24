import { Personaje } from './personaje.js';

export class Asesor extends Personaje {
    personaQueAsesora; //rey, luchador, asesor o escudero
    constructor(nombre, familia, edad, personaQueAsesora) {
        super(nombre, familia, edad);
        this.personaQueAsesora = personaQueAsesora;
    }
    comunicar() {
        super.comunicar();
        //"No sé por qué, pero creo que voy a morir pronto"
    }
}
