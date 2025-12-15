import React from 'react';
import './AboutPage.css';
import Header from '../components/Header/Header';
import Vision from '../components/Vision/Vision';
import VideoPlayer from '../components/VideoPlayer/VideoPlayer';
import Resume from '../components/Resume/Resume';
import Testimonials from '../components/Testimonials/Testimonials';
import Footer from '../components/Footer/Footer';

const AboutPage = () => {
  return (
    <>
      <Header />
      <section id="about-page" className="about-page-section">
        <div className="about-page-container">
          <div className="about-page-left">
            <div className="about-page-image-stack">
              <div className="about-page-image-background"></div>
              <div className="about-page-image-foreground"></div>
            </div>
          </div>
          <div className="about-page-right">
            <p className="about-page-subtitle">About me</p>
            <h1 className="about-page-title">Mark Henry</h1>
            <h2 className="about-page-role">Product Designer</h2>
            <p className="about-page-description">
              A Product Designer & Developer and I am in the game for over 7+ years. I am proud of my works and ready to face the next challenge.
            </p>
            <p className="about-page-philosophy">
              That is where I come in. A lover of words, a wrangler of copy. Here to create copy that not only reflects who you are and what you stand for, but words that truly land with those that read them, calling your audience in and making them.
            </p>
            <p className="about-page-signature">Mark henry</p>
          </div>
        </div>
      </section>
      <Vision />
      <VideoPlayer />
      <Resume />
      <Testimonials />
      <Footer />
    </>
  );
};

export default AboutPage;
