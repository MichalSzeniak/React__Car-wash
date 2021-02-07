import React from 'react';
import hero from '../../../assets/icons/hero.svg';
import icon from '../../../assets/icons/hero-icon.svg';
import '../../styles/Hero.scss';

const Hero = () => {
  return (
    <>
      <section className="hero" id="hero">
        <div className="hero__box">
          <div className="img_box">
            <img className="hero__img" src={hero} alt="washing the car" />
          </div>
          <div className="hero__content">
            <div>
              <h1 className="hero__header">A Clean Car,</h1>
              <p className="hero__header--second">Wherever You Are</p>
            </div>
            <a className="hero__button" href="#pricing">
              get started
            </a>
          </div>
        </div>
        <div className="hero__icon">
          <img className="hero__icon--img" src={icon} />
        </div>
      </section>
    </>
  );
};

export default Hero;
