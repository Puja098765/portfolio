import "./Testimonials.css";

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="testimonials-content">
          <div className="testimonials-header">
            <p className="testimonials-subtitle">Testimonial</p>
            <h2>
              <span className="highlight-c-wrapper">
                <span className="highlight-c">C</span>
              </span>lient
              <br />
              feedback
            </h2>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="quote-icon">”</p>
              <p className="testimonial-text">
                “Energistically build alternative scenarios via cross-unit applications. Credibly exploit one-to-one strategic theme areas and clicks-and-mortar services”
              </p>
              <div className="author-container">
                <p className="testimonial-author">Jhon Smith</p>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="quote-icon">”</p>
              <p className="testimonial-text">
                “Unleash energistically build alternative scenarios via cross-unit build efficient initiatives for distinctive vortals. Synergistically strategize via adaptiv”
              </p>
              <div className="author-container">
                <p className="testimonial-author">Jhon Smith</p>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="quote-icon">”</p>
              <p className="testimonial-text">
                “Aliquam vehicula nunc facilisis tincidunt feugiat. Pellentesque sed viverra nisi. Fusce et laoreet augue. Quisque pretium, ligula lectus semper urna. Aliquam vehicula.”
              </p>
              <div className="author-container">
                <p className="testimonial-author">Jhon Smith</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="client-logos-wrapper">
        <div className="client-logos">
          <p>Matrixian</p>
          <p>Google</p>
          <p>factual</p>
          <p>airbnb</p>
          <p>CHASE</p>
          <p>logitech</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
