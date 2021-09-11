class ServicioToken {
    token = ''
    constructor() {
        this.token = localStorage.getItem('token')
    }
    actualizarToken (token) {
        this.token = token;
        localStorage.setItem('token', this.token)
    }
}

class ServicioUsuario {
    obtenerUsuario() {
        return [];
    }
}

const inyector = (() => {
    let intancias = {};
    const incializador = (nombreServicio) => {
        switch (nombreServicio) {
            case 'ServicioToken':
                return new ServicioToken();
            case 'ServicioUsuario':
                return new ServicioUsuario();
            default:
                break;
        }
        return
    }
    return {
        obtenerIntancia: (nombreServicio) => {
            if (!intancias[nombreServicio]) {
                intancias[nombreServicio] = incializador(nombreServicio);
            }
            return intancias[nombreServicio];
        }
    }
})();

var srvToken = inyector.obtenerIntancia('ServicioToken');
var srvUusario = inyector.obtenerIntancia('ServicioUsuario');
var srvTokenDos = inyector.obtenerIntancia('ServicioToken');