import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/interfocus_logo.png'; 
import { RxAvatar } from "react-icons/rx";

const LoggedHeader = () => {
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
            <Nav.Link as={Link} to="/">Página inicial</Nav.Link>
            <Nav.Link as={Link} to="/packages">Pacotes</Nav.Link>
            <Nav.Link as={Link} to="/manage-plans">Gerenciar Planos</Nav.Link> {/* Novo link */}
          </Nav>
          <Nav>
            <NavDropdown
              title={<RxAvatar style={{ fontSize: '2rem' }} />}
              id="navbarDropdownMenuLink"
              align="end"
            >
              <div className='text-center'>
                <Nav.Link as={Link} to="/status">Meu plano</Nav.Link>
                <Nav.Link as={Link} to="/subscription-update">Alterar plano</Nav.Link>
                <NavDropdown.Item>
                    Log out
                </NavDropdown.Item>
              </div>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default LoggedHeader;
