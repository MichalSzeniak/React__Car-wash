import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.scss';
import '../styles/Hamburger.scss';
import dropletLogo from '../../assets/icons/droplet-logo.svg';


const Navigation = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const handleLink = () => setClick(false);

  return (
    <>
      <nav className="navigation">
        <NavLink className="logo" to="#">
          <span className="logo__first">Car</span> wash
          <img src={dropletLogo} alt="" />
        </NavLink>

        <button className={click ? 'hamburger hamburger__active' : 'hamburger'} onClick={handleClick}>
          <span className="hamburger__box">
            <span className="hamburger__inner"></span>
          </span>
        </button>

        <ul className={click ? 'navMenu-active navMenu-mobile' : 'navMenu'}>
          <li className="navItem">
            <NavLink className="navLink active" onClick={handleLink} exact to="/">
              Home
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink className="navLink" onClick={handleLink} to="/services">
              Services
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink className="navLink" onClick={handleLink} to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
