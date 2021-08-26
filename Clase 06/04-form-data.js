var forElemento = document.getElementById("mi-formulario");

forElemento.addEventListener("submit", e => {
  e.preventDefault();
  var miFormulario = new FormData(forElemento);
  var nombre = miFormulario.get("nombre");
  miFormulario.set("apellido", "Perez");
  console.log(Array.from(miFormulario.keys()));

  var solicitud = new XMLHttpRequest();
  //   SI NECESITAMOS PASAR PARAMETROS POR URL
  var parametros = new URLSearchParams();
  parametros.set("id", 12);
  parametros.set("cliente", "alumno");
  solicitud.open("PUT", "/url-api?" + parametros.toString());
  solicitud.send(miFormulario);
  debugger;
});
