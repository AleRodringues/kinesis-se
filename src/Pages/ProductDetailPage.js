import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Footer from '../components/Footer';
import products from '../data/products';
import { useParams, Link } from 'react-router-dom';
import { CartContext } from '../CartContext';
import './ProductDetailPage.css';

function ProductDetailPage() {
    const { id } = useParams();
    const { dispatch } = useContext(CartContext);
    const [product, setProduct] = useState(null); // Estado local do produto
    const [cartCount, setCartCount] = useState(0); // Estado local para contar itens no carrinho

    // Efeito para carregar o produto com base no id da URL
    useEffect(() => {
        const currentProduct = products.find((prod) => prod.id === parseInt(id));
        setProduct(currentProduct);
    }, [id]);

    if (!product) {
        return <div>Product not found</div>;
    }

    // Filtra os produtos similares pela mesma coleção, exceto o produto atual
    const similarProducts = products.filter((p) => p.collection === product.collection && p.id !== product.id);

    const handleAddToCart = () => {
        dispatch({ type: 'ADD_TO_CART', payload: product }); // Adiciona o produto ao carrinho
        const updatedStock = product.stock - 1; // Reduz o estoque localmente
        setProduct({ ...product, stock: updatedStock }); // Atualiza o estado local do produto com o novo estoque
        setCartCount(cartCount + 1); // Atualiza o contador de itens no carrinho
    };

    return (
        <>
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
                            <span>{product.rating} Estrelas</span> |
                            <span>{product.reviews} Reviews</span> |
                            <span>{product.orders} Vendas</span>
                        </p>
                        <Form>
                            <Form.Group controlId="formSize">
                                <Form.Label>Tamanho</Form.Label>
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
                        <p>Estoque: {product.stock}</p>
                        <Form inline className="actions">
                            <Form.Control type="number" min="1" max={product.stock} defaultValue="1" className="mr-2" />
                            <Button variant="primary" className="mr-2" onClick={handleAddToCart}>
                                Add Carinho
                            </Button>
                            <Link to="/cart">
                                <Button variant="success">Compra</Button>
                            </Link>
                        </Form>
                    </Col>
                </Row>
                <Row className="similar-products">
                    <Col>
                        <h2>Produtos Similares</h2>
                        <Row>
                            {similarProducts.map((similarProduct) => (
                                <Col key={similarProduct.id} md={3} className="product-card">
                                    <Link to={`/product/${similarProduct.id}`} className="similar-product-link">
                                        <img src={similarProduct.image} alt={similarProduct.name} className="img-fluid" />
                                    </Link>
                                    <div className="product-info">
                                        <Link to={`/product/${similarProduct.id}`} className="similar-product-link">
                                            <p className="product-name">{similarProduct.name}</p>
                                        </Link>
                                        <div className="product-price-add">
                                            <h1 className="product-price">${similarProduct.price}</h1>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
}

export default ProductDetailPage;
