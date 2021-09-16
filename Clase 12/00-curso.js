
export let id = 0;

export default class Curso {
    id = 0
    nombre = ''
    constructor(nombre) {
        id++;
        this.id = id;
        this.nombre = nombre;
    }
}