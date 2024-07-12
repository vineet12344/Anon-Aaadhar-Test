import React, { useRef } from "react";
import { useState } from "react";
import "./DragDrop.css";
import NavBar from "../Home/NavBar/NavBar";

const DragDrop = () => {
  const [files, setFiles] = useState(null);
  const inputRef = useRef();

  const handleDragOver = (event) => {
    event.preventDefault();
  };
  const handleDrop = (event) => {
    event.preventDefault();
    // setFiles(event.dataTransfer.files);
    console.log(event)
  };
  return (
    <>
      <NavBar />
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
            multiple
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
    </>
  );
};

export default DragDrop;
