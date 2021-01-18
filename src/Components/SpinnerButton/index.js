import React, { useState } from 'react'
import PropTypes from 'prop-types';
import loadingSpinner from '../../Assets/Images/loadingSpinner.png'
import './styles.css'


const SpinnerButton = (props) => {
    return (
        // If disabled, style is grey and onClick return null
        <div className={props.isDisable ? 'spinnerButton-wrapper-disabled' : 'spinnerButton-wrapper'} onClick={() => props.isDisable ? null : props.onClick()}>
            { props.isLoading ? <img className={'spinnerImage'} src={loadingSpinner} /> : <a>{props.title}</a>}
        </div >
    )

}

SpinnerButton.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    isDisable: PropTypes.bool,
    isLoading: PropTypes.bool
}

export default SpinnerButton