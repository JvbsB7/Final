import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function UserRegister() {
    return (
        <Container className="mt-4">
            <Row className="justify-content-center">
                <Col md={6}> 
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Nome completo</Form.Label>
                            <Form.Control type="name" placeholder="Insira seu nome completo" />
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="email" placeholder="Insira o seu e-mail" />
                            <Form.Text className="text-muted">
                                Nunca compartilharemos seu e-mail com ninguém.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmailConfirm">
                            <Form.Label>Confirme o e-mail</Form.Label>
                            <Form.Control type="email" placeholder="Insira o seu e-mail novamente" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" placeholder="Insira sua senha" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
                            <Form.Label>Confirme sua senha</Form.Label>
                            <Form.Control type="password" placeholder="Insira sua senha novamente" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Enviar
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default UserRegister;
