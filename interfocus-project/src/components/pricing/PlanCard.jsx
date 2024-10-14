import React from 'react';
import { Link } from 'react-router-dom';

// Estilos //
import { checkIconStyle } from '../../styles/globalStyles';

function PlanCard({ plano, preco, lines, bgColor, description }) {
    return (
        <div className="col-md-3">
            <div 
                className="card mb-4 box-shadow" 
                style={{ 
                    borderRadius: '20px', 
                    backgroundColor: bgColor, 
                    color: 'black', 
                    fontWeight: 'bold', 
                    minHeight: '400px',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Adiciona transição suave
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)'; 
                    e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)'; // Adiciona sombra ao passar o mouse
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)'; // Retorna ao tamanho original
                    e.currentTarget.style.boxShadow = 'none'; // Remove a sombra ao tirar o mouse
                }}
            >
                <div className="card-body rounded-bottom text-start" style={{ marginLeft: '10px' }}>
                    <h4 className="my-0 font-weight-normal" style={{ paddingTop: '20px', fontWeight: 'bold' }}>{plano}</h4>
                    <h2 className="card-title pricing-card-title" style={{ fontWeight: '950' }}>
                        R${preco.toFixed(2)} <small className="font-weight-light" style={{ fontSize: '0.8rem', color: 'black' }}>/ mês</small>
                    </h2>
                    <p>{description}</p> {/* Mensagem editável */}
                    <ul className="list-unstyled mt-3 mb-4">
                        {lines.map((line, index) => (
                            <li key={index}>
                                <i className="bi bi-check" style={checkIconStyle}></i>{line}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='text-center'>
                    <Link to="/payment" state={{ package: plano, price: preco }}>
                        <button 
                            type="button" 
                            className="btn btn-lg btn-block" 
                            style={{ 
                                backgroundColor: "black", 
                                color: 'white', 
                                marginTop: '10%', 
                                width: '80%', 
                                marginBottom: '10%',
                                transition: 'all 0.3s ease', // Transição suave para o efeito
                                transform: 'scale(1)' // Define o estado inicial
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
                        >
                            Assine agora
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default PlanCard;
