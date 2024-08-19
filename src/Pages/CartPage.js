import React, { useContext } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { CartContext } from '../CartContext';
import Footer from '../components/Footer';
import './CartPage';

function CartPage() {
    const { state, dispatch } = useContext(CartContext);
    const { items: cartItems } = state;
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleRemove = (itemId) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
    };

    const handleQuantityChange = (itemId, quantity) => {
        if (quantity > 0) {
            dispatch({ type: 'UPDATE_QUANTITY', payload: { itemId, quantity } });
        }
    };

    return (
        <div id="root">
            <main>
                <Container>
                    <h1>Carrinho</h1>
                    <Row>
                        <Col md={8}>
                            {cartItems.map(item => {
                                return (
                                    <Row key={item.id} className="mb-3">
                                        <Col md={3}>
                                            <img src={`${process.env.PUBLIC_URL}${item.collection}/${item.image}`} alt={item.name} className="img-fluid" />
                                        </Col>
                                        <Col md={5}>
                                            <h5>{item.name}</h5>
                                            <p>${item.price.toFixed(2)}</p>
                                        </Col>
                                        <Col md={2}>
                                            <Form.Control
                                                type="number"
                                                min="1"
                                                max={item.stock}
                                                value={item.quantity}
                                                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                                            />
                                        </Col>
                                        <Col md={2}>
                                            <Button variant="danger" onClick={() => handleRemove(item.id)}>Excluir</Button>
                                        </Col>
                                    </Row>
                                );
                            })}
                        </Col>
                        <Col md={4}>
                            <h3>Total: ${total.toFixed(2)}</h3>
                            <Button variant="primary" block={true}>Comprar</Button>
                        </Col>
                    </Row>
                </Container>
            </main>
            <Footer />
        </div>
    );
}

export default CartPage;
