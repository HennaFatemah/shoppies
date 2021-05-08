import React, { Component } from 'react';
import './Main.scss'
class Main extends Component {
    render() {
        return (
            <div className="main-grid">
                <div className="main-grid__bar">
                    <div className="main-grid__search">
                        <input 
                            type="search"
                            placeholder="Search Movies"
                            className="main-grid__search-bar"
                        />
                    </div>
                </div>
                <div className="main-grid__center">
                    <div className="main-grid__movies">
                        <h2 className="main-grid__title">List of Movies</h2>
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