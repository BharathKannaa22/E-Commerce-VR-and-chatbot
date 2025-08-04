import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./styles.css"; // Import CSS

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("User logged in!");
    navigate("/home"); // Redirects to Home after login
  };

  return (
    <div className="login-container">
      {/* Left Image Section */}
      <div className="image-section"></div>  

      {/* Login Box */}
      <div className="login-box">
        <h1>Raymond</h1>
        <h2>Welcome back!</h2>
        <h3>Please enter your details</h3>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />
          
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" required />
          
          <button type="submit">Log In</button>
        </form>
        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </div>
    </div>
  );
};

export default Login;
