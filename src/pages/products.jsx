import React, { useContext, useEffect, useState } from "react";
import "./products.scss";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { UseContext } from "../Context/UseContext";

const home = () => {
  const [Products, SetProducts] = useState([]);
  const { ShoppingCard, SetShoppingCard } = useContext(UseContext);

  useEffect(() => {
    if (ShoppingCard === true) {
      console.log("true is 1");
    } else {
      console.error("false");
    }
  }, [ShoppingCard]);


  useEffect(() => {
    const Products = async () => {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products`);
        SetProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    Products();
  });

  function ShowMore() {
    Navigate("/ShowMore");
  }

  return (
    <section className="Hero">
      <div className="product-page">
        {Products.map((product) => (
          <div key={product.id} className="product-card">
            <img className="ApiImage" src={product.image} alt={product.title} />
            <h2>name : {product.name}</h2>
            <p>category : {product.category}</p>
            <p className="price"> price : {product.price}</p>
            <button
              className="buy-button"
              onClick={() => SetShoppingCard(true)}
            >
              🛒 Buy
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default home;
