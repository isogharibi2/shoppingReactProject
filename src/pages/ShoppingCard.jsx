import React, { useEffect, useState } from 'react';
import './ShoppingCard.scss';
import axios from 'axios';

const ShoppingCart = () => {
    const [Product, SetProduct] = useState([]);

    useEffect(() => {
        const products = async () => {
            try {
                const res = await axios.get(`https://66f56f0a9aa4891f2a2533c2.mockapi.io/Products`)
                SetProduct(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        products()
    })

    const sum = Product.reduce((acc, current) => acc + current.price, 0);

    return (
        <div className="shopping-cart">
            {Product.map((products) => (
                <div className="product-card" key={products.id}>
                    <img src='./assets/71PB7gOSePL._AC_SX466_.jpg' alt={products.title} />
                    <h2 className="product-name">name : {products.name}</h2>
                    <p className="product-description">category : {products.category}</p>
                    <p className="product-price"> price : {products.price}</p>
                    <span>id : {products.id}</span>
                </div>
            ))}
            <span>all price : {sum}</span>
        </div>
    );
};

export default ShoppingCart;
