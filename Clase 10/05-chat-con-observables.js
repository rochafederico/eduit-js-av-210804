class Observable {
    constructor(enviarTodoAlSuscribirse = false, obtenerTodo) {
        this.subcriptores = [];
        this.enviarTodoAlSuscribirse = enviarTodoAlSuscribirse;
        this.obtenerTodo = obtenerTodo;
    }
    suscribir(callbackSubcribcion) {
        if (!this.subcriptores.includes(callbackSubcribcion)) {
            this.subcriptores.push(callbackSubcribcion);
            if (this.enviarTodoAlSuscribirse) {
                if (this.obtenerTodo) {
                    this.obtenerTodo().forEach(valor => {
                        this.subcriptores.forEach(subcriptor => { 
                            subcriptor(valor)
                        })
                    })
                }
            }
        }
    }
    desSuscribir(callbackSubcribcion) {
        if (this.subcriptores.includes(callbackSubcribcion)) {
            this.subcriptores = this.subcriptores.filter(x => callbackSubcribcion != x);
        }
    }
    cambiarValor(valor) {
        this.subcriptores.forEach(subcriptor => subcriptor(valor));
    }
}



class Mensajes extends Observable {
    mensajes = []
    constructor() {
        super(true, () => this.mensajes);
    }
}
Mensajes.prototype.enviarMensaje = function (mansaje) {
    this.cambiarValor(mansaje)
    this.mensajes.push(mansaje)
}

class Usuarios extends Observable {
    usuarios = []
}
Usuarios.prototype.entrar = function (nombreUsuario) {
    this.usuarios.push(nombreUsuario);
    this.cambiarValor(this.usuarios)
}

const $mensajes = new Mensajes();
const procesar = mensaje => {
    const elementoMensaje = document.createElement('li');
    elementoMensaje.innerText = mensaje
    document.getElementById('mensajes').appendChild(elementoMensaje)
}
document.querySelector('#entrar')
    .addEventListener('click', () => {
        $mensajes.suscribir(procesar);
    })
document.querySelector('#salir')
    .addEventListener('click', () => {
        $mensajes.desSuscribir(procesar);
    })
document.querySelector('form')
    .addEventListener('submit', e => {
        e.preventDefault();
        const mensaje = document.querySelector('form input#mensaje');
        $mensajes.enviarMensaje(mensaje.value);
        mensaje.value = '';
    })