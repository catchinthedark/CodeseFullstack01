import API from './api';

export const getOrderById = async(id) => {
    try {
        const res = await API.get(`/order/${id}`);
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

export const getOrderByUsername = async(username) => {
    try {
        const res = await API.get(`/order/u/${username}`);
        return {
            data: res.data,
            status: true
        }
    } catch (err) {
        return {
            message: "Cannot get data ",
            status: false
        }
    }
}