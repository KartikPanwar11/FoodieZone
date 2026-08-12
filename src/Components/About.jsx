import React from 'react';

const About = () => {
  return (
    <div className="page-container">
      <div className="about-header">
        <h1>About FoodieZone</h1>
        <p>Delivering happiness, one meal at a time.</p>
      </div>
      <div className="about-content">
        <div className="about-text">
          <h3>Our Story</h3>
          <p>
            FoodieZone started with a simple mission: to connect food lovers with the best local flavors. Whether you are craving a hearty North Indian thali, sizzling Indo-Chinese paneer noodles, or quick fast food, we bring it straight to your door.
          </p>
          <p>
            Currently serving hungry customers across Bulandshahr, Noida, and Greater Noida, we partner with top-rated local restaurants and quick-service chains to ensure your food arrives hot, fresh, and on time. 
          </p>
          <h3>Why Choose Us?</h3>
          <ul>
            <li>Lightning-fast delivery with live tracking.</li>
            <li>Curated selection of the best local eateries.</li>
            <li>Exclusive discounts and daily offers.</li>
          </ul>
        </div>
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1526367790999-0150786686a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Delivery Rider" />
        </div>
      </div>
    </div>
  );
};

export default About;