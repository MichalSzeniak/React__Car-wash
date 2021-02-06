import React from 'react';
import dropletLogo from '../../assets/icons/droplet-logo.svg';
import instagram from '../../assets/icons/instagram.svg';
import facebook from '../../assets/icons/facebook.svg';
import linkedin from '../../assets/icons/linkedin.svg';
import '../styles/Footer.scss';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__sections">
            <section className="footer__section">
              <h3 className="footer__section--header">Company</h3>
              <a className="footer__section--Link" href="">
                About Us
              </a>
              <a className="footer__section--Link" href="">
                Careers
              </a>
              <a className="footer__section--Link" href="">
                Terms of services
              </a>
              <a className="footer__section--Link" href="">
                Gift Cards
              </a>
            </section>
            <section className="footer__section">
              <h3 className="footer__section--header">Get Service</h3>
              <a className="footer__section--Link" href="">
                Cities
              </a>
              <a className="footer__section--Link" href="">
                Pricing
              </a>
            </section>
            <section className="footer__section">
              <h3 className="footer__section--header">Contact Us</h3>
              <a className="footer__section--Link" href="">
                Contact
              </a>
              <a className="footer__section--Link" href="">
                Support
              </a>
            </section>
          </div>
          <div className="footer__icons">
            <a className="footer__icon" href="">
              <img src={instagram} target="_blank" alt="https://www.instagram.com/" />
            </a>
            <a className="footer__icon" href="">
              <img src={facebook} target="_blank" alt="https://www.facebook.com/" />
            </a>
            <a className="footer__icon" href="">
              <img src={linkedin} target="_blank" alt="https://linkedin.com/" />
            </a>
          </div>
          <div className="footer__right">
            <div className="footer__logo">
              <span className="footer__logo--first">Car</span> wash
              <img src={dropletLogo} alt="" />
            </div>
            <p>2021 © Michał Szeniak</p>
            <a href="http://www.freepik.com">
              Designed by vectorjuice / Freepik
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
