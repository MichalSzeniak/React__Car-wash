import React from 'react';
import '../../styles/Slides.scss';
import img1 from '../../../assets/photo1.jpg';
import img2 from '../../../assets/photo2.jpg';
import img3 from '../../../assets/photo3.jpg';
import img4 from '../../../assets/photo4.jpg';

const Slides = () => {
  return (
    <>
      <section className="slides-container">

        <article className="slides-article">
          <div className="article__text-container">
            <h2 className="article__header">Lorem ipsum dolor.</h2>
            <p className="article__description">
              sit amet consectetur adipisicing elit. Molestias sed numquam modi,
              explicabo suscipit maiores.
            </p>
          </div>
          <img className="article__photo" src={img1} alt="" />
        </article>

        <article className="slides-article">
          <img className="article__photo" src={img2} alt="" />
          <div className="article__text-container">
            <h2 className="article__header">Lorem ipsum dolor.</h2>
            <p className="article__description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias fugit omnis laudantium ad eligendi corrupti?
            </p>
          </div>
        </article>

        <article className="slides-article">
          <div className="article__text-container">
            <h2 className="article__header">Lorem ipsum dolor.</h2>
            <p className="article__description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure voluptatem enim vitae deleniti!
            </p>
          </div>
          <img className="article__photo" src={img3} alt="" />
        </article>

        <article className="slides-article">
          <img className="article__photo" src={img4} alt="" />
          <div className="article__text-container">
            <h2 className="article__header">Lorem ipsum dolor.</h2>
            <p className="article__description">
              sit amet consectetur adipisicing elit. Molestias sed numquam modi,
              explicabo suscipit maiores.
            </p>
          </div>
        </article>
      </section>
    </>
  );
};

export default Slides;
