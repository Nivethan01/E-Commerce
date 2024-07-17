import React, { useState } from 'react';
import './ImgSlider.css';

const ImgSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slider">
      <div className="slider-arrow left" onClick={goToPrevious}>
        &#10094;
      </div>
      <div
        className="slider-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="slider-image" key={index}>
            <img src={slide.url} alt={slide.title} />
          </div>
        ))}
      </div>
      <div className="slider-arrow right" onClick={goToNext}>
        &#10095;
      </div>
    </div>
  );
};

export default ImgSlider;
