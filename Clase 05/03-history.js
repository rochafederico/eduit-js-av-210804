console.log(history.length);

const irAInicio = () => {
  const inicioState = {
    html: "pages/inicio.html"
  };
  cargarHtmlEnElMain(inicioState.html);
  history.pushState(
    inicioState, // history.state
    "Pagina de inicio",
    "inicio"
  );
};
const irAContacto = () => {
  const contactoState = {
    html: "pages/contacto.html"
  };
  cargarHtmlEnElMain(contactoState.html);
  history.pushState(
    contactoState, // history.state
    "Pagina de contacto",
    "contact"
  );
};

window.addEventListener("popstate", e => {
  debugger;
  if (history.state) {
    cargarHtmlEnElMain(history.state.html);
  }
});

// seleciona el motivo de la transferncia
// push a documentacion
// docuemntacion ¿hay documentos que cargar?
// si hay docs lo dejo
// si no hay docs remplazo el estado actual por otro pantalla
// otra panlla y haga hacias tras va a ir a motivo

const remplazarPaginaPorInicio = () => {
  const inicioState = {
    html: "pages/inicio.html"
  };
  cargarHtmlEnElMain(inicioState.html);
  history.replaceState(
    inicioState, // history.state
    "Pagina de inicio",
    "inicio"
  );
};
