
let miBlob = null;

let resultado = document.getElementById("resultado");


function crearBlob() {
  let texto = "ejemplo de un archivo de texto creado con un Blob";
  miBlob = new Blob([texto], { type: "text/plain" });

  resultado.textContent = "Blob creado correctamente- Tamaño: " + miBlob.size + " bytes";
}


function descargarBlob() {
  if (miBlob === null) {
    alert("Error: No creaste el blob");
    return;
  }

  let url = URL.createObjectURL(miBlob);

  let enlace = document.createElement("a");
  enlace.href = url;
  enlace.download = "archivo.txt";
  enlace.click();

  URL.revokeObjectURL(url);

  resultado.textContent = "Archivo descargado como archivo.txt";
}

function usarSlice() {
  if (miBlob === null) {
    alert("Error: No creaste el Blob");
    return;
  }

  
  let blobRecortado = miBlob.slice(0, 20);

  
  let lector = new FileReader();

  lector.onload = function (evento) {
    resultado.textContent = "Primeros 20 bytes del Blob:\n" + evento.target.result;
  };

  lector.readAsText(blobRecortado);
}
