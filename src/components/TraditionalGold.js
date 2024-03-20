import React from "react";

const TraditionalGold = () => {
  return (
    <div>
      <div className="traditional-gold">
        <div className="image-container">
          <img
            src=".\images\traditional-gold-rings.png"
            alt="Traditional Gold Rings"
          />
        </div>
        <div className="content">
          <h2>Traditional Gold</h2>
          <p>
            Gold since ancient times symbolized its everlasting eminence and is
            widely used as investment or gifting during joyous occasions. A rich
            collection of antique gold jewelry is a timeless beauty.
          </p>
          <button>See Collection</button>
        </div>
      </div>

      <div className="traditional-gold">
        <div className="content">
          <h2>Be Truly You</h2>
          <p>
            Gold since ancient times symbolized its everlasting eminence and is
            widely used as investment or gifting during joyous occasions. A rich
            collection of antique gold jewelry is a timeless beauty.
          </p>
          <button>See Collection</button>
        </div>
        <div className="image-container-new">
          <img src=".\images\men-with-chain.png" alt="Men With Chain" />
        </div>
      </div>
    </div>
  );
};

export default TraditionalGold;
