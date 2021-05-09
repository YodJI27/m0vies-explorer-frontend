import { useLocation } from "react-router";
import "./Footer.css";

const Footer = (props) => {
  const locationLink = useLocation();

  return (
    <section
      className={`Footer ${
        locationLink.pathname === "/profile" ||
        locationLink.pathname === "/signup" ||
        locationLink.pathname === "/signin" ||
        props.disableFooter
          ? "Footer__disable"
          : ""
      }`}
    >
      <div className="Footer__container">
        <h2 className="Footer__heading">
          Учебный проект Яндекс.Практикум x BeatFilm.
        </h2>
        <div className="Footer__block">
          <p className="Footer__copyright">&copy; {new Date().getFullYear()}</p>
          <ul className="Footer__list">
            <li className="Footer__link">
              <a
                className="Footer__text"
                href="https://github.com/YodJI27"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
            <li className="Footer__link">
              <a
                className="Footer__text"
                href="https://career.habr.com/yodji27"
                target="_blank"
                rel="noreferrer"
              >
                Habr
              </a>
            </li>
            <li className="Footer__link">
              <a
                className="Footer__text"
                href="https://www.instagram.com/shn_ilya/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Footer;
