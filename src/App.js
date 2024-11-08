import React from 'react';
import Header from './static/js/Header';
import ParallaxBackground from './static/js/ParallaxBackground';
import Section from './static/js/Section';
import './App.css';
// npm run Deploy (so i don't forget lol)
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
                                    <li>acquired 70+ million views and 10k+ followers in 4 months!</li>
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
                    <div className="project-grid">
                        <div className="project-item">
                            <h4>Social Space</h4>
                            <ul>
                                <li>Graphically represented TikTok's social media algorithm</li>
                                <li>React, Flask, Data Scraping, REST API, JavaScript</li>
                                <li>
                                    <a href="https://github.com/braynguyen/The-Social-Space" target="_blank" rel="noopener noreferrer">
                                        github repo
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="project-item">
                            <h4>Pill Counter</h4>
                            <ul>
                                <li>Program and apparatus to count pills visually</li>
                                <li>Python, OpenCV</li>
                                <li>
                                    <a href="https://github.com/JemLuu/Pilluu" target="_blank" rel="noopener noreferrer">
                                        github repo
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="project-item">
                            <h4>Blink Buddy</h4>
                            <ul>
                                <li>Program to remind the user to blink</li>
                                <li>Python, OpenCV, Tkinter</li>
                                <li>
                                    <a href="https://github.com/JemLuu/CSC-Hacks-2023" target="_blank" rel="noopener noreferrer">
                                        github repo
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="project-item">
                            <h3>Side Quest</h3>
                            <ul>
                                <li>iOS App that gives the user fun quests to take on</li>
                                <li>Swift, SwiftUI, Xcode</li>
                                <li>
                                    <a href="https://github.com/JemLuu/SheInnovates2023" target="_blank" rel="noopener noreferrer">
                                        github repo
                                    </a>
                                </li>
                            </ul>
                        </div>     
                        <div className="project-item">
                            <h3>website</h3>
                            <ul>
                                <li>This website you're on is a project of mine too!</li>
                                <li>React, HTML/CSS</li>
                                <li>
                                    <a href="https://github.com/JemLuu/website" target="_blank" rel="noopener noreferrer">
                                        github repo
                                    </a>
                                </li>
                            </ul>
                        </div>                 
                    </div>  
                </Section>
            </div>
        </div>
    );
}

export default App;