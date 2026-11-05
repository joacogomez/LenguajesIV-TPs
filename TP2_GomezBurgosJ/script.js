let map = L.map('mapa').setView([-24.7859, -65.4117], 15);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// marcador que muestra la posición actual
let marcador = null;
let linea = null;       

// array con todas las coordenadas recorridas
let puntosRecorrido = [];

// guarda el seguimiento activo del GPS
let watchId = null;

// para numerar cada posición 
let contador = 0;            

let listaHistorial = document.getElementById("listaHistorial");


function nuevaPosicion(posicion) {
  let lat = posicion.coords.latitude;
  let lng = posicion.coords.longitude;

  contador++;

  puntosRecorrido.push([lat, lng]);

  if (marcador === null) {
    marcador = L.marker([lat, lng]).addTo(map);
  } else {
    marcador.setLatLng([lat, lng]);
  }

  // Centramos el mapa en la nueva posición
  map.setView([lat, lng], 16);

  if (linea === null) {
    linea = L.polyline(puntosRecorrido, { color: 'red' }).addTo(map);
  } else {
    linea.setLatLngs(puntosRecorrido);
  }

  let item = document.createElement("li");
  item.textContent = "#" + contador + " → Lat: " + lat.toFixed(5) + ", Lng: " + lng.toFixed(5);
  listaHistorial.appendChild(item);
}

//se ejecuta si hay un error al obtener la ubicación
function errorPosicion(error) {
  alert("No se pudo obtener la ubicación: " + error.message);
}

function iniciarSeguimiento() {
  if (!navigator.geolocation) {
    alert("Tu navegador no soporta geolocalización");
    return;
  }


  watchId = navigator.geolocation.watchPosition(nuevaPosicion, errorPosicion, {
    enableHighAccuracy: true
  });
}

function detenerSeguimiento() {
  if (watchId !== null) {
    navigator.geolocation.clearWatch(watchId);
    watchId = null;
  }
}

function limpiarHistorial() {
  puntosRecorrido = [];
  contador = 0;
  listaHistorial.innerHTML = "";

  if (linea !== null) {
    map.removeLayer(linea);
    linea = null;
  }
}
