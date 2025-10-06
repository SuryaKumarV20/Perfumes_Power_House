import React from "react";
import "../../styles/Card.css";

const Card = ({ image, title, description, price, rating }) => {
  return (
    <div className="product-card">
      {/* Product Image */}
      <div className="card-img-wrapper">
        <img src={image} alt={title} className="card-img" />
        <button className="wishlist-btn">♡</button>
      </div>

      {/* Product Details */}
      <div className="card-body">
        <h3 className="card-title">{title}</h3>

        {/* Rating */}
        <div className="card-rating">
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i} className={i < rating ? "star filled" : "star"}>
              ★
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="card-desc">{description}</p>

        {/* Price */}
        <p className="card-price">${price}</p>

        {/* Add to Cart Button */}
        <button className="add-to-cart">ADD TO CART</button>
      </div>
    </div>
  );
};

export default Card;
