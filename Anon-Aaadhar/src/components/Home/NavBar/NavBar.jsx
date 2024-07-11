import React from "react";
import "./NavBar.css";
import Button from "../../Button/Button";

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
          </span>
        </div>
        <div className="navElements" style={{width: '440px'}}>
          Privacy to Security: Empower your aadhar
        </div>
        <div className="navElements">
          <Button text={"Connect Wallet"} colour={"green"} />
        </div>
      </div>
    </>
  );
}

export default NavBar;
