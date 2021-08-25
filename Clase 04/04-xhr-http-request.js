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
  solicitud.setRequestHeader("Content-Type", "text/html");
  solicitud.setRequestHeader(
    "Authentication",
    "bearer adskahbfgusher9uw9b384yqb"
  );
  solicitud.onload = ev => {
    const resultado = JSON.parse(solicitud.response);
    callback(resultado);
  };

  solicitud.onerror = err => {
    console.err("err", solicitud);
  };

  xhr.addEventListener("timeout", () => {
    console.log("El pedido se ha excedido de tiempo");
  });

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
