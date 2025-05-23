import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './BlogTemplate.css';
import { FaCalendarAlt, FaUser, FaTag, FaClock } from 'react-icons/fa';
import { blogPosts } from '../../data/blogData';

const BlogTemplate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blogData = blogPosts.find(post => post.id === parseInt(id));

  if (!blogData) {
    return (
      <div className="blog-not-found">
        <h2>Blog post not found</h2>
        <button onClick={() => navigate('/')}>Return to Home</button>
      </div>
    );
  }

  const {
    title,
    author,
    date,
    readTime,
    tags,
    content,
    image,
    relatedPosts
  } = blogData;

  const relatedBlogs = relatedPosts
    .map(id => blogPosts.find(post => post.id === id))
    .filter(Boolean);

  return (
    <article className="blog-template">
      <div className="blog-header">
        <div className="blog-meta">
          <span className="blog-author">
            <FaUser /> {author}
          </span>
          <span className="blog-date">
            <FaCalendarAlt /> {date}
          </span>
          <span className="blog-read-time">
            <FaClock /> {readTime}
          </span>
        </div>
        <h1 className="blog-title">{title}</h1>
        <div className="blog-tags">
          {tags.map((tag, index) => (
            <span key={index} className="blog-tag">
              <FaTag /> {tag}
            </span>
          ))}
        </div>
      </div>

      {image && (
        <div className="blog-featured-image">
          <img src={image} alt={title} />
        </div>
      )}

      <div className="blog-content">
        {content.map((section, index) => {
          switch (section.type) {
            case 'paragraph':
              return <p key={index}>{section.text}</p>;
            case 'heading':
              return <h2 key={index}>{section.text}</h2>;
            case 'subheading':
              return <h3 key={index}>{section.text}</h3>;
            case 'code':
              return (
                <pre key={index}>
                  <code>{section.code}</code>
                </pre>
              );
            case 'list':
              return (
                <ul key={index}>
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              );
            default:
              return null;
          }
        })}
      </div>

      {relatedBlogs.length > 0 && (
        <div className="related-posts">
          <h3>Related Posts</h3>
          <div className="related-posts-grid">
            {relatedBlogs.map((post) => (
              <div key={post.id} className="related-post-card">
                <img src={post.image} alt={post.title} />
                <h4>{post.title}</h4>
                <p>{post.content[0].text}</p>
                <button onClick={() => navigate(`/blog/${post.id}`)}>
                  Read More
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </article>
  );
};

export default BlogTemplate; 