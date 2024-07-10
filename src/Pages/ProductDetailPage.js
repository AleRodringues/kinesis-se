import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';

const product = {
    // Objeto do produto com todos os detalhes
};

function ProductDetailPage() {
    return (
        <>
            <Header />
            <Container>
                <Row>
                    <Col md={6}>
                        <img src={product.image} alt={product.name} className="img-fluid" />
                        <Row>
                            {/* Thumbnails */}
                            {product.thumbnails.map((thumb, index) => (
                                <Col key={index} md={2}>
                                    <img src={thumb} alt="Thumbnail" className="img-thumbnail" />
                                </Col>
                            ))}
                        </Row>
                    </Col>
                    <Col md={6}>
                        <h1>{product.name}</h1>
                        <p>{product.rating} stars, {product.comments} comments, {product.sales} sales</p>
                        <Form>
                            <Form.Group controlId="formColor">
                                <Form.Label>Color</Form.Label>
                                <Form.Control as="select">
                                    {product.colors.map(color => (
                                        <option key={color}>{color}</option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="formSize">
                                <Form.Label>Size</Form.Label>
                                <Form.Control as="select">
                                    {product.sizes.map(size => (
                                        <option key={size}>{size}</option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                        </Form>
                        <p>{product.description}</p>
                        <h3>{product.price} <small><s>{product.discount}</s></small></h3>
                        <p>Stock: {product.stock}</p>
                        <Form inline>
                            <Form.Control type="number" min="1" max={product.stock} defaultValue="1" className="mr-2" />
                            <Button variant="primary" className="mr-2">Add to Cart</Button>
                            <Button variant="success">Buy Now</Button>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>Product Description</h2>
                        <p>{product.fullDescription}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>Similar Products</h2>
                        {/* List similar products here */}
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
}

export default ProductDetailPage;
