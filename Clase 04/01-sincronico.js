const btn = document.querySelector('button');
btn.addEventListener('click', ()=>{
    let fecha;
    for (let i = 0; i < 1000000000; i++) {
        fecha = new Date();   
    }
    console.log(fecha);
})