import React from "react";
import "./NavBar2.css";
import logo from "./logo.png"


function NavBar2() {

return (
  <>
    <div className="container">
      <div className="navElements firstchild">
        <span>
          {/* <img
src="/src/assets/logo.png"
style={{ width: "90px" }}
alt="LOGO"
/> */}
          {/* {logo} */}

          <img src={logo} alt="LOGO" />
        </span>
      </div>
      {/* <div className="navElements" style={{ width: "440px" }}>
Privacy to Security: Empower your aadhar
</div> */}
      <div style={{ width: "63%" }} className="navElements secondchild">
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

export default NavBar2;