import React from 'react';

import logo from '../../assets/logo.png';
import './style.css';

const Header = (props) => {
    return (
        <header className="header">
            <h1>{ props.title }</h1>
            <img src={ logo } />
        </header>
    );
};

export default Header;