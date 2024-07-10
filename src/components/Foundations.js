import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Foundations() {
  const products = [
    { id: 1, name: 'Product 1', image: 'path_to_image', price: '$100' },
    { id: 2, name: 'Product 2', image: 'path_to_image', price: '$100' },
    // Add more products as needed
  ];

  return (
    <Container id="foundations">
      <h2>Foundations</h2>
      <Row>
        {products.map(product => (
          <Col key={product.id} md={3}>
            <Card>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Foundations;
