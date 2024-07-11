import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <div className="container">
        <div className="navElements">
          <span>
            <img src="#" alt="LOGO" />
          </span>
        </div>
        <div className="navElements">
          <ul>
            <a href="#">Option 1</a>
          </ul>
          <ul>
            <a href="#">Option 2</a>
          </ul>
          <ul>
            <a href="#">Option 3</a>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
