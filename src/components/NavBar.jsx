import React from 'react';
import './Navbar.scss';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item"><a href="#home">Home</a></li>
                <li className="navbar-item"><a href="#products">Products</a></li>
                <li className="navbar-item"><a href="#blog">Blog</a></li>
                <li className="navbar-item"><a href="#about">About</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
