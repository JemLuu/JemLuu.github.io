import React, { useEffect } from 'react';
import '../css/ParallaxBackground.css';

const ParallaxBackground = () => {

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;
            const parallax = document.querySelector('.parallax');
            parallax.style.transform = `translateY(${-scrolled * 0.3}px)`; // Invert the direction to move the background upwards
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return <div className="parallax"></div>;
};

export default ParallaxBackground;