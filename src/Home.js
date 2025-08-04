import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";

// Assets
import MensImg from "../src/assets/Home Men.png";
import WomensImg from "../src/assets/Home Women.png";
import KidsImg from "../src/assets/Home_Kids_.png";
import BabyImg from "../src/assets/Home baby.png";
import HomeVideo from "../src/assets/Home video.mp4";
import FontImg from "../src/assets/Homefont.png";
import VideoImg from "../src/assets/Homevid.png";
import MensImg1 from "../src/assets/Homemen2.png";
import MensImg2 from "../src/assets/Homemen3.png";
import MensImg3 from "../src/assets/Homemen4.png";
import MensImg4 from "../src/assets/Homemen5.png";
import HomeVideo2 from "../src/assets/Animation - 1748437057114.webm";
import WomenImg from "../src/assets/Homewomen.jpeg";
import Homegif1 from "../src/assets/aboutgif.gif";
import Homegif2 from "../src/assets/aboutgif2.gif";
import Homegif3 from "../src/assets/aboutgif3.gif";
import Homegif4 from "../src/assets/aboutgif4.gif";
import BGM from "../src/assets/audio1.mp3";

const Home = () => {
  const navigate = useNavigate();
  const [isMuted, setIsMuted] = useState(true);
  const videoRefs = useRef([]);
  const audioRef = useRef();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    window.chtlConfig = { chatbotId: "7311318373" };
    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-id", "7311318373");
    script.id = "chtl-script";
    script.type = "text/javascript";
    script.src = "https://chatling.ai/js/embed.js";
    document.body.appendChild(script);

    return () => {
      document.getElementById("chtl-script")?.remove();
    };
  }, []);

  const toggleMute = () => {
    const newMutedState = !isMuted;
    setIsMuted(newMutedState);

    // Update audio and video mute status
    if (audioRef.current) audioRef.current.muted = newMutedState;
    videoRefs.current.forEach((video) => {
      if (video) video.muted = newMutedState;
    });
  };

  const scroll = (scrollOffset) => {
    document.getElementById("categoryScroll").scrollBy({
      left: scrollOffset,
      behavior: "smooth",
    });
  };

  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); 
    }
  };

  return (
    <div className="home">
      {/* 🔇 Mute / Unmute Button */}
      <div className="mute-button-container">
        <button className="mute-button" onClick={toggleMute}>
          {isMuted ? "🔇 Mute" : "🔊 Unmute"}
        </button>
      </div>

      {/* 🔊 Background Audio */}
      <audio ref={audioRef} src={BGM} autoPlay loop muted />

      {/* NAVBAR */}
      <nav className="navbar" data-aos="fade-down">
        <div className="logo">RAYMOND</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><span onClick={(e) => handleScroll(e, "about")}>About us</span></li>
          <li><span onClick={(e) => handleScroll(e, "shop")}>Shop</span></li>
          <li><span onClick={(e) => handleScroll(e, "trend")}>Trendings</span></li>
          <li><span onClick={(e) => handleScroll(e, "contact")}>Contact us</span></li>
        </ul>
        <div className="icons">
          <i className="fas fa-search"></i>
          <i className="fas fa-heart"></i>
          <i className="fas fa-shopping-cart"></i>
        </div>
      </nav>

      {/* HERO SECTION */}
      <div className="hero" data-aos="fade-up">
        <div className="hero-content">
          <h1>Define Your Style,<br />Redefine Your World</h1>
          <p>
            At Raymond, fashion isn’t just about clothing — it’s a statement,
            a reflection of who you are...
          </p>
          <div className="video-section">
            <video
              ref={(el) => (videoRefs.current[0] = el)}
              width="100%"
              height="auto"
              controls
              autoPlay
              muted
              loop
            >
              <source src={HomeVideo} type="video/mp4" />
            </video>
          </div>
          <div className="font">
            <img className="image" src={FontImg} alt="Font Style" />
          </div>
          <div className="videofont">
            <img className="image" src={VideoImg} alt="Video Font" />
          </div>
          <div className="buttons">
            <button className="explore-btn" onClick={(e) => handleScroll(e, "trend")}>
              Explore Collection
            </button>
          </div>
        </div>
      </div>

      <div className="text" data-aos="fade-up">
        _____________💫Welcome to Raymond💫______________
      </div>

      {/* SHOP CATEGORY */}
      <div className="category-carousel-container" id="shop" data-aos="fade-up">
        <div className="category-carousel" id="categoryScroll">
          {[{ img: MensImg, label: "MENS", path: "/mens" },
            { img: WomensImg, label: "WOMENS", path: "/womens" },
            { img: KidsImg, label: "KIDS" },
            { img: BabyImg, label: "BABIES" }].map((item, idx) => (
            <div className="category-item" key={idx}>
              <img className="image" src={item.img} alt={item.label} />
              <button className="category-btn" onClick={() => item.path && navigate(item.path)}>
                {item.label}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* TRENDING */}
      <div className="trending" id="trend" data-aos="fade-up">
        New Trendings♾️
      </div>

      <div className="container-wrapper">
        {[MensImg1, MensImg2, MensImg3, MensImg4].map((img, index) => (
          <div
            className="custom-container"
            data-aos="fade-up"
            data-aos-delay={index * 100}
            key={index}
            onClick={() =>
              index !== 3 &&
              navigate(`/dress-details${index === 0 ? "" : index + 1}`)
            }
          >
            <img className="image" src={img} alt={`Item ${index}`} />
            <h1 className="info1">
              <span className="product-name">
                Rating ⭐4.{index + 2}/5 <br /> Sample Product {index + 1}
              </span>
              <br />
              <span className="product-price">₹{500 + index * 100}</span>
            </h1>
          </div>
        ))}

        <div className="video-section2" data-aos="fade-up">
          <video
            ref={(el) => (videoRefs.current[1] = el)}
            width="100%"
            height="auto"
            controls
            autoPlay
            muted
            loop
          >
            <source src={HomeVideo2} type="video/mp4" />
          </video>
        </div>

        <div className="fontie" data-aos="fade-up">
          <h1>Choose Your Style</h1>
        </div>
      </div>

      {/* WOMENS SPECIAL */}
      <div className="womenf-container" data-aos="fade-up" onClick={() => navigate("/womens")}>
        <img className="image" src={WomenImg} alt="Women's Shirt" />
        <h1 className="infos2">
          <span className="product-name">
            Rating ⭐4.7/5<br />Crimson Chic Houndstooth
          </span>
          <br />
          <span className="product-price">₹2799</span>
        </h1>
      </div>

      {/* ABOUT US */}
      <div className="aboutus-container" id="about" data-aos="fade-up">
        {[Homegif1, Homegif2, Homegif3, Homegif4].map((gif, i) => (
          <img className={`gif${i === 0 ? "" : i}`} src={gif} alt={`gif${i}`} key={i} />
        ))}
        <div className="aboutus-content">
           <p>
              Welcome to <strong>Raymond</strong> — where fashion meets future,
              and trying on clothes feels like magic ✨👕
            </p>
            <p>
              We’re not just another online clothing store. We're a team of
              dreamers, developers, and anime lovers who believe shopping should
              be <strong>fun</strong>, <strong>personal</strong>, and{" "}
              <strong>technologically awesome</strong>.
            </p>
            <h2>👕 Why We’re Different</h2>
            <p>
              Ever struggled to pick the right size or wonder how a shirt might
              actually <em>look on you</em>? We get it. That’s why we built{" "}
              <strong>AR-based virtual try-on</strong>—so you can see your
              perfect fit in real-time, right from your phone. No guessing. No
              returns. Just vibes.
            </p>
            <h2>🤖 Your Smart Shopping Buddy</h2>
            <p>
              Meet our <strong>AI Chatbot Assistant</strong> — your always-here
              shopping BFF. Need help with choosing styles, understanding
              sizing, or tracking an order? Just ask. It’s like having a stylist
              in your pocket 💼💬
            </p>
            <h2>🌸 Our Vibe</h2>
            <p>
              We love blending <strong>anime aesthetics</strong> with modern
              tech, bringing soft, playful energy into the shopping experience.
              From floating cuties on your screen to smart tools behind the
              scenes — we’re all about <strong>fun with functionality</strong>.
            </p>
            <h2>🚀 Our Mission</h2>
            <p>
              To make online fashion more <em>real</em>, more <em>personal</em>,
              and a lot more <em>adorable</em>. Whether you're dressing up for
              class, date night, or a boss-level Zoom call, we want you to feel
              confident, comfy, and cute.
            </p>
            <p style={{ marginTop: "20px" }}>
              <strong>Thanks for stopping by, Chooky-style shopper! 💕</strong>{" "}
              We’re always growing, evolving, and adding more magic to the way
              you shop. So go ahead —{" "}
              <strong>try it on, feel the fit, and fall in love 💖👕</strong>
            </p>

          {/* CONTACT US SECTION */}
          <div className="contact-us-section" id="contact" style={{ marginTop: "60px" }}>
            <h1>Contact Us</h1>
            <p>Email: 𝗯𝗵𝗮𝗿𝗮𝘁𝗵𝗸𝗮𝗻𝗻𝗮𝗮𝟲𝟯@𝗴𝗺𝗮𝗶𝗹.𝗰𝗼𝗺 <br /> 𝘀𝗵𝗮𝗻𝗺𝘂𝗴𝗮𝗺𝘀𝗸𝘃𝟮𝟳@𝗴𝗺𝗮𝗶𝗹.𝗰𝗼𝗺</p>
            <p>Phone: +91 9940779411 <br /> 9361316628</p>  
            <p>Address: 123 Fashion Street ,Anna University, Trichy, Tamil Nadu, India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
