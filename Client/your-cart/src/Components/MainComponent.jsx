import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

const MainComponent = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Check if token exists in local storage
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const handleLogin = (token) => {
    setToken(token);
    localStorage.setItem("token", token); // Store token in local storage
  };

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem("token"); // Remove token from local storage
  };

  return (
    <div>
      <Navbar isAuthenticated={!!token} onLogout={handleLogout} />
      {/* Pass token and logout handler to Navbar */}
    </div>
  );
};

export default MainComponent;
