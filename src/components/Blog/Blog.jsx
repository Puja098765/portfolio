import React from 'react';
import './Blog.css';

const blogPosts = [
  {
    category: 'UI Design',
    date: '03 May 2019',
    title: 'Right-to-left behind development in mobile web design',
    link: '#',
  },
  {
    category: 'UI Design',
    date: '03 May 2019',
    title: 'Connect craft: Reading the smart experience',
    link: '#',
  },
  {
    category: 'UI Design',
    date: '03 May 2019',
    title: 'Ecoglow: Sustainable skincare a brighter tomorrow',
    link: '#',
  },
  {
    category: 'UI Design',
    date: '03 May 2019',
    title: 'How to build a ecommerce user friendly website',
    link: '#',
  },
  {
    category: 'UI Design',
    date: '03 May 2019',
    title: 'Designing the perfect feature comparison table',
    link: '/blog-single',
  },
  {
    category: 'UI Design',
    date: '03 May 2019',
    title: 'Right-to-left behind development in mobile web design',
    link: '#',
  },
  {
    category: 'UI Design',
    date: '03 May 2019',
    title: 'Choose the best option for making a...',
    link: '#',
  },
  {
    category: 'UI Design',
    date: '03 May 2019',
    title: 'Why your client responsive',
    link: '#',
  },
];

const Blog = () => {
  return (
    <section className="blog-section">
      <div className="container">
        <div className="blog-header">
          <p className="blog-subtitle">Blog</p>
          <h1 className="blog-title">My blog post</h1>
        </div>
        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <div className="blog-card" key={index}>
              <div className="blog-card-image"></div>
              <div className="blog-card-content">
                <p className="blog-card-meta">
                  <span>{post.category}</span> • <span className='blog-card-date'>{post.date}</span>
                </p>
                <h3 className="blog-card-title">{post.title}</h3>
                <a href={post.link} className="blog-card-link">
                  ➔
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
