document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  let hayError = false;
  const nombreEl = document.getElementById("nombre");
  const emailEl = document.getElementById("email");
  const mensajeEl = document.getElementById("mensaje");
  if (nombreEl.value) {
    alert("Ingrese su nombre");
    hayError = true;
  } else if (emailEl.valur) {
    alert("Ingrese su e-mail");
    hayError = true;
  } else if (mensajeEl.valur) {
    alert("Ingrese un mensaje");
    hayError = true;
  }
  if (!hayError) {
    nombreEl.value = "";
    emailEl.value = "";
    mensajeEl.value = "";
    alert("Su mensaje ha sido enviado");
  }
});
