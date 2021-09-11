var cursos = (function (window) {
    // const seflt = {}
    let id = 0;
    class Curso {
        id = 0
        nombre = ''
        constructor(nombre) {
            id++;
            this.id = id;
            this.nombre = nombre;
        }
    }
    const lista = [
        new Curso('Intro UX')
    ];
    return {
        Curso,
        agregar: (nombre) => {
            const nuevoCurso = new Curso(nombre);
            lista.push(nuevoCurso);
            return nuevoCurso.id;
        },
        obtener: (id) => {
            // return Object.create(lista.find(x => x.id == id));
            return {...lista.find(x => x.id == id)};
        }
    }
})(window)

