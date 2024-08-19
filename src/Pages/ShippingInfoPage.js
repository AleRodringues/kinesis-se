import React, { useState, useContext } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../CartContext';
import './ShippingInfoPage.css';

function ShippingInfoPage() {
    const [form, setForm] = useState({
        name: '',
        address: '',
        city: '',
        state: '',
        postalCode: '',
        country: '',
        phone: '',
        email: '',
        deliveryInstructions: ''
    });
    const { dispatch } = useContext(CartContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode enviar as informações para o servidor ou processar como necessário

        // Limpar o carrinho após o envio
        dispatch({ type: 'CLEAR_CART' });

        // Redirecionar para a página de confirmação
        navigate('/confirmation');
    };

    return (
        <Container className="shipping-info-container">
            <h1 className="shipping-info-title">Informações de Entrega</h1>
            <Form onSubmit={handleSubmit} className="shipping-info-form">
                <Row>
                    <Col md={6}>
                        <Form.Group controlId="formName" className="shipping-info-form-group">
                            <Form.Label className="shipping-info-label">Nome Completo</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Digite seu nome completo"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="shipping-info-input"
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="formAddress" className="shipping-info-form-group">
                            <Form.Label className="shipping-info-label">Endereço</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Digite seu endereço"
                                name="address"
                                value={form.address}
                                onChange={handleChange}
                                required
                                className="shipping-info-input"
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Form.Group controlId="formCity" className="shipping-info-form-group">
                            <Form.Label className="shipping-info-label">Cidade</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Digite sua cidade"
                                name="city"
                                value={form.city}
                                onChange={handleChange}
                                required
                                className="shipping-info-input"
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="formState" className="shipping-info-form-group">
                            <Form.Label className="shipping-info-label">Estado</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Digite seu estado"
                                name="state"
                                value={form.state}
                                onChange={handleChange}
                                required
                                className="shipping-info-input"
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Form.Group controlId="formPostalCode" className="shipping-info-form-group">
                            <Form.Label className="shipping-info-label">Código Postal</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Digite seu código postal"
                                name="postalCode"
                                value={form.postalCode}
                                onChange={handleChange}
                                required
                                className="shipping-info-input"
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="formCountry" className="shipping-info-form-group">
                            <Form.Label className="shipping-info-label">País</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Digite seu país"
                                name="country"
                                value={form.country}
                                onChange={handleChange}
                                required
                                className="shipping-info-input"
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Form.Group controlId="formPhone" className="shipping-info-form-group">
                            <Form.Label className="shipping-info-label">Número de Telefone</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Digite seu número de telefone"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                className="shipping-info-input"
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="formEmail" className="shipping-info-form-group">
                            <Form.Label className="shipping-info-label">Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Digite seu email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                className="shipping-info-input"
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Form.Group controlId="formDeliveryInstructions" className="shipping-info-form-group">
                            <Form.Label className="shipping-info-label">Instruções de Entrega</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Digite instruções adicionais para o entregador (opcional)"
                                name="deliveryInstructions"
                                value={form.deliveryInstructions}
                                onChange={handleChange}
                                className="shipping-info-input"
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Button variant="primary" type="submit" className="shipping-info-submit-button mt-3">
                    Confirmar e Comprar
                </Button>
            </Form>
        </Container>
    );
}

export default ShippingInfoPage;
