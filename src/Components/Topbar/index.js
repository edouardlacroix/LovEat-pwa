import React from 'react'
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";
import logo from '../../Assets/Images/logo.svg'
import { RiAccountCircleFill } from 'react-icons/ri';
import { FaFontAwesomeLogoFull } from 'react-icons/fa';



import './styles.scss'


const Topbar = (props) => {
    const history = useHistory()

    return (
        <div className={'topbar-wrapper'} >
            <div className={'side'}>
                <a onClick={() => history.push('/welcome')}></a>
            </div>
            <div className={'center'}>
                <p onClick={() => history.push('/welcome')}>Lov'Eat</p>
            </div>
            <div className={'side'}>
                <RiAccountCircleFill onClick={() => history.push('/myaccount')} />
            </div>
        </div >
    )
}

Topbar.propTypes = {

}

export default Topbar