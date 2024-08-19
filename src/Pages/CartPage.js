import React, { useContext } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { CartContext } from '../CartContext';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import './CartPage.css';

function CartPage() {
    const { state, dispatch } = useContext(CartContext);
    const { items: cartItems } = state;

    const total = cartItems.reduce((acc, item) => acc + (parseFloat(item.price) || 0) * item.quantity, 0);
    const navigate = useNavigate();

    const handleRemove = (itemId) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
    };

    const handleQuantityChange = (itemId, quantity) => {
        if (quantity > 0) {
            dispatch({ type: 'UPDATE_QUANTITY', payload: { itemId, quantity } });
        }
    };

    const handleConfirmPurchase = () => {
        navigate('/shipping-info');
    };

    return (
        <div id="root">
            <main>
                <Container>
                    <h1 className="page-title">Carrinho</h1>
                    <Row>
                        <Col md={8}>
                            {cartItems.length > 0 ? (
                                cartItems.map(item => (
                                    <Row key={item.id} className="cart-item mb-3 align-items-center">
                                        <Col md={3} className="text-center">
                                            <img
                                                src={process.env.PUBLIC_URL + item.image}
                                                alt={item.name}
                                                className="img-fluid cart-item-image"
                                            />
                                        </Col>
                                        <Col md={5}>
                                            <h5>{item.name}</h5>
                                            <p className="item-price">${(parseFloat(item.price) || 0).toFixed(2)}</p>
                                        </Col>
                                        <Col md={2}>
                                            <Form.Control
                                                type="number"
                                                min="1"
                                                max={item.stock}
                                                value={item.quantity}
                                                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value, 10))}
                                                className="quantity-input"
                                            />
                                        </Col>
                                        <Col md={2}>
                                            <Button variant="danger" onClick={() => handleRemove(item.id)}>Excluir</Button>
                                        </Col>
                                    </Row>
                                ))
                            ) : (
                                <p>Seu carrinho está vazio.</p>
                            )}
                        </Col>
                        <Col md={4}>
                            {cartItems.length > 0 && (
                                <div className="checkout-summary">
                                    <h3>Total: ${(total || 0).toFixed(2)}</h3>
                                    <Button variant="primary" block onClick={handleConfirmPurchase}>Comprar</Button>
                                </div>
                            )}
                        </Col>
                    </Row>
                </Container>
            </main>
            <Footer />
        </div>
    );
}

export default CartPage;
