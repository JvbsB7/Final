import { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export function AberturaOrdemServico() {
    const [formData, setFormData] = useState({
        tipoServico: '',
        contrato: '',
        cliente: '',
        status: 'ANDAMENTO',
        data: new Date().toLocaleDateString('pt-BR')
    });

    const [tiposServico, setTiposServico] = useState([]);
    const [isContratoDisabled, setIsContratoDisabled] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const tiposSalvos = JSON.parse(localStorage.getItem('tiposServico')) || [];
        const tiposAtivos = tiposSalvos.filter(tipo => tipo.status === 'ATIVO');
        setTiposServico(tiposAtivos);
    }, []);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        
        if (name === 'tipoServico') {
            const tipoSelecionado = tiposServico.find(tipo => tipo.nome === value);
            if (tipoSelecionado && tipoSelecionado.statusContrato) {
                setFormData({
                    ...formData,
                    tipoServico: value,
                    contrato: tipoSelecionado.statusContrato,
                });
            } else {
                setFormData({
                    ...formData,
                    tipoServico: value,
                    contrato: '',
                });
            }
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form data submitted:', formData);

        const novaOrdem = {
            servico: formData.tipoServico,
            contrato: formData.contrato,
            cliente: formData.cliente,
            status: formData.status,
            data: formData.data
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
                        <Form.Group controlId="tipoServico">
                            <Form.Label>Tipo de Serviço</Form.Label>
                            <Form.Control
                                as="select"
                                name="tipoServico"
                                value={formData.tipoServico}
                                onChange={handleInputChange}
                            >
                                <option value="">Selecione</option>
                                {tiposServico.map((tipo, index) => (
                                    <option key={index} value={tipo.nome}>
                                        {tipo.nome}
                                    </option>
                                ))}
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="contrato">
                            <Form.Label>Contrato</Form.Label>
                            <Form.Control
                                as="select"
                                name="contrato"
                                value={formData.contrato}
                                onChange={handleInputChange}
                                disabled={isContratoDisabled}
                            >
                                <option value="">Selecione</option>
                                <option value="SIMPLES">CONTRATO SIMPLES</option>
                                <option value="VIP">CONTRATO VIP</option>
                                <option value="PADRÃO">CONTRATO PADRAO</option>
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
