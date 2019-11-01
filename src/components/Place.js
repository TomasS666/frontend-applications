import React, { Component } from 'react';

import { runQuery } from '../helpers/runQuery.js';
import Todos from './Todos';
import SwipeReact from 'swipe-react';



class Place extends Component {

    

    constructor(props){
        super(props)

       this.state={
            appear:true,
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
                this.setState({
                    liked: 'right'
                })
  
                this.likeChange()
            }
          });
       
    }

    



    

    componentDidMount(){
        if(this.props.appear === true){
            this.setState({ appear:true }) 
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
        this.props.likechange(this.state.liked);            
    }




    render(){
        return(
            <article {...SwipeReact.events} likechange={this.likeChange} >
                <h2 className={ this.state.appear ? 'fade-in' : 'fade-out' } title={ this.props.title }>{ this.props.title }</h2>
                <img src={ this.props.imgPath } alt={ this.props.title }></img>
            </article>
        );
    }
}

export default Place;