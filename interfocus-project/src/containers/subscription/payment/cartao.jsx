import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

function Cartao({ cardName, cardNumber, cardExpiry, cardCVV, setCardName, setCardNumber, setCardExpiry, setCardCVV, handlePayment }) {
    return (
        <>
            <div style={{ marginBottom: '20px' }}>
                <h4 className="fw-bold mb-2 text-center" style={{ background: 'linear-gradient(309deg, rgba(2,0,36,1) 0%, rgba(55,90,127,1) 80%)', borderRadius: '20px', color: 'white', fontWeight: 'bold', marginTop: '20px' ,padding:'10px'}}>Cartão</h4>
            </div>
            <Form.Group controlId="formCardName">
                <Form.Label>Seu nome, impresso no cartão</Form.Label>
                <Form.Control className="shadow p-2" style={{ borderRadius: '50px' }} type="text" placeholder="Ex: João Silva" value={cardName} onChange={(e) => setCardName(e.target.value)} required />
            </Form.Group>
            <Row className="my-4">
                <Col md={7}>
                    <Form.Group controlId="formCardNumber">
                        <Form.Label>Número do cartão</Form.Label>
                        <Form.Control className="shadow p-2" style={{ borderRadius: '50px' }} type="text" placeholder="Ex: 1234 5678 1234 5678" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required />
                    </Form.Group>
                </Col>
                <Col md={3}>
                    <Form.Group controlId="formCardExpiry">
                        <Form.Label>Validade</Form.Label>
                        <Form.Control className="shadow p-2" style={{ borderRadius: '50px' }} type="text" placeholder="MM/YYYY" value={cardExpiry} onChange={(e) => setCardExpiry(e.target.value)} required />
                    </Form.Group>
                </Col>
                <Col md={2}>
                    <Form.Group controlId="formCardCVV">
                        <Form.Label>CVV</Form.Label>
                        <Form.Control className="shadow p-2" style={{ borderRadius: '50px' }} type="text" placeholder="CVV" value={cardCVV} onChange={(e) => setCardCVV(e.target.value)} required />
                    </Form.Group>
                </Col>
            </Row>

            <div className="text-center">
                <Button
                    type="button"
                    className="btn btn-lg btn-block"
                    style={{
                        background: 'black',
                        color: 'white',
                        marginTop: '10%',
                        width: '30%',
                        marginBottom: '10%',
                        transition: 'all 0.3s ease',
                        transform: 'scale(1)',
                        border: '1px solid black',
                        borderRadius: '30px'
                    }}                            
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'white'; 
                        e.currentTarget.style.color = 'black'; 
                        e.currentTarget.style.transform = 'scale(1.1)'; 
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'black';
                        e.currentTarget.style.color = 'white';
                        e.currentTarget.style.transform = 'scale(1)'; 
                    }}
                    onClick={handlePayment}
                >
                    Pagar
                </Button>
            </div>
        </>
    );
}

export default Cartao;
