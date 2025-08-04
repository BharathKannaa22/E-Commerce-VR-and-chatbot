import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Orderpage.module.css"; // using CSS Module ✅

const OrderConfirmed = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/Home"); // ✅ Corrected to point to Home.js
  };

  return (
    <div className={styles.confirmationWrapper}>
      <div className={styles.confirmationCard}>
        <div className={styles.checkIcon}>✓</div>
        <h3>Hey Chooky,</h3>
        <h2>Your Order is Confirmed!</h2>
        <p>
          We'll send you a shipping confirmation email as soon as your order ships.
        </p>
        <button onClick={handleGoHome}>GO TO HOMEPAGE</button>
      </div>
    </div>
  );
};

export default OrderConfirmed;
