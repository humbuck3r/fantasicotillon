import React from "react";
import './About.css'
import img from '../../Assets/Img/negocio.jpeg'

export default function About() {
  return (
    <><div><h1>Nuestra empresa</h1></div><div className="about">

      <div className="about-info container">
        <p>
          Fantasi nace en 2003 con el objetivo de satisfacer las necesidades de
          los profesionales de la alimentación, alcanzando en poco tiempo una
          clara posición de liderazgo en el mercado. Trabajamos para crear
          experiencias donde la pasión y los sueños van de la mano, acompañando
          a nuestros clientes en la creación de valor para los consumidores.
          Marcar la diferencia es la base de nuestra filosofía. Gracias al
          trabajo en equipo con nuestros proveedores, nuestra empresa soporta
          esta idea, ofreciendo una amplia selección de productos de primera
          calidad que se adaptan a las necesidades de nuestros clientes. Nuestra
          flota nos permite brindar un servicio logístico de excelencia,
          caracterizado por su flexibilidad y celeridad, permitiéndonos llegar a
          todos nuestros clientes de Mendoza y San Juan. La satisfacción de
          nuestros clientes es nuestra prioridad. Creemos en que los detalles
          harán la diferencia, por lo que cuidamos de cerca cada aspecto de
          nuestros procesos para asegurarnos de satisfacer todas las
          expectativas e impulsar el crecimiento de nuestros clientes. Los
          invitamos a seguir creciendo juntos!
        </p>
      </div>
      <div>
        <img src={img} className="imgabout" />
      </div>
    </div></>
  );
}
