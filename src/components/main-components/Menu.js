import React, { Component } from 'react'

export class Menu extends Component {
    render() {
        return (
            <nav className="primary-navigation">
                <ul>
                    <li>
                        <a href="/places">Places</a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Menu
