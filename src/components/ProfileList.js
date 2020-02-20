import React from "react"



function ProfileList(props) {

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 mt-3">
                        <div className="card">
                            <div className="card-horizontal">
                                <div className="img-square-wrapper">
                                    <img className="" src={props.image} alt="Card image"></img>
                                </div>
                                <div className="card-body row">
                                    <h4 className="card-title col-6">{props.first_name} {props.last_name}</h4>
                                    <p className="card-text col-6">{props.cell}</p>
                                    <p className="card-text col-6">{props.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>);
}



export default ProfileList;