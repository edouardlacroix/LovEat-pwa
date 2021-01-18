import React from 'react'
import PropTypes from 'prop-types';
import './styles.css'


const Input = (props) => {
    return (
        <div className={props.isDisabled ? 'input-wrapper-disabled' : 'input-wrapper'}>
            <input value={props.value}
                onChange={(e) => props.onChange(e.target.value)}
                placeholder={props.placeholder}
                type={props.type ? props.type : 'text'}
                disabled={props.isDisabled || false}
            />
        </div>
    )
}

Input.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool
}

export default Input