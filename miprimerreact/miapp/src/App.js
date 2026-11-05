import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './componentes/Header/Header';
import Footer from './componentes/Footer/Footer';
import Inicio from './paginas/Inicio/Inicio';
import ProyectoBlob from './paginas/ProyectoBlob/ProyectoBlob';
import AboutUs from './paginas/AboutUs/AboutUs';
import Contacto from './paginas/Contacto/Contacto';

function App() {
  const [descargas, setDescargas] = useState(0);

  return (
    <BrowserRouter>
      <Header titulo="TP4 - Blobs" descargas={descargas} />

      <main className="main">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route
            path="/proyecto-blob"
            element={<ProyectoBlob descargas={descargas} setDescargas={setDescargas} />}
          />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>

      <Footer autor="Joaquin" materia="Lenguajes IV" />
    </BrowserRouter>
  );
}

export default App;
