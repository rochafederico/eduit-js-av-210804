// validacion apellidos con -
formulario.querySelector('#apellidos')
.addEventListener('input', (e)=> {
    const regexApellidos = /[\w]{1,}[-][\w]{1,}/;// /patron/(modificador)
    if(regexApellidos.test(e.target.value)) {
        e.target.setCustomValidity("");
    } else {
        e.target.setCustomValidity("Ingresa 2 apellids separados por guion (-)");
    }
})

formulario.querySelector('#email')
.addEventListener('input', (e)=> {
    const regexMail = /[a-zA-Z-_]{1,}@[a-zA-Z-_]{1,}[.]{1,1}[a-zA-Z]{2,}/;// /patron/(modificador)
    if(regexMail.test(e.target.value)) {
        e.target.setCustomValidity("");
    } else {
        e.target.setCustomValidity("Ingresa un mail valido. Ej. mail@mail.com");
    }
})

