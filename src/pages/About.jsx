import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./About.css";

export default function About() {
  const [section, setSection] = useState("bio");

  const sections = {
    bio: {
      type: "text",
      content: "Soy Pablo Diego Núñez Ponce, un desarrollador backend de Ixtapaluca, EDO. MEX. 📍, me centro en mis estudios y mis hobbies. Tengo un título como TÉCNICO EN PROGRAMACIÓN, acreditado en CECYTEM Ixtapaluca II 🎓. Con 1 año de experiencia laboral como desarrollador backend, he trabajado en una gran variedad de proyectos web y móviles. Fui líder de backend de un proyecto por 3 meses 🚀. He tomado diferentes cursos, de los cuales destacan el de DOCKER y AWS 💡."
    },
    tech: {
      type: "tech",
      content: {
        languages: [
          { name: "bash", logo: "/iconos/bash.svg" },
          { name: "Golang", logo: "/iconos/go.svg" },
          { name: "JavaScript", logo: "/iconos/js.svg" }
        ],
        databases: [
          { name: "MySQL", logo: "/iconos/mysql.svg" },
          { name: "PostgreSQl", logo: "/iconos/postgresql.svg" }
        ],
        tools: [
          { name: "Node.js", logo: "/iconos/node.svg" },
          { name: "Docker", logo: "/iconos/docker.svg" },
          { name: "Fiber", logo: "/iconos/fiber.svg" }
        ]
      }
    },
    hobbies: {
      type: "text",
      content: "Me gusta mucho jugar videojuegos, desde pequeño ese ha sido mi hobby más marcado 🎮. He jugado un sinfín de títulos, tanto de PlayStation, Xbox, Nintendo y PC (no me arrepiento de nada JAJAJA) 😂. He adoptado mi profesión como un hobby, me gusta estudiar todo lo relacionado con mi carrera, además de que hago servicios de mantenimiento de PC y software 🧑‍🔧"
    }
  };

  const renderTechSection = (content) => (
    <div className="tech-section">
      <h3>💻 Lenguajes</h3>
      <div className="tech-grid">
        {content.languages.map((tech) => (
          <div key={tech.name} className="tech-card">
            <img src={tech.logo} alt={tech.name} />
            <span>{tech.name}</span>
          </div>
        ))}
      </div>

      <h3>🗄 Bases de Datos</h3>
      <div className="tech-grid">
        {content.databases.map((db) => (
          <div key={db.name} className="tech-card">
            <img src={db.logo} alt={db.name} />
            <span>{db.name}</span>
          </div>
        ))}
      </div>

      <h3>🛠 Herramientas</h3>
      <div className="tech-grid">
        {content.tools.map((tool) => (
          <div key={tool.name} className="tech-card">
            <img src={tool.logo} alt={tool.name} />
            <span>{tool.name}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="about-container">
      {/* Sidebar */}
      <aside className="about-sidebar">
        <button
          className={section === "bio" ? "active" : ""}
          onClick={() => setSection("bio")}
        >
          📜 Biografía
        </button>
        <button
          className={section === "tech" ? "active" : ""}
          onClick={() => setSection("tech")}
        >
          💻 Tecnologías
        </button>
        <button
          className={section === "hobbies" ? "active" : ""}
          onClick={() => setSection("hobbies")}
        >
          🎮 Hobbies
        </button>
      </aside>

      {/* Contenido */}
      <main className="about-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={section}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {sections[section].type === "text" && (
              <div className="text-section">
                <h2>{section.charAt(0).toUpperCase() + section.slice(1)}</h2>
                <p>{sections[section].content}</p>
              </div>
            )}

            {sections[section].type === "tech" &&
              renderTechSection(sections[section].content)}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
