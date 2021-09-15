console.log(document.cookie)

document.querySelector('#ingrtesar').addEventListener('click', ev => {
    const nombre = prompt('Cual es tu nombre?');
    if (nombre) {
        // expire
        const fechaExpiracion = new Date();
        fechaExpiracion.setDate(fechaExpiracion.getDate() + 1);
        let cookiUusario = `usuario=${nombre}`;
        cookiUusario = `${cookiUusario};expires=${fechaExpiracion.toUTCString()}`;
        // cookiUusario = `${cookiUusario};domain=locahost`;
        cookiUusario = `${cookiUusario};path=/`;
        cookiUusario = `${cookiUusario};secure`;
        document.cookie = cookiUusario;
        console.log(fechaExpiracion.toJSON());
    }
})

document.querySelector('#salir').addEventListener('click', ev => {
    document.cookie = `usuario=;expires=${new Date().toUTCString()};path=/`;
})