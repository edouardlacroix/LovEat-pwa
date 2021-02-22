import { Cookies } from 'react-cookie';

const setCustomCookie = (name, value) => {
    const cookies = new Cookies()
    cookies.set(name, value, { path: '/' });

}

const removeCustomCookie = (name) => {
    const cookies = new Cookies()
    cookies.remove(name, { path: '/' });

}

const getTokenFromCookie = () => {
    const cookies = new Cookies()
    const user = cookies.get('USER')
    return user?.token
}


export {
    setCustomCookie,
    removeCustomCookie,
    getTokenFromCookie
}