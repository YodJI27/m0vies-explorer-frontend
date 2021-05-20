import "./MoviesCard.css";
import noImage from "../../../images/no_image.jpg";

const MoviesCard = (props) => {
  const movieCard = props.movie;
  const movieURL = "https://api.nomoreparties.co";
  const timeConvert = (time) => {
    if (time <= 60) {
      return time + "м";
    } else {
      return Math.floor(time / 60) + " ч " + (time % 60) + " м";
    }
  };
  const handleSetSavedMovie = props.savedMovies.some(
    (item) => item.nameRU === movieCard.nameRU
  );
  
  const checkLikeMovies = `MoviesCard__like ${
    handleSetSavedMovie ? "cards__like_active" : ""
  }`;

  const handleMoviesSave = (evt) => {
    evt.preventDefault();
    if (handleSetSavedMovie) {
      return;
    }
    const movie = {
      country: movieCard.country,
      director: movieCard.director,
      duration: movieCard.duration,
      year: movieCard.year,
      description: movieCard.description,
      image: `${movieURL}${movieCard.image.url}`,
      trailer: movieCard.trailerLink,
      thumbnail: `${movieURL}${movieCard.image.formats.thumbnail.url}`,
      movieId: movieCard.id,
      nameRU: movieCard.nameRU,
      nameEN: movieCard.nameEN,
    };
    props.handleSaveMovie(movie);
  };

  const handleRemoveMovies = (evt) => {
    evt.preventDefault();
    const selectCard = props.savedMovies.find(
      (item) => item.movieId === movieCard.id
    );
    props.handleRemoveSaveMovie(selectCard._id);
  };

  return (
    <div className="MoviesCard">
      <a
        className="MovieCard__link"
        href={props.movie.trailerLink}
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="MoviesCard__image"
          src={`${
            props.movie.image === null
              ? noImage
              : `https://api.nomoreparties.co${props.movie.image.url}`
          }`}
          alt="Обложка фильма"
        ></img>
      </a>
      <div className="MoviesCard__block">
        <h2 className="MoviesCard__text">{props.movie.nameRU}</h2>
        <button
          className={checkLikeMovies}
          type="button"
          onClick={handleSetSavedMovie ? handleRemoveMovies : handleMoviesSave}
        ></button>
      </div>
      <p className="MoviesCard__time">{timeConvert(props.movie.duration)}</p>
    </div>
  );
};
export default MoviesCard;
