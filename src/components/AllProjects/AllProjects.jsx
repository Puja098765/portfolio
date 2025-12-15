import { Link } from "react-router-dom";
import "./AllProjects.css";

const AllProjects = () => {
  return (
    <section id="all-projects" className="projects-section">
      <div className="container">
        <div className="projects-title">
          <p className="projects-subtitle">Portfolio</p>
          <h2>My recent work</h2>
        </div>
        <div className="projects-grid">
            <div className="project-card r1-c1"></div>
            <Link to="/project-single" className="project-card r1-c2">
              <div className="project-info">
                <h3>Oxilex Dashboard design</h3>
                <div className="project-link">↗</div>
              </div>
            </Link>
            <div className="project-card r2-c1"></div>
            <div className="project-card r2-c2"></div>
            <div className="project-card r2-c3"></div>
            <div className="project-card r3-c1"></div>
            <div className="project-card r3-c2"></div>
        </div>
      </div>
    </section>
  );
};

export default AllProjects;
