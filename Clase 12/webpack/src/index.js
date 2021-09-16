import { sumar } from './00-modulo'
console.log(sumar(1,2))
        window.onstorage = ev =>{
            debugger
            
        }
// WebStorage => API javascript
// localStorage > vive hasta que el usuraio borra el cache
// sessionStorage > vive hasta que el usuario cierra la pestania o ventyanas

// localStorage['algo'] = 'algo' // NO HACE ESTO EN CASA
localStorage.setItem('numero', 23123);
console.log('numero', localStorage.getItem('numero'))

localStorage.setItem('condicion', 12 === 10);
console.log('condicion', localStorage.getItem('condicion'))

localStorage.setItem('string', 'asdasdasd');
console.log('string', localStorage.getItem('string'))

localStorage.setItem('function', function () {
    console.log('hola')
});
console.log('function', localStorage.getItem('function'))

localStorage.setItem('function-arrow', () => console.log('hola'));
console.log('function-arrow', localStorage.getItem('function-arrow'));

localStorage.setItem('date', Date);
console.log('date', localStorage.getItem('date'))

localStorage.setItem('date-new', new Date());
console.log('date-new', localStorage.getItem('date-new'));

localStorage.setItem('objecto', { nombre: 'Pepe' });
console.log('objecto', localStorage.getItem('objecto'));

const listaDeAlgo = ['Ordenante', 'Beneficiario'];
localStorage.setItem('objecto-to-json', JSON.stringify(listaDeAlgo));
console.log('objecto-to-json', localStorage.getItem('objecto-to-json'));
console.log('objecto-to-json', JSON.parse(localStorage.getItem('objecto-to-json')));

class DatosUsuario {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    nombre = '';
    edad = 0;
    toString() {
        return JSON.stringify(this);
    }
    static parse = (valor = '') => {
        const result = JSON.parse(valor);
        if (result && result.nombre) {
            return new DatosUsuario(result.nombre, result.edad);
        }
    }
}

// DatosUsuario.prototype.parse = (valor = '') => {
//     const result = JSON.parse(valor);
//     if (result && result.nombre) {
//         return new DatosUsuario(result.nombre, result.edad);
//     }
// }

localStorage.setItem('clase', new DatosUsuario('Pepe'));
console.log('clase', localStorage.getItem('clase'));
console.log('clase', DatosUsuario.parse(localStorage.getItem('clase')));

localStorage.removeItem('clase')
// localStorage.clear()
