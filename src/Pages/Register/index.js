import React, { useState, useEffect } from 'react'
import Button from '../../Components/Button'
import Input from '../../Components/Input'
import axios from 'axios';
import { Cookies, useCookies } from 'react-cookie';
import { useHistory } from "react-router-dom";
import { apiRegister } from './api'
import logo from '../../Assets/Images/logo.svg'
import './styles.scss'


const Register = () => {
    let history = useHistory();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [error, setError] = useState(false)

    // If password of passwordConfirmation changes, reset the diplay of error
    useEffect(() => {
        if (error) {
            setError(false)
        }
    }, [passwordConfirmation, password]);

    const handleConnection = () => {
        // If password are the same, send info to create account
        if (password == passwordConfirmation) {
            // Calling api 
            apiRegister(username, password)
            history.push('/')
        } else {
            setError(true)
        }

    }

    return (
        <div className={'registerPage-wrapper'}>
            <div className={'registerPage-titles'}>
                <img src={logo} />
                <h2>Create your account</h2>
                {error ? <p className={'password-error'}>Your password are not identical</p> : <p className={'password-error'}></p>}
            </div>

            <div className={'registerPage-inputs'}>
                <Input value={username} onChange={value => setUsername(value)} placeholder={'Email'} />
                <Input value={password} onChange={value => setPassword(value)} placeholder={'Password'} type={'password'} />
                <Input value={passwordConfirmation} onChange={value => setPasswordConfirmation(value)} placeholder={'Password confirmation'} type={'password'} />
            </div>

            <div className={'registerPage-buttons'}>
                <Button title={'REGISTER'} onClick={() => handleConnection()} />
            </div>
        </div>

    )

}

export default Register;   