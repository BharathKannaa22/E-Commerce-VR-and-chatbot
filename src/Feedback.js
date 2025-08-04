import React from "react";
import "./ThankYouPage.css";

const ThankYouPage = () => {
  return (
    <div className="thankyou-container">
      <div className="thankyou-card">
        <h1>🎀 Thank You For Your Feedback! 🎀</h1>
        <p>
          Your feedback means the world to us 💖<br />
          We’ll use your thoughts to make things even more magical ✨
        </p>
        <div className="hearts">💗 💕 💞 💘 💝</div>
      </div>

      {/* Order Form Section */}
      <div id="order" className="order-section">
        <h1 className="title1">FEEDBACK</h1>
        <form
          id="my-form"
          action="https://formspree.io/f/xovqnney"
          method="POST"
          className="Feedback-form"
        >
          <input
            type="text"
            name="name"
            className="inp_box"
            placeholder="Name"
            required
          />
          <input
            type="email"
            name="email"
            className="inp_box"
            placeholder="Email"
            required
          />
         
          <input
            type="text"
            name="Feedback"
            className="inp_box"
            placeholder="Give feedback"
            required
          />
          <textarea
            name="address"
            className="inp_box text_area"
            placeholder="Address"
            required
          ></textarea>
          <button type="submit" className="btn2">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ThankYouPage;
