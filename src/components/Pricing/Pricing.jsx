import "./Pricing.css";

const Pricing = () => {
  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-container">
        <div className="pricing-header">
          <div className="pricing-title-wrapper">
            <p className="pricing-subtitle">Pricing</p>
            <h2>
              Stay chill and
              <br />
              pick your plan
              <span className="highlight-plan-wrapper">
                <span className="highlight-plan"></span>
              </span>
            </h2>
          </div>
          <a href="#" className="btn-contact-custom">
            Contact for Custom Project <span>↗</span>
          </a>
        </div>
        <div className="pricing-grid">
          <div className="pricing-card">
            <div className="pricing-card-header">
              <p>Basic</p>
              <p className="price">$48/h</p>
            </div>
            <div className="pricing-card-body">
              <h2>20 hrs</h2>
              <p>10 hours per week</p>
            </div>
            <a href="#" className="pricing-arrow">
            ↗
            </a>
          </div>
          <div className="pricing-card">
            <div className="pricing-card-header">
              <p>Premium</p>
              <p className="price">$60/h</p>
            </div>
            <div className="pricing-card-body">
              <h2>30 hrs</h2>
              <p>15 hours per week</p>
            </div>
            <a href="#" className="pricing-arrow">
            ↗
            </a>
          </div>
          <div className="pricing-card">
            <div className="pricing-card-header">
              <p>Platinum</p>
              <p className="price">$80/h</p>
            </div>
            <div className="pricing-card-body">
              <h2>40 hrs</h2>
              <p>20 hours per week</p>
            </div>
            <a href="#" className="pricing-arrow">
            ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
