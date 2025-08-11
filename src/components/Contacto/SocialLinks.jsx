import React from "react";
import "./SocialLinks.css";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="social-links">
      <a href="https://github.com/Nn3z" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/pablo-ponce-82ab61379/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://www.instagram.com/ponce_wd?igsh=MW9uZGV6MTdhZzZkcg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
    </div>
  );
}
