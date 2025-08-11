import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      
      <div className="profile-wrapper">
        <img src="/logo_sinfondo.png" alt="Logo" className="img-profile" />
      </div>

      <div className="home-text">
        <h1>Hola, soy <span className="name">Diego</span> 👋</h1>
        <h2>Backend Developer 💻</h2>
        <h3>CON 1 AÑO DE EXPERIENCIA LABORAL</h3> 
        <h3>TECNICO EN PROGRAMACION</h3>
      </div>

    </div>
  );
}
