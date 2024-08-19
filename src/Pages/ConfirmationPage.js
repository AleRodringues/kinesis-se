import React from 'react';
import { Container } from 'react-bootstrap';
import './ConfirmationPage';

function ConfirmationPage() {
    return (
        <Container className="confirmation-container">
            <h1>Compra Confirmada!</h1>
            <p>Obrigado pela sua compra. Você receberá um e-mail de confirmação em breve.</p>
            {/* Opcional: Mostrar detalhes do pedido ou informações adicionais */}
        </Container>
    );
}

export default ConfirmationPage;
