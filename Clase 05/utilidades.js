const ERROR_HTML =
  "No se pudo cargar la seccion, intente nuevamente mas tarde.";
const cargarHtml = (urlHtml, callback, callbackErr) => {
  const solicitud = new XMLHttpRequest();
  // window.ActiveXObject("") IE
  solicitud.open("GET", urlHtml);
  // GET POST DELETE PATCH OPNTIONS
  // HEAD

  solicitud.onload = ev => {
    if (solicitud.status == 200) {
      callback(solicitud.response);
    } else {
      callbackErr(solicitud.response);
    }
  };

  solicitud.send();
};

const cargarHtmlEnElMain = url => {
  const main = document.querySelector("main");
  cargarHtml(
    url,
    html => (main.innerHTML = html),
    err => (main.innerHTML = "No se pudo")
  );
};

const cargarJs = ruta => {
  const scriptActual = document.getElementById("script-dinamico");
  if (scriptActual) {
    scriptActual.src = ruta;
    document.body.removeChild(scriptActual);
  }

  const scripteL = document.createElement("script");
  scripteL.id = "script-dinamico";
  //   scripteL.innerHTML ='var algo = "asdas";'
  scripteL.src = ruta;

  document.body.appendChild(scripteL);
};
