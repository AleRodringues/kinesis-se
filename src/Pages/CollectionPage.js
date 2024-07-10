import React from 'react';

const CollectionPage = ({ country }) => {
    return (
        <div>
            <header>Header</header>
            <section>
                <div>Produtos da coleção {country}</div>
                <div>Paginação</div>
            </section>
            <footer>Footer</footer>
        </div>
    );
};

export default CollectionPage;
