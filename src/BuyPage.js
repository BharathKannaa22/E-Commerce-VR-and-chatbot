import React from "react";
import { useNavigate } from "react-router-dom";
import "./buy1page.css";
import shirtImg from "./assets/men2.jpg"; // Replace with actual image

const BuyPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // 💥 Prevent page refresh
    navigate("/order"); // ✅ Redirect to confirmation/order page
  };

  return (
    <div className="buy-page">
      {/* Left: Form Section */}
      <div className="form-section">
        <h2>Order Details</h2>

        <div className="product-info">
          <h3>THE BEAR HOUSE Checked Slim Fit Shirt</h3>
          <p>Color: brown</p>
          <p className="price">₹449</p>
        </div>

        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input type="text" placeholder="Enter your name" required />

          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Phone Number</label>
          <input type="tel" placeholder="Enter your phone number" required />

          <label>Street Address</label>
          <input type="text" placeholder="123 Main St" required />

          <label>City</label>
          <input type="text" placeholder="Enter your city" required />

          <label>State</label>
          <input type="text" placeholder="Enter your state" required />

          <label>ZIP Code</label>
          <input type="text" placeholder="Enter ZIP" required />

          <label>Delivery Instructions</label>
          <textarea placeholder="(Optional) e.g. Leave near gate" />

          <label>Payment Method</label>
          <select required>
            <option value="">Select</option>
            <option>Cash on Delivery</option>
            <option>UPI</option>
            <option>Credit / Debit Card</option>
          </select>

          <button className="submit" type="submit">
            Place Order
          </button>
        </form>
      </div>

      {/* Right: Image Section */}
      <div className="image-section">
        <img src={shirtImg} alt="Shirt Preview" />
      </div>
    </div>
  );
};

export default BuyPage;
