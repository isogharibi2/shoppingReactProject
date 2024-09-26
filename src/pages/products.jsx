import React from 'react';
import './ProductPage.scss';

const ProductPage = () => {

    const products = [
        {
            id: 1,
            name: 'Product 1',
            price: '$10.00',
            image: 'path/to/image1.jpg',
            info: 'Description of Product 1',
        },
        {
            id: 2,
            name: 'Product 2',
            price: '$15.00',
            image: 'path/to/image2.jpg',
            info: 'Description of Product 2',
        },
        {
            id: 3,
            name: 'Product 3',
            price: '$20.00',
            image: 'path/to/image3.jpg',
            info: 'Description of Product 3',
        },
        {
            id: 4,
            name: 'Product 4',
            price: '$25.00',
            image: 'path/to/image4.jpg',
            info: 'Description of Product 4',
        },
        {
            id: 5,
            name: 'Product 5',
            price: '$30.00',
            image: 'path/to/image5.jpg',
            info: 'Description of Product 5',
        },
        {
            id: 6,
            name: 'Product 6',
            price: '$35.00',
            image: 'path/to/image6.jpg',
            info: 'Description of Product 6',
        },
        {
            id: 7,
            name: 'Product 7',
            price: '$40.00',
            image: 'path/to/image7.jpg',
            info: 'Description of Product 7',
        },
        {
            id: 8,
            name: 'Product 8',
            price: '$45.00',
            image: 'path/to/image8.jpg',
            info: 'Description of Product 8',
        },
        {
            id: 9,
            name: 'Product 9',
            price: '$50.00',
            image: 'path/to/image9.jpg',
            info: 'Description of Product 9',
        },
    ];

    return (
        <div className="product-page">
            {products.map(product => (
                <div key={product.id} className="product-card">
                    <img src={product.image} alt={product.name} />
                    <h2>{product.name}</h2>
                    <p>{product.info}</p>
                    <p className="price">{product.price}</p>
                    <button className="buy-button">🛒 Buy</button>
                </div>
            ))}
        </div>
    );
};

export default ProductPage;
