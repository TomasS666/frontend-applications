// React Packages
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import React, { Component } from 'react';

// Style
import './App.css';

// Main elements 
import Header from './components/main-components/Header'

// Components
import Places from './components/Places';




class App extends Component {

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
            <Home/>
          </Route>
        </Router>
      </main>
      </React.Fragment>
    );
  }
}



export default App;
