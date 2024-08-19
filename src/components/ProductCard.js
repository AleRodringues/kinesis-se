import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    return (
        <Card className="product-card-item2">
            <Card.Img variant="top" src={product.image} className="product-card-img2" />
            <Card.Body>
                
                <Card.Text className="product-card-text2">
                    {product.price}
                </Card.Text>
                
            </Card.Body>
        </Card>
    );
}

export default ProductCard;
