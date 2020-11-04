import API from './api';

export const getById = async(id) => {
    try {
        const res = await API.get(`/student/${id}`);
        console.log(res);
        return {
            data: res.data,
            status: true
        }
    } catch (err) {
        return {
            message: "Cannot get data",
            status: false
        };
    }
}