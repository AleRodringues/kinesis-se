// HomePage.js
import React, { useContext } from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext';

const HomePage = () => {
    const { dispatch } = useContext(CartContext);

    const handleAddToCart = (product) => {
        dispatch({ type: 'ADD_TO_CART', payload: product });
    };

    return (
        <div>
            <section className="banner-section">
                <a href="#"><img src="/assets/banners/CollabJapao.png" alt="Banner" className="img-fluid" /></a>
            </section>
            <section className="about-section p-5 text-center">
                <h2>Sobre nós</h2>
                <div className="row">
                    <div className="col-md-4">
                        <a href="#">
                            <img src="/assets/banners/ConexoesGlobais.jpg" alt="Conexoes globais" className="Card-About img-fluid" />
                            <h3>Conexões Globais</h3>
                            <p>A Kinesis conecta-se com culturas de todo o mundo para oferecer coleções exclusivas. Junte-se a nós nesta celebração de diversidade e expressão cultural.</p>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <a href="#">
                            <img src="/assets/banners/DesignAutentico.jpg" alt="Design Autentico" className="Card-About img-fluid" />
                            <h3>Design Autêntico</h3>
                            <p>Trabalhamos com artistas e artesãos locais para garantir que nossos produtos reflitam verdadeiramente as tradições e estilos únicos de cada cultura que nos conectamos.</p>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <a href="#">
                            <img src="/assets/banners/Sustentabilidade.jpg" alt="Sustentabilidade" className="Card-About img-fluid" />
                            <h3>Sustentabilidade</h3>
                            <p>Desde a escolha de materiais ecológicos até processos de fabricação responsáveis, a Kinesis se esforça para minimizar seu impacto ambiental e contribuir para um futuro mais verde.</p>
                        </a>
                    </div>
                </div>
            </section>
            <section className="foundations-section p-5 text-center">
                <h2>Origens</h2>
                <div className="row">
                    <div className="col-md-3 product-card">
                        <Link to="/product/1">
                            <img src="/assets/products/Origens/camisa1Origens.png" alt="Blusa Origens" className="img-fluid" />
                        </Link>
                        <div className="product-info">
                            <Link to="/product/1">
                                <p className="product-name">Camiseta Básica Origens</p>
                            </Link>
                            <div className="product-price-add">
                                <h1 className="product-price">R$ 89.9</h1>
                                <button className="add-to-cart-button" onClick={() => handleAddToCart({ id: 1, name: 'Camiseta Básica Origens', price: 89.9 })}>+</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 product-card">
                        <Link to="/product/2">
                            <img src="/assets/products/Origens/Blusa1Origens.png" alt="Moletom Origens" className="img-fluid" />
                        </Link>
                        <div className="product-info">
                            <Link to="/product/2">
                                <p className="product-name">Moletom com Capuz Origens</p>
                            </Link>
                            <div className="product-price-add">
                                <h1 className="product-price">R$ 179.9</h1>
                                <button className="add-to-cart-button" onClick={() => handleAddToCart({ id: 2, name: 'Moletom com Capuz Origens', price: 179.9 })}>+</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 product-card">
                        <Link to="/product/3">
                            <img src="/assets/products/Origens/bone1Origens.png" alt="Bone Origens" className="img-fluid" />
                        </Link>
                        <div className="product-info">
                            <Link to="/product/3">
                                <p className="product-name">Boné Snapback Origens</p>
                            </Link>
                            <div className="product-price-add">
                                <h1 className="product-price">R$ 69.9</h1>
                                <button className="add-to-cart-button" onClick={() => handleAddToCart({ id: 3, name: 'Boné Snapback Origens', price: 69.9 })}>+</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 product-card">
                        <Link to="/product/4">
                            <img src="/assets/products/Origens/jogger1Origens.jpg" alt="Calça Jogger Origens" className="img-fluid" />
                        </Link>
                        <div className="product-info">
                            <Link to="/product/4">
                                <p className="product-name">Calça Jogger Origens</p>
                            </Link>
                            <div className="product-price-add">
                                <h1 className="product-price">R$ 149.9</h1>
                                <button className="add-to-cart-button" onClick={() => handleAddToCart({ id: 4, name: 'Calça Jogger Origens', price: 149.9 })}>+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="collections-section p-5 text-center">
                <h2>Collections</h2>
                <div className="row">
                    <div className="col-md-4">
                        <img src="/path/to/collection1.png" alt="Collection 1" className="img-fluid" />
                        <p>Collab Brasil</p>
                    </div>
                    <div className="col-md-4">
                        <img src="/path/to/collection2.png" alt="Collection 2" className="img-fluid" />
                        <p>Collab México</p>
                    </div>
                    <div className="col-md-4">
                        <img src="/path/to/collection3.png" alt="Collection 3" className="img-fluid" />
                        <p>Collab Itália</p>
                    </div>
                    <div className="col-md-4">
                        <img src="/path/to/collection1.png" alt="Collection 1" className="img-fluid" />
                        <p>Collab Nigéria</p>
                    </div>
                    <div className="col-md-4">
                        <img src="/path/to/collection2.png" alt="Collection 2" className="img-fluid" />
                        <p>Collab Japão</p>
                    </div>
                    <div className="col-md-4">
                        <img src="/path/to/collection3.png" alt="Collection 3" className="img-fluid" />
                        <p>Collab Nova Zelândia</p>
                    </div>
                </div>
            </section>
            <footer className="bg-dark text-white p-3">Footer</footer>
        </div>
    );
};

export default HomePage;
