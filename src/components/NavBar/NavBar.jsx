import { Link } from "react-router-dom";
import "./NavBar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
        <img src="/logo_sinfondo.svg" alt="" />
      <Link to="/" className="nav-link">Inicio</Link>
      <Link to="/about" className="nav-link">Sobre mí</Link>
      <Link to="/projects" className="nav-link">Proyectos</Link>
      <Link to="/contact" className="nav-link">Contacto</Link>

      <a href="/pdf/prueba.pdf" className="cv-button">DESCARGAR CV 📂</a>
    </nav>
  );
}