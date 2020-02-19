import React from "react"

function Header() {
    return (

        <ul className="nav justify-content-center header">

            <div className="col-12">
                <h1 className="head" >Employee Directory</h1>
            </div>

            <div className="row">
                <div className="col-2"></div>
                <li className="nav-item col-2">
                    <a className="nav-link sort" href="#">Sort1</a>
                </li>
                <li className="nav-item col-2">
                    <a className="nav-link sort" href="#">Sort2</a>
                </li>
                <li className="nav-item col-2">
                    <a className="nav-link sort" href="#">Sort3</a>
                </li>
                <div className="col-2"></div>
            </div>
        </ul>

    );
}
export default Header;
