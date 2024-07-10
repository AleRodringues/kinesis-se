import React from 'react';
import { Carousel } from 'react-bootstrap';

function Banner() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="path_to_your_image"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>COLEÇÃO BRASIL</h3>
                    <p>Produto 001</p>
                </Carousel.Caption>
            </Carousel.Item>
            {/* Add more Carousel.Items as needed */}
        </Carousel>
    );
}

export default Banner;
