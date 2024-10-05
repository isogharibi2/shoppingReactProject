import React, { useEffect, useState } from "react";
import "./ShoppingCard.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ShoppingCart = () => {
  const [Product, SetProduct] = useState([]);
  const [ProductDelet, SetProductDelet] = useState([]);
  const sum = Product.reduce((acc, current) => acc + current.price, 0);

  const navigate = useNavigate();

  useEffect(() => {
    const products = async () => {
      try {
        const res = await axios.get(
          `https://66f56f0a9aa4891f2a2533c2.mockapi.io/Products`
        );
        SetProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    products();
  }, []);

  const CheckOut = async () => {
    try {
    //   const ProductsDelet = await axios.delete(
    //     `https://66f56f0a9aa4891f2a2533c2.mockapi.io/Products/${id}`
    //   );
    //   SetProductDelet(ProductsDelet.data);
    
      toast.success("you are pay it", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        onClose: () => navigate("/profileuser"),
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="shopping-cart">
      <ToastContainer />
      <div className="ShoppingcardProducts">
        {Product.map((products) => (
          <div className="product-card" key={products.id}>
            <img
              src="./assets/71PB7gOSePL._AC_SX466_.jpg"
              alt={products.title}
            />
            <h2 className="product-name">name : {products.name}</h2>
            <p className="product-description">
              category : {products.category}
            </p>
            <p className="product-price"> price : {products.price}</p>
            <span>id : {products.id}</span>
          </div>
        ))}
      </div>
      <span>all price : {sum}</span>
      <button onClick={CheckOut} className="Btns">
        CheckOut
      </button>
    </div>
  );
};

export default ShoppingCart;
