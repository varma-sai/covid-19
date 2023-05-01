import React from "react";
import "./header.scss";
import Navbar from "../navbar/Navbar";


function Header() {
  return (
    <div>
      <div className="Header">
        <div className="img-box">
          <Navbar navCss="links" />
        </div>
      </div>
    </div>
  );
}

export default Header;
