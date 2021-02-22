import React, { useState } from 'react'
import Button from '../../Components/Button'
import Input from '../../Components/Input'
import axios from 'axios';
import { Cookies } from 'react-cookie';
import { customToast, TOAST_TYPE } from '../../Base/Utils/Toasts';
import { useHistory } from "react-router-dom";
import logo from '../../Assets/Images/logo.svg'
import './styles.scss'


const ForgotPassword = () => {
    let history = useHistory();
    const [username, setUsername] = useState('')

    const handleConnection = () => {
        const cookies = new Cookies()

        axios.post('auth/forgot-password', {
            identifier: username,
        })
            .then(function (response) {
                history.push("/")
                customToast("An email was sent if your username was valid.", TOAST_TYPE.INFO)
            })
            .catch(function (error) {
                console.log(error.response);
                history.push("/")
                customToast("An email was sent if your username was valid.", TOAST_TYPE.INFO)

            });

    }

    return (
        <div className={'loginPage-wrapper'}>
            <img src={logo} />
            <h2>Enter your email to receive a mail to reset your password.</h2>

            <div className={'loginPage-inputs'}>
                <Input value={username} onChange={value => setUsername(value)} placeholder={'Email'} />
            </div>

            <div className={'loginPage-buttons'}>
                <Button title={'RESET PASSWORD'} onClick={() => handleConnection()} />
            </div>
        </div>

    )

}

export default ForgotPassword;   