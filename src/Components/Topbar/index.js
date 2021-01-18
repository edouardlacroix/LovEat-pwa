import React from 'react'
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";
import logo from '../../Assets/Images/logo.svg'

import './styles.css'


const Topbar = (props) => {
    const history = useHistory()

    return (
        <div className={'topbar-wrapper'} >
            <div className={'side'}>
                <a onClick={() => history.push('/welcome')}></a>
            </div>
            <div className={'center'}>
                <img onClick={() => history.push('/welcome')} src={logo} />
            </div>
            <div className={'side'}>
                <a className={'deco'} onClick={() => history.push('/myaccount')}>A</a>
            </div>
        </div >
    )
}

Topbar.propTypes = {

}

export default Topbar