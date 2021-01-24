import React from 'react';
import { useState } from 'react';
import '../styles/Navigation.scss';
import { GoThreeBars, GoX } from 'react-icons/go';
import dropletLogo from '../../assets/icons/droplet-logo.svg';

const Navigation = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navigation">
        <div className="logo">
          <span className='logo__first'>Car</span> wash
          <img src={dropletLogo} alt=""/>
        </div>
        <button  className="hamburger-button" onClick={handleClick}>click</button>
        <div className="hamburger-button" >{click ? <GoThreeBars /> : <GoX />}</div>
        <ul className={click ? 'navMenu mobile' : 'navMenu'}>
          <li className='navItem'>
            <a className='navLink active' href="">Home</a>
          </li>
          <li className='navItem'>
            <a className='navLink' href="">Services</a>
          </li>
          <li className='navItem'>
            <a className='navLink' href="">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
