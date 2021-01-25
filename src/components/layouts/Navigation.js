import React from 'react';
import { useState } from 'react';
import '../styles/Navigation.scss';
import '../styles/Hamburger.scss';
import dropletLogo from '../../assets/icons/droplet-logo.svg';


const Navigation = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navigation">
        <div className="logo">
          <span className="logo__first">Car</span> wash
          <img src={dropletLogo} alt="" />
        </div>
        
        <button class={click ? 'hamburger hamburger__active' : 'hamburger'} onClick={handleClick}>
          <span className="hamburger__box">
            <span className="hamburger__inner"></span>
          </span>
        </button>

        <ul className={click ? 'navMenu-active navMenu-mobile' : 'navMenu'}>
          <li className="navItem">
            <a className="navLink active" href="">
              Home
            </a>
          </li>
          <li className="navItem">
            <a className="navLink" href="">
              Services
            </a>
          </li>
          <li className="navItem">
            <a className="navLink" href="">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
