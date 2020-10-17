import API from './api';

export const getAccountById = async(id) => {
    try {
        const res = await API.get(`/account/${id}`);
        return {
            data: res.data,
            status: true
        }
    } catch (err) {
        return {
            message: "Cannot get data ",
            status: false
        };
    }
}