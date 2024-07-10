import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#">Kinesis</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#about">Sobre nós</Nav.Link>
                    <Nav.Link href="#account">Login</Nav.Link>
                    <Nav.Link href="#cart">Carrinho</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
