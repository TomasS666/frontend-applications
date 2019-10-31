import React, { Component } from 'react'
import Menu from './Menu'
import Logo from '../../images/logo.svg';

export class Header extends Component {
    render() {
        return (
            <header>
                <img src={Logo}></img>
            <Menu />
            </header>
        )
    }
}

export default Header
