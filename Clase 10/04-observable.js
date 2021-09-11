function Observable() {
    this.subcriptores = [];
}

Observable.prototype.suscribir = function (callbackSubcribcion) {
    if (!this.subcriptores.includes(callbackSubcribcion)) {
        this.subcriptores.push(callbackSubcribcion);
    }
}
Observable.prototype.desSuscribir = function (callbackSubcribcion) {
    if (this.subcriptores.includes(callbackSubcribcion)) {
        this.subcriptores = this.subcriptores.filter(x => callbackSubcribcion != x);
    }
}

Observable.prototype.cambiarValor = function (valor) {
    this.subcriptores.forEach(subcriptor => subcriptor(valor));
}

// Observable
var miObs = new Observable();

// Suscriptor
miObs.suscribir(function (valor) {
    console.log('Suscriptor 1', valor)
})
miObs.suscribir(function (valor) {
    console.log('Suscriptor 2', valor)
})
const suscriptor3 = function (valor) {
    console.log('Suscriptor 3', valor)
};
miObs.suscribir(suscriptor3)
miObs.suscribir(function (valor) {
    console.log('Suscriptor 4', valor)
})

