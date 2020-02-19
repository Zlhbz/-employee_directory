import React, { Component } from "react"
import Api from "../utils/Api"


class ProfileList extends Component {
    state = {
        result: {},
    };

    componentDidMount() {
        this.searchPeople();
    }


    searchPeople = () => {
        Api.search()
            .then(res => this.state.result = res.data.results[0])
            // .then(res => console.log(res.data.results[0]))
            .catch(err => console.log(err));
    };


    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 mt-3">
                            <div className="card">
                                <div className="card-horizontal">
                                    <div className="img-square-wrapper">
                                        <img className="" src={this.state.result.picture} alt="Card image"></img>
                                    </div>
                                    <div className="card-body row">
                                        <h4 className="card-title col-6">ghgfheehgfve</h4>
                                        <p className="card-text col-6">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>);
    }

}

export default ProfileList;