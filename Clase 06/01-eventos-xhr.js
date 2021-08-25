var solicitud = new XMLHttpRequest();
solicitud.open("GET", "mov_bbb.mp4");
solicitud.addEventListener("loadstart", e => {
  // debugger
});
solicitud.addEventListener("load", e => {
  // debugger
});
solicitud.addEventListener("loadend", e => {
  // debugger
});
solicitud.addEventListener("abort", e => {
  debugger;
});
solicitud.addEventListener("timeout", e => {
  debugger;
});
solicitud.addEventListener("error", e => {
  debugger;
});
solicitud.addEventListener("progress", e => {
  console.log("lengthComputable", e.lengthComputable);
  console.log("loaded", e.loaded);
  console.log("total", e.total);
  const procentaje = 100 / e.total * e.loaded;
  console.log("procentaje", procentaje);
  console.log("----");
  document.querySelector("progress").value = procentaje;
});

solicitud.send();
