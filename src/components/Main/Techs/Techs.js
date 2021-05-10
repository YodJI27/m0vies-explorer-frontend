import "./Techs.css";

const Techs = () => {
  return (
    <section className="Techs">
      <div className="Techs__container">
        <p className="Techs__text text">Технологии</p>
        <div className="Techs__block">
          <h2 className="Techs__heading">7 технологий</h2>
          <p className="Techs__description">
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
        </div>
        <ul className="Techs__list">
          <li className="Techs__column">HTML</li>
          <li className="Techs__column">CSS</li>
          <li className="Techs__column">JS</li>
          <li className="Techs__column">React</li>
          <li className="Techs__column">Git</li>
          <li className="Techs__column">Express.js</li>
          <li className="Techs__column">mongoDB</li>
        </ul>
      </div>
    </section>
  );
};
export default Techs;
