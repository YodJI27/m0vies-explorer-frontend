import SearchForm from "./SearchForm/SearchForm";
import "./Movies.css";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import { useEffect, useState } from "react";
import Preloader from "../Preloader/Preloader";

const Movies = (props) => {

  let moviesCount;
  let moviesCountNew;

  if (props.windowWidth > 920) {
    moviesCount = 12;
    moviesCountNew = 4;
  } else if (props.windowWidth > 500) {
    moviesCount = 8;
    moviesCountNew = 2;
  } else if (props.windowWidth <= 500) {
    moviesCount = 5;
    moviesCountNew = 2;
  }

  const [numberMovies, setNumberMovies] = useState(moviesCount);

  const nubmerOfMovies = () => {
    setNumberMovies(numberMovies + moviesCountNew);
  };

  useEffect(() => {
    props.handleLoggenIn();
  });

  return (
    <section className="Movies">
      <SearchForm
        handleSearch={props.handleSearch}
        value={props.search}
        localStorageMovies={props.localStorageMovies}
        addFilteredMovie={props.addFilteredMovie}
        isToggle={props.isToggle}
        editMovies={props.editMovies}
      />
      {props.isLoaded ? (
        <Preloader />
      ) : (
        <MoviesCardList
          movieCard={
            props.filteredMovies.length !== 0
              ? props.filteredMovies.slice(0, numberMovies)
              : ""
          }
          isMovies={props.isMovies}
          localStorageMovies={props.localStorageMovies}
          value={props.search}
          filter={props.filteredMovies}
          handleSaveMovie={props.handleSaveMovie}
          savedMovies={props.savedMovies}
          isToggle={props.isToggle}
          handleRemoveSaveMovie={props.handleRemoveSaveMovie}
        />
      )}
      <div className="Movies__block">
        <button
          className={`Movies__button ${
            numberMovies >= props.filteredMovies.length
              ? "Movies__button-disable"
              : ""
          }`}
          type="button"
          onClick={nubmerOfMovies}
        >
          Еще
        </button>
      </div>
    </section>
  );
};
export default Movies;
