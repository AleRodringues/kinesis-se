import React from 'react';
import styles from './AboutUsPage.module.css'; // Importa o módulo CSS
import Footer from '../components/Footer';

const AboutUsPage = () => {
    return (
        <div className={styles.aboutUsPage}>
            <section className={`${styles.introSection} p-5 text-center`}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <img src="/assets/banners/KinesisEmpresa.jpg" alt="Sobre a Kinesis" className="img-fluid" />
                        </div>
                        <div className="col-md-6">
                            <h1>Sobre a Kinesis</h1>
                            <p>
                                A Kinesis é mais do que uma marca de streetwear – é uma celebração das culturas e tradições do mundo todo.
                                Desde a nossa fundação, buscamos criar um impacto positivo, conectando pessoas através da moda e promovendo
                                a diversidade cultural. Nossa missão é oferecer roupas e acessórios que não apenas refletem estilos únicos,
                                mas também contam histórias de lugares distantes. Trabalhamos com designers e artesãos locais em cada país
                                que exploramos, garantindo que cada peça seja uma verdadeira expressão da cultura que representa.
                            </p>
                            <p>
                                Com um compromisso firme com a qualidade e autenticidade, investimos em práticas de produção responsáveis e
                                sustentáveis. Acreditamos que a moda pode ser uma força para o bem, e por isso, cada coleção é criada para
                                celebrar a riqueza e a diversidade das culturas ao redor do mundo, enquanto minimizamos nosso impacto ambiental.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`${styles.detailsSection} p-5`}>
                <div className="container">
                    <h2 className="text-center mb-5">Nossa Filosofia</h2>
                    <div className="row align-items-center mb-5">
                        <div className="col-md-6 order-md-2">
                            <img src="/assets/banners/ConexoesGlobais.jpg" alt="Conexões Globais" className="img-fluid" />
                        </div>
                        <div className="col-md-6 order-md-1">
                            <h3>Conexões Globais</h3>
                            <p>
                                Na Kinesis, acreditamos que a moda é uma linguagem universal que pode conectar pessoas de diferentes
                                origens e culturas. Nossos designs são inspirados por tradições e estilos de todo o mundo, criando uma
                                ponte entre culturas e oferecendo aos nossos clientes a oportunidade de experimentar a diversidade global
                                através de suas roupas. Cada coleção é cuidadosamente curada para refletir a riqueza cultural de um país
                                específico, permitindo que nossos clientes se conectem com o mundo de uma maneira única e pessoal.
                            </p>
                            <p>
                                Através das nossas coleções, procuramos criar uma experiência imersiva e educacional, permitindo que nossos
                                clientes conheçam e apreciem as tradições e artesanato de cada cultura. Seja através de estampas inspiradas
                                em arte tradicional ou técnicas de fabricação exclusivas, cada peça conta uma história que vai além da moda.
                            </p>
                        </div>
                    </div>

                    <div className="row align-items-center mb-5">
                        <div className="col-md-6">
                            <img src="/assets/banners/DesignAutentico.jpg" alt="Design Autêntico" className="img-fluid" />
                        </div>
                        <div className="col-md-6">
                            <h3>Design Autêntico</h3>
                            <p>
                                A autenticidade é o coração do nosso trabalho. Colaboramos com artistas e artesãos locais para garantir que
                                nossos produtos sejam verdadeiros reflexos das culturas que representam. Cada peça é projetada com atenção
                                aos detalhes, capturando a essência do estilo e da tradição local. Através de nossos designs exclusivos,
                                buscamos preservar e celebrar a autenticidade cultural, oferecendo aos nossos clientes uma experiência de moda
                                genuína e enriquecedora.
                            </p>
                            <p>
                                Nossos designers viajam pelo mundo para se conectar com mestres artesãos e influências culturais, trazendo para
                                cada peça um senso profundo de lugar e história. Cada coleção é uma homenagem à riqueza cultural das regiões
                                que exploramos, traduzida em roupas e acessórios que são tanto fashion quanto significativos.
                            </p>
                        </div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-md-6 order-md-2">
                            <img src="/assets/banners/Sustentabilidade.jpg" alt="Sustentabilidade" className="img-fluid" />
                        </div>
                        <div className="col-md-6 order-md-1">
                            <h3>Sustentabilidade</h3>
                            <p>
                                Comprometidos com a preservação do meio ambiente, adotamos práticas sustentáveis em todo o nosso processo
                                de produção. Desde a escolha de materiais ecológicos até a implementação de métodos de fabricação responsáveis,
                                buscamos minimizar nosso impacto ambiental. Acreditamos que a moda pode ser bela e sustentável ao mesmo tempo,
                                e trabalhamos para garantir que cada produto Kinesis contribua para um futuro mais verde e sustentável.
                            </p>
                            <p>
                                A sustentabilidade é um valor fundamental na Kinesis. Estamos constantemente inovando em nossas práticas para
                                reduzir o desperdício e aumentar a eficiência em todas as etapas da produção. Desde o uso de tecidos reciclados
                                até o apoio a práticas de comércio justo, estamos empenhados em fazer a diferença e criar um impacto positivo
                                no mundo.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AboutUsPage;
