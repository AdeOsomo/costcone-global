import React from 'react';
import './Button.css'; // Make sure to create a corresponding CSS file

const Button = ({ text, onClick }) => {
    return (
        <button className="button" onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
