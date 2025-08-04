import React, { useState } from "react";
import { FaStar } from "react-icons/fa"; // Import FontAwesome stars
import "./DressDetails2.css"; // Import CSS file for styling
import MensImg1 from "../src/assets/men2.jpg"; // Replace with actual image path
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShirt } from "@fortawesome/free-solid-svg-icons"; // or any icon you want
import { useNavigate } from "react-router-dom";

const DressDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("blue");
  const [selectedSize, setSelectedSize] = useState("M");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);

  const navigate = useNavigate(); // 🔥 For navigation

  const handleBuyNow = () => {
    navigate("/buy"); // 👈 change this to the new fresh buy page
  };

  return (
    <div className="dress-details">
      {/* Left: Product Image */}
      <div className="colored-container">
        <img src={MensImg1} alt="QUELEA Men Shirt" className="product-image" />
      </div>

      {/* Right: Product Details */}
      <div className="details-container">
        <h1 className="product-title">THE BEAR HOUSE Checked Slim Fit Shirt</h1>
        <h2 className="product-price">₹449</h2>
        <h3 className="product-descrip">
          Designed with the modern man in mind, it offers a seamless blend of sophistication and comfort. Whether you're stepping into a casual gathering or making a lasting impression at a formal event, its timeless design ensures that you always stand out with confidence.
        </h3>
        <h4>
          Virtual try on
          <a
            href="https://lens.snap.com/experience/1d221b7d-6e5c-4508-8829-d83eb7e6af4f"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginLeft: "8px", textDecoration: "none" }}
          >
            <button
              style={{ border: "none", background: "none", cursor: "pointer" }}
            >
              <FontAwesomeIcon icon={faShirt} size="lg" />
            </button>
          </a>
        </h4>

        {/* ⭐ Rating Stars Section */}
        <div className="rating-section">
          <p>Customer Rating:</p>
          <div className="rating-stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                size={25}
                color={(hover || rating) >= star ? "#FFD700" : "#E4E5E9"}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(null)}
                style={{ cursor: "pointer", transition: "color 0.2s" }}
              />
            ))}
            <span className="rating-value"> {rating} / 5</span>
          </div>
        </div>

        {/* Color Selection */}
        <div className="color-section">
          <p>Select Color <br /> available colors</p>
          <div className="color-options">
            <span
              className={`color-circle blue ${selectedColor === "blue" ? "selected" : ""}`}
              onClick={() => setSelectedColor("blue")}
            ></span>
            <span
              className={`color-circle green ${selectedColor === "green" ? "selected" : ""}`}
              onClick={() => setSelectedColor("green")}
            ></span>
            <span
              className={`color-circle pink ${selectedColor === "pink" ? "selected" : ""}`}
              onClick={() => setSelectedColor("pink")}
            ></span>
          </div>
        </div>

        {/* Size Selection */}
        <div className="size-section">
          <p>Select Size</p>
          <div className="size-options">
            {["S", "M", "L", "XL", "XXL", "3XL"].map((size) => (
              <button
                key={size}
                className={`size-btn ${selectedSize === size ? "selected" : ""}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity Selection */}
        <div className="quantity-section">
          <p>Quantity</p>
          <div className="quantity-selector">
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>
        </div>

        {/* Buttons */}
        <div className="button-section">
          <button className="add-to-cart">Add to Cart</button>
          <button className="buy-now" onClick={handleBuyNow}>Buy Now</button>
        </div>

        {/* Description */}
        <div className="description-section">
          <h3>Description</h3>
          <p>Crafted for the modern man, this shirt combines timeless elegance with unparalleled comfort. Made from premium, breathable fabric, it offers a soft touch and a perfect fit. Featuring a sleek design with subtle details, this shirt is versatile enough for both casual outings and semi-formal events. Whether you pair it with jeans for a laid-back look or dress it up with trousers for a more refined style, it promises to be a wardrobe essential for every occasion.</p>
        </div>

        {/* Shipping & Returns */}
        <div className="shipping-section">
          <h3>Shipping & Returns</h3>
          <p>Free shipping for orders over ₹999. Hassle-free returns within 15 days.</p>
        </div>

        {/* Details */}
        <div className="details-section">
          <h3>Details</h3>
          <p>Material: Cotton Blend | Fit: Slim Fit | Machine Washable</p>
        </div>
      </div>
    </div>
  );
};

export default DressDetails;
