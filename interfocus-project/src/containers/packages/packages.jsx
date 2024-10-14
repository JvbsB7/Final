import React from 'react';
import PlanCard from '../../components/pricing/PlanCard';

function Packages() {
    
    const planos = [
        { nome: 'Básico', preco: 125, lines: ['5 dispositivos', '1 GB'], bgColor: '#eeeee4', description: 'Para conhecer' }, 
        { nome: 'Classic', preco: 170, lines: ['10 dispositivos', '10 GB', 'Suporte 24h'], bgColor: '#ffb4bc', description: 'Para escritório' }, 
        { nome: 'Premium', preco: 300, lines: ['30 dispositivos', '100 GB', 'Suporte 24h','Suporte prioritário'], bgColor: '#70e4fc', description: 'Ideal para empresas' }, 
        { nome: 'Deluxe', preco: 350, lines: ['100 dispositivos', '1 TB', 'Suporte 24h','Suporte prioritário'], bgColor: '#ffd44c', description: 'Para grandes empresas' }
    ];

    return (
        <div
            style={{
                backgroundImage: 'url(https://www.transparenttextures.com/patterns/crissxcross.png)',
            }}
        >
            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 className="display-4">Planos</h1>
                <p className="lead">Explore nossos planos exclusivos e escolha o ideal para você!</p>
            </div>

            <div className="container">
                <div className="row">
                    {planos.map((plano, index) => (
                        <PlanCard
                            key={index}
                            plano={plano.nome}
                            preco={plano.preco}
                            lines={plano.lines}
                            bgColor={plano.bgColor} 
                            description={plano.description} // Passando a descrição
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Packages;
