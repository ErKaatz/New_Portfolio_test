import React from 'react';

const AboutMe = () => {
    return (
        <section id="about-me" style={{ display: 'flex', padding: '50px 0' }}>
            <div style={{ flex: 1, padding: '20px' }}>
                <h2>Sobre Mí</h2>
                <p>
                    Hola, soy Alex, un desarrollador especializado en Programacion en Python. Me apasiona construir aplicaciones modernas utilizando tecnologías como React, Node.js, y Python.
                </p>
                <h3>Tecnologías que utilizo:</h3>
                <ul>
                    <li>JavaScript (React, Node.js)</li>
                    <li>Python (Django, Flask)</li>
                    <li>HTML, CSS</li>
                    <li>SQL, NoSQL</li>
                    {/* Agrega más tecnologías */}
                </ul>
            </div>
            <div style={{ flex: 1, padding: '20px', textAlign: 'center' }}>
                <img
                    src="/Fotoale1.jpeg"
                    alt="Foto de Alex"
                    style={{ maxWidth: '200px', borderRadius: '50%' }}
                />
            </div>
        </section>
    );
};

export default AboutMe;
