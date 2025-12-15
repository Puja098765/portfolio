import React from 'react';
import './Vision.css';

const Vision = () => {
  return (
    <section className="vision-section">
      <div className="vision-container">
        <div className="vision-left">
          <h2 className="vision-title">
            My vision is to<br />
            create happy<br />
            my clients
          </h2>
          <p className="vision-description">
            That is where I come in. A lover of words, a wrangler of copy. Here to create copy that not only reflects who you are and what you stand for, but words that truly land with those that read them, calling your audience in and making them want more.
          </p>
          <div className="vision-stats">
            <div className="stat-item">
              <span className="stat-number">08</span>
              <span className="stat-label">Award winner</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1.2k</span>
              <span className="stat-label">Worldwide client</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">3.5k</span>
              <span className="stat-label">Job done successfully</span>
            </div>
          </div>
        </div>
        <div className="vision-right">
          <div className="experience-container">
            <div className="experience-circle">
              <span className="experience-number">12+</span>
            </div>
            <p className="experience-text">
              Years of<br />
              experience
            </p>
          </div>
          <div className="contact-card">
            <p className="contact-card-title">SAY HELLO!</p>
            <a href="mailto:hello@henry.com" className="contact-card-email">hello@henry.com</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
