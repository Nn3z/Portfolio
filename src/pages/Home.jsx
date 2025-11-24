import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="profile-wrapper">
        <img src="/logo_sinfondo.png" alt="Logo" className="img-profile" />
      </div>

      <div className="home-content">
        <div className="home-text">
          <h1>
            Hola, soy <span className="name">Diego</span> 👋
          </h1>
          <h2>Backend Developer | DevOps 💻</h2>
          <h3>
            CON <span className="experience">+2</span> AÑOS DE EXPERIENCIA LABORAL
          </h3>
          <h3>
            Construyendo <span className="apis">APIs Resilientes</span> con Go
          </h3>
        </div>

        <div className="home-actions">
          <Link to="/projects" className="btn-main primary">
            Ver proyectos
          </Link>
          <a href="/pdf/cv.pdf" className="btn-main secondary" target="_blank" rel="noopener noreferrer">
            Descargar CV
          </a>
        </div>
      </div>
    </div>
  );
}
