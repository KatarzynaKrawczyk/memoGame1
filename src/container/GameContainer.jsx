import React from "react";
//import PlayCard from "../component/PlayCard";
import ListItem from "../component/ListItem";


class GameContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            edited: 0,
            flipped: false
        }
    }

    handleChange= () => {
        this.setState({
            edited: this.state.edited + 1,
            flipped: this.state.flipped = true, 
            flipped: this.state.flipped = "yes"
        })
    }
    render() {
        return (
            <>
                <ul>
                Attempts: {this.state.edited}
                    <ListItem handleChange ={this.handleChange.bind(this)}>
                        {this.props.name}
                    </ListItem>
                flipped: {this.state.flipped}
                </ul>
            </>
        )
            
    }
}

export default GameContainer;