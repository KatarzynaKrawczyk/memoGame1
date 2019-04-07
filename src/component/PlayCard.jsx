import React from "react";
import fallingStar from '../fallingStar.png';

function PlayCard (props) {
    return  <div  onClick={props.handleChange}  className="col-sm card m-3 mx-auto p-0 ">
                <img src={fallingStar} className="flip" alt="fallingStar"/>
            </div>;
}


export default PlayCard;