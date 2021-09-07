function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

const juan = new Persona('Juan', 29)
const pedro = new Persona('Pedro', 29)

console.log(juan, pedro)

Persona.prototype.saludar = function() {
    console.log('Hola ' + this.nombre)
}

console.log(juan, pedro)

juan.saludar();
pedro.saludar();

function Empleado(nombre, edad, sueldo) {
    // debugger
    Persona.call(this, nombre, edad);
    this.sueldo = sueldo;
}

// debugger
Empleado.prototype = Object.create(Persona);

// debugger
const nuevoEmpleado = new Empleado('mARCELO', 45, 60000);

console.log(nuevoEmpleado);
