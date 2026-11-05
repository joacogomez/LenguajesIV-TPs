function abrirUbicacion() {
  
  //replace para convertir las comas en puntos
  let latitud = document.getElementById("latitud").value.replace(",", ".");
  let longitud = document.getElementById("longitud").value.replace(",", ".");

  
  if (latitud === "" || longitud === "") {
    alert("Por favor completá la latitud y la longitud");
    return;
  }

  
  let url = "https://www.google.com/maps?q=" + latitud + "," + longitud;

  window.open(url, "_blank");
}
