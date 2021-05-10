import React from 'react';
import { Link } from 'react-router-dom';
import Shoppies from '../../assets/images/shoppies-logo.svg';
import './Header.scss';

const Header = () => {
    return (
        <div className="head">
            <Link to='/shoppies'>
                <img className="head__logo" src={Shoppies} alt="logo"/>
            </Link>
        </div>
    );
};

export default Header;