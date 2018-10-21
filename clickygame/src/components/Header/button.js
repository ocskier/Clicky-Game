import React from "react"

const Button = (props) => {
    return(
        <button className="btn btn-small" onClick={props.startOver}>{props.children}</button>
    )
}

export default Button