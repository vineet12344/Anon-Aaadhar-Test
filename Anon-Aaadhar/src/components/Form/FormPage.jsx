import React from 'react';
import NavBar2 from '../MainPage/NavBar2';
import './FormPage.css'


function FormPage() {

  return (
    <>
      <NavBar2 />
      <div className="formcontainer">
        <div className="left">
          <img src="src/assets/ethereum.png" alt="img" style={{width: '300px'}} />
        </div>
        <div className="right">

            <div className="form">
              <div className="formTitle">
                <h3>Get Quick Loan</h3>
              </div>
              <div className="mainForm">
                <div className="formField">
                  <label htmlFor="">Loan Amount</label>
                  <input type="number"/>
                </div>
                <div className="formField">
                  <label htmlFor="">Interest Rate</label>
                  <input type="number"/>
                </div>
                <div className="formField">
                  <label htmlFor="">NFT Address</label>
                  <input type="text"/>
                </div>
                <div className="formField">
                  <label htmlFor="">NFT Id</label>
                  <input type="number"/>
                </div>
                <div className="formField">
                  <label htmlFor="">Loan Maturity Date </label>
                  <input type="date"/>
                </div>
                <div className="formButton">
                  <button> Transfer Collateral </button>
                  <button> Create Loan </button>
                </div>
              </div>
            </div>
            
        </div>
        
      </div>
    </>
  );
}

export default FormPage
