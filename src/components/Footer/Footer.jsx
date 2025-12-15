import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top-content">
          <div className="footer-left">
            <h2 className="footer-title">
              L
              <span className="highlight-e-wrapper">
                <span className="highlight-e">e</span>
              </span>
              t's work
              <br />
              together
            </h2>
            <div className="footer-meta">
              <span>Based in Germany</span>
              <span className="footer-social-divider">|</span>
              <div className="footer-social-links">
                <a href="#">Bē</a>
                <a href="#">in</a>
                <a href="#">
                  <i className="fab fa-dribbble"></i>
                </a>
                <a href="#">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-right">
            <div className="footer-contact-card">
              <p>Looking for a hectic designer?</p>
              <a href="mailto:hello@henry.com" className="contact-link">
                hello@henry.com
              </a>
            </div>
            <div className="footer-contact-card">
              <p>Want a more in-depth look at my history?</p>
              <a href="tel:+59868799874" className="contact-link">
                +598 6879 9874
              </a>
            </div>
          </div>
        </div>
        <div className="footer-brand-section">
          <div className="footer-brand-name">MARK HENRY</div>
        </div>
        <div className="footer-bottom-bar">
          <span>©2023 Mark Henry, All Rights Reserved</span>
          <a href="#" className="back-to-top">
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
