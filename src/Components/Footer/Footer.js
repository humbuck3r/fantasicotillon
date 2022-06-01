import React from "react";
import './Footer.css'
const Footer = () => {
  return (
    <div class="footer-basic">
      <footer>
        <div class="social">
          <a href="">
            <i class="icon ion-social-instagram"></i>
          </a>
         

          <a href="">
            <i class="icon ion-social-facebook"></i>
          </a>
        </div>
        <ul class="list-inline">
          <li class="list-inline-item">
            <a href="/">Inicio</a>
          </li>
          <li class="list-inline-item">
            <a href="Products">Productos</a>
          </li>
          <li class="list-inline-item">
            <a href="About">Empresa</a>
          </li>
          <li class="list-inline-item">
            <a href="Courses">Contacto</a>
          </li>
          <li class="list-inline-item">
            <a href="Contact">Preguntas frecuentes</a>
          </li>
        </ul>
        <p class="copyright">Fantasi cotillon © 2022</p>
      </footer>
    </div>
  );
};

export default Footer;
