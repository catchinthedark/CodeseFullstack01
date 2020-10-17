import API from './api';
import qs from 'qs';

export const login = async(account) => {
    try {
        const res = await API.post('/auth/login', qs.stringify(account));
        return {
            data: res.data,
            status: true
        }
    } catch (error) {
        return {
            message: "Login failed",
            status: false
        }
    }
}