import React, { Component } from 'react';
import './App.css';

import Header from './components/main-components/Header'

import { runQuery } from './custom-modules/runQuery.js';
// import Todos from './components/Todos'
import Places from './components/Places';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'



// runQuery(url, query).then(result => {
//   const fef = result;
  
// }); 
// console.log(test)

class App extends Component {
// super(props),
//   constructor(props) {
//     this.fn = this.fn.bind(this);
//  }

//  fn() {
//     console.log(this)
//  }
 
//  hello(){
//   this.setState({name: 'Tomas'})
// }

 
  
  
//   constructor( props ) {
//     super( props );

//     // this.change = this.change.bind(this);
// }

// state = {
//   title: ''
// }

// componentDidMount() {

//   const url ="https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-38/sparql";
//   //Note that the query is wrapped in es6 template strings to allow for easy copy pasting

// //Note that the query is wrapped in es6 template strings to allow for easy copy pasting
// var query = `
// PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
// PREFIX dc: <http://purl.org/dc/elements/1.1/>
// PREFIX dct: <http://purl.org/dc/terms/>
// PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
// PREFIX edm: <http://www.europeana.eu/schemas/edm/>
// PREFIX foaf: <http://xmlns.com/foaf/0.1/>

// SELECT ?cho ?title ?placeName ?type ?year WHERE {
//    	<https://hdl.handle.net/20.500.11840/termmaster8401> skos:narrower* ?place .
//    	?place skos:prefLabel ?placeName .
    
// 	VALUES ?type { "Foto" }

//    	?cho dct:spatial ?place ;
//         dc:type ?type ;
//         dc:title ?title;
//         dct:created ?year.
// }

// LIMIT 10

// `;
//   // const query = `
//   // PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
//   // PREFIX dc: <http://purl.org/dc/elements/1.1/>
//   // PREFIX dct: <http://purl.org/dc/terms/>
//   // PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
//   // PREFIX edm: <http://www.europeana.eu/schemas/edm/>
//   // PREFIX foaf: <http://xmlns.com/foaf/0.1/>

//   // SELECT ?cho ?title ?placeName ?type ?year WHERE {
//   //     <https://hdl.handle.net/20.500.11840/termmaster7745> skos:narrower* ?place .
//   //     ?place skos:prefLabel ?placeName .
      
//   //   VALUES ?type { "Foto" }

//   //     ?cho dct:spatial ?place ;
//   //         dc:type ?type ;
//   //         dc:title ?title .
//   //   VALUES ?placeName {"Jakarta" "Java"}.

//   //   FILTER langMatches(lang(?title), "ned").
//   //   ?cho dct:created ?year.
//   //   FILTER (?year >= '1939' && ?year < '1945' ).
//   //   FILTER contains(?title, 'Batavia')

//   // }
//   // ORDER BY DESC(?year)
//   // LIMIT 10

//   // `;




//     runQuery( url, query ).then(response => {
      
//       console.log(response);
//       const title = response.results.bindings[0].title.value;

//       console.log( title );
//       this.setState({ title: title });

//       console.log(this.state.title);

//     })
  

//   // nothing = ()=>
//   //   this.setState({title: 'hahaha'})
//   // }
// }


  






  render(){

    return (
     
      <React.Fragment>
      <Header />
      <main>
     

      
        <Router>
          <Route path="/places" component="place">
              <Places />
          </Route>
          <Route exact path="/">
            <h2>fefefef</h2>
          </Route>
        </Router>
      </main>
      </React.Fragment>
    );
  }
}



export default App;
