import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <footer className="bg-light text-dark">
            <Container>
                <Row>
                    <Col>
                        <h5>Sobre a Kinesis</h5>
                        <ul>
                            <li><a href="#about">About</a></li>
                            <li><a href="#content">Content</a></li>
                            <li><a href="#partners">Partners</a></li>
                            <li><a href="#teams">Teams</a></li>
                            <li><a href="#careers">Careers</a></li>
                        </ul>
                    </Col>
                    <Col>
                        <h5>Social</h5>
                        <ul>
                            <li><a href="#youtube">YouTube</a></li>
                            <li><a href="#instagram">Instagram</a></li>
                            <li><a href="#twitter">Twitter</a></li>
                        </ul>
                    </Col>
                    <Col>
                        <h5>Support</h5>
                        <ul>
                            <li><a href="#faq">FAQ</a></li>
                            <li><a href="#contact">Contact Us</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
