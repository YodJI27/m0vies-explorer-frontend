import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

const MoviesCardList = (props) => {
  return (
    <section className="MoviesCardList">
      {props.isMovies ? (
        props.movieCard.length === 0 ? (
          <p className="text__error">Ничего не найдено</p>
        ) : (
          <div className="MoviesCardList__container-movies">
            {props.movieCard.map((item) => {
              return (
                <MoviesCard
                  movie={item}
                  key={item.id}
                  handleSaveMovie={props.handleSaveMovie}
                  savedMovies={props.savedMovies}
                  isToggle={props.isToggle}
                  handleRemoveSaveMovie={props.handleRemoveSaveMovie}
                  handleDisableIsLoaded={props.handleDisableIsLoaded}
                />
              );
            })}
          </div>
        )
      ) : (
        <p className="text__error">
          Нажмите кнопку или введите конкретный фильм
        </p>
      )}
    </section>
  );
};
export default MoviesCardList;
