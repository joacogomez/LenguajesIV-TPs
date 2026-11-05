import { useState } from 'react';

function ProyectoBlob({ descargas, setDescargas }) {
  const [miBlob, setMiBlob] = useState(null);
  const [resultado, setResultado] = useState("");
  const [texto, setTexto] = useState("ejemplo de un archivo de texto creado con un Blob");

  function crearBlob() {
    if (texto === "") {
      alert("Escribí algo para crear el Blob");
      return;
    }

    let nuevoBlob = new Blob([texto], { type: "text/plain" });

    setMiBlob(nuevoBlob);
    setResultado("Blob creado correctamente- Tamaño: " + nuevoBlob.size + " bytes");
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

    setDescargas(descargas + 1);
    setResultado("Archivo descargado como archivo.txt");
  }

  function usarSlice() {
    if (miBlob === null) {
      alert("Error: No creaste el Blob");
      return;
    }

    let blobRecortado = miBlob.slice(0, 20);

    let lector = new FileReader();

    lector.onload = function (evento) {
      setResultado("Primeros 20 bytes del Blob:\n" + evento.target.result);
    };

    lector.readAsText(blobRecortado);
  }

  return (
    <div className="App">
      <h2>Ejemplo de uso de Blobs</h2>

      <textarea
        value={texto}
        onChange={function (e) { setTexto(e.target.value); }}
        rows="3"
        cols="40"
      />
      <p>Caracteres: {texto.length}</p>

      <div className="botones">
        <button onClick={crearBlob}>Crear Blob de texto</button>
        <button onClick={descargarBlob}>Descargar Blob</button>
        <button onClick={usarSlice}>Usar slice()</button>
      </div>

      <p id="resultado">{resultado}</p>
      <p>Descargas realizadas: {descargas}</p>
    </div>
  );
}

export default ProyectoBlob;
