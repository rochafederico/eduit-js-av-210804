const URL_BASE = "https://jsonplaceholder.typicode.com/";

const solicitudUsers = new XMLHttpRequest();
solicitudUsers.open("GET", URL_BASE + "users");
solicitudUsers.addEventListener("load", ev => {
  if (solicitudUsers.status == 200) {
    const usuarios = JSON.parse(solicitudUsers.response);

    const solicitudPosts = new XMLHttpRequest();
    const paramsPosts = new URLSearchParams();
    paramsPosts.append("userId", usuarios[0].id);
    solicitudPosts.open("GET", URL_BASE + "posts?" + paramsPosts.toString());
    solicitudPosts.addEventListener("load", ev => {
      if (solicitudPosts.status == 200) {
        const posts = JSON.parse(solicitudPosts.response);

        const solicitudComentarios = new XMLHttpRequest();
        const paramsComentarios = new URLSearchParams();
        paramsComentarios.append("postId", posts[0].id);
        solicitudComentarios.open(
          "GET",
          URL_BASE + "comments?" + paramsComentarios.toString()
        );
        solicitudComentarios.addEventListener("load", ev => {
          if (solicitudComentarios.status == 200) {
            debugger;
          }
        });
        solicitudComentarios.send();
      }
    });
    solicitudPosts.send();
  }
});
solicitudUsers.send();

llamadaUno(data => {
  llamadaDos(data2 => {
    llamadaDos(data3 => {});
  });
});
