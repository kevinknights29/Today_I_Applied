import React from "react";

const Footer = () => {
  const openLink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="footer">
      <footer>
        <div className="feedback">
          <button
            onClick={() => openLink("https://forms.gle/RmQxcnnaVokKqmzs5")}
          >
            Share Feedback
          </button>
        </div>
        <div className="author">
          <p>Build by Kevin K.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
