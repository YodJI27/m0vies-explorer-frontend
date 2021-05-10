import "./AboutMe.css";
import photo from "../../../images/photo.png";

const AboutMe = () => {
  return (
    <section className="AboutMe">
      <div className="AboutMe__container">
        <p className="AboutMe__heading text">Студент</p>
        <div className="AboutMe__main">
          <div className="AboutMe__block">
            <h2 className="AboutMe__name">Илья</h2>
            <p className="AboutMe__description">Фронтенд-разработчик, 20 лет</p>
            <p className="AboutMe__text">
              Учусь в МГТУ им.Баумана на кафедре "Информационная безопасность".
              Веб-разработка привлекает практически неограниченными
              возможностями: впечатление от дизайна можно усилить
              интерактивностью, придумать какую-то фишку специально для группы
              пользователей. В университете преподают язык программирования C++,
              но он мне сразу не понравился. Поэтому решил попробовать что-то
              новое, и выбор пал на Веб-разработку. Я понял, что это мое, и не
              ошибся в своём выборе.
            </p>
            <ul className="AboutMe__list">
              <li className="AboutMe__column">
                <a
                  className="AboutMe__link"
                  href="https://github.com/YodJI27"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </li>
              <li className="AboutMe__column">
                <a
                  className="AboutMe__link"
                  href="https://career.habr.com/yodji27"
                  target="_blank"
                  rel="noreferrer"
                >
                  Habr
                </a>
              </li>
            </ul>
          </div>
          <img className="AboutMe__image" src={photo} alt="Фото"></img>
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
