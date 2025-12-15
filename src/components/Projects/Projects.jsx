import "./Projects.css";

const Projects =()=> {
    return (
   <section className="portfolio6-projects">
      <h2>Projects</h2>

      <div className="portfolio6-projects-grid">
        <div className="portfolio6-project-card">
          <img src="https://via.placeholder.com/300" alt="project" />
          <div>Project One</div>
        </div>

        <div className="portfolio6-project-card">
          <img src="https://via.placeholder.com/300" alt="project" />
          <div>Project Two</div>
        </div>
      </div>
    </section>
    );
};
export default Projects;