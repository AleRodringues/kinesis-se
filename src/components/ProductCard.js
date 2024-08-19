import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './ProductCard.css'; // Importa o CSS para o componente

const ProductCard = ({ product }) => {
    return (
        <Card className="product-card-item">
            <Card.Img variant="top" src={product.image} className="product-card-img" />
            <Card.Body>
                <Card.Title className="product-card-title">{product.name}</Card.Title>
                <Card.Text className="product-card-text">
                    {product.price}
                </Card.Text>
                <Button variant="primary" className="product-card-button">Add to Cart</Button>
            </Card.Body>
        </Card>
    );
}

export default ProductCard;
