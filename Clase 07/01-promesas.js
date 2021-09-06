const promesa = new Promise((resolver, rechazar) => {
  setTimeout(() => {
    resolver("Hola");
  }, 3000);
});

// const exito = value => {
//   debugger;
//   const result = value.substr(0, value.length - 1);
//   console.log(result);
//   return result;
// };
const exito = value => {
  const result = value.substr(0, value.length - 1);
  console.log(result);
  return new Promise((resolver, rechazar) => {
    setTimeout(() => {
      resolver(result);
    }, 1000);
  });
};

const error = err => {
  console.error(err);
};
let cargando = true;
const promesaAnindada =  promesa
  .then(exito)
  .then(exito)
  .then(respuesta => {
    cargando = false;
    // hay errores, entonces throw error
    throw new Error("Se rompio todo!!!");
  })
  .then(exito)
  .catch(error)
  // .cath(err =>{
  //   cargando = false;
  // })
  .finally(()=> {
    cargando = false;
    console.log('termino')
  });
// promesa.then(exito, error);
// promesa.catch(error);

function hacerAlgo(param) {
  // necesitao hacer la llamda??
  if (param) {
    // hago la llamada
    return new Promise((resolver, rechazar) => {
      setTimeout(() => {
        resolver(true);
      }, 1000);
    });
  } else {
    return Promise.resolve(false);
    // o error
    // return Promise.reject("Salio todo mal");
  }
}
async function hacerAlgoAync(param) {
  // necesitao hacer la llamda??
  if (param) {
    // hago la llamada
    return new Promise((resolver, rechazar) => {
      setTimeout(() => {
        resolver(true);
      }, 1000);
    });
  } else {
    return true;
  }
}

const segundaPromesa = hacerAlgo(true);
segundaPromesa.then(data => console.log(data));

Promise.all([promesaAnindada, segundaPromesa])
.then(data => console.log(data))
.catch(err => console.log(err))