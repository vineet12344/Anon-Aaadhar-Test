import React from "react";
import "./NavBar.css";

import Button from "../../Button/Button";

import logo from "../NavBar/logo.png"


function NavBar(hasOptions,{option1 , option2 , option3, option4, option5}) {

const options = {option1,option2,option3,option4,option5};
const navHasOptions = hasOptions;

  return (
    <>
      <div className="container">
        <div className="navElements">
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
        <div className="navElements" style={{width: '440px'}}>
          Privacy to Security: Empower your aadhar
        </div>
        {/* <div className="navElements"> */}
          {/* <Button text={"Connect Wallet"} colour={"green"} /> */}
        {/* </div> */}
      </div>
    </>
    
  );
}

export default NavBar;
