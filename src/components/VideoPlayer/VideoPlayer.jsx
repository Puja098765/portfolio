import React from 'react';
import './VideoPlayer.css';

const VideoPlayer = () => {
  return (
    <section className="video-section">
      <div className="video-container">
        <div className="video-placeholder">
          <div className="play-button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 5V19L19 12L8 5Z" fill="black"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPlayer;
