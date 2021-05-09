import React, { Component } from 'react';
import Movies from '../Movies/Movies';
import Navigation from '../Navigation/Navigation';
import Nomination from '../Nomination/Nomination';
import './Main.scss'
class Main extends Component {
    constructor(){
        super()
        this.state = {
            movies: [],
            searchField: '',
            sort: '',
            nominatedMovies: [],
            disableNominatedMovies: 
            [],
        }
    }

    removeFromNomination = (movie) => {
        const nominatedMovies = this.state.nominatedMovies.slice();
        this.setState({ 
            nominatedMovies: nominatedMovies.filter(x => x.imdbID !== movie.imdbID)})
    }

    addToNomination = (movie) => {
        const nominatedMovies = this.state.nominatedMovies.slice();
        const disableNominatedMovies = this.state.disableNominatedMovies.slice();
        let alreadyInNomination = false;
        let alreadyDisabled = false;
        nominatedMovies.forEach(nominatedMovie =>{
            if(nominatedMovie.imdbID === movie.imdbID){
                nominatedMovie.count++;
                alreadyInNomination = true;
                alreadyDisabled = true;
            }
        })
        if(!alreadyInNomination && nominatedMovies.length<5){
            nominatedMovies.push({...movie, count: 1})
        }
        if(!alreadyDisabled  && disableNominatedMovies.length<5){
            disableNominatedMovies.push({...movie})
        }
        this.setState({ nominatedMovies })
        this.setState({ disableNominatedMovies })
    }

    onSearchChange = (e) => {
        this.setState({ searchField: e.target.value })
        fetch(`https://www.omdbapi.com/?apikey=874163ff&s=${this.state.searchField}`)
        .then(response => response.json())
        .then(searchedMovies => {
            console.log(searchedMovies);
            this.setState(searchedMovies.Response === "True" ? { movies: searchedMovies.Search }: null)
        })
    }

    sortMovies = (event) => {
        const sort = event.target.value;
        this.setState({
            sort: sort,
            movies: this.state.movies.slice().sort((a, b) =>
                sort === "lowest" 
                ? a.Year > b.Year
                    ? 1 
                    : -1:
                sort === "highest" 
                ? a.Year < b.Year
                    ? 1 
                    : -1
                : a.Title < b.Title
                    ? 1 
                    : -1
            )
        })
    }

    render() {
        return (
            <div className="main-grid">
                <div className="main-grid__bar">
                    <Navigation
                        count={this.state.movies.length}
                        sort={this.state.sort}
                        sortMovies={this.sortMovies}
                        nominatedMovies={this.state.nominatedMovies}
                    />
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
                            addToNomination={this.addToNomination}
                            disableNomination={this.state.disableNominatedMovies}
                        />
                    </div>
                    <div className="main-grid__nominations">
                        <h2 className="main-grid__title"><span  className="main-grid__title-count">{this.state.nominatedMovies.length}</span> Nominations</h2>
                        <Nomination
                            nominatedMovies={this.state.nominatedMovies}
                            removeFromNomination={this.removeFromNomination}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;