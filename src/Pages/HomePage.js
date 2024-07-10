import React from 'react';
import './HomePage.css';

const HomePage = () => {
    return (
        <div>
            <header className="bg-dark text-white p-3">Header</header>
            <section className="banner-section">
                <img src="./assets/banners/CollabJapao" alt="Banner" className="img-fluid" />
            </section>
            <section className="about-section p-5 text-center">
                <h2>Sobre nós</h2>
                <div className="row">
                    <div className="col-md-4">
                        <h3>Exploração Global</h3>
                        <p>A Kinesis explora o mundo para trazer a você coleções exclusivas. Junte-se a nós nessa jornada de descoberta e expressão cultural.</p>
                    </div>
                    <div className="col-md-4">
                        <h3>Design Autêntico</h3>
                        <p>Trabalhamos com artistas e artesãos locais para garantir que nossos produtos reflitam verdadeiramente as tradições e estilos únicos de cada cultura que exploramos.</p>
                    </div>
                    <div className="col-md-4">
                        <h3>Sustentabilidade</h3>
                        <p>Desde a escolha de materiais ecológicos até processos de fabricação responsáveis, a Kinesis se esforça para minimizar seu impacto ambiental e contribuir para um futuro mais verde.</p>
                    </div>
                </div>
            </section>
            <section className="foundations-section p-5 text-center">
                <h2>Origens</h2>
                <div className="row">
                    <div className="col-md-3">
                        <img src="/path/to/product1.png" alt="Product 1" className="img-fluid" />
                        <p>Camiseta Básica Origens</p>
                        <h1>R$ 89.9</h1>
                    </div>
                    <div className="col-md-3">
                        <img src="/path/to/product2.png" alt="Product 2" className="img-fluid" />
                        <p>Moletom com Capuz Origens</p>
                        <h1>R$ 179.9</h1>
                    </div>
                    <div className="col-md-3">
                        <img src="/path/to/product3.png" alt="Product 3" className="img-fluid" />
                        <p>Boné Snapback Origens</p>
                        <h1>R$ 69.9</h1>
                    </div>
                    <div className="col-md-3">
                        <img src="/path/to/product4.png" alt="Product 4" className="img-fluid" />
                        <p>Calça Jogger Origens</p>
                        <h1>R$ 149.9</h1>
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
