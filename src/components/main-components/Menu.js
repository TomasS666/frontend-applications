import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Menu extends Component {
    render() {
        return (
            <nav className="primary-navigation">
                <ul>
                    <li>
                        <Link to="/places">Places</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Menu
