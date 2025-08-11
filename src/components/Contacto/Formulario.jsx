import React from "react";
import "./Formulario.css";

export default function ContactForm() {
  return (
    <form className="contact-form">
      <input type="text" placeholder="Tu nombre" required />
      <input type="email" placeholder="Tu correo" required />
      <textarea placeholder="Tu mensaje" required></textarea>
      <button type="submit">Enviar</button>
    </form>
  );
}
