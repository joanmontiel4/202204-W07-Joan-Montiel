export class Personaje {
    nombre;
    familia;
    edad;
    estado = 'vivo';
    static serie: 'Juego de Tronos';
    comunicar() {
        super.comunicar();
    }
    morir() {}
}
