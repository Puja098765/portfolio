
import React from 'react';
import './RelatedPosts.css';

const RelatedPosts = () => {
  const posts = [
    {
      category: 'UI Design',
      date: '03 May 2019',
      title: 'Right-to-left behind development in mobile web design',
    },
    {
      category: 'UI Design',
      date: '03 May 2019',
      title: 'Connect craft: Reading the smart experience',
    },
    {
      category: 'UI Design',
      date: '03 May 2019',
      title: 'Ecoglow: Sustainable skincare a brighter tomorrow',
    },
    {
      category: 'UI Design',
      date: '03 May 2019',
      title: 'Why your client needs a responsive website',
    },
  ];

  return (
    <div className="related-posts-container">
      <div className="related-posts-header">
        <p className="blog-subtitle">Blog</p>
        <h2>Related post</h2>
      </div>
      <div className="related-posts-grid">
        {posts.map((post, index) => (
          <div key={index} className="related-post-card">
            <div className="related-post-image-placeholder"></div>
            <div className="related-post-meta">
              <span>{post.category}</span>
              <span className="dot"></span>
              <span>{post.date}</span>
            </div>
            <h3>{post.title}</h3>
            <a href="#" className="read-more-arrow">
              →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;
