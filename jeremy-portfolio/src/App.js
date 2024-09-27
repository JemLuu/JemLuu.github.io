import React from 'react';
import Header from './static/js/Header';
import ParallaxBackground from './static/js/ParallaxBackground';
import Section from './static/js/Section';

import './App.css'; // Global styles
import './static/css/Header.css'; // Component styles
import './static/css/ParallaxBackground.css';
import './static/css/Section.css';

function App() {
    return (
        <div className="App">
            <ParallaxBackground />
            <div className="container">
                <Header />
                <main>
                    <Section title="About">
                        <div className="circle"></div>
                    </Section>
                    <Section title="Experience">
                        {/* Add Experience content here */}
                    </Section>
                    <Section title="Projects">
                        {/* Add Projects content here */}
                    </Section>
                </main>
            </div>
        </div>
    );
}

export default App;