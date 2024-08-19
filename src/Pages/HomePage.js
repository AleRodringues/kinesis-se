import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <div className="home-page">
            <section className="banner-section">
                <Link to="/collections#japao">
                    <img src="/assets/banners/CollabJapao.png" alt="Banner" className="banner-img" />
                </Link>
            </section>

            <section className="about-section">
                <h2>Sobre nós</h2>
                <div className="about-cards">
                    <div className="about-card">
                        <Link to="/about-us#global-connections">
                            <img src="/assets/banners/ConexoesGlobais.jpg" alt="Conexoes globais" className="card-img" />
                            <h3>Conexões Globais</h3>
                            <p>A Kinesis conecta-se com culturas de todo o mundo para oferecer coleções exclusivas. Junte-se a nós nesta celebração de diversidade e expressão cultural.</p>
                        </Link>
                    </div>
                    <div className="about-card">
                        <Link to="/about-us#authentic-design">
                            <img src="/assets/banners/DesignAutentico.jpg" alt="Design Autêntico" className="card-img" />
                            <h3>Design Autêntico</h3>
                            <p>Trabalhamos com artistas e artesãos locais para garantir que nossos produtos reflitam verdadeiramente as tradições e estilos únicos de cada cultura que nos conectamos.</p>
                        </Link>
                    </div>
                    <div className="about-card">
                        <Link to="/about-us#sustainability">
                            <img src="/assets/banners/Sustentabilidade.jpg" alt="Sustentabilidade" className="card-img" />
                            <h3>Sustentabilidade</h3>
                            <p>Desde a escolha de materiais ecológicos até processos de fabricação responsáveis, a Kinesis se esforça para minimizar seu impacto ambiental e contribuir para um futuro mais verde.</p>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="foundations-section">
                <h2>Origens</h2>
                <div className="product-grid">
                    <div className="product-card">
                        <Link to="/product/1">
                            <img src="/assets/products/Origens/camisa1Origens.png" alt="Blusa Origens" className="product-img" />
                        </Link>
                        <div className="product-info">
                            <Link to="/product/1">
                                <p className="product-name">Camiseta Básica Origens</p>
                            </Link>
                            <div className="product-price-add">
                                <h1 className="product-price">R$ 89.9</h1>
                                
                            </div>
                        </div>
                    </div>
                    <div className="product-card">
                        <Link to="/product/2">
                            <img src="/assets/products/Origens/Blusa1Origens.png" alt="Moletom Origens" className="product-img" />
                        </Link>
                        <div className="product-info">
                            <Link to="/product/2">
                                <p className="product-name">Moletom com Capuz Origens</p>
                            </Link>
                            <div className="product-price-add">
                                <h1 className="product-price">R$ 179.9</h1>
                                
                            </div>
                        </div>
                    </div>
                    <div className="product-card">
                        <Link to="/product/3">
                            <img src="/assets/products/Origens/bone1Origens.png" alt="Bone Origens" className="product-img" />
                        </Link>
                        <div className="product-info">
                            <Link to="/product/3">
                                <p className="product-name">Boné Snapback Origens</p>
                            </Link>
                            <div className="product-price-add">
                                <h1 className="product-price">R$ 69.9</h1>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="collections-section">
                <h2>Nossas Collabs</h2>
                <div className="collab-grid">
                    <Link to="/collections#brasil" className="collab-card">
                        <img src="/assets/Flags/FlagBra.jpg" alt="Coleção Brasil" className="collab-img" />
                        <p className="collab-name">Brasil</p>
                    </Link>
                    <Link to="/collections#italia" className="collab-card">
                        <img src="/assets/Flags/FlaIta.jpg" alt="Coleção Itália" className="collab-img" />
                        <p className="collab-name">Itália</p>
                    </Link>
                    <Link to="/collections#japao" className="collab-card">
                        <img src="/assets/Flags/FLaJap.jpg" alt="Coleção Japão" className="collab-img" />
                        <p className="collab-name">Japão</p>
                    </Link>
                    <Link to="/collections#mexico" className="collab-card">
                        <img src="/assets/Flags/FlagMex.jpg" alt="Coleção México" className="collab-img" />
                        <p className="collab-name">México</p>
                    </Link>
                    <Link to="/collections#nigeria" className="collab-card">
                        <img src="/assets/Flags/FlagNig.jpg" alt="Coleção Nigéria" className="collab-img" />
                        <p className="collab-name">Nigéria</p>
                    </Link>
                    <Link to="/collections#nova-zelandia" className="collab-card">
                        <img src="/assets/Flags/FlagNz.jpg" alt="Coleção Nova Zelândia" className="collab-img" />
                        <p className="collab-name">Nova Zelândia</p>
                    </Link>
                    <Link to="/collections#origens" className="collab-card">
                        <img src="/assets/Flags/FlagK.jpg" alt="Coleção Origens" className="collab-img" />
                        <p className="collab-name">Origens</p>
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default HomePage;
