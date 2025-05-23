import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaCalendarAlt, FaUser, FaTag, FaClock, FaArrowLeft } from 'react-icons/fa';
import { blogPosts } from '../../data/blogData';
import './Blogs.css';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(post => post.id === parseInt(id));

  if (!post) {
    return (
      <div className="blog-post-not-found">
        <h2>Blog post not found</h2>
        <button onClick={() => navigate('/#blogs')} className="back-button">
          <FaArrowLeft /> Back to Blogs
        </button>
      </div>
    );
  }

  return (
    <article className="blog-post">
      <button onClick={() => navigate('/#blogs')} className="back-button">
        <FaArrowLeft /> Back to Blogs
      </button>
      
      <div className="blog-post-header">
        <h1>{post.title}</h1>
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
        <div className="blog-tags">
          {post.tags.map((tag, index) => (
            <span key={index} className="blog-tag">
              <FaTag /> {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="blog-post-image">
        <img src={post.image} alt={post.title} />
      </div>

      <div className="blog-post-content">
        {post.content.map((section, index) => (
          <div key={index} className="blog-section">
            {section.heading && <h2>{section.heading}</h2>}
            <p>{section.text}</p>
          </div>
        ))}
      </div>
    </article>
  );
};

export default BlogPost; 