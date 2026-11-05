function mostrarImagen() {

  let input = document.getElementById("inputImagen");
  let archivo = input.files[0];

  if (!archivo) {
    return;
  }


  let nombreArchivo = document.getElementById("nombreArchivo");
  let pesoArchivo = document.getElementById("pesoArchivo");
  let vistaPrevia = document.getElementById("vistaPrevia");

  
  nombreArchivo.textContent = "Nombre: " + archivo.name;
  pesoArchivo.textContent = "Tamaño: " + archivo.size + " bytes";

  let lector = new FileReader();

  lector.onload = function (evento) {
    vistaPrevia.src = evento.target.result;
    vistaPrevia.style.display = "block";
  };

  lector.readAsDataURL(archivo);
}
