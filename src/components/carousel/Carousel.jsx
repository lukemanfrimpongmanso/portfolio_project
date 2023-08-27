import React, { Fragment, useState } from 'react';
import '../../styles/carousel.scss';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  const currentItem = items[currentIndex];

  return (
    <Fragment>
      <h2 className="title">Projects</h2>

      <div className="carousel-container">
        <button className="nav-btn prev-btn" onClick={handlePrev}>
          Prev
        </button>
        <div className="card">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="card-image"
          />
          <div className="card-content">
            <h3>{currentItem.title}</h3>
            {currentItem.description && <p>{currentItem.description}</p>}
            <h6 className="tools">{currentItem.tools}</h6>
            <a
              href={currentItem.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
        <button className="nav-btn next-btn" onClick={handleNext}>
          Next
        </button>
      </div>
    </Fragment>
  );
};

export default Carousel;
