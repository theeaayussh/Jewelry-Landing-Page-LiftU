import React from "react";

const FindYourMatch = () => {
  return (
    <div className="find-your-match">
      <h2>Find your perfect match</h2>
      <div className="match-options">
        <div className="match-option">
          <div className="image-container">
            <img src="bridal-image.png" alt="Bridal" />
            <h3>Bridal</h3>
          </div>
        </div>
        <div className="match-option">
          <div className="image-container">
            <img src="diamond-image.png" alt="Diamond" />
            <h3>Diamond</h3>
          </div>
        </div>
        <div className="match-option">
          <div className="image-container">
            <img src="gold-image.png" alt="Gold" />
            <h3>Gold</h3>
          </div>
        </div>
        <div className="match-option">
          <div className="image-container">
            <img src="silver-image.png" alt="Silver" />
            <h3>Silver</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindYourMatch;
