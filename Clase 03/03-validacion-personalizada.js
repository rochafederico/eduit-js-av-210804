formulario.querySelector('#apellidos')
.addEventListener('input', (e)=> {
    if(e.target.value.indexOf('-') > -1) {
        e.target.setCustomValidity("");
    } else {
        e.target.setCustomValidity("Ingresa 2 apellids separados por guion (-)");
    }
})