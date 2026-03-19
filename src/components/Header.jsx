import React from 'react';

export default function Header() {
    return (
        <header className="header">
            <div className="logo">
                <div className="logo-dot"></div>
                AI.Future by Emotions
            </div>
            <h1 className="title">¿IA en tu primer empleo?<br />Es tu superpoder</h1>
            <p className="subtitle">Descubre cómo dominar las herramientas que están redefiniendo el talento junior.</p>
            
            <div className="cta-container">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="btn">POTENCIA TU PERFIL</a>
            </div>
        </header>
    );
}
