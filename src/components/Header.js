import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.css'; // Importando CSS personalizado

function Header() {
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
                        <Nav.Link href="#about">Sobre nós</Nav.Link>
                    </Nav>
                    <Navbar.Brand href="#" className="mx-auto">
                        <img src="/assets/logos/LogoKinesis.png" alt="Logo Kinesis" className="navbar-logo" />
                    </Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link href="#cart">Carrinho</Nav.Link>
                        <Nav.Link href="#account">Entrar</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default Header;
