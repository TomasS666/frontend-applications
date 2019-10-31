import React, { Component } from 'react';

import { runQuery } from '../helpers/runQuery.js';
import Todos from './Todos';
import SwipeReact from 'swipe-react';



class Place extends Component {

    

    constructor(props){
        super(props)

       this.state={
            disabled:"",
            liked: 'yeah'
        }

        SwipeReact.config({
            left: () => {
              this.setState({
                  liked: 'left'
              })

              this.likeChange()
            },
            right: () => {
              console.log('Swipe right detected.');
            }
          });
       
    }

    



    

    componentDidMount(){
        if(this.props.disabled === "true"){
            this.setState({disabled:"disabled"})
        }
    }

    // componentDidUpdate(){
    //     console.log(this.state.liked)
    //     if(this.state.liked === 'left'){
    //         // this.setState({
    //         //     liked: ''
    //         // })
    //         this.props.likechange('left');
    //     }
    // }
    
    likeChange = (likeValue) =>{

        var test = this.state.liked;
        this.props.likechange(test);            
    }




    render(){
        return(
            <article {...SwipeReact.events} likechange={this.likeChange} >
                <p className={this.state.disabled} title={ this.props.title }>{ this.props.title }</p>
                <img src={ this.props.imgPath } alt={ this.props.title }></img>
            </article>
        );
    }
}

export default Place;