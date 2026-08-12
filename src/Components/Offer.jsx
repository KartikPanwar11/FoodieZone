import React from 'react';

const Offers = () => {
  const offerList = [
    { id: 1, title: "Weekend Fiesta", desc: "Get 50% OFF up to ₹100 on all Pizzas and Burgers.", code: "WEEKEND50" },
    { id: 2, title: "Desi Delights", desc: "Flat 20% OFF on North Indian Thalis and Malai Chaap.", code: "DESI20" },
    { id: 3, title: "Free Delivery", desc: "No delivery fee on all orders above ₹299.", code: "FREEDEL" },
    { id: 4, title: "Noodle Mania", desc: "Buy 1 Get 1 Free on all Indo-Chinese Paneer Noodles.", code: "BOGONOO" }
  ];

  return (
    <div className="page-container">
      <h1 className="page-title">Current Offers & Coupons</h1>
      <p className="page-subtitle">Apply these codes at checkout to save big on your next meal!</p>
      
      <div className="offers-grid">
        {offerList.map((offer) => (
          <div key={offer.id} className="offer-card">
            <h3>{offer.title}</h3>
            <p>{offer.desc}</p>
            <div className="coupon-code">
              <span>Use Code: </span>
              <strong>{offer.code}</strong>
            </div>
            <button className="copy-btn">Copy Code</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;