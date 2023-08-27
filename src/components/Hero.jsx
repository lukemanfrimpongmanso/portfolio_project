import React from 'react';
import '../styles/hero.scss';
import Image from '../assets/hero.png';
import Image2 from '../assets/linkeding.png';
import Image3 from '../assets/github.png';
import cv from '../assets/lukemanFrimpongCv.docx';

function Hero() {
  return (
    <section>
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Hello Welcome, I'm Lukeman</h1>
          <p className="hero-subtitle">
            Please scroll down to know more about me
          </p>
          <button className="contact-button">Contact Me </button>
          <a href={cv} download={cv}>
            <button className="contact-button cv" fileURL={cv}>
              Download CV
            </button>
          </a>
        </div>

        <div className="hero-badge">
          <img src={Image} alt="3D Badge" />
          <div>FULLSTACK DEVELOPER</div>
        </div>
      </div>
      <div className="scroll-and-icon">
        <div className="socials">
          <a href="https://www.linkedin.com/in/lukeman-frimpong-306bb3212/">
            <span className="icon">
              linkedin
              <img src={Image2} alt="" srcset="" />
            </span>
          </a>

          <a href="https://github.com/lukemanfrimpongmanso">
            <span className="icon">
              <span className="icon">
                github
                <img src={Image3} alt="" srcset="" />
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
