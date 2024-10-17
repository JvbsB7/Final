import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialPlanos = [
    { nome: 'Básico', preco: 125, lines: ['5 dispositivos', '1 GB'], bgColor: '#eeeee4', description: 'Para conhecer' }, 
    { nome: 'Classic', preco: 170, lines: ['10 dispositivos', '10 GB', 'Suporte 24h'], bgColor: '#ffb4bc', description: 'Para escritório' }, 
    { nome: 'Premium', preco: 300, lines: ['30 dispositivos', '100 GB', 'Suporte 24h', 'Suporte prioritário'], bgColor: '#70e4fc', description: 'Ideal para empresas' }, 
    { nome: 'Deluxe', preco: 350, lines: ['100 dispositivos', '1 TB', 'Suporte 24h', 'Suporte prioritário'], bgColor: '#ffd44c', description: 'Para grandes empresas' }
];

function ManagePackages() {
    const [planos, setPlanos] = useState(initialPlanos);
    const [showModal, setShowModal] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [formData, setFormData] = useState({
        nome: '',
        preco: '',
        lines: '',
        bgColor: '',
        description: ''
    });

    const handleClose = () => {
        setShowModal(false);
        setFormData({ nome: '', preco: '', lines: '', bgColor: '', description: '' });
        setEditIndex(null);
    };

    const handleShow = (index) => {
        if (index !== undefined) {
            setEditIndex(index);
            setFormData(planos[index]);
        } else {
            setEditIndex(null);
        }
        setShowModal(true);
    };

    const handleSave = () => {
        if (editIndex !== null) {
            const newPlanos = planos.map((plano, i) => 
                i === editIndex 
                ? { ...formData, lines: formData.lines.split(',').map(item => item.trim()) } 
                : plano
            );
            setPlanos(newPlanos);
        } else {
            const newPlano = {
                ...formData,
                lines: formData.lines.split(',').map(item => item.trim()),
            };
            setPlanos([...planos, newPlano]);
        }
        handleClose();
    };

    const handleRemove = (index) => {
        const newPlanos = planos.filter((_, i) => i !== index);
        setPlanos(newPlanos);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
            <Button variant="primary" onClick={() => handleShow()} style={{ marginBottom: '20px' }}>Adicionar Novo Plano</Button>
            <Table bordered hover className='text-center' style={{ width: '50%' }}>
                <thead>
                    <tr>
                        <th>Nome do pacote</th>
                        <th>Preço</th>
                        <th>Conteúdos do pacote</th>
                        <th>Cor de fundo</th>
                        <th>Descrição</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {planos.map((plano, index) => (
                        <tr key={index} style={{ backgroundColor: plano.bgColor }}>
                            <td>{plano.nome}</td>
                            <td>{plano.preco}</td>
                            <td>{plano.lines.join(', ')}</td>
                            <td style={{ backgroundColor: plano.bgColor, color:'black',fontWeight:'bold' }}>{plano.bgColor}</td>
                            <td>{plano.description}</td>
                            <td>
                                <Button variant="warning" onClick={() => handleShow(index)}>Editar</Button>
                                <Button variant="danger" onClick={() => handleRemove(index)} style={{ marginLeft: '5px' }}>Remover</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* Modal para adicionar/editar plano */}
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{editIndex !== null ? 'Editar Plano' : 'Adicionar Novo Plano'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Nome do pacote</label>
                            <input type="text" className="form-control" value={formData.nome} onChange={(e) => setFormData({ ...formData, nome: e.target.value })} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Preço</label>
                            <input type="number" className="form-control" value={formData.preco} onChange={(e) => setFormData({ ...formData, preco: e.target.value })} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Conteúdos do pacote (separados por vírgula)</label>
                            <input type="text" className="form-control" value={formData.lines} onChange={(e) => setFormData({ ...formData, lines: e.target.value })} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Cor de fundo</label>
                            <input type="text" className="form-control" value={formData.bgColor} onChange={(e) => setFormData({ ...formData, bgColor: e.target.value })} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Descrição</label>
                            <input type="text" className="form-control" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Fechar</Button>
                    <Button variant="primary" onClick={handleSave}>{editIndex !== null ? 'Salvar Alterações' : 'Adicionar Plano'}</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ManagePackages;
