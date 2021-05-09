import React, { Component } from 'react';
import './Navigation.scss';
import Logo from '../../assets/images/shoppies-logo-small.svg';
import Share from '../Share/Share';

class Navigation extends Component {
    render() {
        return (
            <>
            {this.props.nominatedMovies.length === 5 ? <div className="results__banner">You have reached 5 nominations
            <Share
                share={this.props.nominatedMovies.map(titles => titles.Title.toString())}
            />
            </div>: null}
            <div className="results">
                <div className="results__left">
                    <img  className="results__logo" src={Logo} alt="logo"/>
                    <div className="results__count">
                        {this.props.count} Movies Searched
                    </div>
                </div>
                <div className="results__right">
                    <div className="results__count">
                        {this.props.nominatedMovies.length} movies nominated
                    </div>
                    <div  className="results__sort">
                        <p className="results__sort-tag">Sort By Year</p>
                        <select value={this.props.sort} onChange={this.props.sortMovies}>
                            <option>Default</option>
                            <option value="lowest">Oldest</option>
                            <option value="highest">Latest</option>
                        </select>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default Navigation;