import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header id="home" className={`hero-section ${!isHomePage ? 'minimal-header' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <a >PEREZ</a>
          </div>
          <div className="hamburger-menu" onClick={toggleDrawer}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
        {isHomePage && (
          <div className="hero-main-content">
            <div className="hero-main">
              <div className="hero-text">
                <h1>Front-End React Developer</h1>
                <p>
                  Hi, I'm Stefan Topalovic. A passionate Front-end React
                  Developer based in Toronto, Canada. 📍
                </p>
                <div className="hero-socials">
                  <a
                    href="https://www.linkedin.com/in/stefan-topalovic-dev/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a
                    href="https://github.com/stefantopalovic"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
              <div className="hero-image">
                <img src="https://via.placeholder.com/350x350" alt="hero" />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className={`drawer ${isDrawerOpen ? "open" : ""}`}>
        <div className="drawer-header">
          <div className="close-button" onClick={toggleDrawer}>
            X
          </div>
        </div>
        <div className="drawer-content">
          <ul>
            <li>
              <Link to="/" onClick={toggleDrawer}>
                Home <span className="arrow">➔</span>
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleDrawer}>
                About <span className="arrow">➔</span>
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={toggleDrawer}>
                Projects <span className="arrow">➔</span>
              </Link>
            </li>
            <li>
              <Link to="/blog" onClick={toggleDrawer}>
                Blog <span className="arrow">➔</span>
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleDrawer}>
                Contact <span className="arrow">➔</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
