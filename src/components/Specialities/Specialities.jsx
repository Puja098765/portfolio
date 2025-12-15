import "./Specialities.css";

const Specialities = () => {
  return (
    <section id="specialities" className="specialities-section">
      <div className="container">
        <div className="specialities-header">
          <div className="header-left">
            <p className="services-text">Services</p>
            <h2>My specialities</h2>
          </div>
          <div className="header-right">
            <p>Synergistically seize front-end methods of empowerment without extensive core competencies. Progressively repurpose alternative platforms.</p>
          </div>
        </div>
        <div className="specialities-layout">
          <div className="specialities-grid">
            <div className="speciality-item">
                <div className="speciality-icon"><p>0</p></div>
                <h3>Mobile Apps design</h3>
                <span className="arrow">↗</span>
            </div>
            <div className="speciality-item">
                <div className="speciality-icon"><p>0</p></div>
                <h3>UI/UX design</h3>
                <span className="arrow">↗</span>
            </div>
            <div className="speciality-item">
                <div className="speciality-icon"><p>0</p></div>
                <h3>Website design</h3>
                <span className="arrow">↗</span>
            </div>
            <div className="speciality-item">
                <div className="speciality-icon"><p>0</p></div>
                <h3>Workflow development</h3>
                <span className="arrow">↗</span>
            </div>
            <div className="speciality-item">
                <div className="speciality-icon"><p>0</p></div>
                <h3>Brand identity</h3>
                <span className="arrow">↗</span>
            </div>
            <div className="speciality-item">
                <div className="speciality-icon"><p>0</p></div>
                <h3>Interaction design</h3>
                <span className="arrow">↗</span>
            </div>
          </div>
          <div className="say-hello">
            <p className="say-hello-text">SAY HELLO</p>
            <a href="mailto:hello@henry.com">hello@henry.com</a>
            <span className="arrow">↗</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialities;
