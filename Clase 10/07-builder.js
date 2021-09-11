class Curso {
    profesor = ''
    alumnos = []
    fecha = Date.now()
}

function BuilderCurso() {
    this.curso = new Curso();
    // this.agregarAlumnos = alumnos => {
    //     this.curso.alumnos = alumnos;
    // }
    // this.asignarProfesor = profe => {
    //     this.curso.profesor = profe
    // }
    this.setNombre = nombre => this.nombre = nombre
    this.get = function () {
        return this.curso;
    }
}

function JsAv() {
    this.contruir = (build) => {
        build.setNombre('Javascript Avanzado')
return build.get()
    }
}
console.lgo(JsAv().contruir(new BuilderCurso()))
// const curso = new Curso();