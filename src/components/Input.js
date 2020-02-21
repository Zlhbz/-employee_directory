import React, { Component } from "react"
import All from "./All"


class Input extends Component {

    state = {
        name: ""
    };

    handleInputChange = event => {

        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    };

    handleInputSearch = event => {
        event.preventDefault();

    };



    render() {
        return (
            <div>
                <div className="form-group input">
                    <input type="text" className="form-control" id="exampleInput" placeholder="Search" onChange={this.handleInputSearch}>
                    </input>
                </div>
            </div >)
    }

}

export default Input;