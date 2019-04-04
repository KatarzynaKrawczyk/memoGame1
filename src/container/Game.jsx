import React from "react";
import fallingStar from '../fallingStar.png';

class Game extends React.Component {
    render() {
        return (
            <div class="col-sm" className="card m-3 mx-auto">
                <img src={fallingStar} className="flip" alt="fallingStar"/>
            </div>
        )
            
    }
}

export default Game;