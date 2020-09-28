import React from 'react'
import PropTypes from "prop-types";

function Button({name}) {
    return (
        <div>
        <button type="button"> {name} </button>
            
        </div>
    )
}

Button.PropTypes = {
    name: PropTypes.string
}

export default Button
