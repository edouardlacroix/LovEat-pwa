import React, { useState } from 'react'
import SpinnerButton from '../../Components/SpinnerButton'
import Input from '../../Components/Input'
import axios from 'axios';
import { setCustomCookie } from '../../Base/Utils/CookiesWrapper'
import { customToast, TOAST_TYPE } from '../../Base/Utils/Toasts';
import { useHistory } from "react-router-dom";
import logo from '../../Assets/Images/logo.svg'
import { useDispatch } from 'react-redux'
import { setUserInfo } from '../App/Redux/Actions'
import userQuery from './api'
import './styles.scss'


const Login = () => {
    let history = useHistory();
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setLoading] = useState(false)

    const dispatch = useDispatch()


    const handleConnection = () => {
        setLoading(true)
        axios.post('auth/local/', {
            identifier: mail,
            password: password
        })
            .then(function (response) {
                // Setting token in cookie USER
                setCustomCookie('USER', { token: response.data.jwt })
                axios.post('graphql', { query: userQuery(response.data.user.id) }).then(
                    response => {
                        // Set data of user in store
                        dispatch(setUserInfo(response.data.data.user))
                        history.push("/")
                    }
                )
                // Route to /
                history.push("/")
                setLoading(false)
            })
            .catch(function (error) {
                customToast(error?.data?.message[0]?.messages[0]?.message, TOAST_TYPE.ERROR)
                setLoading(false)
            });
    }

    return (
        <div className={'loginPage-wrapper'}>

            <img src={logo} />
            <h2>Lov'Eat </h2>
            <div className={'loginPage-devInfo'}>
                <p>Commit ref : {process.env.VERCEL_GIT_COMMIT_REF}</p>
            </div>
            <div className={'loginPage-inputs'}>
                <Input value={mail} onChange={value => setMail(value)} placeholder={'Email'} />
                <Input value={password} onChange={value => setPassword(value)} placeholder={'Password'} type={'password'} />
            </div>

            <div className={'loginPage-buttons'}>
                <SpinnerButton title={'LOGIN'} onClick={() => handleConnection()} isLoading={isLoading} />
                <p onClick={() => history.push("/forgotPassword")}>Forgot password ?</p>
                <p onClick={() => history.push("/register")} className={'loginPage-register'}>Register</p>
            </div>
        </div>

    )

}

export default Login;   