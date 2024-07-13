import React from 'react';
import NavBar2 from '../MainPage/NavBar2';
import './profile.css';
import img from '../Profile/Pimg.png';
// import Button from "../Button/Button";

const profile = () => {
    return (
        <>
            <NavBar2 />
            <div className='space'></div>

            <div className='profile-card'>
                

                <img src={img} className='profile-img' alt="" />

                <div className='pinfo'>
                <h1 className='head'>
                    Created Loan
                </h1>
                    <h3 className='info-item'>Loan Amount :</h3>
                    <h3 className='info-item'>Loan Maturity Date :</h3>
                    <h3 className='info-item'>Remaining Amount :</h3>
                    <h3 className='info-item'>Rate of Interest :</h3>
                    <h3 className='info-item'>Amount :</h3>

                    <button className='btn'>View NFT</button>
                    <button className='btn'>Approve GHO</button>
                </div>



                {/* <div className='pinfo'>
                <h1 className='head1'>
                    Created Loan
                </h1>
                    <h3 className='info-item'>XXXXXXXXXX</h3>
                    <h3 className='info-item'>XXXXXXXXXX</h3>
                    <h3 className='info-item'>XXXXXXXXXX</h3>
                    <h3 className='info-item'>XXXXXXXXXX</h3>
                    <h3 className='info-item'>XXXXXXXXXX</h3>

                    <button className='btn'>Approve GHO</button>
                   
                </div> */}
                
            </div>
            
        </>
    );
}

export default profile;
