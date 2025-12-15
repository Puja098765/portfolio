import "./RecentProjects.css";
import { Link } from "react-router-dom";

const RecentProjects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="projects-title">
          <p className="projects-subtitle">Portfolio</p>
          <h2>My Recent <span className="highlight">Work</span></h2>
        </div>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image"></div>
            <div className="project-info">
              <div className="project-tags">
                <span>APP</span>
                <span>DEVELOPMENT</span>
              </div>
              <h3>Basinik Finance App</h3>
              <a href="#" className="project-link">
                ↗
              </a>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image"></div>
            <div className="project-info">
              <div className="project-tags">
                <span>APP</span>
                <span>DEVELOPMENT</span>
              </div>
              <h3>Oxilex Dashboard design</h3>
              <a href="#" className="project-link">
                ↗
              </a>
            </div>
          </div>
        </div>
        <div className="view-all-projects">
          <Link to="/projects" className="btn-view-all">
            View All Project ↗
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
