import React from "react";
import { Link } from "react-router-dom";
import "./NavBar2.css";
import logo from "./logo.png";

function NavBar2() {
  return (
    <>
      <div className="container">
        <div className="navElements firstchild">
          <span>
            <img src={logo} alt="LOGO" />
          </span>
        </div>
        <div style={{ width: "63%" }} className="navElements secondchild">
          <ul>
            <li>
              <Link to="/mainpage">Aadhar Login</Link>
            </li>
            <li>
              <Link to="/DragDrop">Mint NFT</Link>
            </li>
            <li>
              <Link to="/Formpage">Create Loans</Link>
            </li>
            <li>
              <Link to="/loans">Loans</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar2;
