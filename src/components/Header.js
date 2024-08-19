import React, { useContext } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../CartContext';
import './Header.css';

function Header() {
    const { state } = useContext(CartContext);
    const navigate = useNavigate();
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    return (
        <div className="header-container">
            <div className="top-bar">
                <img src="/assets/icons/delivery.png" alt="Delivery Logo" className="delivery-logo" />
                <span>Frete grátis para todo o Brasil</span>
            </div>
            <Navbar bg="custom" expand="lg" className="navbar-custom">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navbar-nav">
                        <Nav.Link as={Link} to="/about-us">Sobre nós</Nav.Link>
                        <Nav.Link as={Link} to="/collections">Collections</Nav.Link>
                    </Nav>
                    <Navbar.Brand as={Link} to="/" className="mx-auto">
                        <img src="/assets/logos/LogoKinesis.png" alt="Logo Kinesis" className="navbar-logo" />
                    </Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/cart" className="cart-link">
                            <img src="/assets/icons/cart.png" alt="Carrinho" className="cart-icon" />
                            <span className="cart-count">{state.totalQuantity}</span>
                        </Nav.Link>
                        {loggedInUser ? (
                            <Button variant="custom" className="entrar-button" onClick={() => navigate('/user-profile')}>
                                <img src="/assets/icons/profile.png" alt="Perfil" className="user-icon" />
                                {loggedInUser.name}
                            </Button>
                        ) : (
                            <Button as={Link} to="/login" variant="custom" className="entrar-button">
                                <img src="/assets/icons/profile.png" alt="Entrar" className="user-icon" />
                                ENTRAR
                            </Button>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Header;
