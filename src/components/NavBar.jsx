import React from "react";
import "./Navbar.scss";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const Navigate = useNavigate();

  function ChangePage() {
    Navigate("/LoginPage");
  }

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
        <button className="Btn" onClick={ChangePage}>
          Login
        </button>
        <button className="Btn">🛒</button>
      </div>
    </nav>
  );
};

export default Navbar;
