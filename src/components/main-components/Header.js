import React, { Component } from 'react';
import Menu from './Menu';
import Logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

export class Header extends Component {
    render() {
        return (
            <header>
                <Link to="/" className="logo"><img src={Logo} alt="NMVW Logo - Based on typography of underlaying musea"></img></Link>
            <Menu />
            </header>
        )
    }
}

export default Header
