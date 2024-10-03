function SubscriptionStatus(){

    return(
        <>
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h1 className="display-4">Meu pacote atual</h1>
            <p className="lead">Valido até 02/10/2060</p>
        </div>

        <div className="container">
            <div className="card-deck mb-3 text-center">
                <div className="card mb-4 box-shadow">
                    <div className="card-header">
                        <h4 className="my-0 font-weight-normal">Plano econômico</h4>
                    </div>
                    <div className="card-body">
                        <h1 className="card-title pricing-card-title">R$ 0.10 <small className="text-muted">/ mês</small></h1>
                        <ul className="list-unstyled mt-3 mb-4">
                            <li>10 usuários inclusos</li>
                            <li>2 GB de armazenamento</li>
                            <li>Suporte 24h</li>
                        </ul>
                        <button type="button" class="btn btn-lg btn-block btn-primary">Assine agora</button>
                    </div>
                </div>
        
            </div>
        </div>
    </>
    )
}

export default SubscriptionStatus