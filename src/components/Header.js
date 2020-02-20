import React from "react"
import All from "./All"
import Button from "./Button"

function Header() {
    return (

        <ul className="nav justify-content-center header">

            <div className="col-12">
                <h1 className="head" >Employee Directory</h1>
            </div>

            <div className="row">
                <div className="col-2"></div>
                <li className="nav-item col-3">
                    <Button name="SORT1" onclick={All.sortPeople} />
                </li>
                <li className="nav-item col-3">
                    <Button name="SORT2" />
                </li>
                <li className="nav-item col-3">
                    <Button name="SORT3" />
                </li>
                <div className="col-2"></div>
            </div>
        </ul>

    );
}
export default Header;
