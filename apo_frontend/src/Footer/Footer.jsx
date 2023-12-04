// Footer.js

import React from 'react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer ">
            <div className="footer-content container text-center">
                <p>
                    <br />
                    Application Portfolio Optimization
                </p>
            </div>
        </footer>
    );
};

export default Footer;
