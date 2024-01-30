// About.tsx
import React from 'react';
import '../assets/css/About.css'

const About = () => {
  return (
    <div className="about-container">
      <h1>About EuroCars</h1>
      <p>Welcome to EuroCars, a subsidiary of Turbo Trade. With our roots in Slovenia, we extend the same trusted service and quality of vehicles to a wider audience.</p>
      <h2>Our History</h2>
      <p>EuroCars was established as a child company of Turbo Trade to bring the same dedication to quality and service to a broader market. Building on Turbo Trade's legacy in Slovenia, we are committed to offering an exceptional selection of certified pre-owned vehicles and a superior customer experience.</p>
      <h2>Our Services</h2>
      <p>From expert advice in our showrooms to a comprehensive range of vehicles, we provide everything you need to find your perfect car. Our services include:</p>
      <ul>
        <li>Vehicles sales and delivery</li>
        <li>Long-term rentals</li>
        <li>Financing options</li>
        <li>And more...</li>
      </ul>
      <h2>Mission & Vision</h2>
      <p>Our mission is to ensure every client feels confident and satisfied with their vehicle purchase. We aim to be recognized in the domestic market for providing top-tier services and premium certified vehicles.</p>
      <p>With respect,</p>
      <p>EuroCars ppl</p>
      <img src="/noc.jpg" alt="EuroCars Office" className="about-image"/>
    </div>
  );
};

export default About;
