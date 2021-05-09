import React, { Component } from 'react';
import './Nomination.scss';
import Poster from '../../assets/images/poster.jpeg';

class Nomination extends Component {
    render() {
        const {nominatedMovies} = this.props;
        return (
            <>
                <div>
                    <ul className="nomination__nominated-movies">
                        {nominatedMovies.map((movie, i) => {
                            return(
                                <li key={i} className="nomination__nominated-list">
                                    <div className="nomination__nominated-content">
                                        <img className="nomination__nominated-pic" src={movie.Poster === "N/A" ? Poster: movie.Poster} alt={movie.Title}/>
                                    </div>
                                    <div>

                                    <p className="nomination__nominated-title">{movie.Title}</p>
                                    <button className="nomination__remove-btn" onClick={() => this.props.removeFromNomination(movie)}>Remove</button>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </>
        );
    }
}

export default Nomination;