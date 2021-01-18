import React from 'react'
import PropTypes from 'prop-types';
import './styles.css'


const Button = (props) => {
    return (
        // If disabled, style is grey and onClick return null
        <div className={props.isDisable ? 'button-wrapper-disabled' : 'button-wrapper'} onClick={() => props.isDisable ? null : props.onClick()}>
            <a>{props.title}</a>
        </div>
    )

}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    isDisable: PropTypes.bool
}

export default Button