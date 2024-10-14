import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Modal, Alert } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import Cartao from './cartao';
import Pix from "./pix";

function Payment() {
    const location = useLocation();
    const { package: selectedPackage, price } = location.state || {};
    const [selectedCard, setSelectedCard] = useState("Mastercard");
    const [showModal, setShowModal] = useState(false);
    const [showError, setShowError] = useState(false);
    const [errorMessages, setErrorMessages] = useState([]);
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [cardName, setCardName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [cardExpiry, setCardExpiry] = useState("");
    const [cardCVV, setCardCVV] = useState("");
    const [pixCode, setPixCode] = useState(""); // Estado para o código do Pix

    const handleCardSelect = (cardType) => {
        setSelectedCard(cardType);
    };

    const paymentMethod = selectedCard === "Pix" ? "Pix" : selectedCard ? "Cartão" : "Nenhum método selecionado";

    const today = new Date();
    const nextPaymentDate = new Date(today.setMonth(today.getMonth() + 1));
    const formattedNextPaymentDate = `${String(nextPaymentDate.getDate()).padStart(2, '0')}/${String(nextPaymentDate.getMonth() + 1).padStart(2, '0')}/${nextPaymentDate.getFullYear()}`;

    const handlePayment = () => {
        setErrorMessages([]);
        const errors = [];

        if (!cpf) {
            errors.push("O campo CPF é obrigatório.");
        }
        if (!email) {
            errors.push("O campo E-mail é obrigatório.");
        }

        if (selectedCard === "Visa" || selectedCard === "Mastercard") {
            if (!cardName) {
                errors.push("O campo nome do cartão é obrigatório.");
            }
            if (!cardNumber) {
                errors.push("O campo número do cartão é obrigatório.");
            }
            if (!cardExpiry) {
                errors.push("O campo validade do cartão é obrigatório.");
            }
            if (!cardCVV) {
                errors.push("O campo CVV é obrigatório.");
            }
        }

        if (selectedCard === "Pix" && !pixCode) {
            errors.push("O código do Pix é obrigatório.");
        }

        if (errors.length > 0) {
            setShowError(true);
            setErrorMessages(errors);
        } else {
            setShowError(false);
            if (selectedCard === "Pix") {
                handlePixPayment();
            } else {
                setShowModal(true);
            }
        }
    };

    const handlePixPayment = () => {
        // Lógica para processar o pagamento via Pix
        console.log("Pagamento via Pix realizado com sucesso!");
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleCloseError = () => {
        setShowError(false);
    };

    return (
        <Container className="py-3" fluid style={{ maxWidth: '900px' }}>
            <Row className="d-flex justify-content-center">
                <Col
                    md={10}
                    lg={5}
                    className="rounded-4 d-flex flex-column justify-content-center align-items-center"
                    style={{
                        padding: '20px',
                        background: 'linear-gradient(309deg, rgba(2,0,36,1) 0%, rgba(55,90,127,1) 80%)',
                    }}
                >
                    <div className="text-start">
                        <h3>Pacote Selecionado:</h3>
                        <div>
                            {selectedPackage ? (
                                <div>
                                    <h2 style={{ fontWeight: 'bold' }}>{selectedPackage}</h2>
                                    <div className="d-flex justify-content-between">
                                        <p><strong>Total:</strong></p>
                                        <p><strong>R${price.toFixed(2)}</strong></p>
                                    </div>
                                </div>
                            ) : (
                                <p>Nenhum pacote selecionado</p>
                            )}
                            <div className="d-flex justify-content-between">
                                <p><strong>Forma de Pagamento:</strong></p>
                                <p><strong>{paymentMethod}</strong></p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p>Próximo Pagamento:</p>
                                <p><strong>{formattedNextPaymentDate}</strong></p>
                            </div>
                        </div>
                    </div>
                </Col>

                <Col md={10} lg={6}>
                    <div className="rounded-4 p-4" style={{ backgroundColor: 'white', boxShadow: '0px 0px 10px rgba(0,0,0,0.1)', color: 'black' }}>
                        <div className="text-center mb-4">
                            <h4 style={{ margin: '10px', background: 'linear-gradient(309deg, rgba(2,0,36,1) 0%, rgba(55,90,127,1) 80%)', borderRadius: '20px', color: 'white', fontWeight: 'bold',padding:'10px'}}>Pagamento</h4>
                            <h6>Selecione a forma de pagamento</h6>
                        </div>

                        <div className="text-center mb-4">
                            <div className="btn-group">
                                <Button
                                    className="shadow p-2"
                                    style={{
                                        background: selectedCard === "Mastercard" ? 'linear-gradient(309deg, rgba(2,0,36,1) 0%, rgba(55,90,127,1) 80%)' : 'none',
                                        color: selectedCard === "Mastercard" ? 'white' : 'black',
                                    }}
                                    onClick={() => handleCardSelect("Mastercard")}
                                >
                                    <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" alt="Mastercard" style={{ marginRight: '5px' }} />
                                </Button>

                                <Button
                                    style={{
                                        background: selectedCard === "Visa" ? 'linear-gradient(309deg, rgba(2,0,36,1) 0%, rgba(55,90,127,1) 80%)' : 'none',
                                        color: selectedCard === "Visa" ? 'white' : 'black',
                                    }}
                                    onClick={() => handleCardSelect("Visa")}
                                >
                                    <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" style={{ marginRight: '5px' }} />
                                </Button>

                                <Button
                                    style={{
                                        background: selectedCard === "Pix" ? 'linear-gradient(309deg, rgba(2,0,36,1) 0%, rgba(55,90,127,1) 80%)' : 'none',
                                        color: selectedCard === "Pix" ? 'white' : 'black',
                                    }}
                                    onClick={() => handleCardSelect("Pix")}
                                >
                                    <img src="https://img.icons8.com/color/48/00000/pix.png" alt="Pix" style={{ marginRight: '5px' }} />
                                </Button>
                            </div>
                        </div>

                        <Row className="my-2">
                            <Col md={6}>
                                <Form.Group controlId="formCPF">
                                    <Form.Label>CPF</Form.Label>
                                    <Form.Control
                                        className="shadow p-2"
                                        style={{ borderRadius: '50px' }}
                                        type="text"
                                        placeholder="Insira seu CPF"
                                        value={cpf}
                                        onChange={(e) => setCpf(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="formEmail">
                                    <Form.Label>E-mail</Form.Label>
                                    <Form.Control
                                        className="shadow p-2"
                                        style={{ borderRadius: '50px' }}
                                        type="email"
                                        placeholder="Insira seu E-mail"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        {selectedCard && (selectedCard === "Visa" || selectedCard === "Mastercard") && 
                            <Cartao 
                                cardName={cardName} 
                                cardNumber={cardNumber} 
                                cardExpiry={cardExpiry} 
                                cardCVV={cardCVV} 
                                setCardName={setCardName} 
                                setCardNumber={setCardNumber} 
                                setCardExpiry={setCardExpiry} 
                                setCardCVV={setCardCVV} 
                                handlePayment={handlePayment} // Passando a função para Cartao
                            />
                        }

                        {selectedCard === "Pix" && (
                            <Pix 
                                pixCode={pixCode} 
                                setPixCode={setPixCode} 
                            />
                        )}

                        {/* Mensagem de erro */}
                        {showError && (
                            <Alert variant="danger" onClose={handleCloseError} dismissible>
                                {errorMessages.map((msg, index) => (
                                    <div key={index}>{msg}</div>
                                ))}
                            </Alert>
                        )}

                        {/* Modal de pagamento concluído */}
                        <Modal show={showModal} onHide={handleCloseModal}>
                            <Modal.Header closeButton>
                                <Modal.Title>Pagamento Concluído</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Seu pagamento foi realizado com sucesso!</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleCloseModal}>
                                    Fechar
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Payment;
