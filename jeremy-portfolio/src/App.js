import React from 'react';
import Header from './static/js/Header';
import ParallaxBackground from './static/js/ParallaxBackground';
import Section from './static/js/Section';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <ParallaxBackground />
            <div className="content-container">
                <Section title="About">
                    <p>Hi! I'm Jeremy and I'm a computer science student at the University of Pittsburgh.
                        
                    </p>
                </Section>
                <Section title="Experience">
                    <p>Your Experience Content Here</p>
                </Section>
                <Section title="Projects">
                    <p>Your Projects Content Here</p>
                </Section>
                <Section title="Projects">
                    <p>Your Projects Content Here</p>
                </Section>
                <Section title="Projects">
                    <p>Your Projects Content Here</p>
                </Section>
                <Section title="Projects">
                    <p>Your Projects Content Here</p>
                </Section>
                <Section title="Projects">
                    <p>Your Projects Content Here</p>
                </Section>
                <Section title="Projects">
                    <p>Your Projects Content Here</p>
                </Section>

            </div>
        </div>
    );
}

export default App;