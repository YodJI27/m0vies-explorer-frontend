import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

const MoviesCardList = () => {
  return (
    <section className="MoviesCardList">
      <div className="MoviesCardList__container-movies">
        <MoviesCard title={"33 слова о дизайне"} />
        <MoviesCard title={'Киноальманах "100 лет дизайна"'} />
        <MoviesCard title={"В погоне Бенкси"} />
        <MoviesCard title={"Баския: Взрыв реальности"} />
        <MoviesCard title={"Бег это свобода"} />
        <MoviesCard title={"Книготорговцы"} />
        <MoviesCard title={"Когда я думаю в Германии ночью"} />
        <MoviesCard title={"Gimme Danger: История Игги"} />
        <MoviesCard title={"Дженис: Маленькая девочка грустит"} />
        <MoviesCard title={"33 слова о дизайне"} />
        <MoviesCard title={"33 слова о дизайне"} />
        <MoviesCard title={"33 слова о дизайне"} />
      </div>
    </section>
  );
};
export default MoviesCardList;
