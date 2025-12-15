
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <p className="contact-subtitle">Contact</p>
            <h2 style={{textTransform: 'none'}}>Let's connect</h2>
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <div>
                <p className="info-title">Email us</p>
                <p className="info-data">hello@henry.com</p>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-phone-alt"></i>
              <div>
                <p className="info-title">Call us</p>
                <p className="info-data">+1 234 567 890 | +1 234 567 890</p>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <p className="info-title">Office address</p>
                <p className="info-data">2715 Ash Dr. San Joe, South Dakota 6548</p>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" placeholder="Your name*" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="Your email*" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" placeholder="Your number" />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" placeholder="Your subject*" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder="Type your message"></textarea>
              </div>
              <button type="submit" className="submit-btn">Submit <span>&rarr;</span></button>
            </form>
            <div className="follow-me">
              <p>Follow me</p>
              <div className="social-icons">
                <a href="#"><i className="fab fa-behance"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                <a href="#"><i className="fab fa-dribbble"></i></a>
                <a href="#"><i className="fab fa-github"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
