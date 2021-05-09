import "./MoviesCardList.css";
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = () => {
  return (
    <section className="MoviesCardList">
      <div className="MoviesCardList__container-movies">
        <MoviesCard title={"33 слова о дизайне"} />
        <MoviesCard title={'Киноальманах "100 лет дизайна"'} />
        <MoviesCard title={"В погоне Бенкси"} />
      </div>
    </section>
  );
};

export default MoviesCardList;
