// CarouselItem.js

import React from 'react';

const CarouselItem = ({ title, link, image, isActive }) => {
    const itemStyle = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <div className={`carousel-item ${isActive ? 'active' : ''}`} style={itemStyle}>
            <h3>{title}</h3>
            <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
    );
};

export default CarouselItem;
