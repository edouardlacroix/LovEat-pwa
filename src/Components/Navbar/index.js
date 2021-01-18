import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import { customToast, TOAST_TYPE } from '../../Base/Utils/Toasts'
import PropTypes from 'prop-types';
import './styles.css'


const Navbar = (props) => {
    const history = useHistory()

    const navigateTo = (pageName) => {
        // Navigation push then closing menu
        history.push("/" + pageName)
    }

    return (
        <div className={'navbar-wrapper '} >
            <div className={'navbar-items-wrapper'}>
                {/* Change to icons */}
                <p onClick={() => navigateTo()}>Home</p>
                <p onClick={() => customToast('This page is not yet available')}> Contact</p>
            </div>

        </div>
    )

}

Navbar.propTypes = {

}

export default Navbar