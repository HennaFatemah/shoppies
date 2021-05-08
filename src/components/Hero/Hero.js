import React, { Component } from 'react';
import './Hero.scss';
import Shoppies from '../../assets/images/shoppies-logo.svg';
import HeroMain from '../../assets/images/hero.png';
import Main from '../Main/Main';

class Hero extends Component {
    constructor(){
        super()
        this.state = {
            selectMain: false,
        }
    }

    handleMainSelect = () => {
        this.setState({ selectMain: true})
    }
    render() {
        return (
            <div className="hero-grid">
                <div className="hero-grid__head">
                    <img className="hero-grid__logo" src={Shoppies} alt="logo"/>
                </div>
                <div className="hero-grid__main">
                    <div className="hero-grid__content">
                        <h1 className="hero-grid__main-title">The Shoppies: Movie<br/>Awards For<br/>Entrepreneurs</h1>
                        <button  onClick={() => this.handleMainSelect} className="hero-grid__start-nominate">Start Nomination</button>
                    </div>
                    <img className="hero-grid__hero-pic" src={HeroMain} alt="background" />
                </div>
                <div className="hero-grid__foot">
                    <Main
                        selectMain={this.state.selectMain}
                    />
                </div>
            </div>
        );
    }
}

export default Hero;