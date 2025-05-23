import React from 'react';
import { Link } from 'react-router-dom';
import './Blogs.css';
import { FaCalendarAlt, FaUser, FaTag, FaClock } from 'react-icons/fa';
import { blogPosts } from '../../data/blogData';

const Blogs = () => {
  return (
    <section id="blogs" className="blogs-section">
      <div className="blogs-container">
        <h2 className="section-title">Latest Blog Posts</h2>
        <div className="blogs-grid">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-author">
                    <FaUser /> {post.author}
                  </span>
                  <span className="blog-date">
                    <FaCalendarAlt /> {post.date}
                  </span>
                  <span className="blog-read-time">
                    <FaClock /> {post.readTime}
                  </span>
                </div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.content[0].text}</p>
                <div className="blog-tags">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="blog-tag">
                      <FaTag /> {tag}
                    </span>
                  ))}
                </div>
                <Link to={`/blog/${post.id}`} className="read-more">
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs; 