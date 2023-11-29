import React from "react";
import "../styling/Home.css";

function Home() {
  return (
    <div className="home-top">
      <div className="image-wrapper">
        <img src="/assets/Background.webp" alt=""></img>
      </div>

      <div className="main-content">
        <div className="info-form">
          <p className="info-title"> Let's Start Something Great!</p>
          <p>
            Proactively customize cross-media schemas rather than high-payoff,
            the customer service. Uniquely enable extensible niche
          </p>
          <div className="address-details">
            <div className="address">
              <i classname="header-top fa-thin fa-envelope"></i>
              <p>
                Akshya Nagar 1st Block 1st Cross, Rammurthy Nagar,
                Bangalore-560016
              </p>
            </div>
            <div className="phone">
              <i classname="header-top fa-thin fa-envelope"></i>
              <p>+91 12345 67890</p>
            </div>
            <div className="email">
              <i classname="header-top fa-thin fa-envelope"></i>
              <p>info@company.com</p>
            </div>
          </div>
        </div>

        <div className="query-form"></div>
      </div>
    </div>
  );
}

export default Home;
