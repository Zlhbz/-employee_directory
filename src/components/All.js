import React, { Component } from "react"
import Input from "./Input"
import Button from "./Button"
import Header from "./Header"
// import Api from "../utils/Api"
import ProfileList from "./ProfileList"


class All extends Component {


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
                    <ProfileList />
                </div>
            </div>
        )
    }
}


export default All;