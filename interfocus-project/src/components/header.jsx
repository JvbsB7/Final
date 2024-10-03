import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Importando Link para navegação
import logo from '../assets/interfocus_logo.png'; 

const Header = () => {
  return (
    <header>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src={logo}
              alt="Interfocus Logo"
              width="150" 
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link> {/* Link para a Home */}
            <Nav.Link as={Link} to="/status">Status</Nav.Link>
            <Nav.Link as={Link} to="/subscription-update">Alterar plano</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/user-register">Cadastro</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
