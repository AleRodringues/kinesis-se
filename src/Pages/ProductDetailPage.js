// src/Pages/ProductDetailPage.js

import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import products from '../data/products';
import { useParams } from 'react-router-dom';
import './ProductDetailPage';

function ProductDetailPage() {
    const { id } = useParams();
    const product = products.find((product) => product.id === parseInt(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <>
            <Header />
            <Container className="product-detail">
                <Row>
                    <Col md={6}>
                        <img src={product.image} alt={product.name} className="img-fluid" />
                        <Row>
                            {product.thumbnails.map((thumb, index) => (
                                <Col key={index} md={2} className="thumbnail">
                                    <img src={thumb} alt="Thumbnail" className="img-thumbnail" />
                                </Col>
                            ))}
                        </Row>
                    </Col>
                    <Col md={6} className="product-info">
                        <h1>{product.name}</h1>
                        <p>
                            <span>{product.rating} stars</span> |
                            <span>{product.reviews} reviews</span> |
                            <span>{product.orders} orders</span>
                        </p>
                        <p className="stock">In stock</p>
                        <Form>
                            <Form.Group controlId="formColor">
                                <Form.Label>Color</Form.Label>
                                <div>
                                    {product.colors.map((color) => (
                                        <Button key={color} variant="outline-primary" className="mr-2">
                                            {color}
                                        </Button>
                                    ))}
                                </div>
                            </Form.Group>
                            <Form.Group controlId="formSize">
                                <Form.Label>Size</Form.Label>
                                <Form.Control as="select">
                                    {product.sizes.map((size) => (
                                        <option key={size}>{size}</option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                        </Form>
                        <p>{product.description}</p>
                        <h3 className="price">
                            ${product.price} <small>${product.discount}</small>
                        </h3>
                        <p>Stock: {product.stock}</p>
                        <Form inline className="actions">
                            <Form.Control type="number" min="1" max={product.stock} defaultValue="1" className="mr-2" />
                            <Button variant="primary" className="mr-2">Add to Cart</Button>
                            <Button variant="success">Buy Now</Button>
                        </Form>
                    </Col>
                </Row>
                <Row className="similar-products">
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
