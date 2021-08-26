var solicitud = new XMLHttpRequest();
solicitud.open("GET", "mov_bbb.mp4");
solicitud.responseType = "blob";
// URL
solicitud.addEventListener("load", e => {
  const urlBlob = URL.createObjectURL(solicitud.response);
  console.log(urlBlob);
  const videoElement = document.createElement("video");
  videoElement.src = urlBlob;
  videoElement.controls = true;
  document.body.appendChild(videoElement);
});

solicitud.send();
