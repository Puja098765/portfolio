import "./ProjectSingle.css";

const ProjectSingle = () => {
  return (
    <section className="project-single-section">
      <div className="container">
        <div className="project-header-container">
          <div className="project-single-header">
            <div className="project-single-header-info">
              <span>UI Design</span>
              <span>03 May 2019</span>
            </div>
            <h1>Mendero fintech dashboard design</h1>
          </div>
          <div className="project-single-details">
            <div className="detail-item">
              <p className="detail-title">Client</p>
              <p className="detail-value">Mashrom</p>
            </div>
            <div className="detail-item">
              <p className="detail-title">Category</p>
              <p className="detail-value">User Experience</p>
            </div>
            <div className="detail-item">
              <p className="detail-title">Tools</p>
              <p className="detail-value">Figma, Webflow</p>
            </div>
            <div className="detail-item">
              <p className="detail-title">Start date</p>
              <p className="detail-value">09/01/2020</p>
            </div>
            <div className="detail-item">
              <p className="detail-title">End date</p>
              <p className="detail-value">09/01/2020</p>
            </div>
          </div>
        </div>
        <div className="project-single-image"></div>
        <div className="project-single-overview">
          <h2>Overview</h2>
          <p>
            Minimalism combined with elements of french typography and brutalism helped us to realize the site exactly as we imagined with the clients at the beginning: visually restrained, but stylish. Informative and pleasant to use, with an elegant aftertaste of a serious financial institution. Combined with elements of french typography and visually restrained, but stylish. Informative and pleasant to use, with an elegant aftertaste of a serious financial institutional client, and close collaboration.
          </p>
          <p>
            That is where i come in. A lover of words, a wrangler of copy. Here to create copy that not only reflects who you are and what you stand for, but words that truly land with those that read them, calling your audience in and making them want more.
          </p>
          <ul>
            <li>Advantarge</li>
            <li>Accont</li>
            <li>Market</li>
            <li>SoaS startups</li>
          </ul>
        </div>
        <div className="project-single-typography">
          <h2>Typography</h2>
          <p>The basic idea was to find a balance between the thin, wispy sans-serif used to indicate a ‘futuristic’ tone, and a bold, masculine font synonymous with ‘construction’. We came up with something in the middle, leaning towards lighter-weighted fonts, but still with a hint of that blocky ‘construction’ vibe. We use Chaney for general display and when we want to drive attention to the content, and the technical and geometric Sora font for the body copy and paste overall hierachy.</p>
        </div>
        <div className="project-single-images-grid">
          <div className="grid-image"></div>
          <div className="grid-image"></div>
        </div>
        <div className="project-single-conclusion">
          <h2>Conclusion</h2>
          <div className="conclusion-text-grid">
            <p>The basic idea was to find a balance between the thin, wispy sans-serif used to indicate a ‘futuristic’ tone, and a bold, masculine font synonymous with ‘construction’. We came up with something in the middle, leaning towards lighter-weighted fonts, but still with a hint of that blocky ‘construction’ vibe. We use Chaney for general display and when we want to drive attention to the content, and the technical and geometric Sora font for the body copy and paste overall hierachy.</p>
            <p>The basic idea was to find a balance between the thin, wispy sans-serif used to indicate a ‘futuristic’ tone, and a bold, masculine font synonymous with ‘construction’. We came up with something in the middle, leaning towards lighter-weighted fonts, but still with a hint of that blocky ‘construction’ vibe. We use Chaney for general display and when we want to drive attention to the content, and the technical and geometric Sora font for the body copy and paste overall hierachy.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSingle;
