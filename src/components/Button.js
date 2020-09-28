import React from 'react'
import PropTypes from "prop-types";

function Button({name}) {
    return (
        <div>
        <button type="button"> {name} </button>
            
        </div>
    )
}

Button.propTypes = {
    name: PropTypes.string
}

export default Button
