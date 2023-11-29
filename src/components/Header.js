import React from "react";
import "../styling/Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-top">
        <div className="header-top-phone">
          <a>
            <i classname="header-top fa-brands fa-instagram fa-thin fa-mobile-screen-button"></i>
            +91 12345 67890
          </a>
        </div>
        <div className="header-top-email">
          <a>
            <i classname="header-top fa-thin fa-envelope"></i>
          </a>{" "}
          info@company.com
        </div>
      </div>
      <div className="header-bottom">
        <div className="header-left">
          <div className="logo">LOGO</div>
        </div>
        <div className="header-right">
          <ul className="header-list">
            <li className="header-list-item">HOME</li>
          </ul>
          <ul className="header-list">
            <li className="header-list-item">ABOUT US</li>
          </ul>
          <ul className="header-list">
            <li className="header-list-item">SERVICES</li>
          </ul>
          <ul className="header-list">
            <li className="header-list-item">TESTIMONIALS</li>
          </ul>
          <ul className="header-list">
            <li className="header-list-item">BLOGS</li>
          </ul>
          <ul className="header-list">
            <li className="header-list-item">CONTACT</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
