import { Rey } from './rey.js';
import { Luchador } from './luchador.js';
import { Asesor } from './asesor.js';
import { Escudero } from './escudero.js';

const joffrey = new Rey('Joffrey', 'Baratheon', 14, 'joffrey', 1);
const jaime = new Luchador('Jaime', 'Lannister', 33, 'jaime', 'espada');
jaime.skill = 9;
const daenerys = new Luchador(
    'Daenerys',
    'Targaryen',
    16,
    'daenerys',
    'dragones'
);
daenerys.skill = 9;
const tyrion = new Asesor('Tyrion', 'Lannister', 30, 'tyrion', 'Daenerys');
const bronn = new Escudero('Bronn', 'Stokeworth', 32, 'bronn', 'Jaime');
bronn.gradeOfBowing = 8;

export const listaPersonajes = [joffrey, jaime, daenerys, tyrion, bronn];
