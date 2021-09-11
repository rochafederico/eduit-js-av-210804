class ServicioToken {
    token = ''
    constructor() {
        this.token = localStorage.getItem('token')
    }
}

const singleton = (() => {
    let intancia;
    // const incializador = ()=>{
    //     return 
    // }
    return {
        obtenerIntancia: () => {
            if (!intancia) {
                intancia = new ServicioToken();
            }
            return intancia;
        }
    }
})()
var miPrimerIntacia = singleton.obtenerIntancia()
miPrimerIntacia.token = 12312312;
var miSegundaIntacia = singleton.obtenerIntancia()

// const srvIntancia = new ServicioToken();
// console.log(srvIntancia.token)