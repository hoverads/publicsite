
import React from 'react';
import heroBg from '../assets/hero-bg.png';

const Hero = () => {
    return (
        <section id="hero" style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            padding: 0
        }}>
            {/* Background Image with Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `url(${heroBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: -2,
                filter: 'brightness(0.6)'
            }}></div>

            {/* Gradient Overlay for better readability */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(to bottom, transparent 0%, var(--bg-dark) 100%)',
                zIndex: -1
            }}></div>

            <div className="container" style={{ textAlign: 'center', zIndex: 1 }}>
                <h2 style={{
                    fontSize: '1rem',
                    textTransform: 'uppercase',
                    letterSpacing: '5px',
                    marginBottom: '20px',
                    color: 'var(--primary-neon)'
                }}>The Future of Advertising</h2>

                <h1 style={{
                    fontSize: '4rem',
                    marginBottom: '30px',
                    lineHeight: '1.1'
                }}>
                    The Sky is Your <br />
                    <span className="text-gradient">Canvas</span>
                </h1>

                <p style={{
                    fontSize: '1.2rem',
                    color: 'var(--text-muted)',
                    maxWidth: '600px',
                    margin: '0 auto 40px',
                }}>
                    Transform your message into an unforgettable spectacle. From massive brand campaigns to intimate personal celebrations.
                </p>

                <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                    <a href="#services" className="btn btn-primary">Our Services</a>
                    <a href="#contact" className="btn" style={{ border: '1px solid white', color: 'white' }}>Contact Us</a>
                </div>
            </div>

            {/* Floating Elements (abstract decoration) */}
            <div className="animate-float" style={{
                position: 'absolute',
                bottom: '10%',
                right: '10%',
                width: '100px',
                height: '100px',
                border: '2px solid var(--secondary-neon)',
                borderRadius: '50%',
                opacity: 0.5,
                zIndex: 0
            }}></div>
        </section>
    );
};

export default Hero;
