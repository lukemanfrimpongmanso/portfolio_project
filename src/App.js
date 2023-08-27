import './App.css';

import './styles/app-container.scss';
import React, { Fragment, lazy, Suspense } from 'react';
import { items as ProjectItems } from './components/carousel/Projects';

const Navbar = lazy(() => import('./components/Navbar'));
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Carousel = lazy(() => import('./components/carousel/Carousel'));
const SkillsAndTools = lazy(() => import('./components/SkillsAndTools'));
const ContactMe = lazy(() => import('./components/ContactMe'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <Fragment>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />

        <div className="app-container">
          <div id="home">
            <Hero />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="portfolio">
            <Carousel items={ProjectItems} />
            <SkillsAndTools />
          </div>
          <div id="contact">
            <ContactMe />
          </div>

          <Footer />
        </div>
      </Suspense>
    </Fragment>
  );
}

export default App;
