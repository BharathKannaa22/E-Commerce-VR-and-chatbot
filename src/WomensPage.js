import React, { useState } from "react";
import { FaStar } from "react-icons/fa"; // Import FontAwesome stars
import "./DressDetails.css"; // Import CSS file for styling
import MensImg1 from "../src/assets/Homewomen.jpeg"; // Replace with actual image path
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShirt } from "@fortawesome/free-solid-svg-icons"; // Shirt icon
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify"; // Import toast
import "react-toastify/dist/ReactToastify.css"; // Toastify styles

const DressDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("blue");
  const [selectedSize, setSelectedSize] = useState("M");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);

  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate("/checkout");
  };

  return (
    <div className="dress-details">
      {/* Left: Product Image */}
      <div className="colored-container">
        <img src={MensImg1} alt="QUELEA Men Shirt" className="product-image" />
      </div>

      {/* Right: Product Details */}
      <div className="details-container">
        <h1 className="product-title">Crimson Chic Houndstooth</h1>
        <h2 className="product-price">₹2799</h2>
        <h3 className="product-descrip">
          Turn heads in this bold and stylish Crimson Chic Houndstooth Co-ord
          Set — a fierce fusion of elegance and edge. Featuring a sleeveless
          high-neck overlay with a dramatic front slit and matching fitted pants
          underneath, this set is designed to flatter your silhouette and add
          effortless sophistication to your look.
        </h3>

        <h4>
          Virtual try on
          <a
            href="https://lens.snap.com/experience/3ef294f1-26a5-4606-8d7d-71b9d0e01c58"
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
          <p>
            Select Color <br /> available colors
          </p>
          <div className="color-options">
            <span
              className={`color-circle blue ${
                selectedColor === "blue" ? "selected" : ""
              }`}
              onClick={() => setSelectedColor("blue")}
            ></span>
            <span
              className={`color-circle green ${
                selectedColor === "green" ? "selected" : ""
              }`}
              onClick={() => setSelectedColor("green")}
            ></span>
            <span
              className={`color-circle pink ${
                selectedColor === "pink" ? "selected" : ""
              }`}
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
                className={`size-btn ${
                  selectedSize === size ? "selected" : ""
                }`}
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
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
              -
            </button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>
        </div>

        {/* Buttons */}
        <div className="button-section">
          <button
            className="add-to-cart"
            onClick={() => {
              toast.success("🛒 Added to cart!", {
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
              });
            }}
          >
            Add to Cart
          </button>

          <button className="buy-now" onClick={() => navigate("/womenbuy")}>Buy Now</button>
        </div>

        {/* Description */}
        <div className="description-section">
          <h3>Description</h3>
          <p>Stylish and comfortable dress, perfect for parties.</p>
        </div>

        {/* Shipping & Returns */}
        <div className="shipping-section">
          <h3>Shipping & Returns</h3>
          <p>
            Free shipping for orders over ₹999. Hassle-free returns within 15
            days.
          </p>
        </div>

        {/* Details */}
        <div className="details-section">
          <h3>Details</h3>
          <p>Material: Cotton Blend | Fit: Slim Fit | Machine Washable</p>
        </div>
      </div>

      {/* 🥰 Toast Container - must be added once */}
      <ToastContainer />
    </div>
  );
};

export default DressDetails;
