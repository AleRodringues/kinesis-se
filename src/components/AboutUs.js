import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function AboutUs() {
    return (
        <Container id="about">
            <h2>About Us</h2>
            <Row>
                <Col>
                    <h3>Exploração Global</h3>
                    <p>A Kinesis explora o mundo para trazer a você coleções exclusivas. Junte-se a nós nessa jornada de descoberta e expressão cultural.</p>
                </Col>
                <Col>
                    <h3>Design Autêntico</h3>
                    <p>Trabalhamos com artistas e artesãos locais para garantir que nossos produtos reflitam verdadeiramente as tradições e estilos únicos de cada cultura que exploramos.</p>
                </Col>
                <Col>
                    <h3>Sustentabilidade</h3>
                    <p>Desde a escolha de materiais ecológicos até processos de fabricação responsáveis, a Kinesis se esforça para minimizar seu impacto ambiental e contribuir para um futuro mais verde.</p>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutUs;
