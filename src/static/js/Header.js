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
                    <a href="https://github.com/JemLuu" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a href="https://www.linkedin.com/in/jeremy-luu1/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <a href="/Jeremy_Luu_resume.pdf" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFileAlt} size="2x" />
                    </a>
                    {/* might want to get rid of the email and put it on the bottom or something */}
                    <a href="mailto:jdl137@pitt.edu">
                        <FontAwesomeIcon icon={faEnvelope} size="2x" />
                    </a>
                </div>
            </header>
        </>
    );
};

export default Header;