import axios from 'axios';
import Cookie from 'js-cookie';

const API = axios.create({
    baseURL: 'http://localhost:8080/api/v1',
});

API.interceptors.request.use(
    req => {
        console.log(req);
        req.headers.authorization = `Bearer ${Cookie.get('token')}`;
        return req;
    },
    err => {
        console.log(err);
        return Promise.reject(err);
    }
);
API.interceptors.response.use(
    res => {
        console.log(res.data);

        return res;
    },
    err => {
        console.log(err);
        return Promise.reject(err);
    }
);

export default API;