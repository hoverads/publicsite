
import React from 'react';
import brandImg from '../assets/drone-ad.png';
import publicImg from '../assets/drone-public.png';
import personalImg from '../assets/drone-bday.png';

const Services = () => {
    const services = [
        {
            title: "Brand Advertising",
            desc: "Dominate the skyline with massive flying billboards. Perfect for product launches and brand awareness.",
            img: brandImg
        },
        {
            title: "Public Shows",
            desc: "Mesmerizing light shows for festivals, cities, and major events that draw thousands of eyes.",
            img: publicImg
        },
        {
            title: "Personal Events",
            desc: "Make your birthday, proposal, or wedding magical with a private drone light show in the sky.",
            img: personalImg
        }
    ];

    return (
        <section id="services" className="container">
            <h2 className="text-gradient" style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '60px' }}>Our Services</h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '30px'
            }}>
                {services.map((service, index) => (
                    <div key={index} className="glass-card" style={{ padding: '0', overflow: 'hidden', transition: 'all 0.3s' }}>
                        <div style={{
                            height: '200px',
                            backgroundImage: `url(${service.img})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}></div>

                        <div style={{ padding: '30px' }}>
                            <h3 style={{ marginBottom: '15px', color: 'var(--primary-neon)' }}>{service.title}</h3>
                            <p style={{ color: 'var(--text-muted)' }}>{service.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
