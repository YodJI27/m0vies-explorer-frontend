import React from "react";
import "./Promo.css";
import logo from '../../../images/imagePlanet.png'

const Promo = () => {
  return (
    <section className="promo">
      <div className="promo__container">
        <div className="promo__text">
          <h1 className="promo__heading">
            Учебный проект студента факультета Веб&#8209;разработки.
          </h1>
          <p className="promo__paragraph">
            Листай ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          <a className="promo__link" href="/movies">Узнать больше</a>
        </div>
        <img className="promo__image" src={logo} alt="Логотип"></img>
      </div>
    </section>
  );
};
export default Promo;
