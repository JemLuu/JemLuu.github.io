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
                    <div className="about-grid">
                        <div className="about-text">
                            <h3>Hi, I'm Jeremy! 😄</h3>
                            <h3>A little about me, I...</h3>
                            <ul>
                                <li>study Computer Science @ University of Pittsburgh</li>
                                <li>am first chair violinist for the university Symphony Orchestra</li>
                                <li>am the Video Media Officer for Computer Science Club (@csc.at.pitt reels on instagram)</li>
                                <ul>
                                    <li>50+ million views and 10x following</li>
                                </ul>
                                <li>like to play Squash</li>
                                <li>like to Ski</li>
                            </ul>
                        </div>
                        <div className="about-image">
                            <img src={require('./static/assets/headshot.jpeg')} alt="Jeremy Luu" />
                        </div>
                    </div>
                </Section>
                <Section title="Experience">
                    <div className="experience-grid">
                        <div className="experience-item">
                            <h4>Software Engineer Intern</h4>
                            <img src={require("./static/assets/pnc.png")} alt="PNC Logo" />
                        </div>
                        <div className="experience-item">
                            <h4>Cybersecurity Intern</h4>
                            <img src={require("./static/assets/comcast.png")} alt="Comcast Logo" />
                        </div>
                        <div className="experience-item">
                            <h4>Part-Time Software Engineer Intern</h4>
                            <img src={require("./static/assets/sunraydrugs.png")} alt="SunRay Drugs Logo" />
                        </div>
                        <div className="experience-item">
                            <h4>Undergraduate Teaching Assistant (CS0012, Intro To Computing in Python) </h4>
                            <img src={require("./static/assets/pitt.png")} alt="Pitt Logo" />
                        </div>
                        <div className="experience-item">
                            <h4>Video Media Officer (CSC at Pitt)</h4>
                            <img src={require("./static/assets/csc.png")} alt="CSC Logo" />
                        </div>
                        <div className="experience-item">
                            <h4>HCI Researcher</h4>
                            <img src={require("./static/assets/pittsci.png")} alt="HCI Logo" />
                        </div>
                    </div>
                </Section>
                <Section title="Projects">
                    <div>
                        <h4>Project 1</h4>
                    </div>
                    <div>
                        <h4>Project 2</h4>
                    </div>
                    <div>
                        <h4>Project 3</h4>
                    </div>
                    <div>
                        <h4>Project 4</h4>
                    </div>                    
                </Section>
            </div>
        </div>
    );
}

export default App;