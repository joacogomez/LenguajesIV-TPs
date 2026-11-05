import { Link } from 'react-router-dom';
import './Header.css';

function Header({ titulo = 'Mi App', descargas = 0 }) {
  return (
    <header className="header">
      <h1>{titulo}</h1>
      <nav className="nav">
        <Link to="/">Inicio</Link>
        <Link to="/proyecto-blob">Proyecto Blob</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>
      <span>Descargas: {descargas}</span>
    </header>
  );
}

export default Header;
