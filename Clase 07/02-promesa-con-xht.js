const URL_BASE = "https://jsonplaceholder.typicode.com/";

const requestXHRToPromise = (metodo, url) => {
  return new Promise((resolve, reject) => {
    const solicitud = new XMLHttpRequest();
    solicitud.open(metodo, url);
    solicitud.addEventListener("load", ev => {
      if (solicitud.status == 200) {
        const resultJson = JSON.parse(solicitud.response);
        resolve(resultJson);
      }
    });
    solicitud.addEventListener("error", ev => {
      reject(ev);
    });
    solicitud.send();
  });
};

requestXHRToPromise("GET", `${URL_BASE}users`)
  .then(usuarios => {
    const usuario = usuarios[0];
    const paramsPosts = new URLSearchParams();
    paramsPosts.append("userId", usuario.id);
    return requestXHRToPromise(
      "GET",
      URL_BASE + "posts?" + paramsPosts.toString()
    ).then(data => {
      usuario.posts = data;
      return usuario;
    });
  })
  .then(usuario => {
    debugger;
    const paramsComentarios = new URLSearchParams();
    paramsComentarios.append("postId", usuario.posts[0].id);
    return requestXHRToPromise(
      "GET",
      URL_BASE + "comments?" + paramsComentarios.toString()
    );
  })
  .then(data => {
    debugger;
  });
