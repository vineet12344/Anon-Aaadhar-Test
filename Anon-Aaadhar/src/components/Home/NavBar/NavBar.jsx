import React from "react";
import "./NavBar.css";

import Button from "../../Button/Button";

import logo from "../NavBar/logo.png"


function NavBar() {
  return (
    <>
      <div className="container">
        <div className="navElements">
          <span>

            <img
              src="/src/assets/logo.png"
              style={{ width: "90px" }}
              alt="LOGO"
            />
            {/* {logo} */}

            <img src={logo} alt="LOGO" />

          </span>
        </div>
        <div className="navElements" style={{width: '440px'}}>
          Privacy to Security: Empower your aadhar
        </div>
        <div className="navElements">

          <Button text={"Connect Wallet"} colour={"green"} />

          <ul>
            <a href="#">VeriProof</a>
          </ul>
          <ul>
            <a href="#">Aadhar Login</a>
          </ul>
          <ul>
            <a href="#">Mint Nft</a>
          </ul>
          <ul>
            <a href="#">Create Loans</a>
          </ul>
          <ul>
            <a href="#">Loans</a>
          </ul>
          <ul>
            <a href="#">Profile</a>
          </ul>

        </div>
      </div>
    </>
  );
}

export default NavBar;
