import React, { useState } from "react";
import ListingForm from "../ListingForm/ListingForm";
import logo from "../../assets/icons/icon.png";

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <header>
        <div className="logo">
          <img src={logo} alt="logo"></img>
          <h1>Today I Applied</h1>
        </div>
        <div className="share">
          <button id="share-btn" onClick={() => setShow(!show)}>
            Share Job
          </button>
        </div>
      </header>
      {show ? <ListingForm /> : null}
    </div>
  );
};

export default Header;
