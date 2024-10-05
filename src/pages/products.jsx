import React, { useContext, useEffect, useState } from "react";
import "./products.scss";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { UseContext } from "../Context/UseContext";

const home = () => {
  const [Products, SetProducts] = useState([]);
  const { ShoppingCard, SetShoppingCard } = useContext(UseContext);
  const [ProductsFetch, setproductsfetch] = useState([]);
  const [ id , setId ] = useState("")

  useEffect(() => {
    if (ShoppingCard === true) {
      console.log("true is 1");
    } else {
      console.error("false");
    }
  }, [ShoppingCard]);

  const ProDuctAdd = async (event) => {
    setId(event.target.id);
    try {
      const ProDuct = await axios.post(
        `https://66f56f0a9aa4891f2a2533c2.mockapi.io/Products`,
        {
          title: Products[id].tile,
          name: Products[id].name,
          category: Products[id].category,
          price: Products[id].price,
        }
      );
      setproductsfetch(ProDuct.data);
    } catch (error) {
      console.error(error);
    }
    SetShoppingCard(true);
  };

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
  }, []);

  return (
    <section className="Hero">
      <div className="product-page">
        {Products.map((product) => (
          <div key={product.id} className="product-card">
            <img className="ApiImage" src={product.image} alt={product.title} />
            <h2>name : {product.name}</h2>
            <p>category : {product.category}</p>
            <p className="price"> price : {product.price}</p>
            <button className="buy-button" id={product.id} onClick={ProDuctAdd}>
              🛒 Buy
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default home;

// SetShoppingCard(true)
