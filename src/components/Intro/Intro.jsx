import React from 'react';
import './Intro.css';

const Intro = () => {
  return (
    <section id="intro" className="about-section">
      <div className="about-container">
        <div className="about-left">
          <div className="about-experience">
            <div className="experience-circle">
              <span className="experience-number">12+</span>
            </div>
            <span className="experience-text">Years of experience</span>
          </div>
        </div>
        <div className="about-right">
          <p className="about-greeting">Hello I'm</p>
          <h1 className="about-name">PEREZ,</h1>
          <h2 className="about-title">Product Designer</h2>
          <h3 className="about-location">Based in German</h3>
          <p className="about-description">
            That is where I come in. A lover of words, a wrangler of copy. Here to create copy that not only reflects who you are and what you stand for, but words that truly land with those that read them, calling your audience in and making them.
          </p>
          <div className="about-stats">
            <div className="stat">
              <span className="stat-number">08</span>
              <span className="stat-label">Award winner</span>
            </div>
            <div className="stat">
              <span className="stat-number">1.2k</span>
              <span className="stat-label">Worldwide client</span>
            </div>
            <div className="stat">
              <span className="stat-number">3.5k</span>
              <span className="stat-label">Job done successfully</span>
            </div>
          </div>
          <a href="#" className="download-cv-button">Download my resume ➔</a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
