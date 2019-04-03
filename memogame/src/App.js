import React from 'react';
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
            <div class="row">
              <div class="col-sm">
                One of three columns
              </div>
              <div class="col-sm">
                One of three columns
              </div>
              <div class="col-sm">
                One of three columns
              </div>
            </div>
          </div>

          <div className="card">
            <img src={fallingStar} className="flip" alt="fallingStar" />
          </div>  
        </header>
      </div>
    );
  }
}

export default App;
