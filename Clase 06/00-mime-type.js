var solicitud = new XMLHttpRequest();
solicitud.open('GET', 'archivo.txt');
// solicitud.overrideMimeType('audio/ogm;charset=x-user-defined')
solicitud.addEventListener('load', e => {
    console.log(solicitud.responseType)
})
solicitud.send()