import { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export function AberturaOrdemServico() {
    const [formData, setFormData] = useState({
        contrato: '',
        cliente: '',
        status: 'ANDAMENTO',
        data: new Date().toLocaleDateString('pt-BR'),
    });

    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form data submitted:', formData);

        const novaOrdem = {
            contrato: formData.contrato,
            cliente: formData.cliente,
            status: formData.status,
            data: formData.data,
        };

        const ordensSalvas = JSON.parse(localStorage.getItem('ordensServico')) || [];
        const novasOrdens = [...ordensSalvas, novaOrdem];
        localStorage.setItem('ordensServico', JSON.stringify(novasOrdens));

        console.log('Ordens salvas:', novasOrdens);
        navigate('/lista-ordem-servico');
    };

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <h2>Abertura de Ordem de Serviço</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="contrato">
                            <Form.Label>Contrato</Form.Label>
                            <Form.Control
                                as="select"
                                name="contrato"
                                value={formData.contrato}
                                onChange={handleInputChange}
                            >
                                <option value="">Selecione</option>
                                <option value="SIMPLES">CONTRATO SIMPLES</option>
                                <option value="VIP">CONTRATO VIP</option>
                                <option value="PADRÃO">CONTRATO PADRÃO</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="cliente">
                            <Form.Label>Cliente</Form.Label>
                            <Form.Control
                                as="select"
                                name="cliente"
                                value={formData.cliente}
                                onChange={handleInputChange}
                            >
                                <option value="">Selecione</option>
                                <option value="CLIENTE 1">CLIENTE 1</option>
                                <option value="CLIENTE 2">CLIENTE 2</option>
                            </Form.Control>
                        </Form.Group>

                        <div className="d-flex justify-content-center mt-3">
                            <Button variant="primary" type="submit" className="me-2">
                                Salvar
                            </Button>
                            <Button variant="secondary" type="button">
                                Cancelar
                            </Button>
                        </div>
                    </Form>

                    <div className="d-flex justify-content-center mt-3">
                        <Button variant="info" onClick={() => navigate('/lista-ordem-servico')}>
                            Ver Ordens de Serviço
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
