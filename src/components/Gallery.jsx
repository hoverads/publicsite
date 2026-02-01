
import React from 'react';
import img1 from '../assets/hero-bg.png';
import img2 from '../assets/drone-ad.png';
import img3 from '../assets/drone-public.png';
import img4 from '../assets/drone-bday.png';

const Gallery = () => {
    return (
        <section id="gallery" style={{ background: '#08081a' }}>
            <div className="container">
                <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '20px' }}>Recent Shows</h2>
                <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '50px' }}>
                    Glimpses from our recent spectacles around the world.
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '20px'
                }}>
                    {[img1, img2, img3, img4].map((img, idx) => (
                        <div key={idx} style={{
                            height: '250px',
                            borderRadius: '15px',
                            overflow: 'hidden',
                            position: 'relative',
                            cursor: 'pointer'
                        }}>
                            <img src={img} alt="Drone Show" style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                transition: 'transform 0.5s ease'
                            }}
                                onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'}
                                onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
