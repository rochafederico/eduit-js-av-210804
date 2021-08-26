var inputArchivos = document.getElementById("input-archivos");
document.getElementById("subir-archivos").onclick = () => {
  var archivos = inputArchivos.files;
  debugger;
};

// var fecha = new Date()
var fecha = Date.now();
var archivo = new File(["hola esto es un archivo txt"], "miarchivo.txt", {
  lastModified: fecha,
  type: "text/txt"
});

console.log(archivo)
console.log(URL.createObjectURL(archivo))