import * as React from 'react';
import './App.css';
import './paper.css';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
      
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
        </div>
        <h1>Hello SugarLabs</h1>
        <br />
     
        <p>Hello. I'm Abdulazeez. I'm a Nigerian. I'm an upcoming Javascript ninja. I'm a beginner in the world of Open Source. I really love <b>Jollof Rice</b>.. This is my first react project so I look on to writing better codes with react as a platform and also contributing to this great project  <b> Sugar Labs. </b>
        </p>
     <h3>My Skills.. </h3>
     <ol>
<p>
     <li>Coding Skills : <progress value="60" max="100"> 60% </progress></li>   
        <li>Writing Skills : <progress value="90" max="100">
</progress></li>
        <li>Eating Skills : <progress value="100" max="100">
</progress></li>
</p>
        </ol>
<p>Thats all about me basically.. So i plan to improve my coding skills in Javascript generally and then move on to learning javascript frameworks like the likes of React, Angular, NodeJS etc.. Moreover i'm working on being a stack javascript developer..  </p>
        </div>
       
      
        
     
    );
  }
}

export default App;
