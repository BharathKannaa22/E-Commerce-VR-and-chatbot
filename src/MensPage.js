import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./MensPage.css";
import MensImg1 from "../src/assets/Homemen2.png";
import MensImg2 from "../src/assets/Homemen3.png";
import MensImg3 from "../src/assets/Homemen4.png";
import MensImg4 from "../src/assets/Homemen5.png";

const MensPage = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="mens-page">
      <h1 className="mens-title">
        We are digital <br />
        meets fashion
      </h1>

      <p className="mens-description">
        Explore the latest trends in men's fashion. From casual wear <br /> to
        formal styles, we've got everything for your wardrobe.
      </p>

      <div className="men">
        <button className="shop-btn">Explore Now ⇓</button>
      </div>

      <h1 className="new">Trendings</h1>

      {/* Clickable Dress 1 Container */}
      <div
        className="dress1-container"
        onClick={() => navigate("/dress-details")}
      >
        <img className="image1" src={MensImg1} alt="Fashion outfit" />
        <h1 className="des1">
          QUELEA <br /> <p>Men Shirt with Band Collar </p>
        </h1>
        <h2 className="price1">₹.549</h2>
      </div>

      {/* Clickable Dress 2 Container */}
      <div
        className="dress2-container"
        onClick={() => navigate("/dress-details2")}
      >
        <img className="image2" src={MensImg2} alt="Fashion outfit" />
        <h1 className="des2">
          THE BEAR HOUSE <br /> Checked Slim Fit Shirt
        </h1>
        <h2 className="price2">₹.449</h2>
      </div>

      <div
        className="dress3-container"
        onClick={() => navigate("/dress-details3")}
      >
        <img className="image3" src={MensImg3} alt="Fashion outfit" />
        <h1 className="des3">
          DENNISLINGO PREMIUM <br /> Spread Collar Slim Fit Shirt
        </h1>
        <h2 className="price3">₹.699</h2>
      </div>

      <div className="dress4-container">
        <img className="image4" src={MensImg4} alt="Fashion outfit" />
        <h1 className="des4">
          TRYBUY.IN <br /> Men Striped Regular Fit Shirt
        </h1>
        <h2 className="price4">₹.799</h2>
      </div>
    </div>
  );
};

export default MensPage;
