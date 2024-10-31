import Carousel from 'react-bootstrap/Carousel';
import {carouselStyle} from '../../styles/globalStyles';

export function Home() {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <div style={carouselStyle}>
                        <Carousel.Caption>
                            <h3>I-Manager</h3>
                            <h5>Sistema completo de Administração de Empresas de TV a Cabo e Provedores de internet.</h5>
                            <p>
                                Sistema completo, seguro e fácil de utilizar para Operadoras de TV por Assinatura e Provedores de Internet,
                                abrangendo desde o cadastro de toda a infraestrutura de rede até a gestão completa dos assinantes e seus pacotes de serviços.
                            </p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={carouselStyle}>
                        <Carousel.Caption>
                            <h3>I-NS</h3>
                            <h5>Sistema de Administração de Provedores.</h5>
                            <p>
                                O sistema administrador de provedores de internet i-NS (Interfocus Network Services)
                                visa agilizar o gerenciamento dos equipamentos dos clientes de provedores de internet.
                                Com ele é possível enviar comandos aos equipamentos, mantendo-se assim,
                                tudo em perfeito funcionamento, com praticidade e organização.
                            </p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={carouselStyle}>
                        <Carousel.Caption>
                            <h3>Software na medida certa.</h3>
                            <h5>Transforme sua empresa.</h5>
                            <p>
                                Ofereça a seus usuários acesso seguro às informações e processos de que eles mais precisam,
                                a qualquer hora, em qualquer lugar, em qualquer dispositivo, com nossas soluções.
                                Não importa o tamanho da sua empresa.
                            </p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}
