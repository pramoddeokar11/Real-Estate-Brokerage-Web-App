import React from "react";
import "../styles/HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-text">
          <h1 className="home-title">Welcome to</h1>
          <h1 className="home-title1">EstateEase</h1>
          <h2 className="home-subtitle">Your Gateway to Smart Property Deals</h2>
          <p className="home-description">
            Discover a seamless experience in buying, selling, or renting properties.
            EstateEase offers curated listings, expert advice, and tools to make real estate simple, fast, and transparent.
          </p>
        </div>
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80"
            alt="Real Estate Banner"
          />
        </div>
      </section>

      <section className="features-section">
        <div className="feature-card">
          <h3>🏠 Buy a Home</h3>
          <p>Browse verified listings, compare prices, and find your dream home in just a few clicks.</p>
        </div>
        <div className="feature-card">
          <h3>🏢 Rent a Property</h3>
          <p>Rent a property that matches your lifestyle, location, and budget preferences.</p>
        </div>
        <div className="feature-card">
          <h3>💼 Sell with Ease</h3>
          <p>List your property quickly and get genuine leads through our intelligent match system.</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
