import React, { Component } from 'react';

import fallingStar from './fallingStar.png';
import './App.css';

class App extends Component {
    componentDidMount() {

    }
  render() {
    return (
      
      <div className="App">
        <header className="App-header">
          <h1>
           MemoGame
          </h1>
          <div class="container">
            <div class="row p-2">
              <div class="col-sm" className="card m-3">
                <img src={fallingStar} className="flip" alt="fallingStar"/>
              </div>
              <div class="col-sm" className="card m-3">
                <img src={fallingStar} className="flip" alt="fallingStar"/>
              </div>
              <div class="col-sm" className="card m-3">
                <img src={fallingStar} className="flip" alt="fallingStar"/>
              </div>
            </div>
          </div> 
        </header>
      </div>
    );
  }
}

export default App;
