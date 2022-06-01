import React from 'react'
import "./Navbar.css"
import img from '../../Assets/Img/logo fantasi.png'


export default function Navbar() {
  return (
    <div className="navbar">
      <div className="menu1">
        <a href="inicio" alt="" className="btn-menu">
          <p>Inicio</p>
        </a>
        <a href="products" alt="" className="btn-menu">
          <p>Productos</p>
        </a>
        <a href="about" alt="" className="btn-menu">
          <p>Empresa</p>
        </a>
      </div>
      <div className="logo-cont">
        <img src={img} className="logo" alt='' />
      </div>

      <div className="menu1">
        <a href="contact" alt="" className="btn-menu">
          <p>Contacto</p>
        </a>
        <a href="quest" alt="" className="btn-menu">
          <p>Preguntas frecuentes</p>
        </a>
      </div>
    </div>
  );
}
