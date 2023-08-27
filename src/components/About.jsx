import React from 'react';
import '../styles/about.scss';
import Image from '../assets/aboutme.png';

const About = () => {
  return (
    <div className="about-container">
      <div className="profile-image">
        <img src={Image} alt="" />
      </div>
      <div className="about-content">
        <h2 className="title">About me</h2>
        <p>
          With React & JavaScript in my quiver, I transform pixels into
          mesmerizing web tapestries. Figma is my trusted wand for design
          sorcery. C# fuels my endeavors, ensuring every digital realm I
          architect stands tall and unyielding. Dive into my portfolio and
          embark on a journey of technological marvels. Just like a traveler
          navigating diverse landscapes, I seamlessly maneuver through Azure and
          Google Cloud, ensuring my projects always find their perfect home.
        </p>
      </div>
    </div>
  );
};

export default About;
