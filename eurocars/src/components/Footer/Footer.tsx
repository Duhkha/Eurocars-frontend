import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h5>OFFERINGS</h5>
          <ul>
            <li>Passenger Cars</li>
            <li>Vehicle Delivery</li>
            <li>Private Sales</li>
            <li>Vehicles in Stock</li>
            <li>Motorcycles</li>
          </ul>
        </div>
        <div className="footer-section">
          <h5>NAVIGATION</h5>
          <ul>
            <li>Long-term Rental</li>
            <li>Service</li>
            <li>About Us</li>
            <li>Warranty</li>
          </ul>
        </div>
        <div className="footer-section">
          <h5>LOCATION: SARAJEVO</h5>
          <p>Some address 123</p>
          <h5>SALES:</h5>
          <p>info@eurocars.com</p>
          <h5>SERVICE:</h5>
          <p>service@eurocars.com</p>
        </div>
        <div className="footer-section">
          <h5>LOCATION: CAZIN</h5>
          <p>Another address 456</p>
          <p>Phone: +387 66/805-900</p>
        </div>
        <div className="footer-section">
          <img src="/logo.PNG" alt="Eurocars" className="logo-small" />
          <p>Follow us on <a href="http://facebook.com">Facebook</a></p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Call us: +387 66/805-901 | Email: info@eurocars.com</p>
        <p>Designed & Developed by: Ismar</p>
      </div>
    </footer>
  );
};

export default Footer;
