var zonaArchivos = document.getElementById("zona-archivos");

zonaArchivos.addEventListener("dragover", e => {
  //     e.preventDefault();
  //     e.stopPropagation();
       debugger
  zonaArchivos.querySelector("span").innerText = "Solta los archivos";
});
zonaArchivos.addEventListener('drop', e => {
    debugger
})

var inputArchivos = document.getElementById("input-archivos");
inputArchivos.addEventListener("change", e => {
  // e.target.files
  for (let i = 0; i < e.target.files.length; i++) {
    const archivo = e.target.files[i];

    debugger;
    const urlBlob = URL.createObjectURL(archivo);
    console.log(urlBlob);
    const videoElement = document.createElement("video");
    videoElement.src = urlBlob;
    videoElement.controls = true;
    document.body.appendChild(videoElement);
  }
});
