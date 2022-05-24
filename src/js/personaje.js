export class Personaje {
    nombre;
    familia;
    edad;
    estado = 'vivo';
    static serie = 'Juego de Tronos';
    constructor(nombre, familia, edad) {
        this.nombre = nombre;
        this.familia = familia;
        this.edad = edad;
    }
    comunicar() {}
    morir() {
        this.estado = 'muerto';
    }
}
