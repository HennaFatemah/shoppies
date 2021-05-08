import React, { Component } from 'react';
import './Movies.scss';
import Poster from '../../assets/images/poster.jpeg';

class Movies extends Component {
    render() {
        const {movies} = this.props;
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
                                        <button className="movies__nominate-btn">
                                            Nominate
                                        </button>
                                    </div>
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