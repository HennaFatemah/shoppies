import React from 'react';
import './Hero.scss';
import Shoppies from '../../assets/images/shoppies-logo.svg';
import HeroMain from '../../assets/images/hero.png';

const Hero = () => {
    return (
        <div className="hero-grid">
            <div className="hero-grid__head">
                <img className="hero-grid__logo" src={Shoppies} alt="logo"/>
            </div>
            <div className="hero-grid__main">
                <div className="hero-grid__content">
                    <h1 className="hero-grid__main-title">The Shoppies: Movie<br/>Awards For<br/>Entrepreneurs</h1>
                    <button className="hero-grid__start-nominate">Start Nomination</button>
                </div>
                <div className="hero-grid__hero">
                    <img className="hero-grid__hero-pic" src={HeroMain} alt="background" />
                </div>
            </div>
        </div>
    );
};

export default Hero;