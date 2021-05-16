import "./SearchForm.css";
import icon from "../../../images/movies_icon.png";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useState } from "react";

const SearchForm = (props) => {
  const [filterCheck, setFilterCheck] = useState(false);

  const checkBoxToggle = () => {
    setFilterCheck(!filterCheck);
  }

  const handleFilter = (movieList, movieSearch) => {
    const filtered = movieList.nameRU
      .toLowerCase()
      .includes(movieSearch.toLowerCase());
    return filtered;
  };

  const handleSavedFiltered = (savedMovieList, savedMovieSearch) => {
    const savedFiltered = savedMovieList.nameRU
      .toLowerCase()
      .includes(savedMovieSearch.toLowerCase());
    return savedFiltered;
  };

  const filteringMoviesArray = (movieList, value) => {
    if (filterCheck) {
      const shortMovie = movieList.filter((movie) => {
        return movie.duration <= 40 && handleFilter(movie, value);
      });
      return shortMovie;
    } else {
      const filteredMovies = movieList.filter((movie) => {
        return handleFilter(movie, value);
      });
      return filteredMovies;
    }
  };

  const filteringSavedMoviesArray = (savedMovieList, savedMovieSearch) => {
    if (filterCheck) {
      const shortSavedMovie = savedMovieList.filter((movie) => {
        return (
          movie.duration <= 40 && handleSavedFiltered(movie, savedMovieSearch)
        );
      });
      return shortSavedMovie;
    } else {
      const filteredSavedMovies = savedMovieList.filter((movie) => {
        return handleSavedFiltered(movie, savedMovieSearch);
      });
      return filteredSavedMovies;
    }
  };
  
const handleSubmit = (e) => {
    e.preventDefault();
    const filteredMoviesArray = filteringMoviesArray(props.localStorageMovies, props.value);
    props.addFilteredMovie(filteredMoviesArray);
  };

  const handleSubmitSaved = (e) => {
    e.preventDefault();
    let filteredSavedMoviesArray = filteringSavedMoviesArray(
      props.savedMovies,
      props.savedSearch
    );
    props.updateFilteredSavedMovies(filteredSavedMoviesArray);
  };

  return (
    <section className="SearchForm">
      <div className="SearchForm__container">
        <form className="SearchForm__search" onSubmit={props.isToggle ? handleSubmitSaved : handleSubmit}>
          <input
            className="SearchForm__film"
            placeholder="Фильм"
            size="30"
            value={props.isToggle ?  props.savedSearch : props.value}
            onChange={props.isToggle ? props.handleSearchSaved : props.handleSearch}
          ></input>
          <button className="SearchForm__circle" onClick={props.editMovies}>
            <img className="SearchFrom__image" src={icon} alt="иконка"></img>
          </button>
        </form>
        <div className="SearchFrom__block">
          <p className="SearchFrom__text">Короткометражки</p>
          <FilterCheckbox onChange={checkBoxToggle} />
        </div>
      </div>
    </section>
  );
};
export default SearchForm;
