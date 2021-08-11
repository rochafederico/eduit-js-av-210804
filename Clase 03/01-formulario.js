formulario.addEventListener('submit', function(e) {
    let esValido = true;
    e.target.querySelectorAll('input').forEach(input => {
        if(!input.checkValidity()) {
            esValido = false;
        }
    });

    if(!esValido) {
        e.preventDefault();
    }
})