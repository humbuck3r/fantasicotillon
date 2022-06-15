import React from "react";
import "./Navbar.css";
import img from "../../Assets/Img/logo.png";
import star from "../../Assets/Img/estrella.png"
import { Navbar, Container, Nav } from "react-bootstrap";




function Header() {
  return (
    
    <Navbar bg="dark" expand="lg" variant="dark sticky-top">
      <a className="navbar-brand" href="a" alt=""><img src={img} className="logo" alt=""/></a>
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
          
            <Nav.Link href="#Home"><img src={star} className="star" />Inicio</Nav.Link>
            

            <Nav.Link href="#About"><img src={star} className="star" />Nosotros</Nav.Link>
            

            <Nav.Link href="#Services"><img src={star} className="star" />Servicios</Nav.Link>
            

            <Nav.Link href="#Products"><img src={star} className="star" />Productos</Nav.Link>
            

            <Nav.Link href="#Quest"><img src={star} className="star" />Preguntas frecuentes</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default Header;
