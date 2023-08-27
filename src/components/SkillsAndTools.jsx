/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Fragment } from 'react';
import '../styles/skillsAndTools.scss';
import Image1 from '../assets/frontend.png';
import Image2 from '../assets/backendDeveloper.png';
import Image3 from '../assets/uxDesign.png';

const SkillsAndTools = () => {
  return (
    <Fragment>
      <h2 className="title">Skills</h2>
      <div className="main-container">
        <div className="content-container top">
          <img src={Image1} />
          <h1>Frontend Development</h1>
          <p>
            Diving deep into the world of frontend for years, I've honed a craft
            that melds art with functionality. My expertise spans React and
            JavaScript, ensuring websites that aren't just visually captivating,
            but also seamlessly interactive.
          </p>
        </div>
        <div className="bottom">
          <div className="content-container left">
            <img src={Image2} alt="Left Image Description" />
            <h1>Backend Developemnt</h1>
            <p>
              Navigating the backbone of applications, my experience in C# and
              Python empowers me to construct robust and dynamic server-side
              solutions. My backend expertise guarantees a solid foundation for
              every digital endeavor.
            </p>
          </div>
          <div className="content-container right">
            <img src={Image3} alt="Right Image Description" />
            <h1>UI/UX Design</h1>
            <p>
              In the realm of UX, I craft intuitive and user-centric designs. My
              proficiency with tools like Figma allows me to create experiences
              that captivate, engage, and resonate, ensuring every interaction
              feels natural and delightful.
            </p>
          </div>
        </div>
      </div>
      <div class="tools-items">
        <h2>Tools</h2>
        <div class="skills-item-container">
          <div class="skill-item">
            <label>Javascript</label>
            <div class="skill-bar">
              <div class="fill" style={{ width: '75%' }}></div>
            </div>
          </div>
          <div class="skill-item">
            <label>React</label>
            <div class="skill-bar">
              <div class="fill" style={{ width: '90%' }}></div>
            </div>
          </div>
          <div class="skill-item">
            <label>Python</label>
            <div class="skill-bar">
              <div class="fill" style={{ width: '70%' }}></div>
            </div>
          </div>
          <div class="skill-item">
            <label>C#</label>
            <div class="skill-bar">
              <div class="fill" style={{ width: '60%' }}></div>
            </div>
          </div>
          <div class="skill-item">
            <label>CSS</label>
            <div class="skill-bar">
              <div class="fill" style={{ width: '90%' }}></div>
            </div>
          </div>
          <div class="skill-item">
            <label>Google Cloud</label>
            <div class="skill-bar">
              <div class="fill" style={{ width: '70%' }}></div>
            </div>
          </div>
          <div class="skill-item">
            <label>Azure</label>
            <div class="skill-bar">
              <div class="fill" style={{ width: '60%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SkillsAndTools;
