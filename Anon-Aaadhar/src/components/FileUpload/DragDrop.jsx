import React, { useRef, useState, useEffect } from "react";
import { AnonAadhaarProof, LogInWithAnonAadhaar, useAnonAadhaar } from "@anon-aadhaar/react";
import "./DragDrop.css";
import NavBar2 from '../MainPage/NavBar2';

const DragDrop = () => {
debugger

  const [files, setFiles] = useState(null);
  const inputRef = useRef();
  const [anonAadhaar] = useAnonAadhaar();

  useEffect(() => {
    console.log("Anon Aadhaar status: ", anonAadhaar.status);
    console.log("Anon Aadhaar proof: ", anonAadhaar.anonAadhaarProofs);
  }, [anonAadhaar]);

  const handleDragOver = (event) => { 
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <>
      <NavBar2 />
      {!files && (
        <div
          className="dropzone"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <h1>Drag and Drop files from here</h1>
          <h1>Or</h1>
          <input
            type="file"
            multiple={false}
            onChange={(event) => setFiles(event.target.files)}
            hidden
            ref={inputRef}
          />
          <button onClick={() => inputRef.current.click()}>Select Image</button>
        </div>
      )}
      <div className="btn-cont">
        <button className="sub">Submit To IPFS</button>
        <button className="mint">Mint NFT</button>
      </div>
      
      <LogInWithAnonAadhaar
        nullifierSeed={1234}
        fieldsToReveal={[
          "revealAgeAbove18",,
          "revealGender",
          "revealPinCode",
        ]}
        useTestAadhaar={true}
        
      />
      <p>{anonAadhaar?.status}</p>
      <div>
        {anonAadhaar?.status === "logged-in" && anonAadhaar?.anonAadhaarProofs && (
          <>
            <p>Proof is valid</p>
            <AnonAadhaarProof
            
              code={(anonAadhaar.anonAadhaarProofs, null, 2)}
            />
          </>
        )}
      </div>
    </>
  );
};

export default DragDrop;
