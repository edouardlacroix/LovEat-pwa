import React, { useState } from 'react'
import Button from '../../Components/Button'
import Input from '../../Components/Input'
import axios from 'axios';
import { customToast, TOAST_TYPE } from '../../Base/Utils/Toasts';
import { useHistory } from "react-router-dom";
import logo from '../../Assets/Images/logo.svg'
import './styles.scss'


const ForgotPassword = () => {
    let history = useHistory();
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')


    const handleChangePassword = () => {
        if (password == passwordConfirmation) {
            axios.post(process.env.REACT_APP_API_URL + 'changePassword', {
                password: password,
            })
                .then(function (response) {
                    history.push("/")
                    customToast("Your new password is set.", TOAST_TYPE.INFO)
                })
                .catch(function (error) {
                    console.log(error.response);
                    history.push("/")
                    customToast("An error occured, please try again later", TOAST_TYPE.ERROR)
                    // Reset of current password input
                    setPassword("")
                    setPasswordConfirmation("")

                });
        } else {
            customToast("The two password are not identical, please verify again.", TOAST_TYPE.ERROR)
            // Reset of current password input
            setPassword("")
            setPasswordConfirmation("")
        }

    }

    return (
        <div className={'changePasswordPage-wrapper'}>
            <img src={logo} />
            <h2>Enter your new password</h2>

            <div className={'changePasswordPage-inputs'}>
                <Input value={password}
                    onChange={value => setPassword(value)}
                    placeholder={'New Password'}
                    type={'password'} />
                <Input value={passwordConfirmation}
                    onChange={value => setPasswordConfirmation(value)} placeholder={'New Password Confirmation'}
                    type={'password'}
                    isDisabled={password == ""} />
            </div>
            <div className={'changePasswordPage-buttons'}>
                <Button title={'SUBMIT PASSWORD'} onClick={() => handleChangePassword()} isDisable={passwordConfirmation == "" || password == ""} />
            </div>
        </div>

    )

}

export default ForgotPassword;   