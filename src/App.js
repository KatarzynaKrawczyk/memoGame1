import React, { Component } from 'react';
import fallingStar from './fallingStar.png';
import './App.css';
import Card './component/card';
import GameContainer from './container/GameContainer';


class App extends Component {
  render() {
    return (
      <>
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
          <Card 
        
          />
          
       </header>
      </>
    );
  }
}

export default App;
/*Card
id={1}
width={100}
height={100}
back={'/img/back.png'}
front={'/img/front.png'}
flipped={flipped.includes(1)}
handleClick={() => handleClick(1)}*/