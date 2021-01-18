import React, { useState } from 'react'
import SpinnerButton from '../../Components/SpinnerButton'
import Input from '../../Components/Input'
import axios from 'axios';
import { Cookies, useCookies } from 'react-cookie';
import { customToast, TOAST_TYPE } from '../../Base/Utils/Toasts';
import { useHistory } from "react-router-dom";
import logo from '../../Assets/Images/logo.svg'
import { useDispatch } from 'react-redux'
import { setUserInfo } from '../App/Redux/Actions'
import './styles.css'


const Login = () => {
    let history = useHistory();
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setLoading] = useState(false)

    const dispatch = useDispatch()


    const handleConnection = () => {
        const cookies = new Cookies()
        setLoading(true)
        axios.post(process.env.REACT_APP_API_URL + 'auth/local/', {
            identifier: mail,
            password: password
        })
            .then(function (response) {
                // Setting token in cookie USER
                cookies.set('USER', { token: response.data.jwt }, { path: '/' });
                // Set data of user in store
                dispatch(setUserInfo(response.data.user))
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