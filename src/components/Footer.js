import React from "react";
import "./footer.css";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="box box1">
            <img src={logo} alt="" />
            <h2>Do You Need Help With Anything?</h2>
            <p>
              Receive updates, hot deals, tutorials, discounts sent straignt in
              your inbox every month
            </p>
            <div className="input-field">
              <input type="text" placeholder="Email Address" />
              <button className="subscribebtn">Subscribe</button>
            </div>
          </div>
          <div className="box">
            <h3>LAYOUT</h3>
            <ul>
              <li>Home Page</li>
              <li>About Page</li>
              <li>Service Page</li>
              <li>Property Page</li>
              <li>Contact Page</li>
              <li>Single Blog</li>
            </ul>
          </div>
          <div className="box">
            <h3>ALL SECTIONS</h3>
            <ul>
              <li>Headers</li>
              <li>Features</li>
              <li>Attractive</li>
              <li>Testimonials</li>
              <li>Videos</li>
              <li>Footers</li>
            </ul>
          </div>
          <div className="box">
            <h3>ALL SECTIONS</h3>
            <ul>
              <li>Headers</li>
              <li>Features</li>
              <li>Attractive</li>
              <li>Testimonials</li>
              <li>Videos</li>
              <li>Footers</li>
            </ul>
          </div>
        </div>
        <p className="designer">© 2021 RentUP. Designd By Uzair S.</p>
      </footer>
    </div>
  );
};

export default Footer;
