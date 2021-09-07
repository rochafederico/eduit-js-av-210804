class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}
// const Persona = class {
//     constructor(nombre, edad) {
//         this.nombre = nombre;
//         this.edad = edad;
//     }
// }

const juan = new Persona('Juan', 29)
const pedro = new Persona('Pedro', 29)
console.log(juan, pedro)

class Empleado extends Persona {
    constructor(nombre, edad, sueldo) {
        super(nombre, edad);
        this.sueldo = sueldo;
    }
    get descripcion() {
        return this.nombre + ' (' + this.edad + ')';
    }
    getSueldoFormatedo = () => {

    }

    static algo() {
        // this. no se puede acceder a las propiedades de la calse
        return 'algo';
    }

    static otroAlgo = 12312;

    static validadores() {
        return []
    }
}

const nuevoEmpleado = new Empleado('Ana', 37, 50000)
console.log(nuevoEmpleado.descripcion)

console.log(
    Empleado.algo(),
    Empleado.otroAlgo
)