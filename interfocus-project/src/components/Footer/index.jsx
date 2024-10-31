import { Row, Col } from 'react-bootstrap';
import { BsFillTelephoneFill,BsEnvelope  } from "react-icons/bs";

export function Footer() {
  return (
    <footer className=".bg-black text-center">
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
      
        <div className="text-center px-5" style={{ backgroundColor: 'rgba(0, 0, 0, 0.15)' }}>
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
            <BsFillTelephoneFill /> +55 (14) 3454-2681 <br />
            <BsEnvelope /> suporte@interfocus.com.br
          </Col>
        </Row>  
        Copyright &copy; 2020
        </div>
    </footer>
  );
}
