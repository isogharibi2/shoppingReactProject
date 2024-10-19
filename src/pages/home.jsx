import React, { useEffect, useState } from "react";
import "./home.scss";
import axios from "axios";
import { Navigate, Link } from "react-router-dom";

import { useLocalStorage } from "../hooks/useLocalStorage.js";

const home = () => {
  const [Fullname, SetFullname] = useLocalStorage("Token", "mohammadGharibi");

  const [Products, SetProducts] = useState([]);

  useEffect(() => {
    const Products = async () => {
      try {
        const res = await axios.get(
          `https://fakestoreapi.com/products?limit=3`
        );
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
            <button className="buy-button">🛒 Buy</button>
          </div>
        ))}
      </div>
      <div className="ShowMorePds">
        <button onClick={ShowMore}>
          <Link to={"/ProDucts"}>Show More</Link>
        </button>
      </div>
    </section>
  );
};

export default home;
