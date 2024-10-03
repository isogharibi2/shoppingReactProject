import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#about">About</a></li>
            </ul>
            <p className="footer-info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa consequuntur, quo cum fugit voluptatum aliquid possimus porro odio eius a ducimus nam error suscipit sapiente nemo voluptates rem minus provident?
            </p>
        </footer>
    );
};

export default Footer;
