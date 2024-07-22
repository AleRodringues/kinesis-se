import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Cadastro = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleCadastro = (event) => {
        event.preventDefault();
        // Implementar lógica de cadastro (pode ser usando API, Firebase, etc.)
    };

    return (
        <Form onSubmit={handleCadastro}>
            <Form.Group controlId="formBasicNome">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Digite seu nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Digite seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Digite sua senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Cadastrar
            </Button>
        </Form>
    );
};

export default Cadastro;
