import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Cerrar menú al hacer clic fuera o al presionar ESC
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.nav-menu') && !event.target.closest('.hamburger')) {
        closeMenu();
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevenir scroll cuando el menú está abierto
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="/logo_sinfondo.svg" alt="" />
      </div>

      {/* Botón hamburguesa - solo visible en mobile */}
      <button 
        className={`hamburger ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Overlay - solo visible cuando el menú está abierto en mobile */}
      {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}

      {/* Menú de navegación */}
      <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/" className="nav-link" onClick={closeMenu}>Inicio</Link>
        <Link to="/about" className="nav-link" onClick={closeMenu}>Sobre mí</Link>
        <Link to="/projects" className="nav-link" onClick={closeMenu}>Proyectos</Link>
        <Link to="/contact" className="nav-link" onClick={closeMenu}>Contacto</Link>
        <a href="/pdf/cv.pdf" className="cv-button" arget="_blank" rel="noopener noreferrer" onClick={closeMenu}>DESCARGAR CV 📂</a>
      </div>
    </nav>
  );
}