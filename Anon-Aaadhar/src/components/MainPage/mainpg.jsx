import React from 'react';
import NavBar from '../Home/NavBar/NavBar';
import img from '../MainPage/anonAadhar.png'
import img2 from '../MainPage/Magnetic Card.png'
import './mainpg.css'
const mainpg = () => {
  return (
    <>
      <NavBar />

      <div className='anonimg'>
        <img className='anon' src={img} alt="" />
        <div className='login'>
            <div className='button-login'>
              <button><img id='log' src={img2} alt="" />Login</button>
            </div>
        </div>
      </div>
    </>
    
  );
}

export default mainpg;
