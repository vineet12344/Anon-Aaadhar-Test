import React from 'react';
import NavBar from '../Home/NavBar/NavBar';
import img from '../MainPage/anonAadhar.png'
import img2 from '../MainPage/Magnetic Card.png'
import './mainpg.css'
import { Link } from 'react-router-dom';
import NavBar2 from './NavBar2';
const mainpg = () => {
  return (
    <>
      <NavBar2 />

      <div className="anonimg">
        <img className="anon" src={img} alt="" />
        <div className="login">
          <div className="button-login">
            <Link to='/Home'>
              <button className='largeFont'>
                <img id="log" src={img2} alt="" />
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default mainpg;
