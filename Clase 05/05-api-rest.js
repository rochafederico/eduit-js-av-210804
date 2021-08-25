const solicitud = new XMLHttpRequest();
solicitud.open("GET", "mock/cursos.json");
solicitud.setRequestHeader("cliente-web", "alumno");

solicitud.addEventListener("load", e => {
  if (solicitud.status == 200) {
    debugger;
  } else {
    console.error("Error", solicitud.statusText, solicitud.status);
  }
});

solicitud.send();