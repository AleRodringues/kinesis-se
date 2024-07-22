import React, { useContext } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Importe Link do React Router
import { CartContext } from '../CartContext';
import './Header.css';

function Header() {
    const { state } = useContext(CartContext);

    return (
        <>
            <div className="top-bar">
                <img src="/assets/icons/delivery.png" alt="Delivery Logo" className="delivery-logo" />
                <span>Frete grátis para todo o Brasil</span>
            </div>
            <Navbar bg="custom" expand="lg" className="navbar-custom">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/about">Sobre nós</Nav.Link>
                    </Nav>
                    <Navbar.Brand as={Link} to="/" className="mx-auto">
                        <img src="/assets/logos/LogoKinesis.png" alt="Logo Kinesis" className="navbar-logo" />
                    </Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/cart" className="cart-link">
                            <img src="/assets/icons/cart.png" alt="Carrinho" className="cart-icon" />
                            <span className="cart-count">{state.totalQuantity}</span>
                        </Nav.Link>
                        <Button as={Link} to="/login" variant="custom" className="entrar-button">
                            <img src="/assets/icons/profile.png" alt="Entrar" className="user-icon" />
                            ENTRAR
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default Header;
