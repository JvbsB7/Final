import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Importando o Link
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{ 
                display: 'flex', 
                width: '800px', 
                height: '400px', 
                borderRadius: '20px', 
                overflow: 'hidden', 
                backgroundColor: '#223647' 
            }}>
                <div style={{ 
                    flex: 1, 
                    padding: '20px', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'center' 
                }}>
                    <h2 className="text-center" style={{ color: 'white' }}>Login</h2>
                    <div className='text-center mb-3'>
                        <span style={{ color: 'white' }}>Não tem uma conta? </span>
                        <Link to="/user-register" className="text-decoration-none" style={{ color: '#4f8ad6' }}>Vamos criá-la</Link>
                    </div>
                    <Form style={{ width: '100%' }}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={{ color: 'white' }}>E-mail</Form.Label>
                            <Form.Control 
                                type="email" 
                                placeholder="Insira o seu e-mail" 
                                required 
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label style={{ color: 'white' }}>Senha</Form.Label>
                            <Form.Control 
                                type="password" 
                                placeholder="Insira sua senha" 
                                required 
                            />
                        </Form.Group>
                        
                        <div className="text-center mb-3">
                            <a href="#" className="text-decoration-none" style={{ color: '#4f8ad6' }}>Esqueci minha senha</a>
                        </div>

                        <div className="text-center"> 
                            <Button variant="primary" className="w-50" type="submit" style={{ borderRadius: '20px' }}>
                                Login
                            </Button>
                        </div>
                    </Form>
                </div>
                
                <div style={{ flex: 1 }}>
                    <img 
                        src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=740&t=st=1728138151~exp=1728138751~hmac=d85095fa4af202dd365b9ee9412f6aff39b61d701a7c3d823834e3ef071ca330" 
                        alt="Login Illustration"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Login;
