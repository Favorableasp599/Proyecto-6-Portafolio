import React from "react";
import { social } from "../data/dummydata";

const Footer = () => {
  return (
    <footer>
      {social.map((item, index) => (
        <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" data-aos='zoom-in'>
          {item.icon}
        </a>
      ))}
      <p data-aos='zoom-in'>Todos los derechos reservados 2018</p>
    </footer>
  );
};

export default Footer;
