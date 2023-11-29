import React from "react";
import "../styling/Footer.css";

function Footer() {
  return (
    <div>
      <footer>
        {/* <div className="footer-sidebar-item">
          <span className="footer-right-title">GET IN TOUCH</span>
          <ul className="footer-right-list">
            <li className="footer-right-list-item">
              <i></i>
              Akshya Nagar 1st Block 1st Cross, Rammurthy Nagar,
              Bangalore-560016
            </li>
          </ul>
          <ul>
            <li className="footer-right-list-item"><i></i></li>
            <li className="footer-right-list-item">OUR SERVICES</li>
          </ul>
          <ul>
            <li className="footer-centre-list-item">Sport</li>
            <li className="footer-centre-list-item">Tech</li>
            <li className="footer-centre-list-item">Cinema</li>
          </ul>
        </div>
        <div className="footer-sidebar-item">
          <span className="footer-centre-title">FOLLOW US</span>
          <div className="footer-centre-social">
            <i className="footer-centre-icon fa-brands fa-facebook"></i>
            <i className="footer-centre-icon fa-brands fa-twitter"></i>
            <i className="footer-centre-icon fa-brands fa-instagram"></i>
            <i className="footer-sidebar-icon fa-brands fa-pinterest"></i>
          </div>
        </div> */}

        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <ul> OUR SERVICES </ul>
              <li>Lorem ipsum dolor</li>
              <li>Lorem ipsum dolor</li>
              <li>Lorem ipsum dolor</li>
              <li>Lorem ipsum dolor</li>
              <p></p>
            </div>
          </div>
        </div>

        <div className="col-sm-4">
          <li>Lorem ipsum dolor</li>
          <li>Lorem ipsum dolor</li>
          <li>Lorem ipsum dolor</li>
          <li>Lorem ipsum dolor</li>
          <p></p>
        </div>
        <div className="col-sm-2">
          <p>FOLLOW US</p>
        </div>
        <div className="col-sm-2">
          <li>Lorem ipsum dolor</li>
          <li>Lorem ipsum dolor</li>
          <i></i>
          <p>
            Akshya Nagar 1st Block 1st Cross, Rammurthy Nagar, Bangalore-560016
          </p>
        </div>

        <div className="footer-down">
          <div className="footer-down-left">
            Copyright © 2023, iAssureIT All Rights Reserved
          </div>
          <div className="footer-down-right">
            Designed & Developed By iAssure International Technologies Pvt. Ltd
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
