import React from "react";
import "./Navbar.css";
import img from "../../Assets/Img/logo fantasi.png";
import { Navbar, Container, Nav } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="light" expand="lg" variant="dark sticky-top">
      <img src={img} className="logo" href="#home" alt="logo" />
      <Container>
        

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Home">Inicio</Nav.Link>
            <Nav.Link href="#About">Nosotros</Nav.Link>
            <Nav.Link href="#Services">Servicios</Nav.Link>
            <Nav.Link href="#Products">Productos</Nav.Link>
            <Nav.Link href="#Quest">Preguntas frecuentes</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
