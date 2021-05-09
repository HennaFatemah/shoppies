import React, { Component } from 'react';
import './Movies.scss';
import Poster from '../../assets/images/poster.jpeg';
import MovieDetails from '../MovieDetails/MovieDetails'

class Movies extends Component {
    constructor(){
        super()
        this.state = {
            selectedMovie: null,
            movie:{},
        }
    }

    handleShareSelect = (id) => {
        console.log(id);
        const currMovie = this.props.movies.find(movie => movie.imdbID === id);
        this.setState({
            selectedShare: currMovie,
            share: currMovie
        });
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
                                <div className="movies__card">
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
                                    <button  onClick={() => this.handleMovieSelect(movie.imdbID)}>More Details</button>
                                    {this.state.selectedMovie && <MovieDetails
                    movie={this.state.movie}
                    onMovieClose={this.handleMovieClose}
                />}
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