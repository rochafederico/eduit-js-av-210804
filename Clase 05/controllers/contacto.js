document.querySelector("form").addEventListener("submit", e => {
  let error;
  const nombreEl = document.getElementById("nombre");
  const emailEl = document.getElementById("email");
  const mensajeEl = document.getElementById("mensaje");
  if (!nombreEl.value) {
    error = "Ingrese su nombre";
  } else if (!emailEl.value) {
    error = "Ingrese su e-mail";
  } else if (!mensajeEl.value) {
    error = "Ingrese un mensaje";
  }

  if (error) {
    alert(error);
    e.preventDefault();
  } else {
    alert("Su mensaje ha sido enviado");
  }
});
