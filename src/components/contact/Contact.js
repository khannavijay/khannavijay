import React, { useState } from 'react';
import './Contact.css';
import { FaEnvelope, FaUser, FaPhone, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending message...' });

    try {
      const response = await fetch('YOUR_AWS_LAMBDA_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Message sent successfully! I will get back to you soon.'
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">Get in Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <FaEnvelope />
                <span>your.email@example.com</span>
              </div>
              <div className="contact-item">
                <FaPhone />
                <span>+1 234 567 890</span>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="input-icon">
                <FaUser />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-icon">
                <FaEnvelope />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-icon">
                <FaPhone />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone"
                />
              </div>
            </div>
            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              <FaPaperPlane /> Send Message
            </button>
            {status.message && (
              <div className={`status-message ${status.type}`}>
                {status.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 