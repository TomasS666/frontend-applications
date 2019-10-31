import React, { Component } from 'react';
import '../App.css';
import Places from './Places';
import { runQuery } from '../custom-modules/runQuery.js';
import Todos from './Todos';




class Place extends Component {
    state={
        disabled:""
    }

    componentDidMount(){
        if(this.props.disabled==="true"){
            this.setState({disabled:"disabled"})
        }
    }

    render(){
        return(
            <article>
                <p className={this.state.disabled} title={ this.props.title }>{ this.props.title }</p>
                <img src={ this.props.imgPath } alt={ this.props.title }></img>
            </article>
        );
    }
}

export default Place;