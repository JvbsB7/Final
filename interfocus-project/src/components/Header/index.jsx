import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Importando Link para navegação
import logo from '../../assets/interfocus_logo.png'; 

export function Header() {
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
            <Nav.Link as={Link} to="/packages">Packages</Nav.Link> 
            <Nav.Link as ={Link} to="/tipo-de-servico">Tipos de Serviço</Nav.Link>
            <Nav.Link as={Link} to="/abertura-ordem-servico">Abertura Ordem Serviço</Nav.Link>
            <Nav.Link as={Link} to="/lista-ordem-servico">Ordem de Serviço</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/user-register">Criar conta</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};
