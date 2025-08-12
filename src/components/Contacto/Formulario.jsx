import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Formulario.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceID = "service_0dhuzf5";
    const templateID = "template_lue3ig5";
    const publicKey = "7kaLosLX_-RQSsWN1";

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(() => {
        alert("¡Mensaje enviado con éxito!");
        setFormData({ nombre: "", correo: "", mensaje: "" });
      })
      .catch((error) => {
        console.error("Error enviando el mensaje:", error);
        alert("Error al enviar el mensaje, intenta más tarde.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="nombre"
        placeholder="Tu nombre"
        value={formData.nombre}
        onChange={handleChange}
        required
        disabled={loading}
      />
      <input
        type="email"
        name="correo"
        placeholder="Tu correo"
        value={formData.correo}
        onChange={handleChange}
        required
        disabled={loading}
      />
      <textarea
        name="mensaje"
        placeholder="Tu mensaje"
        value={formData.mensaje}
        onChange={handleChange}
        required
        disabled={loading}
      ></textarea>
      <button type="submit" disabled={loading}>
        {loading ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
}
