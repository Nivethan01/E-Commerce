import React from 'react';
import './Home.css';
import ImgSlider from './ImgSlider';
import Brands from './Brands';
import img1 from '../assets/Slider_images/slide1.png';
import img2 from '../assets/Slider_images/slide2.jpeg';
import img3 from '../assets/Slider_images/slide3.jpeg';
import img4 from '../assets/Slider_images/slide4.jpeg';

const Home = () => {
  const slides = [
    { url: img1, title: 'slide1' },
    { url: img2, title: 'slide2' },
    { url: img3, title: 'slide3' },
    { url: img4, title: 'slide4' },
  ];

  return (
    <div className="home-container">
      <div className="home-slider">
        <ImgSlider slides={slides} />
      </div>
      <Brands />
    </div>
  );
};

export default Home;
