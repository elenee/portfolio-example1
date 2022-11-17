import React from "react";
import "./Footer.css";
import Icon from "../../assets/logo.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container1 grid1">
        <div className="box">
          <img src={Icon} />
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
        <div className="box">
          <h2>Quick Links</h2>
          <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#branding">Branding</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#blog">Blog</a></li>
          </ul>
        </div>
        <div className="box">
          <h2>Recent Post</h2>
          <div className="text">
            <p>Leclerc frustrated over Ferrari 'changing' team orders decision</p>
            <span>13 Nov 2022</span>
          </div>
        </div>
        <div className="box">
          <h2>Get In Touch</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
        </div>
      </div>
      <div className="container legal">
        <label htmlFor="">
          Design and developed by <span>Elene Chikviladze</span>
        </label>
      </div>
    </footer>
  );
};

export default Footer;
