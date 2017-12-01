import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './paper.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Helo Sugar Labs</h1>
        </header>
        <div className=" container paper">
        <h1>About Me</h1>
        <p>Hello. I'm Abdulazeez. I'm a Nigerian. I'm an upcoming Javascript ninja. I'm a beginner to Open Source. I really love <b>Jollof Rice</b>.. I look on to writng better codes with react as a platform and alos contributing to this great project  Sugar Labs. 
        </p>
     <h3>My Skills.. </h3>
     <ol>

     <li>Coding Skills : <progress value="60" max="100"> 60% </progress></li>   
        <li>Writing Skills : <progress value="90" max="100">
</progress></li>
         <li>Eating Skills : <progress value="100" max="100">
</progress></li>
        </ol>

        </div>
       
      </div>
    );
  }
}

export default App;
