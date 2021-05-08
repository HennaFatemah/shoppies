import React, { Component } from 'react';
import './Navigation.scss';
import Logo from '../../assets/images/shoppies-logo-small.svg';

class Navigation extends Component {
    render() {
        return (
            <>
            <div className="results">
                <div className="results__left">
                    <img  className="results__logo" src={Logo} alt="logo"/>
                    <div className="results__count">
                        {this.props.count} Movies Searched
                    </div>
                </div>
                <div className="results__sort">
                    <p className="results__sort-tag">Sort By Year</p>
                    <div  className="custom-select">
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