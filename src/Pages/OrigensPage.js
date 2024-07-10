import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import CustomPagination from '../components/Pagination';

const products = [
    // Array com objetos dos produtos
];

function OrigensPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;
    const totalPages = Math.ceil(products.length / productsPerPage);

    const currentProducts = products.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);

    return (
        <>
            <Header />
            <Container>
                <Row>
                    {currentProducts.map(product => (
                        <Col key={product.id} md={3}>
                            <ProductCard product={product} />
                        </Col>
                    ))}
                </Row>
                <CustomPagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
            </Container>
            <Footer />
        </>
    );
}

export default OrigensPage;
