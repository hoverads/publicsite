
import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 1000,
                padding: '20px 0',
                transition: 'all 0.3s ease',
                background: scrolled ? 'rgba(5, 5, 16, 0.9)' : 'transparent',
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                borderBottom: scrolled ? '1px solid rgba(255,255,255,0.1)' : 'none',
                boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none'
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1 className="text-gradient" style={{ fontSize: '1.5rem', letterSpacing: '1px' }}>HOVER ADS.</h1>

                <ul style={{ display: 'flex', listStyle: 'none', gap: '40px' }}>
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

                <a href="#contact" className="btn btn-primary" style={{ padding: '8px 25px', fontSize: '0.9rem' }}>
                    Get Started
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
