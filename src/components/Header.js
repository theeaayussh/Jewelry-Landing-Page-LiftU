import React from "react";

function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <a href="index.js">Our Story</a>
          </li>
          <li>
            <a href="index.js">Our Story</a>
          </li>
        </ul>
        <img src=".\images\london-gold-logo.png" alt="London Gold" />
        <ul>
          <li>
            <a href="index.js">Schemes</a>
          </li>
          <li>
            <a href="index.js">Store Locator</a>
          </li>
          <li>
            <a href="index.js">Contact</a>
          </li>
        </ul>
      </nav>
      {/* <div className="logo">
        <img src=".\images\london-gold-logo.png" alt="London Gold" />
      </div> */}
    </header>
  );
}

export default Header;
