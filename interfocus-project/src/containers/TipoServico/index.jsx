import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Table, Modal, Alert } from 'react-bootstrap';
import { FaPlus, FaEdit, FaTrash, FaFilter } from 'react-icons/fa';
import './style/tiposervico.css';

export function TipoServico() {
    const [tipos, setTipos] = useState([]);
    const [nome, setNome] = useState('');
    const [categoria, setCategoria] = useState('');
    const [descricao, setDescricao] = useState('');
    const [status, setStatus] = useState('ATIVO');
    const [statusContratoSelecionado, setStatusContratoSelecionado] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [showFilterModal, setShowFilterModal] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null);
    const [filterName, setFilterName] = useState('');
    const [filterCategoria, setFilterCategoria] = useState('');
    const [filterDescricao, setFilterDescricao] = useState('');
    const [filterStatus, setFilterStatus] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);

    const [statusContrato, setStatusContrato] = useState([]);
    const [nomeContrato, setNomeContrato] = useState('');
    const [descricaoContrato, setDescricaoContrato] = useState('');
    const [editingContratoIndex, setEditingContratoIndex] = useState(null);

    useEffect(() => {
        try {
            const tiposSalvos = JSON.parse(localStorage.getItem('tiposServico')) || [];
            setTipos(tiposSalvos);
        } catch (error) {
            console.error("Erro ao acessar o localStorage: ", error);
        }
    }, []);

    // Carrega Status de Contrato
    useEffect(() => {
        try {
            const contratosSalvos = JSON.parse(localStorage.getItem('statusContrato')) || [];
            setStatusContrato(contratosSalvos);
        } catch (error) {
            console.error("Erro ao acessar o localStorage: ", error);
        }
    }, []);

    const validarStatus = (valor) => {
        return valor === 'DESATIVADO' ? 'DESATIVADO' : 'ATIVO';
    };

    const handleAddOrEditTipo = () => {
        const novoTipo = {
            nome,
            categoria,
            descricao,
            status: validarStatus(status),
            statusContrato: statusContratoSelecionado  
        };

        if (editingIndex !== null) {
            const tiposAtualizados = [...tipos];
            tiposAtualizados[editingIndex] = novoTipo;
            setTipos(tiposAtualizados);
            localStorage.setItem('tiposServico', JSON.stringify(tiposAtualizados));
        } else {
            const tiposAtualizados = [...tipos, novoTipo];
            setTipos(tiposAtualizados);
            localStorage.setItem('tiposServico', JSON.stringify(tiposAtualizados));
        }

        setNome('');
        setCategoria('');
        setDescricao('');
        setStatus('ATIVO');
        setStatusContratoSelecionado(''); 
        setEditingIndex(null);
        setShowModal(false);
        setShowSuccess(true);

        setTimeout(() => setShowSuccess(false), 3000);
    };

    const handleEditTipo = (index) => {
        const tipoParaEditar = tipos[index];
        setNome(tipoParaEditar.nome);
        setCategoria(tipoParaEditar.categoria);
        setDescricao(tipoParaEditar.descricao);
        setStatus(validarStatus(tipoParaEditar.status));
        setStatusContratoSelecionado(tipoParaEditar.statusContrato || ''); 
        setEditingIndex(index);
        setShowModal(true);
    };

    const handleDeleteTipo = (index) => {
        if (window.confirm('Tem certeza que deseja excluir este tipo de serviço?')) {
            const tiposAtualizados = tipos.filter((_, i) => i !== index);
            setTipos(tiposAtualizados);
            localStorage.setItem('tiposServico', JSON.stringify(tiposAtualizados));

            if (editingIndex === index) {
                setNome('');
                setCategoria('');
                setDescricao('');
                setStatus('ATIVO');
                setStatusContratoSelecionado('');
                setEditingIndex(null);
                setShowModal(false);
            }
        }
    };

    
    const filteredTipos = tipos.filter((tipo) => {
        return (
            tipo.nome.toLowerCase().includes(filterName.toLowerCase()) &&
            tipo.categoria.toLowerCase().includes(filterCategoria.toLowerCase()) &&
            tipo.descricao.toLowerCase().includes(filterDescricao.toLowerCase()) &&
            (filterStatus === '' || tipo.status === filterStatus)
        );
    });

    const handleAddOrEditContrato = () => {
        const novoContrato = {
            nome: nomeContrato,
            descricao: descricaoContrato
        };

        if (editingContratoIndex !== null) {
            const contratosAtualizados = [...statusContrato];
            contratosAtualizados[editingContratoIndex] = novoContrato;
            setStatusContrato(contratosAtualizados);
            localStorage.setItem('statusContrato', JSON.stringify(contratosAtualizados));
        } else {
            const contratosAtualizados = [...statusContrato, novoContrato];
            setStatusContrato(contratosAtualizados);
            localStorage.setItem('statusContrato', JSON.stringify(contratosAtualizados));
        }

        setNomeContrato('');
        setDescricaoContrato('');
        setEditingContratoIndex(null);
        setShowModal(false);
    };

    const handleEditContrato = (index) => {
        const contratoParaEditar = statusContrato[index];
        setNomeContrato(contratoParaEditar.nome);
        setDescricaoContrato(contratoParaEditar.descricao);
        setEditingContratoIndex(index);
        setShowModal(true);
    };

    const handleDeleteContrato = (index) => {
        if (window.confirm('Tem certeza que deseja excluir este status de contrato?')) {
            const contratosAtualizados = statusContrato.filter((_, i) => i !== index);
            setStatusContrato(contratosAtualizados);
            localStorage.setItem('statusContrato', JSON.stringify(contratosAtualizados));

            if (editingContratoIndex === index) {
                setNomeContrato('');
                setDescricaoContrato('');
                setEditingContratoIndex(null);
            }
        }
    };

    return (
        <Container className="tipo-servico-container">
            <h2>Tipos de Serviço e Status de Contrato</h2>

            {showSuccess && <Alert variant="success">Tipo de Serviço salvo com sucesso!</Alert>}

            <Row className="mb-3">
                <Col md={6}>
                    <Button
                        variant="outline-primary"
                        onClick={() => setShowFilterModal(true)}
                    >
                        <FaFilter /> Filtrar
                    </Button>
                </Col>
                <Col md={6} className="d-flex justify-content-end align-items-center">
                    <Button
                        variant="primary"
                        className="d-flex align-items-center"
                        onClick={() => setShowModal(true)}
                    >
                        <FaPlus className="me-2" />
                        Cadastrar Tipo de Serviço
                    </Button>
                </Col>
            </Row>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{editingIndex !== null ? 'Editar Tipo de Serviço' : 'Cadastrar Tipo de Serviço'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Nome (Tipo de Serviço)</Form.Label>
                            <Form.Control
                                type="text"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                placeholder="Digite o nome do tipo de serviço"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Categoria</Form.Label>
                            <Form.Control
                                type="text"
                                value={categoria}
                                onChange={(e) => setCategoria(e.target.value)}
                                placeholder="Digite a categoria"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={descricao}
                                onChange={(e) => setDescricao(e.target.value)}
                                placeholder="Digite a descrição"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Status</Form.Label>
                            <Form.Control
                                as="select"
                                value={status}
                                onChange={(e) => setStatus(validarStatus(e.target.value))}
                            >
                                <option value="ATIVO">ATIVO</option>
                                <option value="DESATIVADO">DESATIVADO</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Status de Contrato</Form.Label>
                            <Form.Control
                                as="select"
                                value={statusContratoSelecionado}
                                onChange={(e) => setStatusContratoSelecionado(e.target.value)}
                            >
                                <option value="">Selecione um status de contrato</option>
                                <option value="">CONTRATO ANUAL</option>
                                <option value="">CONTRATO MENSAL</option>
                                {statusContrato.map((contrato, index) => (
                                    <option key={index} value={contrato.nome}>
                                        {contrato.nome}
                                    </option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Fechar
                    </Button>
                    <Button variant="primary" onClick={handleAddOrEditTipo}>
                        {editingIndex !== null ? 'Salvar Alterações' : 'Cadastrar'}
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showFilterModal} onHide={() => setShowFilterModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Filtrar Tipos de Serviço</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Nome</Form.Label>
                            <Form.Control
                                type="text"
                                value={filterName}
                                onChange={(e) => setFilterName(e.target.value)}
                                placeholder="Digite o nome para filtrar"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Categoria</Form.Label>
                            <Form.Control
                                type="text"
                                value={filterCategoria}
                                onChange={(e) => setFilterCategoria(e.target.value)}
                                placeholder="Digite a categoria para filtrar"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control
                                type="text"
                                value={filterDescricao}
                                onChange={(e) => setFilterDescricao(e.target.value)}
                                placeholder="Digite a descrição para filtrar"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Status</Form.Label>
                            <Form.Control
                                as="select"
                                value={filterStatus}
                                onChange={(e) => setFilterStatus(e.target.value)}
                            >
                                <option value="">Todos</option>
                                <option value="ATIVO">ATIVO</option>
                                <option value="DESATIVADO">DESATIVADO</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowFilterModal(false)}>
                        Fechar
                    </Button>
                    <Button variant="primary" onClick={() => setShowFilterModal(false)}>
                        Aplicar Filtros
                    </Button>
                </Modal.Footer>
            </Modal>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Categoria</th>
                        <th>Descrição</th>
                        <th>Status</th>
                        <th>Status de Contrato</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredTipos.map((tipo, index) => (
                        <tr key={index}>
                            <td>{tipo.nome}</td>
                            <td>{tipo.categoria}</td>
                            <td>{tipo.descricao}</td>
                            <td>{tipo.status}</td>
                            <td>{tipo.statusContrato}</td>
                            <td>
                                <Button variant="warning" onClick={() => handleEditTipo(index)}>
                                    <FaEdit />
                                </Button>
                                <Button variant="danger" onClick={() => handleDeleteTipo(index)}>
                                    <FaTrash />
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}
