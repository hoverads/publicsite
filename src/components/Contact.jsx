
import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="container" style={{ paddingBottom: '100px' }}>
            <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Start Your Show</h2>
                <p style={{ color: 'var(--text-muted)', marginBottom: '40px' }}>
                    Ready to light up the sky? Contact us for a quote or custom proposal.
                </p>

                <div style={{ marginBottom: '40px' }}>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Email Us Directly</h3>
                    <a href="mailto:contact@hoverads.in" style={{
                        fontSize: '1.5rem',
                        color: 'var(--primary-neon)',
                        textDecoration: 'underline'
                    }}>
                        contact@hoverads.in
                    </a>
                </div>

                <form style={{ display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'left' }} onSubmit={(e) => e.preventDefault()}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                        <input type="text" placeholder="Your Name" style={inputStyle} />
                        <input type="email" placeholder="Your Email" style={inputStyle} />
                    </div>
                    <select style={inputStyle} defaultValue="">
                        <option value="" disabled>Type of Show</option>
                        <option value="brand">Brand Advertising</option>
                        <option value="personal">Personal Event</option>
                        <option value="public">Public Show</option>
                    </select>
                    <textarea placeholder="Tell us about your event..." rows="5" style={inputStyle}></textarea>

                    <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Inquiry</button>
                </form>
            </div>
        </section>
    );
};

const inputStyle = {
    width: '100%',
    padding: '15px',
    background: 'rgba(0,0,0,0.3)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '8px',
    color: 'white',
    fontSize: '1rem',
    outline: 'none'
};

export default Contact;
