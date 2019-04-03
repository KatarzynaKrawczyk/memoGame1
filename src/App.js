import React, { Component } from 'react';
import fallingStar from './fallingStar.png';
import './App.css';
import GameContainer from './container/GameContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>MemoGame</h1>
          <div class="container">
            <div class="row">
              <GameContainer/>
              <GameContainer/>
              <GameContainer/>
              <GameContainer/>
            </div>
          </div> 
          
        </header>
      </div>
    );
  }
}

export default App;
