
import React from 'react';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

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
                    <a href="https://www.instagram.com/ads.hover/" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }} aria-label="Instagram">
                        <Instagram size={24} />
                    </a>
                    <a href="https://x.com/hoveradsin" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }} aria-label="X (Twitter)">
                        <Twitter size={24} />
                    </a>
                    <a href="https://www.linkedin.com/company/hoverads/" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }} aria-label="LinkedIn">
                        <Linkedin size={24} />
                    </a>
                </div>
                <p>&copy; {new Date().getFullYear()} Hover Ads. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
