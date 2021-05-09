import "./AboutProject.css";

const AboutProject = () => {
  return (
    <section className="AboutProject">
      <div className="AboutProject__container">
        <h2 className="AboutProject__heading text">О проекте</h2>
        <div className="AboutProject__block">
          <div className="AboutProject__description_first_text">
            <p className="AboutProject__text">
              Дипломный проект включал 5 этапов
            </p>
            <p className="AboutProject__paragraph">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className="AboutProject__description_second_text">
            <p className="AboutProject__text">
              На выполнение диплома ушло 5 недель
            </p>
            <p className="AboutProject__paragraph">
              У каждого этапа был мягкий и жесткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="AboutProject__graph">
          <div className="AboutProject__grant">
            <div className="AboutProject__graph_first_block AboutProject__graph-text">
              1 неделя
            </div>
            <p className="AboutProject__signature">Back-end</p>
          </div>
          <div div className="AboutProject__grant">
            <div className="AboutProject__graph_second_block AboutProject__graph-text">
              4 недели
            </div>
            <p className="AboutProject__signature">Front-end</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
