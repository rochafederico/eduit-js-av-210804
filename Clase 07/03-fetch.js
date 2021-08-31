const URL_BASE = "https://jsonplaceholder.typicode.com/";
const llamar = () => {
  return fetch(`${URL_BASE}users`).then(data => data.json());
};

llamar().then(data => {
  console.log(data);
});

const encabezados = new Headers();
encabezados.append("Content-Type", "application/json");

fetch(`${URL_BASE}users`, {
  // mode: 'cors'
  cache: "no-cache",
  method: "POST",
  headers: encabezados,
  //   headers: {
  //     "Content-Type": "application/json",
  //     "mi-header": "asdasd"
  //   },
  body: JSON.stringify({ algo: "sdasd" })
}).then(data => console.log(data));

document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  // const formData = new FormData(e.target);
  const archivos = document.querySelector('input[type="file"]');
  const formData = new FormData();
  // formData.append('archivo', archivos.files[0]);
  for (let i = 0; i < archivos.files.length; i++) {
    const file = archivos.files[i];
    formData.append("archivo", file);
  }
  fetch("/subir", {
    method: "POST",
    body: formData
  }).then(data => {
    debugger;
  });
});

// Request
const solicitudRq = new Request("Break cursos.mov");
solicitudRq.headers.append("mi-header", "asdfasdfasd");
fetch(solicitudRq)
  .then(data => {
    return data.blob();
  })
  .then(blobVideo => {
    debugger;
    console.log(URL.createObjectURL(blobVideo));
  });
