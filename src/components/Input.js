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

    handleFormSubmit = event => {
        event.preventDefault();
        let people = All.state.people;
        console.log(people)
        let new_array = [];

        for (var i = 0; i < people.length; i++) {
            if (people[i].name.first === this.state.name) {
                new_array.push(people[i]);
            }
            if (people[i].name.last === this.state.name) {
                new_array.push(people[i]);
            }
        }
        All.setState({ people: new_array })
    };



    render() {
        return (
            <div>
                <div className="form-group input">
                    <input type="text" className="form-control" id="exampleInput" placeholder="Search" onChange={this.handleFormSubmit}>
                    </input>
                </div>
            </div >)
    }

}

export default Input;