const solicitud = new XMLHttpRequest();
solicitud.open("GET", "https://jsonview.com/example.json");
solicitud.setRequestHeader("cliente-web", "alumno");

solicitud.addEventListener("load", e => {
  if (solicitud.status == 200) {
    debugger;
  } else {
    console.error("Error", solicitud.statusText, solicitud.status);
  }
});
solicitud.addEventListener("error", err => {
  console.error("Error", err);
});

solicitud.send();

