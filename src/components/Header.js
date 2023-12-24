import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Header.css'; 

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <Link to="/">YourLogo</Link> {/* Replace with an image or styled text as needed */}
            </div>
            <nav className="navbar">
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Services">Services</Link></li>
                    <li><Link to="/Technologies">Technologies</Link></li>
                    <li><Link to="/OurCompany">Our Company</Link></li>
                    <li><Link to="/Partners">Partners</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    {/* Add more links as needed */}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
