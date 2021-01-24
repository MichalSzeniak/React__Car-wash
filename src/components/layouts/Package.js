import React from 'react';
import '../styles/Pricing.scss';
import link from '../../assets/icons/package1.svg';

const Package = ({ id, name, link, className, price, service }) => {


  console.log(link);
  return (
    <div className={className}>
      <img className="package__img" src={link} alt=""/>
      <h1 className="package__header">{name}</h1>
      <p className="package__price">{price}</p>
      {service.map((key) => (
        <div className="package__description" key={key}>{key}</div>
      ))}
      <a className={className+"__button"} href="">Select package</a>
    </div>
  );
};

export default Package;
