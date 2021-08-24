// buscamos los enlaces
document.querySelectorAll("a").forEach(enalce => {
  debugger;
  // escuchamos el click
  enalce.addEventListener("click", e => {
    debugger;
    // frenamos conportamiento default
    e.preventDefault();
    // cargamos html dinamico
    cargarHtmlEnElMain(e.target.href);
  });
});
