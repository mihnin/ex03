import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1 className="logo">Yummy</h1>
        <button className="sign-up-btn">Sign Up / Log In</button>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li><a href="#">Smart Thermometer</a></li>
          <li><a href="#">Meal Planning</a></li>
          <li className="active"><a href="#">Recipes</a>
            <ul className="submenu">
              <li><a href="#">My Feed</a></li>
              <li><a href="#">Browse</a></li>
              <li><a href="#">Pro Recipes</a></li>
              <li><a href="#">Guided Recipes</a></li>
            </ul>
          </li>
          <li><a href="#">Articles</a></li>
          <li><a href="#">Saved Recipes</a></li>
          <li><a href="#">More Tools</a></li>
          <li><a href="#">Download the Yummly App</a></li>
        </ul>
      </nav>
      <div className="sidebar-footer">
        <a href="#">About Yummly</a>
        <div className="legal-links">
          <a href="#">Privacy</a>
          <a href="#">Terms and Conditions</a>
          <a href="#">Copyright</a>
          <a href="#">Interest-Based Ads</a>
          <a href="#">Do Not Sell My Personal Information</a>
        </div>
        <div className="social-links">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-pinterest"></i></a>
          <a href="#"><i className="fab fa-tiktok"></i></a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;