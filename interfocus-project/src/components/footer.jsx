import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const Footer = () => {
  return (
    <footer className=".bg-body-secondary text-center">
      <div className="container p-4 pb-0">
        <section className="mb-4">
          <a className="btn text-white btn-floating m-1" style={{ backgroundColor: '#3b5998' }} href="#!" role="button">
            <i className="bi bi-facebook"></i>
          </a>

          <a className="btn text-white btn-floating m-1" style={{ backgroundColor: '#ac2bac' }} href="https://www.instagram.com/interfocus.tecnologia/" role="button">
            <i className="bi bi-instagram"></i>
          </a>
          <a className="btn text-white btn-floating m-1" style={{ backgroundColor: '#0082ca' }} href="https://br.linkedin.com/company/interfocus-tecnologia" role="button">
            <i className="bi bi-linkedin"></i>
          </a>
          <a className="btn text-white btn-floating m-1" style={{ backgroundColor: '#333333' }} href="#!" role="button">
            <i className="bi bi-github"></i>
          </a>
        </section>
      </div>

        <div className="text-center px-5" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          <Row className='py-3'>
          <Col className='text-end'>
            Localização:<br />
            Av. Profa. Aracy Villaça Guimarães 16 <br />
            17525-210<br />
            Jardim Acapulco Marília - SP - Brazil
          </Col>
          <Col className='text-start'>
            Contato:<br />
            13.863.575/0001­80 <br />
            +55 (14) 3454-2681 <br />
            suporte@interfocus.com.br
          </Col>
        </Row>  
        Copyright &copy; 2020
        </div>
    </footer>
  );
}

export default Footer;
