import React from 'react';
import heroImage from '../assets/hero.png';

export default function Hero() {
    return (
        <div className="hero-container">
            <img src={heroImage} alt="Futurismo en el trabajo" className="hero-image" />
        </div>
    );
}
