import React, { Component } from 'react';
import logo from './logo.svg';
import './RecipeApp.css';
import './NavBar.css'
import NavBar from './NavBar';
import RecipeList from './RecipeList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <RecipeList/>
      </div>
     
    );
  }
}

export default App;
