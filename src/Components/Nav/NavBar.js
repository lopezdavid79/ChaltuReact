import React, { useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
function NavBar() {
  const [adminMenuOpen, setAdminMenuOpen] = useState(false);

  return (
    
    <Navbar bg="dark" expand="lg" className="nav">
      <Navbar.Brand as={Link} to="/">
        Inicio
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          
          <Nav.Link as={Link} to="/products">
            Productos
          </Nav.Link>
          

          <Nav.Link as={Link} to="/quienessomos">
            Quiénes Somos
          </Nav.Link>
          <Nav.Link as={Link} to="/contacto">
            Contacto
          </Nav.Link>
          <Nav.Link as={Link} to="/login">
            Inicio de sesión
          </Nav.Link>
          <NavDropdown
            title="Admin"
            id="basic-nav-dropdown"
            show={adminMenuOpen}
            onClick={() => setAdminMenuOpen(!adminMenuOpen)}
          >
            <NavDropdown.Item as={Link} to="/admin">
              Productos
            </NavDropdown.Item>
            {/* Agrega más opciones de administrador aquí si es necesario */}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
