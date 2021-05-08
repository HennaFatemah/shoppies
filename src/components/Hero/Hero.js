import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Hero.scss';
import HeroMain from '../../assets/images/hero.png';

class Hero extends Component {
    render() {
        return (
            <div className="hero-grid">
                <div className="hero-grid__main">
                    <div className="hero-grid__content">
                        <h1 className="hero-grid__main-title">The Shoppies: Movie<br/>Awards For<br/>Entrepreneurs</h1>
                        <Link  to='/nomination' className="hero-grid__start-nominate">Start Nomination</Link>
                    </div>
                    <img className="hero-grid__hero-pic" src={HeroMain} alt="background" />
                </div>
                <div className="hero-grid__foot"></div>
            </div>
        );
    }
}

export default Hero;