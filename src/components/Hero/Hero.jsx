import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Front-End React Developer 👋</h1>
            <p>
              Hi, I'm Stefan Topalovic. A passionate Front-end React Developer
              based in Toronto, Canada. 📍
            </p>
            <div className="hero-socials">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="https://via.placeholder.com/350x350"
              alt="hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;