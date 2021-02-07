import React from 'react';
import '../../styles/Pricing.scss';
import Package from '../Package';
import imgPackage1 from '../../../assets/icons/package1.svg';
import imgPackage2 from '../../../assets/icons/package2.svg';
import imgPackage3 from '../../../assets/icons/package3.svg';

const packaegs = [
    {
      id: 1,
      name: 'Standard',
      className: 'package',
      link: imgPackage1,
      price: '$9,99',
      service: ['Washing', 'Wiping'],
    },
    {
      id: 2,
      name: 'Deluxe',
      className: 'package decorated',
      link: imgPackage2,
      price: '$14,99',
      service: ['Exterior Hand Wash', 'Rims & Tire Shine', 'Interior Vacuum', 'Wipe all Surfaces'],
    },
    {
      id: 3,
      name: 'Squeaky clean',
      className: 'package',
      link: imgPackage3,
      price: '$19,99',
      service: ["Interior Windows", "Leather Clean & Condition"],
    },
  ];


const Pricing = () => {

  const set = packaegs.map(item => (
    <img src={item.link} alt=""/>,
    <Package  key={item.id} {...item}/>
  ))

  return (
    <>
      <section className="pricing" id="pricing">
        <div className="pricing__box">
          <h2 className="pricing__header">Select your wash package</h2>
          <div className="pricing__flex">
            {set}
          </div>
        </div>
      </section>
      
    </>
  );
};

export default Pricing;
