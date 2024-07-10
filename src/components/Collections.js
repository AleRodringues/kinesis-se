import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Collections() {
    const collections = [
        { id: 1, name: 'Collection 1', image: 'path_to_image' },
        { id: 2, name: 'Collection 2', image: 'path_to_image' },
        // Add more collections as needed
    ];

    return (
        <Container id="collections">
            <h2>Collections</h2>
            <Row>
                {collections.map(collection => (
                    <Col key={collection.id} md={4}>
                        <Card>
                            <Card.Img variant="top" src={collection.image} />
                            <Card.Body>
                                <Card.Title>{collection.name}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Collections;
