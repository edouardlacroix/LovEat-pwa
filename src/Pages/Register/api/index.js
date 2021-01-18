import axios from 'axios';
import { Cookies } from 'react-cookie'
import history from '../../../Base/Router/History'


export const apiRegister = (username, password) => {
    let cookies = new Cookies();
    return axios.post(process.env.REACT_APP_API_URL + 'auth/local/register', {
        email: username,
        password: password
    })
        .then(function (response) {
            cookies.set('USER', JSON.stringify(response.data), { path: '/' });
            history.push("/")
        })
        .catch(function (error) {
            console.log(error);
        });
}