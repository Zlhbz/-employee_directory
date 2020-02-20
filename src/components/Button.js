import React from "react"


function Button(props) {
    return (
        <div>
            <button type="button" className="btn btn-primary input" onClick={props.click}>{props.name}</button>
        </div>)
}

export default Button;