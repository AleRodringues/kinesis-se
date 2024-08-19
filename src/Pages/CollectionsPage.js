import React, { useContext } from 'react';
import './CollectionsPage.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext';

// Importando as coleções individuais
import Brasil from '../data/collections/Brasil';
import Italia from '../data/collections/Italia';
import Japao from '../data/collections/Japao';
import Mexico from '../data/collections/Mexico';
import Nigeria from '../data/collections/Nigeria';
import NovaZelandia from '../data/collections/NovaZelandia';
import Origens from '../data/collections/Origens';

const collections = [
    {
        name: "Brasil",
        data: Brasil,
        description: "Uma celebração vibrante das cores e ritmos brasileiros.",
        flag: "/assets/Flags/FlagBra.jpg"
    },
    {
        name: "Itália",
        data: Italia,
        description: "Elegância e sofisticação com um toque de tradição italiana.",
        flag: "/assets/Flags/FlaIta.jpg"
    },
    {
        name: "Japão",
        data: Japao,
        description: "Minimalismo e inovação com a estética única do Japão.",
        flag: "/assets/Flags/FLaJap.jpg"
    },
    {
        name: "México",
        data: Mexico,
        description: "Cores vibrantes e tradições ricas da cultura mexicana.",
        flag: "/assets/Flags/FlagMex.jpg"
    },
    {
        name: "Nigéria",
        data: Nigeria,
        description: "Texturas e padrões que homenageiam a diversidade nigeriana.",
        flag: "/assets/Flags/FlagNig.jpg"
    },
    {
        name: "Nova Zelândia",
        data: NovaZelandia,
        description: "Aprecia a natureza e a simplicidade da vida na Nova Zelândia.",
        flag: "/assets/Flags/FlagNz.jpg"
    },
    {
        name: "Origens",
        data: Origens,
        description: "Um mergulho nas raízes e na diversidade global.",
        flag: "/assets/Flags/FlagK.jpg"
    },
];

const CollectionsPage = () => {
    const { dispatch } = useContext(CartContext); // Usando o contexto

    const handleAddToCart = (product) => {
        dispatch({ type: 'ADD_TO_CART', payload: product });
    };

    return (
        <div className="collections-page">
            <h1>Collections</h1>
            {collections.map((collection, index) => (
                <div
                    key={index}
                    id={collection.name.toLowerCase()}
                    className="collection-section"
                >
                    <div className="collection-info">
                        <h2>{collection.name}</h2>
                        <p className="collection-essence">{collection.essence}</p>
                        <img src={collection.flag} alt={`${collection.name} flag`} className="collection-flag" />
                    </div>
                    <div className="product-list">
                        {collection.data.map((product) => (
                            <div key={product.id} className="product-card">
                                <Link to={`/product/${product.id}`}>
                                    <img src={product.image} alt={product.name} className="img-fluid" />
                                </Link>
                                <div className="product-info">
                                    <Link to={`/product/${product.id}`}>
                                        <p className="product-name">{product.name}</p>
                                    </Link>
                                    <div className="product-price-add">
                                        <h1 className="product-price">R$ {parseFloat(product.price).toFixed(2)}</h1>
                                        <button
                                            className="add-to-cart-button"
                                            onClick={() => handleAddToCart(product)}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CollectionsPage;
