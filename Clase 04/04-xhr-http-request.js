const cargarHtml = (urlHtml, callback) => {
  const solicitud = new XMLHttpRequest();
  // window.ActiveXObject("") IE
  solicitud.open("GET", urlHtml);
  // GET POST DELETE PATCH OPNTIONS
  // HEAD

  solicitud.onload = ev => {
    callback(solicitud.response);
  };

  solicitud.send();
};

const agregarHtmlAlBody = html => {
  const elemento = document.createElement("main");
  elemento.innerHTML = html;
  document.body.appendChild(elemento);
};

cargarHtml("04-html.html", agregarHtmlAlBody);
cargarHtml("04-html-2.html", agregarHtmlAlBody);

const cargarJson = (urlHtml, callback) => {
  const solicitud = new XMLHttpRequest();
  solicitud.open("GET", urlHtml);
  solicitud.setRequestHeader("Content-Type", "application/json");
  solicitud.setRequestHeader(
    "Authentication",
    "bearer adskahbfgusher9uw9b384yqb"
  );
  solicitud.onload = ev => {
    const resultado = JSON.parse(solicitud.response);
    callback(resultado);
  };

  solicitud.onerror = err => {
    debugger;
  };

  solicitud.onprogress = progress => {
    debugger;
  };

  var body = new FormData();
  body["algo"] = "asdasd";
  //   body["algo"] = ;
  solicitud.send(body);
};

if (location.hash.includes("post")) {
  cargarHtml("04.html-template.html", html => {
    cargarJson("https://jsonplaceholder.typicode.com/posts", articulos => {
      articulos.forEach(articulo => {
        let htmlItem = html.replace("{{title}}", articulo.title);
        htmlItem = htmlItem.replace("{{body}}", articulo.body);
        agregarHtmlAlBody(htmlItem);
      });
    });
  });
}

// const cargarHtmlAsync = async (urlHtml) => {
const cargarHtmlAsync = urlHtml =>
  new Promise((resolve, reject) => {
    const solicitud = new XMLHttpRequest();
    // window.ActiveXObject("") IE
    solicitud.open("GET", urlHtml);
    // GET POST DELETE PATCH OPNTIONS
    // HEAD

    solicitud.onload = ev => {
      resolve(solicitud.response);
    };

    solicitud.onerror = err => {
      reject(solicitud.response);
    };

    solicitud.send();
  });

// intro a promesas
var cargando = true;
cargarHtmlAsync("04.html-template.html")
  .then(data => {
    debugger;
    return data;
  })
  .catch(er => {
    console.log(err);
  })
  .finally(() => {
    cargando = false;
  })
  .then(data => {
    // hago algo
    return data;
  });
