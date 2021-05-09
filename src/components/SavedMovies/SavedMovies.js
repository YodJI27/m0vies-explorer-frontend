import { useEffect } from "react";
import SearchForm from "../Movies/SearchForm/SearchForm";
import SavedMoviesCard from '../SavedMovies/MoviesCardList/MoviesCardList';

const SavedMovies = (props) => {

    useEffect(() => {
        props.handleLoggenIn();
    });

    return(
        <section>
            <SearchForm />
            <SavedMoviesCard />
        </section>
    );
}
export default SavedMovies;