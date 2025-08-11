import Navbar from "../components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import ParticlesBackground from "../components/ParticlesBackground"; 

export default function Layout() {
  return (
    <>
      <ParticlesBackground />
      <Navbar />
      <main style={{ minHeight: "80vh", position: "relative", zIndex: 1 }}>
        <Outlet /> {/* Aquí se mostrarán las páginas */}
      </main>
    </>
  );
}
