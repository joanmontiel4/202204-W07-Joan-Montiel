import { Rey } from './rey.js';
import { Luchador } from './luchador.js';
import { Asesor } from './asesor.js';
import { Escudero } from './escudero.js';

// Crea dentro un array con los personajes
// -   Joffrey Baratheon (rey),
// -   Jaime Lannister (luchador),
// -   Daenerys Targaryen (luchadora),
// -   Tyrion Lannister (asesor de Daenerys) y
// -   Bronn (escudero de Jaime).

const joffrey = new Rey('Joffrey', 'Baratheon', 14, 'joffrey', 1);
const jaime = new Luchador('Jaime', 'Lannister', 33, 'espada', 9, 'jaime');
const daenerys = new Luchador(
    'Daenerys',
    'Targaryen',
    16,
    'dragones',
    9,
    'daenerys'
);
const tyrion = new Asesor('Tyrion', 'Lannister', 30, 'Daenerys', 'tyrion');
const bronn = new Escudero('Bronn', 'Stokeworth', 32, 'Jaime', 7, 'bronn');

export const listaPersonajes = [joffrey, jaime, daenerys, tyrion, bronn];
