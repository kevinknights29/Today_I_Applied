import React from "react";

const Footer = () => {
  const openLink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="footer">
      <footer>
        <div class="feedback">
          <button
            onClick={() => openLink("https://forms.gle/RmQxcnnaVokKqmzs5")}
          >
            Share Feedback
          </button>
        </div>
        <div class="author">
          <p>Build by Kevin K.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
