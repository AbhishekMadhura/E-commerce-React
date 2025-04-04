// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <div style={containerStyle}>
               
            </div>
            <div style={bottomStyle}>
                <p>ShopNow!  &copy; {new Date().getFullYear()} E-commerce Store. All rights reserved.</p>
            </div>
        </footer>
    );
};

// Styles for the footer
const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px 0',
    marginTop: '20px',
};

const containerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    maxWidth: '1200px',
    margin: '0 auto',
};

const columnStyle = {
    flex: '1',
    padding: '0 20px',
};

const listStyle = {
    listStyleType: 'none',
    padding: '0',
};

const bottomStyle = {
    textAlign: 'center',
    padding: '10px 0',
    borderTop: '1px solid #444',
};

export default Footer;