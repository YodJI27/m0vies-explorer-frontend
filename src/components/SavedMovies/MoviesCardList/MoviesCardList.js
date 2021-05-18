import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = (props) => {
  return (
    <section className="MoviesCardList">
      {props.filteredSavedMovieList.length !== 0 ? (
        <div className="MoviesCardList__container-movies MoviesCardList__container-low">
          {props.filteredSavedMovieList.map((item) => {
            return (
              <MoviesCard
                key={item._id}
                movie={item}
                handleRemoveSaveMovie={props.handleRemoveSaveMovie}
                isToggle={props.isToggle}
              />
            );
          })}
        </div>
      ) : (
        <p className="text__error text__error-saved">
          У вас нет сохраненных фильмов
        </p>
      )}
    </section>
  );
};

export default MoviesCardList;
