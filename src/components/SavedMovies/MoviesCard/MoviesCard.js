import "./MoviesCard.css";
import noImage from "../../../images/no_image.jpg";

const MoviesCard = (props) => {
  const timeConvert = (time) => {
    if (time <= 60) {
      return time + "м";
    } else {
      return Math.floor(time / 60) + " ч " + (time % 60) + " м";
    }
  };
  const handleDeleteMovies = (evt) => {
    evt.preventDefault();
    props.handleRemoveSaveMovie(props.movie._id);
  };

  return (
    <div className="MoviesCard">
      <a
        className="MovieCard__link"
        href={props.movie.trailer}
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="MoviesCard__image"
          src={`${props.movie.image === null ? noImage : props.movie.image}`}
          alt="Обложка фильма"
        ></img>
      </a>
      <div className="MoviesCard__block">
        <h2 className="MoviesCard__text">{props.movie.nameRU}</h2>
        <button
          className="MoviesCard__button"
          onClick={handleDeleteMovies}
        ></button>
      </div>
      <p className="MoviesCard__time">{timeConvert(props.movie.duration)}</p>
    </div>
  );
};
export default MoviesCard;
