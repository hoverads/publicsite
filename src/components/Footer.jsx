
import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            background: 'black',
            padding: '40px 0',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            textAlign: 'center',
            color: 'var(--text-muted)'
        }}>
            <div className="container">
                <h2 style={{ color: 'white', marginBottom: '20px' }}>HOVER ADS.</h2>
                <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
                    <a href="#" style={{ color: 'white' }}>Instagram</a>
                    <a href="#" style={{ color: 'white' }}>Twitter</a>
                    <a href="#" style={{ color: 'white' }}>LinkedIn</a>
                </div>
                <p>&copy; {new Date().getFullYear()} Hover Ads. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
