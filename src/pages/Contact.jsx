import Formulario from "../components/Contacto/Formulario";
import SocialLinks from "../components/Contacto/SocialLinks";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-container">
      <Formulario />
      <SocialLinks />
    </div>
  );
}
