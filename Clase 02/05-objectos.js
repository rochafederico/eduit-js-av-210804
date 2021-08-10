// const miObjeto = Object.create();
const miObjeto = {};
miObjeto.prop = "asdas";

console.log(miObjeto);

const otroObjeto = miObjeto;
otroObjeto.prop = "cualquier cosa";

console.log(miObjeto);
console.log(otroObjeto);

// const otroObjetoBienCopiado = Object.create(miObjeto);
const otroObjetoBienCopiado = { ...miObjeto };
otroObjetoBienCopiado.prop = "Otra cualquier cosa";

console.log("-----");
console.log(miObjeto);
console.log(otroObjeto);
console.log(otroObjetoBienCopiado);

const nombre = "Fede";
const apellido = "Rocha";

const persona = {
  nombre, // nombre: nombre,
  apellido // apellido: apellido
};

console.log("-----");
console.log(persona);

const consologuearNombreApellido = ({ nombre, apellido }) => {
  //   const { nombre, apellido } = persona;
  console.log(nombre);
  console.log(apellido);
};

console.log("-----");
consologuearNombreApellido(persona);

const functionEj = (param1, param2) => {};
const functionEj = (...params) => {};
