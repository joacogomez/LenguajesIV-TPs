import './Footer.css';

function Footer({ autor = 'Joaquin', materia = 'Lenguajes IV' }) {
  return (
    
    <footer className="footer">
      <span>{materia} - UCASAL</span>
      <span>© {new Date().getFullYear()}</span>
    </footer>
  );
}

export default Footer;