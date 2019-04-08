import React from "react";
import PlayCard from "./PlayCard";

class ListItem extends React.Component {
    render() {
        return (
            <>  
                {this.props.name}
                <PlayCard handleChange={this.props.handleChange} text="listitem"/>
            </>

        )
    }
}
export default ListItem;