import React from 'react';
import hero from '../../../assets/icons/hero.svg';
import icon from '../../../assets/icons/hero-icon.svg';
import '../../styles/Hero.scss';

const Hero = () => {

  const scroll = () => {
    window.scrollTo({top: 600, behavior: "smooth"})
  }

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
            <div className="hero__button" onClick={scroll}>
              get started
            </div>
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
