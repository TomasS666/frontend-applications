import React, { Component } from 'react';
import headerImg from '../../images/mvk.jpg';
export class Home extends Component {
    render() {
        return (
            <section>
                <h1>
                    Welkom bij het NMVW
                </h1>
                <img src={headerImg} alt="museum van volkenkunde"></img>
            </section>
        )
    }
}

export default Home
