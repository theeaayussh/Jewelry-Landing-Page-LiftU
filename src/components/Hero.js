import React from "react";

function Hero() {
  return (
    <div className="hero">
      <div className="img1">
        <img
          className="image"
          src=".\images\hand-with-bracelet.jpg"
          alt="hand-with-bracelet"
        />
        <div className="border"></div>
      </div>
      <div className="img2">
        <img
          className="image"
          src=".\images\golden-box-with-rings.jpg"
          alt="golden-box-with-ring"
        />
        <div className="border"></div>
      </div>
      <div className="img3">
        <img
          className="image"
          src=".\images\portrait-with-jewelry.jpg"
          alt="portrait-with-jewelry"
        />
        <div className="border"></div>
      </div>
    </div>
  );
}

export default Hero;
