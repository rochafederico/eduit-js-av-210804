const http = require('http')
// import http from 'http';

const servidor = http.createServer((peticion, respuesta) => {
    switch (peticion.method) {
        case 'GET':
            respuesta.writeHead(200, { 'Content-Type': 'text/html' })
            respuesta.end('<h1>Hola</h1>')
            break;
    
        default:
            break;
    }

});

servidor.listen(8080);