import React, { useState, useEffect } from "react";
import axios from "axios";
import heartIcon from "../assets/heart.png";
import cartIcon from "../assets/cart.png";
import "./Product.css";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the server
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
    <div id="products" className="products-list">
      <h2>Collections</h2>
      <div className="product-cards">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <div className="product-image">
              <img
                src={`http://localhost:3001/image/${product.image.data}`}
                alt={product.name}
              />
            </div>
            <div className="product-details">
              <div className="product-header">
                <div className="product-brand">{product.brand}</div>
                <div className="product-price">&#8377;{product.price}</div>
              </div>
              <div className="product-name">{product.name}</div>
              <div className="product-icons">
                <img src={heartIcon} alt="Favorite" className="favorite-icon" />
                <img src={cartIcon} alt="Add to Cart" className="cart-icon" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
