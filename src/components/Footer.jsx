import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black-100/55 text-white flex justify-center gap-6">
      <a
        href="https://www.instagram.com/nova.protocols/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={24} />
      </a>
      <a
        href="https://www.linkedin.com/company/106593573/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href="tel:+14709248045"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaPhoneAlt size={24} />
      </a>
      <a
        href="mailto:sales@novaprotocols.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiGmail size={24} />
      </a>
    </footer>
  );
};

export default Footer;