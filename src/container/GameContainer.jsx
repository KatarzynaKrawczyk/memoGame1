import React from "react";
//import PlayCard from "../component/PlayCard";
import ListItem from "../component/ListItem";


class GameContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            edited: 0
        }
    }

    handleChange= () => {
        this.setState({
            edited: this.state.edited + 1
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
                </ul>
            </>
        )
            
    }
}

export default GameContainer;