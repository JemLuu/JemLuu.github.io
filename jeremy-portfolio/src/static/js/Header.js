import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import '../css/Header.css';

const Header = () => {
    return (
        <>
            <header className="header">
                <h1>Jeremy Luu</h1>
                <div className="icon-links">
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <a href="path-to-your-resume.pdf" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFileAlt} size="2x" />
                    </a>
                    <a href="mailto:your-email@example.com">
                        <FontAwesomeIcon icon={faEnvelope} size="2x" />
                    </a>
                </div>
            </header>
        </>
    );
};

export default Header;