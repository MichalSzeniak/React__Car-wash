import React from 'react';
import '../../styles/ContactHero.scss';
import dropletLogo from '../../../assets/icons/droplet-logo.svg';

const ContactHero = () => {
  return (
    <>
      <section className="hero" id="hero">
        <div className="hero__box">
          <div className="hero__content">
            <div>
              <h1 className="hero__header">Contact</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="contact">
        <div className="contact__details">
        <div className="contact__logo">
          <span className="contact__logo__first">Car</span> wash
          <img src={dropletLogo} alt="" />
        </div>
            <div className="contact__adress">
                <p>Ulicowa 15</p>
                <p>23-420 Tarnogród, Poland</p>
            </div>
            <div className="contact__info">
                <p className="contact__info--phone">+48 987 654 321</p>
                <p className="contact__info--mail">mail@mailowy.pl</p>
            </div>
        </div>
        <div className="contact__hours-info">
            <h2>opening hours</h2>
            <p><span className="day-name">Monday - Friday </span> <br/> 7.00 a.m. - 11.00 p.m.</p>
            <p><span className="day-name">Saturday </span> <br/> 9.00 a.m. - 9.00 p.m.</p>
            <p><span className="day-name">Sunday </span> <br/> 10.00 a.m. - 8.00 p.m.</p>
        </div>
      </section>
      <section className="hero__map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d24207.335208816028!2d22.74693835205798!3d50.37620014633046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1612740379822!5m2!1spl!2spl"
          width="100%"
          height="600px"
          frameborder="0"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </section>
    </>
  );
};

export default ContactHero;