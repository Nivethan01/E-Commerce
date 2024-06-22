import React from 'react';
import './About.css';
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import handpicked from '../assets/healthcare.png';
import quality from '../assets/quality.png';

const About = () => {
  return (
    <div className="about-container">
      
      <div className="content-section">
        <div className="image-section">
          <div className="image-container">
            <img src={handpicked} alt="Handpicked Healthcare Products" />
            <div className="image-text">
              <h3>Handpicked Healthcare Products</h3>
              <p>Only the best for your health and well-being.</p>
            </div>
          </div>
          <div className="image-container">
            <img src={quality} alt="Top Quality Guaranteed" />
            <div className="image-text">
              <h3>Top Quality Guaranteed</h3>
              <p>Quality you can trust for every purchase.</p>
            </div>
          </div>
        </div>
        <div className="about-details">
          <div className="details">
            <h2>About Us</h2>
            <p>We are dedicated to bringing you the best products at the best prices. Our team carefully selects and tests every item to ensure top quality.</p>
          </div>
          <div className="help">
            <h2>Help & Support</h2>
            <p>Need assistance? Our customer service team is here to help you with any inquiries or issues you may have.</p>
          </div>
          <div className="follow-us">
            <h2>Follow Us</h2>
            <p>Stay updated with our latest products and offers. Follow us on social media.</p>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={facebook} alt="Facebook" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src={twitter} alt="Twitter" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="Instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
