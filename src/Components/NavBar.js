import React from "react";

import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom"; // Importa Link de react-router-dom

function NavBar() {
  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">
        {/* Inicio */}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto nav">
          <Nav.Link as={Link} to="/">
            Inicio
          </Nav.Link>
          <Nav.Link as={Link} to="/productos">
            Productos
          </Nav.Link>
          <Nav.Link as={Link} to="/quienessomos">
            Quiénes Somos
          </Nav.Link>
          <Nav.Link as={Link} to="/contacto">
            Contacto
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
