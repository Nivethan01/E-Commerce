import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";

const Home = ({ isAuthenticated, userData }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3001/images");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <h1>
            Welcome, {isAuthenticated && userData ? userData.username : "you"}
          </h1>
          <p>Discover the best products curated just for you.</p>
          <a href="#products" className="shop-now-button">View Fashions</a>
        </div>
      </div>

      
    </div>
  );
};

export default Home;
