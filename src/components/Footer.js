import React from 'react';
import '../CSS/Footer.css'; 

const Footer = () => {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} Costcone Global Services Ltd. All rights reserved.</p>
            {/* Add more footer content as needed */}
        </footer>
    );
};

export default Footer;
