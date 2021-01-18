import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import { customToast, TOAST_TYPE } from '../../Base/Utils/Toasts'
import { MdPermContactCalendar } from 'react-icons/md';
import { AiFillHome } from 'react-icons/ai';
import { IoIosListBox } from 'react-icons/io';
import PropTypes from 'prop-types';
import './styles.scss'


const Navbar = (props) => {
    const history = useHistory()

    const navigateTo = (pageName) => {
        // Navigation push then closing menu
        history.push("/" + pageName)
    }

    return (
        <div className={'navbar-wrapper '} >
            <div className={'navbar-items-wrapper'}>
                <AiFillHome onClick={() => navigateTo()} />
                <IoIosListBox onClick={() => customToast('Futur list of meals')} />
                <MdPermContactCalendar onClick={() => customToast('Futur list on inApp contact')} />
            </div>

        </div>
    )

}

Navbar.propTypes = {

}

export default Navbar