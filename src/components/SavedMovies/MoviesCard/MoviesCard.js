import "./MoviesCard.css";

const MoviesCard = (props) => {
  return (
    <div className="MoviesCard">
      <img className="MoviesCard__image" src={'https://catherineasquithgallery.com/uploads/posts/2021-02/1614536216_198-p-kartinki-fon-belogo-tsveta-247.jpg'} alt="Обложка фильма"></img>
      <div className="MoviesCard__block">
        <h2 className="MoviesCard__text">{props.title}</h2>
        <button className="MoviesCard__button"></button>
      </div>
      <p className="MoviesCard__time">1ч 42м</p>
    </div>
  );
};
export default MoviesCard;
