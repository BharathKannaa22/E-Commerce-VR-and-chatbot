import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import MensPage from "./MensPage";
import WomensPage from "./WomensPage";
import DressDetails from "./DressDetails"; // For Dress 1
import CheckoutPage from "./Buy1page"; // For checkout
import Womenbuy from "./Womenbuy"; // For checkout
import OrderPage1 from "./Orderpage"; // For order page
import DressDetailsPage from "./DressDetails2"; // For Dress 2
import BuyPage from "./BuyPage"; // For BuyPage
import DressDetailsPage3 from "./DressDetails3"; // For Dress 3
import BuyPage2 from "./BuyPage2"; // For BuyPage2
import Feedback from "./Feedback"; // For Dress 1

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/mens" element={<MensPage />} />
          <Route path="/womens" element={<WomensPage />} />
          <Route path="/dress-details" element={<DressDetails />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/womenbuy" element={<Womenbuy />} />
          <Route path="/order" element={<OrderPage1 />} />
          <Route path="/dress-details2" element={<DressDetailsPage />} />
          <Route path="/buy" element={<BuyPage />} />
          <Route path="/dress-details3" element={<DressDetailsPage3 />} />
          <Route path="/buy2" element={<BuyPage2 />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
