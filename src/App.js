// React Packages
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { Component } from 'react';

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
      <Header />
      <main>
        <h1>fwefwef</h1>
        <Router basename={this.test}>
        <Route exact path="/">

        </Route>
          <Route path="/places" component={Places}></Route>
          
        </Router>
      </main>
      </React.Fragment>
    );
  }
}



export default App;
