import React from "react";
import "../styling/Footer.css"; // Import your CSS file
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import LanguageIcon from "@mui/icons-material/Language";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <ul className="footer-list">
          <li>FOLLOW US</li>
          <LinkedInIcon className="footer-icon" />
          <TelegramIcon className="footer-icon" />
          <TwitterIcon className="footer-icon" />
          <div>
            <LanguageIcon className="footer-icon" />
          </div>
        </ul>
        <ul className="footer-list">
          <li>Our Services</li>
          <li>&gt;&gt; Lorem ipsum dolor</li>
          <li>&gt;&gt; Lorem ipsum dolor</li>
          <li>&gt;&gt; Lorem ipsum dolor</li>
          <li>&gt;&gt; Lorem ipsum dolor</li>
        </ul>
        <ul className="footer-list">
          <li>&gt;&gt; Lorem ipsum dolor</li>
          <li>&gt;&gt; Lorem ipsum dolor</li>
          <li>&gt;&gt; Lorem ipsum dolor</li>
          <li>&gt;&gt; Lorem ipsum dolor</li>
        </ul>
        <ul className="footer-list get-in-touch">
          <li>GET IN TOUCH</li>
          <li>
            <LocationOnIcon className="footer-icon" />
            Akshya Nagar 1st Block 1st Cross, Rammurthy Nagar, Bangalore-560016
          </li>
          <li>
            <PhoneAndroidIcon className="footer-icon" />
            Phone : +91 12345 67890
          </li>
          <li>
            <MailOutlineIcon className="footer-icon" />
            Email : info@company.com
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
