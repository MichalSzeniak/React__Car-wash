import React from 'react';
import {NavLink} from 'react-router-dom';
import '../styles/Pricing.scss';

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
      <NavLink className={className+"__button"} to="/services">Select package</NavLink>
    </div>
  );
};

export default Package;
