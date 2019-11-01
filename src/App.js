// React Packages

import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
// Style
import './css/App.css';

// Main elements 
import Header from './components/main-components/Header';

// Components
import Places from './components/Places';

// Pages 
import Home from './pages/Home';

class App extends Component {

  constructor(props){
    super(props);

    this.test = 'https://tomass666.github.io/frontend-applications/';
  }

  render(){
    return (

      <React.Fragment>
 
      
        <Router >
          
          <Header />
          <main>
          <Route exact path="/" component={ Home }></Route>
          <Route path="/places" component={ Places }></Route>
          </main>
        </Router>
      
      </React.Fragment>
    );
  }
}



export default App;
