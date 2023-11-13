import React from "react";
import logo from "../../assets/icons/icon.png";

const Header = () => {
  return (
    <div>
      <header>
        <div className="logo">
          <img src={logo} alt="logo"></img>
          <h1>Today I Applied</h1>
        </div>
        <div className="share">
          <button id="share-btn">Share Job</button>
        </div>
      </header>
    </div>
  );
};

export default Header;
