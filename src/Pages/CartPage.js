import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';

const cartItems = [
    // Array com objetos dos itens no carrinho
];

function CartPage() {
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <>
            <Header />
            <Container>
                <h1>Shopping Cart</h1>
                <Row>
                    <Col md={8}>
                        {cartItems.map(item => (
                            <Row key={item.id} className="mb-3">
                                <Col md={3}>
                                    <img src={item.image} alt={item.name} className="img-fluid" />
                                </Col>
                                <Col md={5}>
                                    <h5>{item.name}</h5>
                                    <p>{item.price}</p>
                                </Col>
                                <Col md={2}>
                                    <Form.Control type="number" min="1" max={item.stock} defaultValue={item.quantity} />
                                </Col>
                                <Col md={2}>
                                    <Button variant="danger">Remove</Button>
                                </Col>
                            </Row>
                        ))}
                    </Col>
                    <Col md={4}>
                        <h3>Total: {total}</h3>
                        <Button variant="primary" block>Proceed to Checkout</Button>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
}

export default CartPage;
