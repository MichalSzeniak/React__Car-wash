import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.scss';
import '../styles/Hamburger.scss';
import dropletLogo from '../../assets/icons/droplet-logo.svg';


const Navigation = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navigation">
        <a className="logo" href="#hero">
          <span className="logo__first">Car</span> wash
          <img src={dropletLogo} alt="" />
        </a>

        <button className={click ? 'hamburger hamburger__active' : 'hamburger'} onClick={handleClick}>
          <span className="hamburger__box">
            <span className="hamburger__inner"></span>
          </span>
        </button>

        <ul className={click ? 'navMenu-active navMenu-mobile' : 'navMenu'}>
          <li className="navItem">
            <NavLink className="navLink active" exact to="/">
              Home
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink className="navLink" to="/">
              Services
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink className="navLink" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
