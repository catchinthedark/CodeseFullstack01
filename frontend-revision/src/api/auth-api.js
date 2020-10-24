import Axios from 'axios';
import { LOGIN } from '../constant/end-point';

export const login = async(username, password) => {
    let result = null;
    const body = {
        username: username,
        password: password
    };
    const config = {
        url: LOGIN,
        method: "POST",
        data: body
    };
    await Axios(config)
        .then((res) => {
            console.log(res);
            result = res;
        })
        .catch((err) => {
            console.log(err);
            result = err.response;
        });
    return result;
}