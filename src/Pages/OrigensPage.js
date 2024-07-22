// src/Pages/OrigensPage.js
import React from 'react';
import ProductCard from '../components/ProductCard';
import './OrigensPage.css';

const sampleProducts = [
    { id: 1, name: 'Product 1', price: '$10', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: '$20', image: 'https://via.placeholder.com/150' },

];

function OrigensPage() {
    return (
        <div>
            <h1>Origens Collection</h1>
            <div className="product-grid">
                {sampleProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default OrigensPage;
