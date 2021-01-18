import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import { useHistory } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useStore } from 'react-redux'

import axios from 'axios';
import './styles.scss'


import LanguagesSelector from '../../Components/LanguagesSelector'

const MyAccount = () => {
    const [cookie, setCookie, removeCookie] = useCookies(['USER']);
    const history = useHistory()
    const { t } = useTranslation();
    const store = useStore()
    const userInfo = store.getState().AppReducer.userInfo


    const handleDisconnect = () => {
        removeCookie('USER', { path: '/' });
        history.push('/login')
    }

    // getUserInfo

    return (
        <div className={"myaccount-wrapper"}>
            <h1>{t("myAccount")}</h1>
            <p>Mail : {userInfo && userInfo.email}</p>
            <LanguagesSelector />

            <p className={"myaccount-disconnect"} onClick={() => handleDisconnect()}>{t("disconnect")}</p>
        </div>

    )

}

export default MyAccount;   