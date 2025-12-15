import Header from "../components/Header/Header";
import RelatedPosts from "../components/RelatedPosts/RelatedPosts";
import "./Blog_Single_Final.css";
import Footer from "../components/Footer/Footer";

const Blog_Single_Final = () => {
  return (
    <>
      <Header />
      <div className="blog-single-container">
        <div className="blog-single-header">
          <h1>Designing the perfect feature comparison table</h1>
        </div>
        <div className="blog-single-image-placeholder"></div>
        <div className="blog-single-meta">
          <div className="author-info">
            <img src="/path-to-your-image.jpg" alt="Mark Henry" />
            <p>
              Written by
              <span>Mark Henry</span>
            </p>
          </div>
          <div className="category-info">
            <p>
              Category
              <span>User Experience</span>
            </p>
          </div>
          <div className="date-info">
            <p>
              Date
              <span>02/08/2023</span>
            </p>
          </div>
        </div>
        <hr />
        <div className="about-position-section">
          <h2>About the position</h2>
          <p>
            Everyone in my team works towards the samegoal. This enabled our
            teams to ship new ideas and feel more capable. Podcasting
            operational — change management inside of workflows. Completely
            synergize.
          </p>
          <p>
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the
            great explorer of the truth, the master-builder of human
            happiness. No one rejects, dislikes, or avoids pleasure itself
          </p>
        </div>
        <div className="learning-section">
          <h3>1. Learning the basics</h3>
          <p>
            Everyone in my team works towards the samegoal. This enabled our teams to ship new ideas and feel more capable. Podcasting operational — change management inside of workflows. Completely synergize.
          </p>
          <p>
            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself
          </p>
          <h3>2. Learning the basics</h3>
          <p>
            Everyone in my team works towards the samegoal. This enabled our teams to ship new ideas and feel more capable. Podcasting operational — change management inside of workflows. Completely synergize.
          </p>
          <p>
            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself
          </p>
        </div>

        <div className="share-and-tags-section">
            <div className="share-section">
                <span>Share:</span>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-whatsapp"></i>
                <i className="fab fa-linkedin-in"></i>
                <i className="fas fa-link"></i>
                <i className="far fa-heart"></i>
            </div>
            <div className="tags-section">
                <span className="tag">APP</span>
                <span className="tag">DEVELOPMENT</span>
            </div>
        </div>
      </div>
      <RelatedPosts />
      <Footer />
    </>
  );
};

export default Blog_Single_Final;
