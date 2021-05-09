import "./Portfolio.css";
import image from "../../../images/strelka.png";

const Portfolio = () => {
  return (
    <section className="Portfolio">
      <div className="Portfolio__container">
        <h2 className="Portfolio__heading">Портфолио</h2>
        <ul className="Portfolio__block">
          <li className="Portfolio__column">
            <p className="Portfolio__text">Статичный сайт</p>
            <a
              className="Portfolio__link"
              href="https://github.com/YodJI27/how-to-learn"
              target="_blank"
              rel="noreferrer"
            >
              <img className="Portfolio__image" src={image} alt="Стрелка"></img>
            </a>
          </li>
          <li className="Portfolio__column">
            <p className="Portfolio__text">Адаптивный сайт</p>
            <a
              className="Portfolio__link"
              href="https://github.com/YodJI27/russian-travel"
              target="_blank"
              rel="noreferrer"
            >
              <img className="Portfolio__image" src={image} alt="Стрелка"></img>
            </a>
          </li>
          <li className="Portfolio__column">
            <p className="Portfolio__text">Одностраничное приложение</p>
            <a
              className="Portfolio__link"
              href="https://github.com/YodJI27/react-mesto-api-full"
              target="_blank"
              rel="noreferrer"
            >
              <img className="Portfolio__image" src={image} alt="Стрелка"></img>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Portfolio;
