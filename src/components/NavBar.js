import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/Technologies" className="nav-item">Technologies</Link>
            <Link to="/Services" className="nav-item">Services</Link>
            <Link to="/Partners" className="nav-item">Partners</Link>
            <Link to="/Company" className="nav-item">Company</Link>

            {/* Add other navigation links as needed */}
        </nav>
    );
};

export default NavBar;