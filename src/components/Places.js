import React, { Component } from 'react';


import { runQuery } from '../helpers/runQuery.js';
import Place from './Place';




class Places extends Component {

    constructor(props){
        super(props)
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }

    state = {
        title: '',
        imgPath: '',
        places: [],
        index: 0
    }
      

    places = []

    componentDidMount() {
      
        const url ="https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-38/sparql";
        //Note that the query is wrapped in es6 template strings to allow for easy copy pasting
      
        //Note that the query is wrapped in es6 template strings to allow for easy copy pasting
        var query = `
        PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
        PREFIX dc: <http://purl.org/dc/elements/1.1/>
        PREFIX dct: <http://purl.org/dc/terms/>
        PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
        PREFIX edm: <http://www.europeana.eu/schemas/edm/>
        PREFIX foaf: <http://xmlns.com/foaf/0.1/>
      
        SELECT ?cho ?title ?placeName ?type ?year ?img WHERE {
            <https://hdl.handle.net/20.500.11840/termmaster8401> skos:narrower* ?place .
            ?place skos:prefLabel ?placeName.
        
            VALUES ?type { "Foto" }.
            VALUES ?placeName { "Indonesië" }.

            ?cho dct:spatial ?place ;
            dc:type ?type;
            dc:title ?title;
            dct:created ?year;
            edm:isShownBy ?img.

            FILTER CONTAINS( lcase(?title), "president")

                }

        LIMIT 100
        
      
      `;
      
        runQuery( url, query ).then(response => {
            
            console.log(response);
            // const title = response.results.bindings[0].title.value;
            // const imgPath = response.results.bindings[0].img.value;

            // const length = response.results.bindings.length;

            
            this.setState({ 
                // title: title,
                // imgPath: imgPath,
                // length: length
                places: response.results.bindings
            });
            console.log(this)

        })
    }

    next(){
       console.log(this.state.index)

        if(this.state.index >= (this.state.places.length - 1)){
            console.log("haha")
        }else{
            this.setState({
                index: (this.state.index + 1)
            });
        }


        
    }

    previous(){
        console.log(this.state.index)

        if(this.state.index <= 0){
            console.log("haha")
        }else{
            this.setState({
                index: (this.state.index - 1)
            });
        }
    }
      

    render(){
        // console.log(this.state.articles[0]);

        const places = this.state.places.map((item, index) => ( 
            <Place 
                disabled="true" 
                title={ item.title.value } 
                key={ index }
                imgPath={ item.img.value } 
            /> 
        ));

        return(
            <div>
            <ul>
                { places[this.state.index] }
                
            </ul>
            <button onClick={ this.previous } >Previous</button>
            <button onClick={ this.next } >Next</button>
            </div>
            // <Place title={ this.state.title } />
            
        );
    }
}

export default Places;