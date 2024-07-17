import React from 'react';
import './Brands.css';
import brand1 from '../assets/BrandList/Allen Solly.jpeg';
import brand2 from '../assets/BrandList/otto.jpg';
import brand3 from '../assets/BrandList/Wrangler.jpg';
import brand4 from '../assets/BrandList/Nike.jpeg';
import brand5 from '../assets/BrandList/Adidas.jpeg';
import brand6 from '../assets/BrandList/Peter England.jpeg';


const Brands = () => {
  const brands = [
    { url: brand1, name: 'Brand 1' },
    { url: brand2, name: 'Brand 2' },
    { url: brand3, name: 'Brand 3' },
    { url: brand4, name: 'Brand 4' },
    { url: brand5, name: 'Brand 5' },
    { url: brand6, name: 'Brand 6' },


  ];

  return (
    <div className="brands-container">
      <h1>Brands</h1>
      <div className="brands-list">
        {brands.map((brand, index) => (
          <div className="brand-item" key={index}>
            <img src={brand.url} alt={brand.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
