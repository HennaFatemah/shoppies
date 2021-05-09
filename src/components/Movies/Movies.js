import React, { Component } from 'react';
import './Movies.scss';
import Poster from '../../assets/images/poster.jpeg';
import Share from '../Share/Share';

class Movies extends Component {
    constructor(){
        super()
        this.state = {
            selectedMovie: null,
            movie:{},
        }
    }

    handleMovieClose = () => {
        this.setState({
            selectedMovie: null
        })
    }

    handleMovieSelect = (id) => {
        const currMovie = this.props.movies.find(movie => movie.imdbID === id);
        this.setState({
            selectedMovie: currMovie
        });
        fetch(`http://www.omdbapi.com/?apikey=874163ff&i=${currMovie.imdbID}`)
        .then(response => response.json())
        .then(movieSpecifics => {
            console.log(movieSpecifics);
            console.log(movieSpecifics.Poster);
            this.setState({ movie: movieSpecifics })
        })
    }
    render() {
        const { movies } = this.props;
        return (
            <>
                <ul className="movies">
                    {movies.map((movie, i) => {
                        return(
                            <li key={i} className="movies__list">
                                <Share/>
                                <div className="movies__card"  onMouseOver={() => this.handleMovieSelect(movie.imdbID)} onMouseLeave={this.onMovieClose}>
                                    <div className="movies__connect">
                                        <div className="movies__pic-container">
                                            <img className="movies__pic" src={movie.Poster === "N/A" ? Poster: movie.Poster} alt={movie.Title}/>
                                        </div>
                                        <p className="movies__title">{movie.Title}</p>
                                    </div>
                                    <div className="movies__nominate">
                                        <p className="movies__year">Year: {movie.Year}</p>
                                        <button className="movies__nominate-btn" 
                                            onClick={() => this.props.addToNomination(movie)}
                                            disabled={this.props.disableNomination.find(eachMovie => eachMovie.imdbID === movie.imdbID)}>
                                            Nominate
                                        </button>
                                    </div>
                                    {this.state.selectedMovie &&
                                        <div className="movie-details__details">
                                            <p className="movie-details__instructions">{this.state.movie.Actors}</p>
                                            <p className="movie-details__instructions">{this.state.movie.Plot}</p>
                                            <p className="movie-details__instructions">{this.state.movie.Rated}</p>
                                            <p className="movie-details__instructions">{this.state.movie.Released}</p>
                                            <p className="movie-details__instructions">{this.state.movie.Genre}</p>
                                            <p className="movie-details__instructions">{this.state.movie.Director}</p>
                                        </div>
                                    }
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </>
        );
    }
}

export default Movies;