// forma literal
const miObjeto = {
    propiedad: 123
}

const miOtroObjeto = new Object();
miOtroObjeto.propiedad = 'asdas'

const miOtroObjetoConCreate  = Object.create(null);

const miFunction = () => console.log('Se ejecuto la funcion')
// miFunction.prototype
const persona = {
    nombre: null,
    apeelido: null
};

// const pepe = {
//     nombre: 
// }

const pedro = persona;
pedro.nombre = 'Pedro'
console.log('Pedro es igual a persona', pedro == persona);
const juan = persona;
juan.nombre = 'Juan'
console.log(persona);
console.log('Pedro es igual a Juan', pedro == juan);


// con create
const fede  = Object.create(persona);
console.log('fede es igual a persona]', fede == persona);
fede.nombre = 'Nahuel'
fede['sobrenombre'] = 'Ttato';
console.log(persona);
console.log(fede);

// basicos
// const algo = 'dasdasd';

// funcion constructora
// const Persona = (nombre, apellido) => {
//     // const persona = {
//     //     nombre: null,
//     //     apeelido: null
//     // };
//     // persona.nombre = nombre;
//     // persona.apellido = apellido;
//     const persona = {
//         nombre,
//         apellido
//     }
//     return persona;
// }

function Persona(nombre, apellido, callback = () => console.log(312312)) {
    this.nombre = nombre;
    this.apellido = apellido;

    console.log(this);
    this.hablar = function(){
        alert('Hola soy' + this.nombre);
        console.log(this);
        // callback()
        // ejecutar en el mismo contexto
        callback.bind(this);
    }
}
// const miCallback = ()=> {
//     console.dir(this)
//     debugger
// }
function miCallback(){
    console.dir(this)
}
const laura = new Persona('Laura', 'Bustos', miCallback);
laura.hablar()



debugger