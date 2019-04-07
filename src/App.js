import React, { Component } from 'react';
import './App.css';
import GameContainer from './container/GameContainer'

class App extends Component {
  render() {
    return (
      <>
       <header className="App-header">
          <h1>MemoGame</h1>
          <div className="container">
            <div className="row">
              <GameContainer name = "one"/>
              <GameContainer name = "thumb"/>
              <GameContainer name = "smile"/>
              <GameContainer name = "home"/>
            </div>
          </div>  
       </header>
      </>
    );
  }
}

export default App;
/*Card
<Card 
id={1}
width={100}
height={100}
back={'/img/back.png'}
front={'/img/front.png'}
flipped={flipped.includes(1)}
handleClick={() => handleClick(1)}
/>
*/
