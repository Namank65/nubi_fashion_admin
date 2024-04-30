import React from 'react';
import './Navbar.css'
import navLogo from '../../assets/ecomLogo.png';
import navProfile from '../../assets/navProfile.jpg';


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logoContainer'>
      <img src={navLogo} alt='logo' className='navLogo'></img>
      <p>NuBî Fashîon</p>
      </div>
      <img src={navProfile} alt='logo' className='navProfile'></img>
      </div>
  )
}

export default Navbar;