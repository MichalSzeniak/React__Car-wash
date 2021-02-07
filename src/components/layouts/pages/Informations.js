import React from 'react';
import '../../styles/Informations.scss';
import img from '../../../assets/icons/informations.svg';

const Informations = () => {
  return (
    <>
      <section className="informations">
        <div className="informations__container">
          <h2 className="informations__header">Enjoy your clean car</h2>
          <p className="informations__text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi rerum
            quis fuga ipsa, cumque reiciendis deleniti, iste nulla perferendis
            ipsam praesentium eaque porro itaque tempore aliquid deserunt
            recusandae cupiditate, laboriosam aspernatur eligendi quos corporis
            doloribus. Asperiores corrupti tempora necessitatibus explicabo!
            Quia vel fuga animi, laborum perspiciatis cupiditate minima optio
            dolores nisi architecto libero laboriosam sunt facere.
          </p>
          <img className="informations__img" src={img} alt="" />
        </div>

      </section>
    </>
  );
};

export default Informations;
