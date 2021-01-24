import React from 'react';
import hero from '../../assets/icons/hero.svg';
import '../styles/Hero.scss';

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="hero__box">
          <div className="img_box">
            <img className="hero__img" src={hero} alt="washing the car" />
          </div>
          <div className="hero__content">
            <div>
              <h1 className="hero__header">A Clean Car,</h1>
              <h2 className="hero__header--second">Wherever You Are</h2>
            </div>
            <a className="hero__button" href="">
              get started
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
