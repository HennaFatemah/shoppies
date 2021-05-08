import React, { Component } from 'react';
import Movies from '../Movies/Movies';
import './Main.scss'
class Main extends Component {
    constructor(){
        super()
        this.state = {
            movies: [],
            searchField: '',
            sort: '',
        }
    }

    onSearchChange = (e) => {
        this.setState({ searchField: e.target.value })
        fetch(`http://www.omdbapi.com/?apikey=874163ff&s=${this.state.searchField}`)
        .then(response => response.json())
        .then(searchedMovies => {
            console.log(searchedMovies);
            this.setState(searchedMovies.Response === "True" ? { movies: searchedMovies.Search }: null)
        })
    }

    render() {
        return (
            <div className="main-grid">
                <div className="main-grid__bar">
                    <div className="main-grid__search">
                        <input 
                            type="search"
                            placeholder="Search Movies By Title ..."
                            className="main-grid__search-bar"
                            onChange={this.onSearchChange}
                        />
                    </div>
                </div>
                <div className="main-grid__center">
                    <div className="main-grid__movies">
                        <h2 className="main-grid__title">Results for "{this.state.searchField}"</h2>
                        <Movies
                            movies={this.state.movies}
                        />
                    </div>
                    <div className="main-grid__nominations">
                        <h2 className="main-grid__title"><span  className="main-grid__title-count">0</span> Nominations</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;