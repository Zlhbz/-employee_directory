import React, { Component } from "react"
import Input from "./Input"
import Button from "./Button"
import Header from "./Header"
import Api from "../utils/Api"
import ProfileList from "./ProfileList"


class All extends Component {

    state = {
        people: [],
    };

    componentDidMount() {
        this.searchPeople();
    }

    searchPeople = () => {
        Api.search()
            .then(res => {
                // console.log(res.data.results)
                this.setState({ people: res.data.results });
                // console.log("this " + JSON.stringify(this.state.people))
            })
            .catch(err => console.log(err));
    };


    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-12">
                        <Header />
                    </div>
                </div>
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-8">
                                <Input />
                            </div>
                            <div className="col-4">
                                <Button />
                            </div>
                        </div>
                    </div>
                    <div className="col-3"></div>
                </div>

                <div>
                    {this.state.people.map(item => (
                        <ProfileList
                            image={item.picture.large}
                            first_name={item.name.first}
                            last_name={item.name.last}
                            cell={item.cell}
                            email={item.email}
                            id={item.id.value}
                            key={item.id.value}
                        />
                    ))}
                </div>
            </div>
        )
    }
}


export default All;