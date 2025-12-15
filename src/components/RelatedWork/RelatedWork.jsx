import { Link } from "react-router-dom";
import "./RelatedWork.css";

const RelatedWork = () => {
  return (
    <section className="related-work-section">
      <div className="container">
        <div className="projects-title">
          <p className="projects-subtitle">Portfolio</p>
          <h2>Related work</h2>
        </div>
        <div className="related-work-grid">
          <div className="project-card">
            <div className="project-image"></div>
            <div className="project-info">
                <div className="project-tags">
                    <span>APP</span>
                    <span>DEVELOPMENT</span>
                </div>
                <div className="project-title-container">
                    <h3>Basinik Finance App</h3>
                    <Link to="/project-single" className="project-link">↗</Link>
                </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image"></div>
            <div className="project-info">
                <div className="project-tags">
                    <span>APP</span>
                    <span>DEVELOPMENT</span>
                </div>
                <div className="project-title-container">
                    <h3>Oxilex Dashboard design</h3>
                    <Link to="/project-single" className="project-link">↗</Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedWork;
