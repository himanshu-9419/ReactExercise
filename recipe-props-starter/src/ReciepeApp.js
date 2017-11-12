import React, { Component } from 'react';
import logo from './logo.svg';
import './ReciepeApp.css';
import Reciepe from './Reciepe';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Reciepe 
          title='pasta'
          ingredients={['sauce','oil']}
          instructions='Mix Ingredients'
          img='3570996.jpg'
           />
      </div>
     
    );
  }
}

export default App;
