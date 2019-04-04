import React, { Component } from 'react';
import fallingStar from './fallingStar.png';
import './App.css';
//import Card './component/card';
import Game from './container/Game'

class App extends Component {
  render() {
    return (
      <>
        <header className="App-header">
          <h1>MemoGame</h1>
          <div class="container">
            <div class="row">
              <Game/>
              <Game/>
              <Game/>
              <Game/>
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
