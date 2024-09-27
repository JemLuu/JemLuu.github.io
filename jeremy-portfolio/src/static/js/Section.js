import React from 'react';
import '../css/Section.css';

const Section = ({ title, children }) => {
    return (
        <section>
            <h2>{title}</h2>
            <div className="content">
                {children}
            </div>
        </section>
    );
};

export default Section;