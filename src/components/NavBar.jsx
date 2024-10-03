import React, { useContext, useEffect } from "react";
import "./Navbar.scss";
import { useNavigate, Link } from "react-router-dom";

import { UseContext } from "../Context/UseContext";
import axios from "axios";

const Navbar = () => {
  const Navigate = useNavigate();
  const { ShoppingCard, SetShoppingCard } = useContext(UseContext);

  function ChangePage() {
    Navigate("/LoginPage");
  }

  useEffect(() => {
    const iamgeProf = async () => {
     try {
      const res = await axios.get(`https://dummyjson.com/users?limit=1`)
      SetShoppingCard(res.data)
      console.log(res.data)
     } catch (err) {
      console.log(err)
     }
    }
    iamgeProf()
  },[])

  return (
    <nav className="navbar">
      <h1 className="Title">Fake Store project</h1>
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="navbar-item">
          <Link to={"/ProDucts"}>Products</Link>
        </li>
        <li className="navbar-item">
          <Link to={"/Blog"}>Blog</Link>
        </li>
        <li className="navbar-item">
          <Link to={"/About"}>About</Link>
        </li>
      </ul>
      <div className="NavbarBtn">
        
        <div>
          <button className="Btn">🛒</button>
          <div className="ShoppingCard">❗</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

