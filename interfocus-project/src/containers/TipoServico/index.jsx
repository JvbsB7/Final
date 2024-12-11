import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Table, Modal, Alert } from 'react-bootstrap';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
import './style/tiposervico.css';

export function TipoServico() {
    const [tipos, setTipos] = useState([]);
    const [descricao, setDescricao] = useState('');
    const [statusContratoSelecionado, setStatusContratoSelecionado] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null);
    const [showSuccess, setShowSuccess] = useState(false);

    const [statusContrato, setStatusContrato] = useState([]);

    useEffect(() => {
        const tiposSalvos = JSON.parse(localStorage.getItem('tiposServico')) || [];
        setTipos(tiposSalvos);

        const contratosSalvos = JSON.parse(localStorage.getItem('statusContrato')) || [];
        setStatusContrato(contratosSalvos);
    }, []);

    const resetForm = () => {
        setDescricao('');
        setStatusContratoSelecionado('');
        setEditingIndex(null);
    };

    const handleAddOrEditTipo = () => {
        const novoTipo = {
            descricao,
            statusContrato: statusContratoSelecionado,
        };

        const tiposAtualizados = editingIndex !== null
            ? tipos.map((tipo, index) => (index === editingIndex ? novoTipo : tipo))
            : [...tipos, novoTipo];

        setTipos(tiposAtualizados);
        localStorage.setItem('tiposServico', JSON.stringify(tiposAtualizados));
        resetForm();
        setShowModal(false);
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
    };

    const handleEditTipo = (index) => {
        const tipoParaEditar = tipos[index];
        setDescricao(tipoParaEditar.descricao);
        setStatusContratoSelecionado(tipoParaEditar.statusContrato || '');
        setEditingIndex(index);
        setShowModal(true);
    };

    const handleDeleteTipo = (index) => {
        if (window.confirm('Tem certeza que deseja excluir este tipo de serviço?')) {
            const tiposAtualizados = tipos.filter((_, i) => i !== index);
            setTipos(tiposAtualizados);
            localStorage.setItem('tiposServico', JSON.stringify(tiposAtualizados));
            if (editingIndex === index) resetForm();
        }
    };

    return (
        <Container className="tipo-servico-container">
            <h2>Tipos de Serviço</h2>
            {showSuccess && <Alert variant="success">Tipo de Serviço salvo com sucesso!</Alert>}

            <Row className="mb-3">
                <Col className="text-end">
                    <Button variant="primary" onClick={() => setShowModal(true)}>
                        <FaPlus /> Cadastrar Tipo de Serviço
                    </Button>
                </Col>
            </Row>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th>Status de Contrato</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {tipos.map((tipo, index) => (
                        <tr key={index}>
                            <td>{tipo.descricao}</td>
                            <td>{tipo.statusContrato}</td>
                            <td>
                                <Button variant="outline-success" onClick={() => handleEditTipo(index)}>
                                    <FaEdit />
                                </Button>{' '}
                                <Button variant="outline-danger" onClick={() => handleDeleteTipo(index)}>
                                    <FaTrash />
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* Modal de Cadastro e Edição */}
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{editingIndex !== null ? 'Editar Tipo de Serviço' : 'Cadastrar Tipo de Serviço'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control as="textarea" rows={3} value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Status de Contrato</Form.Label>
                            <Form.Control as="select" value={statusContratoSelecionado} onChange={(e) => setStatusContratoSelecionado(e.target.value)}>
                                <option value="">Selecione um status de contrato</option>
                                <option value="VIGENTE">VIGENTE</option>
                                <option value="CANCELADO">CANCELADO</option>
                                {statusContrato.map((contrato, index) => (
                                    <option key={index} value={contrato.nome}>{contrato.nome}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>Fechar</Button>
                    <Button variant="primary" onClick={handleAddOrEditTipo}>
                        {editingIndex !== null ? 'Salvar Alterações' : 'Cadastrar'}
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}
