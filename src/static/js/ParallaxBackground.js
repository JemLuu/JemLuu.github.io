import React, { useEffect, useRef } from 'react';
import '../css/ParallaxBackground.css';

const ParallaxBackground = () => {
    const parallaxRef = useRef(null);

    useEffect(() => {
        let ticking = false;
        
        const updateParallax = () => {
            const scrolled = window.scrollY;
            const parallaxElement = parallaxRef.current;
            
            if (parallaxElement) {
                // Negative value to move slower in same direction as scroll
                parallaxElement.style.transform = `translateY(${scrolled * -0.3}px)`;
            }
            
            ticking = false;
        };

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateParallax);
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        updateParallax(); // Initial call
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return <div className="parallax" ref={parallaxRef}></div>;
};

export default ParallaxBackground;