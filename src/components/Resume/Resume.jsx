import React, { useState } from 'react';
import './Resume.css';

const Resume = () => {
  const [activeTab, setActiveTab] = useState('About me');

  const renderContent = () => {
    switch (activeTab) {
      case 'About me':
        return (
          <div className="resume-content-container">
            <div className="resume-image-container">
              <div className="resume-image-blob"></div>
              <p className="resume-signature">Mark henry</p>
            </div>
            <div className="resume-details-container">
              <p className="resume-intro">
                Mark Henry, <strong>Product Designer</strong>, based in German. That is where I come in. A lover of words, a wrangler of copy. Here to create copy that not only reflects who you are and what you stand for,
              </p>
              <p className="resume-secondary-text">
                but words that truly land with those that read them, calling your audience in and making them want more.
              </p>
              <div className="resume-info-grid">
                <div className="info-item"><span className="info-label">Name</span><span className="info-value">Mark Henry</span></div>
                <div className="info-item"><span className="info-label">Nationality</span><span className="info-value">Germany</span></div>
                <div className="info-item"><span className="info-label">Phone</span><span className="info-value">+(2) 870 174 302</span></div>
                <div className="info-item"><span className="info-label">Email</span><span className="info-value">hello@henry.com</span></div>
                <div className="info-item"><span className="info-label">Experience</span><span className="info-value">12+ years</span></div>
                <div className="info-item"><span className="info-label">Freelance</span><span className="info-value">Available</span></div>
                <div className="info-item"><span className="info-label">Skype</span><span className="info-value">henry.halk23</span></div>
                <div className="info-item"><span className="info-label">Language</span><span className="info-value">German, English</span></div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="resume-section">
      <div className="resume-header">
        <p className="resume-subtitle">Resume</p>
        <h2 className="resume-title">All over my details find here...</h2>
      </div>
      <div className="resume-tabs">
        {['About me', 'Experience', 'Education', 'Skills', 'Awards'].map(tab => (
          <button
            key={tab}
            className={`resume-tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab} <span>↗</span>
          </button>
        ))}
      </div>
      <div className="resume-content">
        {renderContent()}
      </div>
    </section>
  );
};

export default Resume;
