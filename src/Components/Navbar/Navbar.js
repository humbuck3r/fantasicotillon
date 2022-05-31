import React from 'react'
import "./Navbar.css"
import img from '../../Assets/Img/logo fantasi.png'


export default function Navbar() {
  return (
    <div className="navbar">
      <div className="menu1">
        <a href="#" alt="" className="btn-menu">
          <p>Inicio</p>
        </a>
        <a href="#" alt="" className="btn-menu">
          <p>Productos</p>
        </a>
        <a href="#" alt="" className="btn-menu">
          <p>Empresa</p>
        </a>{" "}
      </div>
      <div className="logo-cont">
        <img src={img} className="logo" />
      </div>

      <div className="menu1">
        <a href="#" alt="" className="btn-menu">
          <p>Contacto</p>
        </a>
        <a href="#" alt="" className="btn-menu">
          <p>Preguntas frecuentes</p>
        </a>
      </div>
    </div>
  );
}
