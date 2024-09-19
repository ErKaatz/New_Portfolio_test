import React from 'react';
import { FaInstagram, FaWhatsapp, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const SocialMedia = () => {
    return (
        <section id="social-media" style={{ textAlign: 'center', padding: '50px 0' }}>
            <h2>Encuéntrame en</h2>
            <div style={{ fontSize: '40px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
                <a href="https://instagram.com/Alex_kaatz" target="_blank" rel="noreferrer">
                    <FaInstagram />
                </a>
                <a href="https://wa.me/+595972774080" target="_blank" rel="noreferrer">
                    <FaWhatsapp />
                </a>
                <a href="https://linkedin.com/in/alexander-kaatz-6a6847222" target="_blank" rel="noreferrer">
                    <FaLinkedin />
                </a>
                <a href="mailto:erwinka@hotmail.com">
                    <FaEnvelope />
                </a>
            </div>
        </section>
    );
};

export default SocialMedia;
