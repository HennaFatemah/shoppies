import './MovieDetails.scss';
import Poster from '../../assets/images/poster.jpeg'

const MovieDetails = ({ movie, onMovieClose }) => {
    return(
        <div className="movie-details">
            <div className="movie-details__overlay">
                <div className="movie-details__content">
                    <div className="movie-details__top">
                        <img className="movie-details__video--media" src={movie.Poster === "N/A" ? Poster: movie.Poster} alt='movie' />
                    </div>
                    <div className="movie-details__intro">
                            <h3 className="movie-details__subtitle">Title: {movie.Title}</h3>
                            <div className="movie-details__details">
                                <p className="movie-details__instructions">Actors: {movie.Actors}</p>
                                <p className="movie-details__instructions">Plot: {movie.Plot}</p>
                                <p className="movie-details__instructions">Rated: {movie.Rated}</p>
                                <p className="movie-details__instructions">Released: {movie.Released}</p>
                                <p className="movie-details__instructions">Genre: {movie.Genre}</p>
                                <p className="movie-details__instructions">Director: {movie.Director}</p>
                                {/* <p className="movie-details__instructions">{console.log(movie.Ratings[0].Source)}</p> */}
                                {/* <p className="movie-details__instructions">{movie.Ratings[0].Value ? movie.Ratings[0].Value : null}</p> */}
                            </div>
                        </div>
                    <button className="movie-details__close" 
                    onClick={onMovieClose}>✖︎</button>
                </div>
            </div>

        </div>
    )
}

export default MovieDetails;