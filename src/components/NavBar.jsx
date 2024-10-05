import React, { useContext, useEffect } from "react";
import "./Navbar.scss";
import { useNavigate, Link } from "react-router-dom";

import { UseContext } from "../Context/UseContext";
import axios from "axios";

import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const Navigate = useNavigate();
  const { ShoppingCard, SetShoppingCard } = useContext(UseContext);

  function ChangePage() {
    Navigate("/LoginPage");
  }

  function Prof() {
    Navigate("/profileuser")
  }

  function setProject() {
    Navigate("/ShoppingCart")
  }

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

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
  }, [])

  return (
    <nav className="navbar" data-aos="fade-down">
      <h1 className="Title" data-aos="fade-left">Fake Store project</h1>
      <ul className="navbar-list" data-aos="fade-down">
        <li className="navbar-item" data-aos="fade-up">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="navbar-item" data-aos="fade-up">
          <Link to={"/ProDucts"}>Products</Link>
        </li>
        <li className="navbar-item" data-aos="fade-up">
          <Link to={"/Blog"}>Blog</Link>
        </li>
        <li className="navbar-item" data-aos="fade-up">
          <Link to={"/About"}>About</Link>
        </li>
      </ul>
      <div className="NavbarBtn" data-aos="fade-right">

        {localStorage.getItem("email") ? <img className="ProfImage" onClick={Prof} src="/assets/Human-Iamge.jpeg" /> : <button onClick={ChangePage} className="Btn">
          Login
        </button>}
        {ShoppingCard === true ?  <div className="ShoCardEmoji">
          <button className="Btn" data-aos="fade-left"
            onClick={() => {
              setProject(false)
            }}>🛒</button>
          <div style={{zIndex : 1}} className="ShoppingCard" data-aos="fade-left"></div>
        </div>: <div className="ShoCardEmoji">
          <button className="Btn" data-aos="fade-left"
            onClick={() => {
              setProject(false)
            }}>🛒</button>
          <div className="ShoppingCard" data-aos="fade-left">❗</div>
        </div>}
      </div>
    </nav >
  );
};

export default Navbar;

