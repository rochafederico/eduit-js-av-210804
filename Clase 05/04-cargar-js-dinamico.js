// buscamos los enlaces
document.querySelectorAll("a").forEach(enalce => {
  // escuchamos el click
  enalce.addEventListener("click", e => {
    // frenamos conportamiento default
    e.preventDefault();
    // cargamos html dinamico
    const rutaHtml = `pages${e.target.pathname}.html`;
    const rutaJs = `controllers${e.target.pathname}.js`;

    const state = {
      html: rutaHtml,
      js: rutaJs
    };
    cargarHtmlEnElMain(rutaHtml);
    cargarJs(rutaJs);
    history.pushState(
      state, // history.state
      null,
      e.target.pathname.replace("/", "")
    );
  });
});
