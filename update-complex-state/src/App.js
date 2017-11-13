import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instructors: [
        {
          name: 'Tim',
          hobbies: ['sailing', 'react']
        }, {
          name: 'Matt',
          hobbies: ['math', 'd3']
        }, {
          name: 'Colt',
          hobbies: ['css', 'hiking']
        }, {
          name: 'Elie',
          hobbies: ['music', 'es2015']
        }
      ]
    };
    //Math.floor(Math.random()*4)
    setTimeout(
      ()=>{
        var elemi = Math.floor(Math.random() * 4); var hobbie = Math.floor(Math.random() * 2);
        this.setState({instructors:this.state.instructors.map((elem,i)=>{
          if(i !== elemi) { return {name:elem.name,hobbies:elem.hobbies}}
          else { return { name: elem.name, hobbies: [elem.hobbies[hobbie]]}}
        })})
      }
        ,3000
    );
  }
  render() {
    const instructors = this.state.instructors.map((instructor, index) => (
      <li key={index}>
        <h3>{instructor.name}</h3>
        <h4>Hobbies: {instructor.hobbies.join(", ")}</h4>
      </li>
    ));
    return (
      <div className="App">
        <ul>
          {instructors}
        </ul>
      </div>
    );
  }
}

export default App;
